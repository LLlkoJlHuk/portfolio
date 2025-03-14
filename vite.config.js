import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import VitePluginStaticCopy from 'vite-plugin-static-copy';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    VitePluginStaticCopy({
      targets: [
        {
          src: '.htaccess',
          dest: '',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
