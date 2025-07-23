import { EntityRelationsWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedEntityRelationsWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityRelationsWidget/EntityRelationsWidget";

const roots = new WeakMap<Element, Root>();
function createEntityRelations(
  props: EntityRelationsWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedEntityRelationsWidget {...props} />);
}

export { createEntityRelations };
