import { MathFormulaWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import { WrappedMathFormulaWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/MathFormulaWidget/MathFormulaWidget";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createMathFormula(props: MathFormulaWidgetProps, container: Element) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedMathFormulaWidget {...props} />);
}

export { createMathFormula };
