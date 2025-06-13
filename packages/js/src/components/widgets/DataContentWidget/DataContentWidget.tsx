import { DataContentWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/DataContentWidget";
import { DataContentWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { createRoot, Root } from "react-dom/client";
import React from "react";

const roots = new WeakMap<Element, Root>();
function createDataContent(
  props: DataContentWidgetProps,
  container: any,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedDataContentWidget {...props} />);
}

function WrappedDataContentWidget(props: DataContentWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <DataContentWidget
          api={props.api}
          parameter={props.parameter}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createDataContent };
