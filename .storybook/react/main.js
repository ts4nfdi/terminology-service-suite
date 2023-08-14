module.exports = {
  // no ts files included here to not include html stories
  stories: ["../../src/**/*.stories.mdx", "../../src/**/*.stories.@(js|jsx|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-docgen"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  typescript: {
    reactDocgen: 'react-docgen'
  },

  docs: {
    autodocs: true
  }
};
