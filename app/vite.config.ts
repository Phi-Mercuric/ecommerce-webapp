import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  build: {
    outDir: 'dist',
    cssCodeSplit: true,
    rollupOptions: {
      treeshake: true,
      input: 'index.html',
    },
  },
  plugins: [
    react(),
    visualizer({
      open: true, // Opens the analyzer report in the default browser
    }),
  ],
  server: {
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },

})
