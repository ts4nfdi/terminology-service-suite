import { SearchResultsListWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchResultsListWidget";
import { SearchResultsListWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createSearchResultsList(
  props: SearchResultsListWidgetProps,
  container: any,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedSearchResultsListWidget {...props} />);
}

function WrappedSearchResultsListWidget(props: SearchResultsListWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <SearchResultsListWidget
          api={props.api}
          query={props.query}
          parameter={props.parameter}
          initialItemsPerPage={props.initialItemsPerPage}
          itemsPerPageOptions={props.itemsPerPageOptions}
          targetLink={props.targetLink}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createSearchResultsList };
