import { JsonApiWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/JsonApiWidget";
import { JsonApiWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createJsonApi(
  props: JsonApiWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedJsonApiWidget {...props} />);
}

function WrappedJsonApiWidget(props: JsonApiWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <JsonApiWidget
          apiQuery={props.apiQuery}
          buttonText={props.buttonText}
          buttonSize={props.buttonSize}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createJsonApi };
