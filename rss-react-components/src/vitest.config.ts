/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
      exclude: [...configDefaults.exclude, 'src/helpers/*', 'src/main.tsx'],
    },
  },
});
