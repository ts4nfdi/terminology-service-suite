import { EntityOntoListWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedEntityOntoListWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/EntityOntoListWidget/EntityOntoListWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createEntityOntoList(
  props: EntityOntoListWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedEntityOntoListWidget {...props} />);
}

export { createEntityOntoList };
