import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',
  },
  base: '/circuit-chords/',
  server: {
    port: 5173,
  },
  test: {
    globals: true,
    environment: 'node',
  },
});
