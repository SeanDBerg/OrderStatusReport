import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: __dirname,
  base: '/OrderStatusReport/',
  plugins: [react()],
  build: {
    outDir: "../docs",      // if you chose one-stage flow
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@assets': path.resolve(__dirname, '../attached_assets'),
    },
  },
  server: {
    port: 5000,
    allowedHosts: true,
    host: '0.0.0.0',
  },
})