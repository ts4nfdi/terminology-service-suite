const {
  dirname,
  join
} = require("node:path");

module.exports = {
  stories: ["./*.stories.mdx"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docgen"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/html-vite"),
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen",
  },

  refs: (config, { configType }) => {
    const envConfigType = process.env.CONFIG_TYPE || configType;
    if (envConfigType === "DEVELOPMENT") {
      return {
        react: {
          title: "REACT",
          // this has to be the port on which storybook:react runs
          url: "http://localhost:6006",
        },
        html: {
          title: "HTML",
          // this has to be the port on which storybook:html runs
          url: "http://localhost:6007",
        },
      };
    }
    return {
      react: {
        title: "REACT",
        url: "https://ts4nfdi.github.io/terminology-service-suite/react/latest",
      },
      html: {
        title: "HTML",
        url: "https://ts4nfdi.github.io/terminology-service-suite/html/latest",
      },
    };
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
