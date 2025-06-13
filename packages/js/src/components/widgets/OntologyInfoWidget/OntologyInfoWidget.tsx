import { OntologyInfoWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/OntologyInfoWidget";
import { OntologyInfoWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createOntologyInfo(
  props: OntologyInfoWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedOntologyInfoWidget {...props} />);
}

function WrappedOntologyInfoWidget(props: OntologyInfoWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <OntologyInfoWidget
          ontologyId={props.ontologyId}
          api={props.api}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          showBadges={props.showBadges}
          hasTitle={props.hasTitle}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createOntologyInfo };
