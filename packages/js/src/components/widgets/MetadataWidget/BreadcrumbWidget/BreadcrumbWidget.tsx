import { createRoot, Root } from "react-dom/client";
import React from "react";
import { WrappedBreadcrumbWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidget";
import { BreadcrumbWidgetProps } from "@ts4nfdi/terminology-service-suite/src";

const roots = new WeakMap<Element, Root>();

function createBreadcrumb(props: BreadcrumbWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedBreadcrumbWidget {...props} />);
}

export { createBreadcrumb };
