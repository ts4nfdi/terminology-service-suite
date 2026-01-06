import { AlternativeNameTabWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import { WrappedAlternativeNameTabWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createAlternativeNameTab(
  props: AlternativeNameTabWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedAlternativeNameTabWidget {...props} />);
}

export { createAlternativeNameTab };
