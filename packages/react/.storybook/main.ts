import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // no ts files included here to not include html stories
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook-community/storybook-addon-matomo"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen",
  },
  env: (config) => ({
    ...config,
    VITE_STORYBOOK_ENABLE_MATOMO: process.env.VITE_STORYBOOK_ENABLE_MATOMO ?? "false",
    VITE_STORYBOOK_MATOMO_URL: process.env.VITE_STORYBOOK_MATOMO_URL ?? "",
    VITE_STORYBOOK_MATOMO_SITE_ID: process.env.VITE_STORYBOOK_MATOMO_SITE_ID ?? "",
  }),
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
