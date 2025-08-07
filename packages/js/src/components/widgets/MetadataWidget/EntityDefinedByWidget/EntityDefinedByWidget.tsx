import { EntityDefinedByWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { WrappedEntityDefinedByWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/EntityDefinedByWidget/EntityDefinedByWidget";

const roots = new WeakMap<Element, Root>();
function createEntityDefinedBy(
  props: EntityDefinedByWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedEntityDefinedByWidget {...props} />);
}

export { createEntityDefinedBy };
