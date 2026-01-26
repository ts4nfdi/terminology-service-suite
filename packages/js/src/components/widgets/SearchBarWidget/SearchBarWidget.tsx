import { SearchBarWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedSearchBarWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchBarWidget/SearchBarWidget";
import { createRoot, Root } from "react-dom/client";

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
