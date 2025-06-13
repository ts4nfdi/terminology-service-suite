import { ResourcesWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/ResourcesWidget";
import { ResourcesWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createResources(
  props: ResourcesWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedResourcesWidget {...props} />);
}

function WrappedResourcesWidget(props: ResourcesWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <ResourcesWidget
          api={props.api}
          initialEntriesPerPage={props.initialEntriesPerPage}
          pageSizeOptions={props.pageSizeOptions}
          initialSortField={props.initialSortField}
          initialSortDir={props.initialSortDir}
          actions={props.actions}
          parameter={props.parameter}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createResources };
