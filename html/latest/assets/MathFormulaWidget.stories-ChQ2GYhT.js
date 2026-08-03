import{T as h}from"./globals-Dr4u9m4r.js";import{W as f,X as I,Y as _,Z as F,i as M}from"./QueryClientProvider-wfdc44vj.js";import"./index-CsGpAdf8.js";import"./client-DFp2fd_t.js";import"./MathFormulaWidget-BSSJgDIb.js";import"./purify.es-D6gMnemd.js";import"./useQuery-B6JW7uaM.js";import"./text-BCa_u-0I.js";import"./link.styles-BVnRgrxN.js";const{expect:T,waitFor:A,within:P}=__STORYBOOK_MODULE_TEST__,p=h,c="mathmoddb",l="https://portal.mardi4nfdi.de/entity/Q6674137",D={...M,...F,..._,...I,...f},y={api:p,ontologyId:c,iri:l,mathProperty:"https://portal.mardi4nfdi.de/entity/P983"},S={api:p,ontologyId:c,iri:l,mathProperty:"https://portal.mardi4nfdi.de/entity/P989"},g=async({canvasElement:t})=>{const o=P(t);await A(async()=>{const u=o.getByTestId("math-formula");await T(u).toBeInTheDocument()},{timeout:3e3})};let b=0;function w(){return b++}const Y={title:"Entity Metadata/MathFormulaWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const o=w();return`
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
        `},argTypes:D,args:y},a={args:S,play:g},r={args:y,play:g};var e,n,i;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: MathmoddbDefiningFormulaStoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,d,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: MathmoddbInDefiningFormulaStoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(s=(d=r.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const j=["MathmoddbDefiningFormula","MathmoddbInDefiningFormula"];export{a as MathmoddbDefiningFormula,r as MathmoddbInDefiningFormula,j as __namedExportsOrder,Y as default};
