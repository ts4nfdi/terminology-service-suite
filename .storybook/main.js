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
  refs: (config, { configType }) => {
    const envConfigType = process.env.CONFIG_TYPE || configType;
    if (envConfigType === 'DEVELOPMENT') {
      return {
        react: {
          title: 'REACT',
          // this has to be the port on which storybook:react runs
          url: 'http://localhost:6006',
        },
        html: {
          title: 'HTML',
          // this has to be the port on which storybook:html runs
          url: 'http://localhost:6007',
        },
      };
    }
    return {
      react: {
        title: 'REACT',
        url: 'https://ts4nfdi.github.io/terminology-service-suite/react/latest',
      },
      html: {
        title: 'HTML',
        url: 'https://ts4nfdi.github.io/terminology-service-suite/html/latest',
      },
    };
  },
};
