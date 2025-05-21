module.exports = {
  // no tsx files included here to not include react stories
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
