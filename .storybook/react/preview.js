export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
     order: [
       "Search",
       "Entity Metadata",
       "Additional Entity Metadata",
       "Ontology Metadata",
       "Hierarchy and Graph",
       "API",
       "Terminology Service"
     ],
      method: "alphabetical"
    }
  }
};

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <>
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          {Story()}
        </QueryClientProvider>
      </EuiProvider>
    </>
  ),
];
