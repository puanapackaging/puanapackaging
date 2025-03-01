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
    port: 3000, // You can change the port if needed
  },
  build: {
    outDir: 'dist', // Ensures the build output goes to 'dist'
  },
  preview: {
    port: 5000, // Sets a different port for preview mode
  },
  resolve: {
    alias: {
      '@': '/src', // Helps with cleaner imports
    },
  },
  // Fix for SPA routing to prevent 404 on refresh
  server: {
    historyApiFallback: true,
  },
});
