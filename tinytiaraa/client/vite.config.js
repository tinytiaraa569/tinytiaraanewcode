import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    compression({ algorithm: 'brotliCompress' }) 
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "terser", // Use Terser instead of esbuild
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        unused: true, // Remove unused code
      },
      output: {
        comments: false, // Remove comments
      },
    },
  },
})
