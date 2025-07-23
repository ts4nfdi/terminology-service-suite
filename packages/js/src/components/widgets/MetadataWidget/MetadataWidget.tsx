import { MetadataWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedMetadataWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/MetadataWidget";

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

export { createMetadata };
