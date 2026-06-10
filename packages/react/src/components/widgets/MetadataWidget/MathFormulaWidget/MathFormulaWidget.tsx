"use client";

import { EuiProvider } from "@elastic/eui";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { QueryClient, QueryClientProvider } from "react-query";
import { MathFormulaWidgetProps } from "../../../../app/types";

function MathFormulaWidget(props: MathFormulaWidgetProps) {
  const mathContent = props.content;

  return (
    <>
      <div>
        <BlockMath math={mathContent} />
      </div>
    </>
  );
}

function WrappedMathFormulaWidget(props: MathFormulaWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <MathFormulaWidget content={props.content} />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { MathFormulaWidget, WrappedMathFormulaWidget };
