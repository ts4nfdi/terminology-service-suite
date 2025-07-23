import { ResourcesWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedResourcesWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/ResourcesWidget/ResourcesWidget";

const roots = new WeakMap<Element, Root>();
function createResources(
  props: ResourcesWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedResourcesWidget {...props} />);
}

export { createResources };
