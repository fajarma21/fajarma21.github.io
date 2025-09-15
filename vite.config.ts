import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id, { getModuleInfo }) => {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'firebase';
            return 'vendor';
          } else {
            const info = getModuleInfo(id);
            if (
              info &&
              !info.meta['vite:asset'] &&
              info.dynamicImporters.length
            ) {
              const splittedId = id.split('/');
              return splittedId[splittedId.length - 2];
            }
          }

          return null;
        },
        chunkFileNames: 'assets/chunk-[name]-[hash].js',
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
