import { GraphViewWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import { GraphViewWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/GraphViewWidget";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createGraphView(
  props: GraphViewWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedGraphViewWidget {...props} />);
}

function WrappedGraphViewWidget(props: GraphViewWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <GraphViewWidget
          api={props.api}
          iri={props.iri}
          ontologyId={props.ontologyId}
          rootWalk={props.rootWalk}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createGraphView };
