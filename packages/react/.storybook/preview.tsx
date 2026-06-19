import { Preview } from "@storybook/react-vite";
import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";
import { useArgs } from "@storybook/preview-api";
import { useEffect, useState } from "react";

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

function hasSpecialChars(value: unknown) {
  if (typeof value !== "string") {
    return false;
  }
  return /[^a-zA-Z0-9 _-]/.test(value);
}


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
  tags: ["autodocs"],
};

export default preview;
