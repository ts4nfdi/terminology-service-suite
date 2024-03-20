module.exports = {
  stories: ["./*.stories.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docgen"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen'
  },
  refs: {
    react: {
      title: "REACT",
      // this has to be the port on which storybook:react runs
      url: "http://localhost:6006",
    },
    html: {
      title: "HTML",
      // this has to be the port on which storybook:html runs
      url: "http://localhost:6007",
    }
  },
};
