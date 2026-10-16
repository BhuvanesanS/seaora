import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDirectory, 'index.html'), about: resolve(rootDirectory, 'about.html'), products: resolve(rootDirectory, 'products.html'),
        infrastructure: resolve(rootDirectory, 'infrastructure.html'), process: resolve(rootDirectory, 'process.html'), quality: resolve(rootDirectory, 'quality.html'),
        faq: resolve(rootDirectory, 'faq.html'), contact: resolve(rootDirectory, 'contact.html'),
      },
    },
  },
});
