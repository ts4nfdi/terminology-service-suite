import { IriWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import {
  WrappedIriWidget
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/IriWidget/IriWidget";

const roots = new WeakMap<Element, Root>();
function createIri(
  props: IriWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedIriWidget {...props} />);
}

export { createIri };
