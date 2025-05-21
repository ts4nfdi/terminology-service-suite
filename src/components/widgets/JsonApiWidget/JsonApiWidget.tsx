import React from "react";
import { EuiButton, EuiProvider } from "@elastic/eui";
import { JsonApiWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot, Root } from "react-dom/client";

function JsonApiWidget(props: JsonApiWidgetProps) {
  const { apiQuery, buttonText, buttonSize } = props;

  return (
    <EuiButton href={apiQuery} target="_blank" size={buttonSize || "m"}>
      {buttonText}
    </EuiButton>
  );
}
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

export { JsonApiWidget, createJsonApi };
