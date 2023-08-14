import type { Preview } from "@storybook/html";
import '../../../semlookp-widgets-plainJS/local_modules/semlookp-widgets';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered'
  },
};

export default preview;
