/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      data: '/src/data',
      constants: '/src/constants',
      styles: '/src/styles',
      types: '/src/types',
      utils: '/src/utils',
      api: '/src/api',
      store: '/src/store',
      hooks: '/src/hooks',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: true,
      reporter: 'text',
    },
  },
  base: './',
});
