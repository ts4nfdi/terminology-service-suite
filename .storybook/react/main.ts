import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // no ts files included here to not include html stories
  stories: [
    "../../src/**/*.stories.mdx",
    "../../src/**/*.stories.@(js|jsx|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/experimental-addon-test",
    "storybook-addon-react-docgen",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen",
  },

  docs: {
    autodocs: true,
  },
};
export default config;
