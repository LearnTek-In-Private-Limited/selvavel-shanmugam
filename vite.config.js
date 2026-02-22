import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-redux': ['@reduxjs/toolkit', 'react-redux'],
          'vendor-icons': ['react-icons'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
