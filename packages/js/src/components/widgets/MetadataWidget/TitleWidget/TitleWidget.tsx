import { TitleWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { WrappedTitleWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TitleWidget/TitleWidget";

const roots = new WeakMap<Element, Root>();
function createTitle(props: TitleWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedTitleWidget {...props} />);
}

export { createTitle };
