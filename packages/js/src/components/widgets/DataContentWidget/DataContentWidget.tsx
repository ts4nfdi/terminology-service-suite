import { DataContentWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import { WrappedDataContentWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/DataContentWidget/DataContentWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createDataContent(props: DataContentWidgetProps, container: any) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedDataContentWidget {...props} />);
}

export { createDataContent };
