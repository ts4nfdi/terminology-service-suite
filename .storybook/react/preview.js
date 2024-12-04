export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <>
        <QueryClientProvider client={queryClient}>
          {Story()}
        </QueryClientProvider>
    </>
  ),
];
