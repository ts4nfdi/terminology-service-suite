import { OntologyInfoWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedOntologyInfoWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/OntologyInfoWidget/OntologyInfoWidget";

const roots = new WeakMap<Element, Root>();
function createOntologyInfo(
  props: OntologyInfoWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedOntologyInfoWidget {...props} />);
}

export { createOntologyInfo };
