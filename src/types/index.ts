export type Language = 'DE' | 'EN' | 'TR' | 'PL' | 'UK';

export type MaterialCategory = 'standard' | 'medical' | 'engineering';

export interface Material {
  id: string;
  name: string;
  category: MaterialCategory;
  density: number; // g/cm3
  pricePerKg: number; // EUR
  badge: Record<Language, string>;
  description: Record<Language, string>;
  recommendedFor: Record<Language, string>;
}

export interface LayerHeightOption {
  value: string;
  label: string;
  multiplier: number;
}

export interface Dimensions3D {
  x: number; // mm
  y: number; // mm
  z: number; // mm
}

export interface QuoteParams {
  fileName: string;
  fileVolumeCm3: number;
  fileSurfaceAreaCm2?: number;
  dimensions?: Dimensions3D;
  materialId: string;
  infillPercent: number;
  layerHeight: string;
  quantity: number;
  weightGrams: number;
  costMaterial: number;
  costMachine: number;
  costSetup: number;
  costHandling: number;
  costVat: number;
  totalNet: number;
  totalGross: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent' | 'system';
  text: string;
  timestamp: string;
  isQuoteSummary?: boolean;
  quoteData?: QuoteParams;
}
