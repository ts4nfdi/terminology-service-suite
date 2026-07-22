import{X as u,Y as P,Z as M,_,i as T}from"./QueryClientProvider-CtwX41Lz.js";import"./index-Djk80rFe.js";import"./client-DFp2fd_t.js";import"./MathFormulaWidget-Di6Lq52X.js";import"./purify.es-D6gMnemd.js";import"./useQuery-B-NHskGH.js";import"./text-Cn8NwKpQ.js";import"./link.styles-C820-Rkj.js";const{expect:A,waitFor:I,within:f}=__STORYBOOK_MODULE_TEST__,p="https://ols4-mathmod.qa.km.k8s.zbmed.de/ols/api/",c="mathmod",y="https://portal.mardi4nfdi.de/entity/Q6674137",S={...T,..._,...M,...P,...u},h={api:p,ontologyId:c,iri:y,mathProperty:"https://portal.mardi4nfdi.de/entity/P983"},F={api:p,ontologyId:c,iri:y,mathProperty:"https://portal.mardi4nfdi.de/entity/P989"},l=async({canvasElement:t})=>{const o=f(t);await I(async()=>{const g=o.getByTestId("math-formula");await A(g).toBeInTheDocument()},{timeout:3e3})};let w=0;function O(){return w++}const D={title:"Entity Metadata/MathFormulaWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const o=O();return`
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
        `},argTypes:S,args:h},a={args:h,play:l},r={args:F,play:l};var e,m,i;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: MathmodP983StoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var s,n,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: MathmodP989StoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const L=["MathmodP983","MathmodP989"];export{a as MathmodP983,r as MathmodP989,L as __namedExportsOrder,D as default};
