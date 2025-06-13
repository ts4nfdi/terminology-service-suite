import { TabWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget";
import { TabWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createTab(
  props: TabWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedTabWidget {...props} />);
}

function WrappedTabWidget(props: TabWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <TabWidget
          iri={props.iri}
          api={props.api}
          ontologyId={props.ontologyId}
          entityType={props.entityType}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          altNamesTab={props.altNamesTab}
          hierarchyTab={props.hierarchyTab}
          crossRefTab={props.crossRefTab}
          terminologyInfoTab={props.terminologyInfoTab}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
          hierarchyPreferredRoots={props.hierarchyPreferredRoots}
          hierarchyKeepExpansionStates={props.hierarchyKeepExpansionStates}
          hierarchyShowSiblingsOnInit={props.hierarchyShowSiblingsOnInit}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createTab };
