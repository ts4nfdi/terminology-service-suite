import { initializeGatewayAuth, withGatewayAuth } from "./gateway-auth";

void initializeGatewayAuth();
export const decorators = [withGatewayAuth];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
};
export const tags = ["autodocs"];
