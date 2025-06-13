import { HierarchyWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget";
import { HierarchyWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createHierarchy(
  props: HierarchyWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedHierarchyWidget {...props} />);
}

function WrappedHierarchyWidget(props: HierarchyWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <HierarchyWidget
          apiUrl={props.apiUrl}
          apiKey={props.apiKey}
          backendType={props.backendType}
          iri={props.iri}
          entityType={props.entityType}
          ontologyId={props.ontologyId}
          includeObsoleteEntities={props.includeObsoleteEntities}
          useLegacy={props.useLegacy}
          preferredRoots={props.preferredRoots}
          keepExpansionStates={props.keepExpansionStates}
          showSiblingsOnInit={props.showSiblingsOnInit}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createHierarchy };
