import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // optional: change to whatever port you want
  },
  resolve: {
    alias: {
      '@': '/src', // optional: allows you to use `@/components/...` imports
    },
  },
});
