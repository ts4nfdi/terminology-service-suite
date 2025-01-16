export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <>
      <EuiProvider colorMode="light" globalStyles={false}>
        <QueryClientProvider client={queryClient}>
          {Story()}
        </QueryClientProvider>
      </EuiProvider>
    </>
  ),
];
