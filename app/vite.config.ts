import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  build: {
    outDir: 'dist',
    assetHashLength: 8, // Enable asset hashing with 8-character hash
    cssCodeSplit: true,
  },
  plugins: [react()],
    server: {
    port: 8080,
  },
})
