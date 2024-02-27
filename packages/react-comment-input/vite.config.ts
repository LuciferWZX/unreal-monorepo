import { defineConfig } from 'vite';
import { join, resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'lib/types',
    }),
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-comment-input',
      fileName: (format) => `react-comment-input.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        //在UMD构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'lib',
  },
});
