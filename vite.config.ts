// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    // Ensure Vite serves index.html for unknown routes
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: 'dist',
  },
  preview: {
    port: 5000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
