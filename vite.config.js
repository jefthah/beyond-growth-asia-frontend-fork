import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/beyond-growth-asia-frontend-fork/' : '/', // Production untuk GitHub Pages, development untuk local
}));
