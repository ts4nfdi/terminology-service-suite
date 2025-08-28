import { DescriptionWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { WrappedDescriptionWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/DescriptionWidget/DescriptionWidget";

const roots = new WeakMap<Element, Root>();

function createDescription(props: DescriptionWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedDescriptionWidget {...props} />);
}

export { createDescription };
