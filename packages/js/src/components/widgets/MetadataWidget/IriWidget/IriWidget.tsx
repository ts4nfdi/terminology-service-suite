import { IriWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/IriWidget";
import { IriWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createIri(
  props: IriWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedIriWidget {...props} />);
}

function WrappedIriWidget(props: IriWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <IriWidget
          iri={props.iri}
          iriText={props.iriText}
          color={props.color}
          externalIcon={props.externalIcon}
          urlPrefix={props.urlPrefix}
          copyButton={props.copyButton}
          className={props.className}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createIri };
