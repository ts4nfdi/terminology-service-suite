import { HierarchyWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedHierarchyWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidget";

const roots = new WeakMap<Element, Root>();
function createHierarchy(
  props: HierarchyWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedHierarchyWidget {...props} />);
}

export { createHierarchy };
