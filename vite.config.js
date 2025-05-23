import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
