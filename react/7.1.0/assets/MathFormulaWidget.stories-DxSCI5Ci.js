import{l as b}from"./OlsEntityApi-BETKMLOd.js";import{M as P}from"./MathFormulaWidget-DwzTFmG_.js";import{T as D}from"./globals-Dr4u9m4r.js";import{P as W,Q as _,R as E,S as O,i as R}from"./storyArgs-C5yU1EQS.js";import"./iframe-JxYAoN7P.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-CxXf8DKn.js";import"./text-DeSIiks3.js";import"./link.styles-DrzZg_if.js";const{expect:v,waitFor:B,within:k}=__STORYBOOK_MODULE_TEST__,w=D,F="mathmoddb",x="https://portal.mardi4nfdi.de/entity/Q6674137",N='<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>=</mo><mn>1</mn></math>',Q='<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>formula example</mtext></math>',K='<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow><mi>c</mi></mfrac></math>',U={...R,...O,...E,..._,...W},Y={mathML:N},j={mathML:Q},q={mathML:K},z={api:"",ontologyId:"",iri:""},C={api:w,ontologyId:F,iri:x,mathProperty:"https://portal.mardi4nfdi.de/entity/P983"},G={api:w,ontologyId:F,iri:x,mathProperty:"https://portal.mardi4nfdi.de/entity/P989"},t=async({canvasElement:S})=>{const T=k(S);await B(async()=>{const A=T.getByTestId("math-formula");await v(A).toBeInTheDocument()},{timeout:3e3})},ot={title:"Entity Metadata/MathFormulaWidget",component:P,parameters:{layout:"centered",docs:{description:{component:b}}},argTypes:U,args:z},a={args:G,play:t},r={args:C,play:t},o={args:Y,parameters:{docs:{description:{story:"Renders a simple formula from a direct MathML string. The value of mathML should be MathML markup, not an entity IRI."}}},play:t},e={args:j,parameters:{docs:{description:{story:"Shows how plain text can be rendered when it is wrapped in valid MathML, for example inside an mtext element."}}},play:t},n={args:q,parameters:{docs:{description:{story:"Renders a slightly more complex MathML formula with a fraction."}}},play:t};var m,s,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: MathmoddbDefiningFormulaStoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: MathmoddbInDefiningFormulaStoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,l,M;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: MathMLInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Renders a simple formula from a direct MathML string. The value of mathML should be MathML markup, not an entity IRI."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(M=(l=o.parameters)==null?void 0:l.docs)==null?void 0:M.source}}};var g,u,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: MathMLTextInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Shows how plain text can be rendered when it is wrapped in valid MathML, for example inside an mtext element."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var L,f,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: MathMLFractionInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Renders a slightly more complex MathML formula with a fraction."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(I=(f=n.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const et=["MathmoddbDefiningFormula","MathmoddbInDefiningFormula","MathMLInput","MathMLTextInput","MathMLFractionInput"];export{n as MathMLFractionInput,o as MathMLInput,e as MathMLTextInput,a as MathmoddbDefiningFormula,r as MathmoddbInDefiningFormula,et as __namedExportsOrder,ot as default};
