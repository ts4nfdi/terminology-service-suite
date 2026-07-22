import{l as A}from"./OlsEntityApi-CHx7uzCS.js";import{M as W}from"./MathFormulaWidget-C5yVIvVf.js";import{Q as E,R,S as _,T as O,i as b}from"./storyArgs-CNZbdCtG.js";import"./iframe-3EPMgL4i.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-zaMaVYeS.js";import"./text-A4DoxnP2.js";import"./link.styles-W7_cCgkf.js";const{expect:v,waitFor:k,within:B}=__STORYBOOK_MODULE_TEST__,t="https://ols4-mathmod.qa.km.k8s.zbmed.de/ols/api/",a="mathmod",o="https://portal.mardi4nfdi.de/entity/Q6674137",D='<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>=</mo><mn>1</mn></math>',Q='<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>formula example</mtext></math>',q='<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow><mi>c</mi></mfrac></math>',z={...b,...O,..._,...R,...E},K={api:t,ontologyId:a,iri:o,mathML:D},U={api:t,ontologyId:a,iri:o,mathML:Q},Y={api:t,ontologyId:a,iri:o,mathML:q},j={api:"",ontologyId:"",iri:""},C={api:t,ontologyId:a,iri:o,mathProperty:"https://portal.mardi4nfdi.de/entity/P983"},G={api:t,ontologyId:a,iri:o,mathProperty:"https://portal.mardi4nfdi.de/entity/P989"},r=async({canvasElement:T})=>{const F=B(T);await k(async()=>{const P=F.getByTestId("math-formula");await v(P).toBeInTheDocument()},{timeout:3e3})},at={title:"Entity Metadata/MathFormulaWidget",component:W,parameters:{layout:"centered",docs:{description:{component:A}}},argTypes:z,args:j},e={args:C,play:r},s={args:G,play:r},n={args:K,parameters:{docs:{description:{story:"Renders a simple formula from a direct MathML string. The value of mathML should be MathML markup, not an entity IRI."}}},play:r},m={args:U,parameters:{docs:{description:{story:"Shows how plain text can be rendered when it is wrapped in valid MathML, for example inside an mtext element."}}},play:r},i={args:Y,parameters:{docs:{description:{story:"Renders a slightly more complex MathML formula with a fraction."}}},play:r};var p,c,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: MathmodP983StoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,l,M;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: MathmodP989StoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(M=(l=s.parameters)==null?void 0:l.docs)==null?void 0:M.source}}};var y,g,u;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: MathMLInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Renders a simple formula from a direct MathML string. The value of mathML should be MathML markup, not an entity IRI."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var L,w,I;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: MathMLTextInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Shows how plain text can be rendered when it is wrapped in valid MathML, for example inside an mtext element."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var x,f,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: MathMLFractionInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story: "Renders a slightly more complex MathML formula with a fraction."
      }
    }
  },
  play: commonMathFormulaWidgetPlay
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const ot=["MathmodP983","MathmodP989","MathMLInput","MathMLTextInput","MathMLFractionInput"];export{i as MathMLFractionInput,n as MathMLInput,m as MathMLTextInput,e as MathmodP983,s as MathmodP989,ot as __namedExportsOrder,at as default};
