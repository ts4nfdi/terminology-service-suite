import { EntityListWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedEntityListWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityListWidget/EntityListWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createEntityList(props: EntityListWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedEntityListWidget {...props} />);
}

export { createEntityList };
