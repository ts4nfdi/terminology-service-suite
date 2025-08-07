import { EntityInfoWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { WrappedEntitiyInfoWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityInfoWidget/EntityInfoWidget";

const roots = new WeakMap<Element, Root>();
function createEntityInfo(props: EntityInfoWidgetProps, container: any) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedEntitiyInfoWidget {...props} />);
}

export { createEntityInfo };
