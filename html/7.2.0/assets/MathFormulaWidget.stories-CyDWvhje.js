import{T as n}from"./globals-Dr4u9m4r.js";import{W as d,X as s,Y as p,Z as c,i as y}from"./QueryClientProvider-BWR2RZKW.js";import"./index-CETyjSDw.js";import"./client-DFp2fd_t.js";import"./MathFormulaWidget-c5rnYnuy.js";import"./purify.es-D6gMnemd.js";import"./useQuery-BPvcPTdj.js";import"./text-CPqqw-PA.js";import"./link.styles-BloqUXLf.js";const{expect:l,waitFor:g,within:u}=__STORYBOOK_MODULE_TEST__,h=n,_="mathmoddb",T="https://portal.mardi4nfdi.de/entity/Q6674137",f={...y,...c,...p,...s,...d},I={api:"",ontologyId:"",iri:""},F={api:h,ontologyId:_,iri:T,mathProperty:"https://portal.mardi4nfdi.de/entity/P989"},M=async({canvasElement:t})=>{const o=u(t);await g(async()=>{const m=o.getByTestId("math-formula");await l(m).toBeInTheDocument()},{timeout:3e3})};let A=0;function P(){return A++}const x={title:"Entity Metadata/MathFormulaWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const o=P();return`
<div id="math_formula_widget_container_${o}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMathFormula(
    {
      api: "${t.api}",
      ontologyId: "${t.ontologyId}",
      iri: "${t.iri}",
      mathProperty: "${t.mathProperty}",
    },
    document.querySelector('#math_formula_widget_container_${o}')
)
<\/script>
        `},argTypes:f,args:I},a={args:F,play:M};var r,e,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: MathmoddbDefiningFormulaStoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(i=(e=a.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const B=["MathmoddbDefiningFormula"];export{a as MathmoddbDefiningFormula,B as __namedExportsOrder,x as default};
