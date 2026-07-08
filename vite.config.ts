import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'docs',
  },
  base: '/circuit-chords/',
  server: {
    port: 8801,
    fs: {
      allow: ['..']
    }
  },
  resolve: {
    alias: {
      'human-engine': resolve(__dirname, '../human-midi/docs/human-engine.js')
    }
  },
  test: {
    globals: true,
    environment: 'node',
  },
});
