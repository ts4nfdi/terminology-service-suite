import{v as A,p as O,x as C,y as I,u as S,j as W,aX as D}from"./provider-BuXM3p7M.js";import{E as n}from"./globals-p90pkwp0.js";import"./index-C2zFcGG7.js";import"./client-DFp2fd_t.js";import"./QueryClientProvider-CyIVCpto.js";import"./useQuery-DRxfM8-_.js";import"./CrossRefTabPresentation-CYr4u309.js";/* empty css                             */import"./panel-BDaAW1k1.js";import"./shadow-C2yBvPYV.js";import"./_button-BRP_bfbn.js";import"./flex_group-BJCwtRUg.js";import"./text-Dl6baijy.js";import"./link.styles-BfTT6KUx.js";import"./flex_item-ylCgN4dZ.js";const{expect:v,waitFor:x,within:$}=__STORYBOOK_MODULE_TEST__,w={...W,...S,...I,...C,...O,...A},h={api:"",iri:"",useLegacy:!0,ontologyId:"",entityType:"term",parameter:""},E={iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:n,entityType:"term",ontologyId:"rxno",parameter:""},N={api:n,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},P={api:n,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},q={api:"https://example.com/nonexistent/",iri:"http://purl.obolibrary.org/obo/RXNO_0000138",entityType:"term",ontologyId:"rxno",parameter:""},i=async({canvasElement:e})=>{const t=$(e);await x(async()=>{const R=t.getByTestId("cross-ref");await v(R).toBeInTheDocument()},{timeout:3e3})};let F=0;function L(){return F++}const ee={title:"Additional Entity Metadata/CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:D}}},render:e=>{const t=L();return`
<div id="cross_ref_tab_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createCrossRefTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:"${e.useLegacy}",
        className:"${e.className}"
    },
    document.querySelector('#cross_ref_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:w,args:h},r={args:E,play:i},o={args:N,play:i},a={args:P,play:i},s={args:q,play:i};var p,c,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: CrossRefTabWidget1Args,
  play: commonCrossRefWidgetPlay
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,y,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonCrossRefWidgetPlay
}`,...(l=(y=o.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};var d,u,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonCrossRefWidgetPlay
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var T,_,b;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: RequestFailedArgs,
  play: commonCrossRefWidgetPlay
}`,...(b=(_=s.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const te=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable","RequestFailed"];export{r as CrossRefTabWidget1,a as DefiningOntologyUnavailable,s as RequestFailed,o as SelectingDefiningOntology,te as __namedExportsOrder,ee as default};
