import { SearchResultsListWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedSearchResultsListWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchResultsListWidget/SearchResultsListWidget";
import { createRoot, Root } from "react-dom/client";

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
