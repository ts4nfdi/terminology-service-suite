import { MetadataWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedMetadataWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/MetadataWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createMetadata(props: MetadataWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedMetadataWidget {...props} />);
}

export { createMetadata };
