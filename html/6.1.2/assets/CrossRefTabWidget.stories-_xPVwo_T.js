import{B as T,p as _,F as b,G as A,z as O,q as R,ar as C}from"./storyArgs-BpO_jkfi.js";import{E as s}from"./globals-CvFyH82M.js";import"./index-CPJ6uYsd.js";import"./index-Bl-ZOWkZ.js";import"./useQuery-HmMT4qun.js";/* empty css                             */import"./panel-C4wjz-mO.js";import"./shadow-D0YvZniP.js";import"./flex_group-uIvC6RMq.js";import"./text-BEknjekC.js";import"./link.styles-zMVxDbd4.js";import"./flex_item-zfAIlnrf.js";const{expect:D,waitFor:I,within:S}=__STORYBOOK_MODULE_TEST__,W={...R,...O,...A,...b,..._,...T},$={api:"",iri:"",useLegacy:!0,ontologyId:"",entityType:"term",parameter:"collection=nfdi4health"},v={iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:s,entityType:"term",ontologyId:"rxno",parameter:""},w={api:s,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},h={api:s,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},i=async({canvasElement:e})=>{const t=S(e);await I(async()=>{const u=t.getByTestId("cross-ref");await D(u).toBeInTheDocument()},{timeout:3e3})};let E=0;function N(){return E++}const Q={title:"Additional Entity Metadata/CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:C}}},render:e=>{const t=N();return`
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
        `},argTypes:W,args:$},r={args:v,play:i},o={args:w,play:i},a={args:h,play:i};var n,p,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: CrossRefTabWidget1Args,
  play: commonCrossRefWidgetPlay
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,y,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonCrossRefWidgetPlay
}`,...(m=(y=o.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var l,d,f;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonCrossRefWidgetPlay
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const V=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{r as CrossRefTabWidget1,a as DefiningOntologyUnavailable,o as SelectingDefiningOntology,V as __namedExportsOrder,Q as default};
