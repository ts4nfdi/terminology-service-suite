import { TermDepictionWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedTermDepictionWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/TermDepictionWidget/TermDepictionWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createDepiction(props: TermDepictionWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedTermDepictionWidget {...props} />);
}

export { createDepiction };
