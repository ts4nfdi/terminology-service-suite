import { DescriptionWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/DescriptionWidget/DescriptionWidget";
import { DescriptionWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();

function createDescription(
  props: DescriptionWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedDescriptionWidget {...props} />);
}

function WrappedDescriptionWidget(props: DescriptionWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <DescriptionWidget
          api={props.api}
          ontologyId={props.ontologyId}
          iri={props.iri}
          descText={props.descText}
          thingType={props.thingType}
          parameter={props.parameter}
          color={props.color}
          useLegacy={props.useLegacy}
          className={props.className}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createDescription };
