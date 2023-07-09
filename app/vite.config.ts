import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { visualizer } from 'rollup-plugin-visualizer';
import { splitVendorChunkPlugin } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  build: {
    minify: 'terser',
    outDir: 'dist',
    cssCodeSplit: true,
    rollupOptions: {
      manualChunks: {
        zxcvbn: ['zxcvbn'],
      },
      treeshake: true,
      input: 'index.html',
    },
  },
  plugins: [
    react(),
    wasm(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
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
