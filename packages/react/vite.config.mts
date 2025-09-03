/// <reference types="vitest/config" />
// vite.config.ts
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import { fileURLToPath } from "node:url";
// @ts-ignore
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import preserveDirectives from 'rollup-preserve-directives'
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      tsconfigPath: "../../tsconfig.json",
    }),
    preserveDirectives() as Plugin,
  ],
  esbuild: {
    jsx: "automatic", // Enables React 17+ JSX Transform
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@ts4nfdi/terminology-service-suite",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        dir: "dist/esm",
      },
      external: [
        "axios",
        "@elastic/datemath",
        "@elastic/eui",
        "@emotion/css",
        "@emotion/react",
        "@google/model-viewer",
        "moment",
        "three",
        "vis-data",
        "vis-network",
        "react-router",
        "react",
        "react-query",
        "react-dom",
        "react/jsx-runtime",
      ],
    },
    sourcemap: true,
  },
  optimizeDeps: {
    include: ["react/jsx-dev-runtime"],
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
