import { TermRequestProps } from "@ts4nfdi/terminology-service-suite";
import { WrappedTermRequest } from "@ts4nfdi/terminology-service-suite/src/components/widgets/TermRequest/TermRequest";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();

function createTermRequest(props: TermRequestProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedTermRequest {...props} />);
}

export { createTermRequest };
