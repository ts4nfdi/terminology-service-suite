import{l as f}from"./OlsEntityApi-Br0Zq8xj.js";import{M as I}from"./MathFormulaWidget-LJSPpgVV.js";import{T as x}from"./globals-Dr4u9m4r.js";import{P as F,Q as T,R as S,S as A,i as P}from"./storyArgs-BMfzGQAS.js";import"./iframe-DMKrAS_T.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-CdY_vUx0.js";import"./text-6wP6Ct4w.js";import"./link.styles-BuCz81h7.js";const{expect:b,waitFor:_,within:E}=__STORYBOOK_MODULE_TEST__,W=x,D="mathmoddb",O="https://portal.mardi4nfdi.de/entity/Q6674137",R='<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>=</mo><mn>1</mn></math>',v='<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>formula example</mtext></math>',B='<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow><mi>c</mi></mfrac></math>',k={...P,...A,...S,...T,...F},N={mathML:R},Q={mathML:v},K={mathML:B},U={api:"",ontologyId:"",iri:""},Y={api:W,ontologyId:D,iri:O,mathProperty:"https://portal.mardi4nfdi.de/entity/P989"},e=async({canvasElement:y})=>{const L=E(y);await _(async()=>{const w=L.getByTestId("math-formula");await b(w).toBeInTheDocument()},{timeout:3e3})},Z={title:"Entity Metadata/MathFormulaWidget",component:I,parameters:{layout:"centered",docs:{description:{component:f}}},argTypes:k,args:U},t={args:Y,play:e},a={args:N,parameters:{docs:{description:{story:"Renders a simple formula from a direct MathML string. The value of mathML should be MathML markup, not an entity IRI."}}},play:e},r={args:Q,parameters:{docs:{description:{story:"Shows how plain text can be rendered when it is wrapped in valid MathML, for example inside an mtext element."}}},play:e},o={args:K,parameters:{docs:{description:{story:"Renders a slightly more complex MathML formula with a fraction."}}},play:e};var n,m,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: MathmoddbDefiningFormulaStoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var i,p,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: MathMLInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Renders a simple formula from a direct MathML string. The value of mathML should be MathML markup, not an entity IRI."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var h,d,M;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: MathMLTextInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Shows how plain text can be rendered when it is wrapped in valid MathML, for example inside an mtext element."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(M=(d=r.parameters)==null?void 0:d.docs)==null?void 0:M.source}}};var l,u,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: MathMLFractionInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Renders a slightly more complex MathML formula with a fraction."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const $=["MathmoddbDefiningFormula","MathMLInput","MathMLTextInput","MathMLFractionInput"];export{o as MathMLFractionInput,a as MathMLInput,r as MathMLTextInput,t as MathmoddbDefiningFormula,$ as __namedExportsOrder,Z as default};
