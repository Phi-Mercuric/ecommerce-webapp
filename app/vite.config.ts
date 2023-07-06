import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  build: {
    minify: 'terser',
    outDir: 'dist',
    cssCodeSplit: true,
    rollupOptions: {
      treeshake: true,
      input: 'index.html',
    },
  },
  plugins: [react()],
  server: {
    port: 8080,
  },

})
