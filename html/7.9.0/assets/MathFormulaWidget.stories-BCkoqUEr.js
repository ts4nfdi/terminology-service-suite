import{aD as f,aE as I,aF as x,aG as F,j as T,aH as S}from"./provider-DhHV66nY.js";import{T as _}from"./globals-1uEo64sR.js";import"./index-BNDZ1pHC.js";import"./client-DFp2fd_t.js";import"./MathFormulaWidget-BVATrNbB.js";import"./purify.es-5AjVNlXF.js";import"./QueryClientProvider-BiMFCrBx.js";import"./useQuery-tjcomNSo.js";import"./text-ATQ4pZKH.js";import"./link.styles-D92Rj0Iv.js";const{expect:A,waitFor:P,within:b}=__STORYBOOK_MODULE_TEST__,E=_,D="mathmoddb",O="https://portal.mardi4nfdi.de/entity/Q6674137",W='<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>=</mo><mn>1</mn></math>',v='<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>formula example</mtext></math>',R='<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow><mi>c</mi></mfrac></math>',$={...T,...F,...x,...I,...f},B={mathML:W},N={mathML:v},j={mathML:R},k={api:"",ontologyId:"",iri:""},q={api:E,ontologyId:D,iri:O,mathProperty:"https://portal.mardi4nfdi.de/entity/P989"},m=async({canvasElement:t})=>{const a=b(t);await P(async()=>{const w=a.getByTestId("math-formula");await A(w).toBeInTheDocument()},{timeout:3e3})};let G=0;function H(){return G++}const tt={title:"Entity Metadata/MathFormulaWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:S}}},render:t=>{const a=H();return`
<div id="math_formula_widget_container_${a}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMathFormula(
    {
      api: "${t.api}",
      ontologyId: "${t.ontologyId}",
      iri: "${t.iri}",
      mathProperty: "${t.mathProperty}",
      mathML: ${JSON.stringify(t.mathML??"")},
    },
    document.querySelector('#math_formula_widget_container_${a}')
)
<\/script>
        `},argTypes:$,args:k},r={args:q,play:m},o={args:B,parameters:{docs:{description:{story:"Renders a simple formula from a direct MathML string. The value of mathML should be MathML markup, not an entity IRI."}}},play:m},e={args:N,parameters:{docs:{description:{story:"Shows how plain text can be rendered when it is wrapped in valid MathML, for example inside an mtext element."}}},play:m},n={args:j,parameters:{docs:{description:{story:"Renders a slightly more complex MathML formula with a fraction."}}},play:m};var s,i,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: MathmoddbDefiningFormulaStoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: MathMLInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Renders a simple formula from a direct MathML string. The value of mathML should be MathML markup, not an entity IRI."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var l,M,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: MathMLTextInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Shows how plain text can be rendered when it is wrapped in valid MathML, for example inside an mtext element."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(u=(M=e.parameters)==null?void 0:M.docs)==null?void 0:u.source}}};var y,g,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: MathMLFractionInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Renders a slightly more complex MathML formula with a fraction."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(L=(g=n.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};const at=["MathmoddbDefiningFormula","MathMLInput","MathMLTextInput","MathMLFractionInput"];export{n as MathMLFractionInput,o as MathMLInput,e as MathMLTextInput,r as MathmoddbDefiningFormula,at as __namedExportsOrder,tt as default};
