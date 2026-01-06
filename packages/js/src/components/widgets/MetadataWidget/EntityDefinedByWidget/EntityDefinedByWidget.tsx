import { EntityDefinedByWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedEntityDefinedByWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/EntityDefinedByWidget/EntityDefinedByWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createEntityDefinedBy(
  props: EntityDefinedByWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedEntityDefinedByWidget {...props} />);
}

export { createEntityDefinedBy };
