import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/*.stl', '**/*.step', '**/*.stp', '**/*.obj', '**/*.3mf']
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
