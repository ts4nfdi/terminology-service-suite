import { SearchResultsListWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import { WrappedSearchResultsListWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchResultsListWidget/SearchResultsListWidget";

const roots = new WeakMap<Element, Root>();
function createSearchResultsList(
  props: SearchResultsListWidgetProps,
  container: any,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedSearchResultsListWidget {...props} />);
}

export { createSearchResultsList };
