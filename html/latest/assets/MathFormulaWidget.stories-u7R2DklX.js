import{X as l,y as h,u as g,i as u}from"./QueryClientProvider-VdYZKCyp.js";import"./index-By_ER009.js";import"./client-DFp2fd_t.js";import"./MathFormulaWidget-Dl0tjxCj.js";import"./purify.es-D6gMnemd.js";import"./useQuery-DzpYqKke.js";import"./text-CS7fjvhH.js";import"./link.styles-BpuXkH31.js";const{expect:P,waitFor:M,within:_}=__STORYBOOK_MODULE_TEST__,f={...u,...g,...h,...l},p={api:"https://ols4-mathmod.qa.km.k8s.zbmed.de/ols/api/",ontologyId:"mathmod",iri:"https://portal.mardi4nfdi.de/entity/Q6674137",mathProperty:"https://portal.mardi4nfdi.de/wiki/entity/P983"},T={api:"https://ols4-mathmod.qa.km.k8s.zbmed.de/ols/api/",ontologyId:"mathmod",iri:"https://portal.mardi4nfdi.de/entity/Q6674137",mathProperty:"https://portal.mardi4nfdi.de/wiki/entity/P989"},c=async({canvasElement:t})=>{const o=_(t);await M(async()=>{const y=o.getByTestId("math-formula");await P(y).toBeInTheDocument()},{timeout:3e3})};let w=0;function S(){return w++}const x={title:"Entity Metadata/MathFormulaWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const o=S();return`
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
        `},argTypes:f,args:p},a={args:p,play:c},r={args:T,play:c};var e,i,m;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: MathmodP983StoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,n,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: MathmodP989StoryArgs,
  play: commonMathFormulaWidgetPlay
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const E=["MathmodP983","MathmodP989"];export{a as MathmodP983,r as MathmodP989,E as __namedExportsOrder,x as default};
