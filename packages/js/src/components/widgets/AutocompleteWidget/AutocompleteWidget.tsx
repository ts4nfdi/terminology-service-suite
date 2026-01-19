import { AutocompleteWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import { WrappedAutocompleteWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/AutocompleteWidget/AutocompleteWidget";
import { createRoot, Root } from "react-dom/client";
import "../../../../../react/src/style/ts4nfdiStyles/ts4nfdiAutocompleteStyle.css";

const roots = new WeakMap<Element, Root>();

function createAutocomplete(props: AutocompleteWidgetProps, container: any) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedAutocompleteWidget {...props} />);
}

export { createAutocomplete };
