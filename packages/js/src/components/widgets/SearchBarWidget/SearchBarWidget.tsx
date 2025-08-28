import { SearchBarWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { WrappedSearchBarWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchBarWidget/SearchBarWidget";

const roots = new WeakMap<Element, Root>();
function createSearchBar(props: SearchBarWidgetProps, container: any) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedSearchBarWidget {...props} />);
}

export { createSearchBar };
