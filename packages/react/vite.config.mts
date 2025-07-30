// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      tsconfigPath: '../../tsconfig.json',
    }),
  ],
  esbuild: {
    jsx: 'automatic', // Enables React 17+ JSX Transform
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@ts4nfdi/terminology-service-suite',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
        external: [
          "axios",
          "@elastic/datemath",
          '@elastic/eui',
          "@emotion/css",
          '@emotion/react',
          "@google/model-viewer",
          "moment",
          "three",
          "vis-data",
          "vis-network",
          "react-router",
          'react',
          'react-query',
          'react-dom',
        ]
     },
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['react/jsx-dev-runtime'],
  }
})
