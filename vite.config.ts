import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'vite-plugin-copy'; // Import du plugin vite-plugin-copy

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'assets/images', dest: 'dist/images' },
        { src: 'assets/fonts', dest: 'dist/fonts' },
      ],
    }),
  ],
});
