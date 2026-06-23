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
 * Validates decoded args to prevent prototype pollution attacks
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

/**
 * Keeps Storybook URLs readable after updating query parameters
 */
function buildCleanURL(url: URL): string {
  const params: string[] = [];

  /**
   * Keep the Storybook path readable without encoding:
   * path=/story/search-exampleWidget--classes
   */
  const path = url.searchParams.get("path");
  if (path) {
    params.push(`path=${path}`);
  }

  /**
   * Encode other params so special characters are safe in the URL:
   * "red & blue" -> "red%20%26%20blue"
   */
  url.searchParams.forEach((value, key) => {
    if (key !== "path") {
      params.push(`${key}=${encodeURIComponent(value)}`);
    }
  });

  const baseUrl = url.origin + url.pathname;
  const queryString = params.join("&");

  return baseUrl + "?" + queryString;
}

const queryClient = new QueryClient();

/**
 * Reads shared args from the URL and keeps changed special args in sync
 */
function StoryArgsUrlSyncManager({
  args,
  initialArgs,
  SetArgs,
  storyElement,
}: any) {
  const [isReady, setIsReady] = useState(false);

  /**
   * On first load, restore shared args from the URL if present
   */
  useEffect(function () {
    try {
      const topWindow = window.top || window;
      const params = new URLSearchParams(topWindow.location.search);

      const encodedArgs = params.get("tss_args");
      const isSharedLink = params.get("encode") === "true";

      if (isSharedLink && encodedArgs) {
        let decoded: string | null = null;
        let decodedArgs: unknown = null;

        try {
          decoded = atob(encodedArgs);
        } catch {
          console.error("Failed to read shared Storybook args.");
        }

        if (decoded !== null) {
          try {
            decodedArgs = JSON.parse(decodeURIComponent(decoded));
          } catch {
            console.error("Failed to read shared Storybook args.");
          }
        }

        if (
          decodedArgs !== null &&
          isSafeDecodedArgs(decodedArgs) &&
          Object.keys(decodedArgs).length > 0
        ) {
          SetArgs(decodedArgs);
        }
      }
    } catch {
      console.error("Failed to read shared Storybook args.");
    } finally {
      setIsReady(true);
    }
  }, []);

  /**
   * When args change, store changed special args in the URL
   */
  useEffect(
    function () {
      if (!isReady) return;

      /**
       * Debounce URL updates while users are typing in controls
       */
      const timer = setTimeout(function () {
        try {
          const topWindow = window.top || window;
          const currentURL = new URL(topWindow.location.href);
          const changedSpecialArgs = getChangedSpecialArgs(args, initialArgs);

          if (Object.keys(changedSpecialArgs).length > 0) {
            const encoded = btoa(
              encodeURIComponent(JSON.stringify(changedSpecialArgs)),
            );

            currentURL.searchParams.set("tss_args", encoded);
            currentURL.searchParams.set("encode", "true");
          } else {
            currentURL.searchParams.delete("tss_args");
            currentURL.searchParams.delete("encode");
          }

          topWindow.history.replaceState({}, "", buildCleanURL(currentURL));
        } catch {
          console.error("Failed to update shared Storybook args.");
        }
      }, 400);

      return function () {
        clearTimeout(timer);
      };
    },
    [args, initialArgs, isReady],
  );

  if (!isReady) {
    return null;
  }

  return <>{storyElement}</>;
}

/**
 * Storybook decorator that connects story args to the URL sync manager
 */
function syncStoryArgsWithUrl(story: any, context: any) {
  const [args, SetArgs] = useArgs();
  const initialArgs = context.initialArgs ?? {};

  return (
    <StoryArgsUrlSyncManager
      args={args}
      initialArgs={initialArgs}
      SetArgs={SetArgs}
      storyElement={story()}
    />
  );
}

const decorators = [
  syncStoryArgsWithUrl,
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
