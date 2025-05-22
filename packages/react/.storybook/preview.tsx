import React from "react";
import { Preview } from "@storybook/react";

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
        "Terminology Service",
      ],
      method: "alphabetical",
    },
  },
};

import registerDefaultIcons from '../../js/src/components/euiicons'
import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";

registerDefaultIcons();

const queryClient = new QueryClient();

const decorators = [
  (story: any) => (
    <>
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          {story()}
        </QueryClientProvider>
      </EuiProvider>
    </>
  ),
];

const preview: Preview = {
  decorators: decorators,
};

export default preview;
