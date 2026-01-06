import { JsonApiWidgetProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedJsonApiWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/JsonApiWidget/JsonApiWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createJsonApi(props: JsonApiWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedJsonApiWidget {...props} />);
}

export { createJsonApi };
