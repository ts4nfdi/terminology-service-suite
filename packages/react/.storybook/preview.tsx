import { EuiProvider } from "@elastic/eui";
import { Preview } from "@storybook/react-vite";
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

function hasSpecialChars(value: unknown) {
  if (typeof value !== "string") {
    return false;
  }
  return /[^a-zA-Z0-9 _-]/.test(value);
}

/**
 * Returns only the args that the user changed AND contain special characters
 */
function getChangedSpecialArgs(
  currentArgs: Record<string, unknown>,
  initialArgs: Record<string, unknown>,
): Record<string, unknown> {
  const changedSpecialArgs: Record<string, unknown> = {};
  for (const arg in currentArgs) {
    if (
      currentArgs[arg] !== initialArgs[arg] &&
      hasSpecialChars(currentArgs[arg])
    ) {
      changedSpecialArgs[arg] = currentArgs[arg];
    }
  }
  return changedSpecialArgs;
}

/**
 *  Validates decoded args to prevent prototype pollution attacks
 */
function isSafeDecodedArgs(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  for (const key of Object.keys(value)) {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return false;
    }
  }

  return true;
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
