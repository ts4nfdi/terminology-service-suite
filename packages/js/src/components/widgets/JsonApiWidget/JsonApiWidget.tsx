import { JsonApiWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { WrappedJsonApiWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/JsonApiWidget/JsonApiWidget";

const roots = new WeakMap<Element, Root>();
function createJsonApi(props: JsonApiWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedJsonApiWidget {...props} />);
}

export { createJsonApi };
