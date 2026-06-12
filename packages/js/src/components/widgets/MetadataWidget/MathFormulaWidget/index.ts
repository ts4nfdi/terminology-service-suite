import { createMathFormula } from "./MathFormulaWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createMathFormula,
};

export { createMathFormula };
