import { MappingDetailWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedMappingDetailWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MappingDetailWidget/MappingDetailWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createMappingDetail(
  props: MappingDetailWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedMappingDetailWidget {...props} />);
}

export { createMappingDetail };
