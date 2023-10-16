import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'standalone',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: './standalone/index.html',
      },
      output: {
        entryFileNames: '[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  plugins: [react()],
});
