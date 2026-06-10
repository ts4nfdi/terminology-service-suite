"use client";

import { EuiProvider } from "@elastic/eui";
import { MathFormulaWidgetProps } from "../../../../app/types";

function MathFormulaWidget(props: MathFormulaWidgetProps) {
  void props.content;

  return <div data-testid="math-formula" />;
}

function WrappedMathFormulaWidget(props: MathFormulaWidgetProps) {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <MathFormulaWidget content={props.content} />
    </EuiProvider>
  );
}

export { MathFormulaWidget, WrappedMathFormulaWidget };
