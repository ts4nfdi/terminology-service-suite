"use client";
import { EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import DOMPurify from "dompurify";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../../api/ols/OlsEntityApi";
import { MathFormulaWidgetProps } from "../../../../app";

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
  const { api, ontologyId, iri, mathProperty, mathML } = props;

  const hasInlineMathML = typeof mathML === "string" && mathML.trim() !== "";

  const olsApi = new OlsEntityApi(api);
  const { data, isLoading, isSuccess, isLoadingError, error } = useQuery(
    ["mathFormula", iri, ontologyId, mathProperty],
    async () => {
      return olsApi.getEntityObject(
        iri,
        "class",
        encodeURIComponent(encodeURIComponent(ontologyId)),
        "",
        false,
      );
    },
    {
      enabled: !hasInlineMathML && Boolean(mathProperty),
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

  let mathContent = hasInlineMathML ? mathML.trim() : "";
  if (data && isSuccess && !hasInlineMathML && mathProperty) {
    let mathValue = data.getAnnotationById(mathProperty);
    if (mathValue && mathValue.length && "value" in mathValue[0]) {
      mathContent = mathValue[0].value;
      mathContent = sanitizeMathML(mathContent);
    }
  }

  return (
    <EuiText
      data-testid="math-formula"
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
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
    </EuiText>
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
          mathML={props.mathML}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { MathFormulaWidget, WrappedMathFormulaWidget };
