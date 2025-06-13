import { SearchBarWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchBarWidget";
import { SearchBarWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createSearchBar(
  props: SearchBarWidgetProps,
  container: any,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedSearchBarWidget {...props} />);
}

function WrappedSearchBarWidget(props: SearchBarWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <SearchBarWidget
          api={props.api}
          query={props.query}
          selectionChangedEvent={props.selectionChangedEvent}
          parameter={props.parameter}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createSearchBar };
