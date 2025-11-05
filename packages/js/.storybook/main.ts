const { dirname, join } = require("node:path");

module.exports = {
  // no tsx files included here to not include react stories
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/storybook-addon-matomo"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/html-vite"),
    options: {},
  },
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
