import { TabWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedTabWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/TabWidget";

const roots = new WeakMap<Element, Root>();
function createTab(
  props: TabWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedTabWidget {...props} />);
}

export { createTab };
