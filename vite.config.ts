import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        entryFileNames: 'app.js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  base: './',
  server: {
    port: 43302,
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
