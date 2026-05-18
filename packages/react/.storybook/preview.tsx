import { EuiProvider } from "@elastic/eui";
import { useArgs } from "@storybook/preview-api";
import { Preview } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

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

const queryClient = new QueryClient();

// Manages URL synchronization and prevents premature rendering of stories
const UrlSyncManager = ({ args, SetArgs, storyChildren }: any) => {
  // Prevents widget crashes by delaying rendering until initial URL args are applied
  const [isReady, setIsReady] = useState(false);

  // 1. Parse and apply arguments from the URL on initial mount
  useEffect(() => {
    try {
      const topWindow = window.top || window;
      const params = new URLSearchParams(topWindow.location.search);
      const encodedArgs = params.get("tss_args");

      if (encodedArgs) {
        const decodedArgs = JSON.parse(decodeURIComponent(atob(encodedArgs))); // for example: %23 will be converted to #
        if (Object.keys(decodedArgs).length > 0) {
          SetArgs(decodedArgs);
        }
      }
    } catch (error) {
      console.error("Failed to sync TSS args from URL:", error);
    } finally {
      // Ensure the story renders even if URL parsing fails or no args exist
      setIsReady(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isReady) return null;

  return <>{storyChildren}</>;
};

const withUrlSync = (story: any) => {
  const [args, SetArgs] = useArgs();

  return (
    // Pass the invoked story to the manager to maintain proper rendering hierarchy
    <UrlSyncManager args={args} SetArgs={SetArgs} storyChildren={story()} />
  );
};

const decorators = [
  withUrlSync,
  (story: any) => (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    </EuiProvider>
  ),
];

const preview: Preview = {
  decorators: decorators,
  tags: ["autodocs"],
};

export default preview;
