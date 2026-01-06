import { IriWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedIriWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/IriWidget/IriWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createIri(props: IriWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedIriWidget {...props} />);
}

export { createIri };
