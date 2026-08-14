import { Dimensions3D } from '../types';

export interface STLParseResult {
  volumeCm3: number;
  surfaceAreaCm2: number;
  dimensions: Dimensions3D;
  triangleCount: number;
}

export function parseSTLArrayBuffer(buffer: ArrayBuffer): STLParseResult {
  const dataView = new DataView(buffer);
  
  // Check if ASCII or Binary
  // Binary STL files are 80-byte header + uint32 count + 50 bytes per triangle
  const isBinary = buffer.byteLength > 84 && 
    (84 + dataView.getUint32(80, true) * 50 === buffer.byteLength);

  if (isBinary) {
    return parseBinarySTL(dataView);
  } else {
    return parseAsciiSTL(new TextDecoder().decode(buffer));
  }
}

function parseBinarySTL(dataView: DataView): STLParseResult {
  const triangleCount = dataView.getUint32(80, true);
  let totalVolume = 0;
  let totalArea = 0;

  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;

  let offset = 84;

  for (let i = 0; i < triangleCount; i++) {
    // Skip normal vector (3 floats = 12 bytes)
    offset += 12;

    const v1x = dataView.getFloat32(offset, true);
    const v1y = dataView.getFloat32(offset + 4, true);
    const v1z = dataView.getFloat32(offset + 8, true);

    const v2x = dataView.getFloat32(offset + 12, true);
    const v2y = dataView.getFloat32(offset + 16, true);
    const v2z = dataView.getFloat32(offset + 20, true);

    const v3x = dataView.getFloat32(offset + 24, true);
    const v3y = dataView.getFloat32(offset + 28, true);
    const v3z = dataView.getFloat32(offset + 32, true);

    offset += 36;
    offset += 2; // Attribute byte count

    // Update Bounding Box
    minX = Math.min(minX, v1x, v2x, v3x);
    maxX = Math.max(maxX, v1x, v2x, v3x);
    minY = Math.min(minY, v1y, v2y, v3y);
    maxY = Math.max(maxY, v1y, v2y, v3y);
    minZ = Math.min(minZ, v1z, v2z, v3z);
    maxZ = Math.max(maxZ, v1z, v2z, v3z);

    // Signed volume contribution of triangle (divergence theorem / tetrahedron volume)
    const v321 = v3x * v2y * v1z;
    const v231 = v2x * v3y * v1z;
    const v312 = v3x * v1y * v2z;
    const v132 = v1x * v3y * v2z;
    const v213 = v2x * v1y * v3z;
    const v123 = v1x * v2y * v3z;
    totalVolume += (-v321 + v231 + v312 - v132 - v213 + v123) / 6.0;

    // Surface Area calculation (cross product)
    const ax = v2x - v1x, ay = v2y - v1y, az = v2z - v1z;
    const bx = v3x - v1x, by = v3y - v1y, bz = v3z - v1z;
    const cx = ay * bz - az * by;
    const cy = az * bx - ax * bz;
    const cz = ax * by - ay * bx;
    totalArea += 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
  }

  const volumeMm3 = Math.abs(totalVolume);
  const volumeCm3 = Math.max(0.1, Number((volumeMm3 / 1000.0).toFixed(2)));
  const surfaceAreaCm2 = Number((totalArea / 100.0).toFixed(2));

  return {
    volumeCm3,
    surfaceAreaCm2,
    dimensions: {
      x: Number((maxX - minX).toFixed(1)),
      y: Number((maxY - minY).toFixed(1)),
      z: Number((maxZ - minZ).toFixed(1))
    },
    triangleCount
  };
}

function parseAsciiSTL(text: string): STLParseResult {
  const lines = text.split('\n');
  let totalVolume = 0;
  let totalArea = 0;
  let triangleCount = 0;

  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;

  const vertices: { x: number; y: number; z: number }[] = [];

  for (let line of lines) {
    line = line.trim();
    if (line.startsWith('vertex')) {
      const parts = line.split(/\s+/);
      if (parts.length >= 4) {
        const x = parseFloat(parts[1]);
        const y = parseFloat(parts[2]);
        const z = parseFloat(parts[3]);
        vertices.push({ x, y, z });

        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
        minZ = Math.min(minZ, z);
        maxZ = Math.max(maxZ, z);

        if (vertices.length === 3) {
          triangleCount++;
          const [v1, v2, v3] = vertices;
          
          // Volume
          const v321 = v3.x * v2.y * v1.z;
          const v231 = v2.x * v3.y * v1.z;
          const v312 = v3.x * v1.y * v2.z;
          const v132 = v1.x * v3.y * v2.z;
          const v213 = v2.x * v1.y * v3.z;
          const v123 = v1.x * v2.y * v3.z;
          totalVolume += (-v321 + v231 + v312 - v132 - v213 + v123) / 6.0;

          // Area
          const ax = v2.x - v1.x, ay = v2.y - v1.y, az = v2.z - v1.z;
          const bx = v3.x - v1.x, by = v3.y - v1.y, bz = v3.z - v1.z;
          const cx = ay * bz - az * by;
          const cy = az * bx - ax * bz;
          const cz = ax * by - ay * bx;
          totalArea += 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);

          vertices.length = 0; // reset for next triangle
        }
      }
    }
  }

  const volumeMm3 = Math.abs(totalVolume);
  const volumeCm3 = Math.max(0.1, Number((volumeMm3 / 1000.0).toFixed(2)));
  const surfaceAreaCm2 = Number((totalArea / 100.0).toFixed(2));

  return {
    volumeCm3,
    surfaceAreaCm2,
    dimensions: {
      x: Number((maxX - minX).toFixed(1)),
      y: Number((maxY - minY).toFixed(1)),
      z: Number((maxZ - minZ).toFixed(1))
    },
    triangleCount
  };
}
