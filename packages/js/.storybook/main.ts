module.exports = {
  // no tsx files included here to not include react stories
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
