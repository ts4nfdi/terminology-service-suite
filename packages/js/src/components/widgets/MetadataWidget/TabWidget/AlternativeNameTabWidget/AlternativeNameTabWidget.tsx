import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedAlternativeNameTabWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidget";
import { AlternativeNameTabWidgetProps } from "@ts4nfdi/terminology-service-suite/src";

const roots = new WeakMap<Element, Root>();
function createAlternativeNameTab(
  props: AlternativeNameTabWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedAlternativeNameTabWidget {...props} />);
}

export { createAlternativeNameTab };
