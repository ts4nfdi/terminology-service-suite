import { TermDepictionWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { WrappedTermDepictionWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/TermDepictionWidget/TermDepictionWidget";

const roots = new WeakMap<Element, Root>();
function createDepiction(props: TermDepictionWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedTermDepictionWidget {...props} />);
}

export { createDepiction };
