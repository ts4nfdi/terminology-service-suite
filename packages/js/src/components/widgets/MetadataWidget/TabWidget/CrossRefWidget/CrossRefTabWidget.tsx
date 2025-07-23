import { CrossRefWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedCrossRefTabWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/CrossRefWidget/CrossRefTabWidget";

const roots = new WeakMap<Element, Root>();
function createCrossRefTab(
  props: CrossRefWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedCrossRefTabWidget {...props} />);
}

export { createCrossRefTab };
