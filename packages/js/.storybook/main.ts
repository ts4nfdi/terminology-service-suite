const { dirname, join } = require("node:path");

module.exports = {
  // no tsx files included here to not include react stories
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook-community/storybook-addon-matomo"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/html-vite"),
    options: {},
  },
  env: (config: any) => ({
    ...config,
    STORYBOOK_ENABLE_MATOMO: "true",
    STORYBOOK_MATOMO_URL: "https://piwik.cebitec.uni-bielefeld.de/",
    STORYBOOK_MATOMO_SITE_ID: "36"
  }),
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
