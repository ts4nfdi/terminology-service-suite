// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/style/32px.png',
          dest: '', // copies to dist root
        },
      ],
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
        '@elastic/eui',
        'react',
        'react-query',
        '@emotion/react',
        'react-dom',
      ],
      output: {
        dir: 'dist/esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    sourcemap: true,
  },
})
