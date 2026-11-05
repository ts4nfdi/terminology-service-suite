import { MappingListWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import { WrappedMappingListWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MappingListWidget/MappingListWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createMappingList(props: MappingListWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedMappingListWidget {...props} />);
}

export { createMappingList };
