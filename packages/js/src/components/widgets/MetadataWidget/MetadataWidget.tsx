import { MetadataWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget";
import { MetadataWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createMetadata(
  props: MetadataWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedMetadataWidget {...props} />);
}

function WrappedMetadataWidget(props: MetadataWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <MetadataWidget
          iri={props.iri}
          ontologyId={props.ontologyId}
          api={props.api}
          entityType={props.entityType}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          termLink={props.termLink}
          altNamesTab={props.altNamesTab}
          hierarchyTab={props.hierarchyTab}
          crossRefTab={props.crossRefTab}
          terminologyInfoTab={props.terminologyInfoTab}
          graphViewTab={props.graphViewTab}
          termDepictionTab={props.termDepictionTab}
          hierarchyPreferredRoots={props.hierarchyPreferredRoots}
          hierarchyShowSiblingsOnInit={props.hierarchyShowSiblingsOnInit}
          hierarchyKeepExpansionStates={props.hierarchyKeepExpansionStates}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
          className={props.className}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createMetadata };
