import { GraphViewWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedGraphViewWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/GraphViewWidget/GraphViewWidget";

const roots = new WeakMap<Element, Root>();
function createGraphView(
  props: GraphViewWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedGraphViewWidget {...props} />);
}

export { createGraphView };
