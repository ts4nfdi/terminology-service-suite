"use client";
import { EuiLoadingSpinner, EuiPanel, EuiProvider } from "@elastic/eui";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import DOMPurify from "dompurify";
import "katex/dist/katex.min.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../../api/ols/OlsEntityApi";
import { MathFormulaWidgetProps } from "../../../../app/types";
import { Thing } from "../../../../model/interfaces";

const ALLOWED_TAGS = [
  "math",
  "mrow",
  "mi",
  "mn",
  "mo",
  "ms",
  "mtext",
  "mspace",
  "msup",
  "msub",
  "msubsup",
  "mfrac",
  "msqrt",
  "mroot",
  "mover",
  "munder",
  "munderover",
  "mtable",
  "mtr",
  "mtd",
  "mstyle",
  "semantics",
  "annotation",
  "annotation-xml",
];

const ALLOWED_ATTR = [
  "xmlns",
  "display",
  "displaystyle",
  "scriptlevel",
  "stretchy",
  "accent",
  "accentunder",
  "mathvariant",
  "class",
];

function MathFormulaWidget(props: MathFormulaWidgetProps) {
  const { api, ontologyId, iri, mathProperty } = props;

  const olsApi = new OlsEntityApi(api);
  const { data, isLoading, isSuccess, isLoadingError, error } = useQuery<Thing>(
    ["mathFormulaWidget", api, iri, ontologyId],
    async () => {
      return olsApi.getEntityObject(
        iri,
        "class",
        encodeURIComponent(encodeURIComponent(ontologyId)),
        "",
        false,
      );
    },
  );

  function sanitizeMathML(mathml: string) {
    return DOMPurify.sanitize(mathml, {
      USE_PROFILES: { mathMl: true },
      ALLOWED_TAGS,
      ALLOWED_ATTR,
      FORBID_TAGS: [
        "script",
        "style",
        "iframe",
        "object",
        "embed",
        "form",
        "input",
      ],
      FORBID_ATTR: ["onclick", "onerror", "onload", "style"],
    });
  }

  let mathContent = "";
  if (data && isSuccess) {
    let mathValue = data.getAnnotationById(mathProperty);
    if (mathValue && mathValue.length && "value" in mathValue[0]) {
      mathContent = mathValue[0].value;
      mathContent = sanitizeMathML(mathContent);
    }
  }

  return (
    <EuiPanel data-testid="math-formula">
      {isLoading && <EuiLoadingSpinner size="s" />}
      {!isLoading && mathContent !== "" && (
        <MathJaxContext>
          <MathJax dynamic>
            <span
              dangerouslySetInnerHTML={{ __html: sanitizeMathML(mathContent) }}
            />
          </MathJax>
        </MathJaxContext>
      )}
      {!isLoading && !error && mathContent === "" && (
        <div>No math formula available.</div>
      )}
      {isLoadingError && <div>Error loading math formula.</div>}
    </EuiPanel>
  );
}

function WrappedMathFormulaWidget(props: MathFormulaWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <MathFormulaWidget
          ontologyId={props.ontologyId}
          iri={props.iri}
          mathProperty={props.mathProperty}
          api={props.api}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { MathFormulaWidget, WrappedMathFormulaWidget };
