import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import svgPlugin from 'vite-svg-loader';

export default defineConfig({
  resolve: {
    alias: {
      '~src': path.resolve(__dirname, './src'),
      '~root': path.resolve(__dirname),
    },
  },
  build: {
    emptyOutDir: false,
    outDir: 'dist/microfrontend',
    rollupOptions: {
      input: ['src/entry-spa.ts'],
      output: {
        entryFileNames: '[name].js',
        format: 'system',
      },
      external: ['react', 'react-dom'],
      preserveEntrySignatures: 'exports-only',
    },
  },
  plugins: [react(), svgPlugin()],
});
