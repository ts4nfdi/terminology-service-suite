import{v as T,p as _,x as b,y as A,u as O,i as R,am as C}from"./QueryClientProvider-tBG0NWM0.js";import{E as s}from"./globals-Dneqqh2P.js";import"./index-B4b_aO5k.js";import"./client-hNkKQuBU.js";import"./useQuery-CJ8-LNvG.js";/* empty css                             */import"./panel-CmjUMykD.js";import"./shadow-DrkSvs48.js";import"./flex_group-kO_kVLPF.js";import"./text-Bf6klxy0.js";import"./link.styles-CSK3t4GY.js";import"./flex_item-D1cL8VWd.js";const{expect:D,waitFor:I,within:S}=__STORYBOOK_MODULE_TEST__,W={...R,...O,...A,...b,..._,...T},v={api:"",iri:"",useLegacy:!0,ontologyId:"",entityType:"term",parameter:""},$={iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:s,entityType:"term",ontologyId:"rxno",parameter:""},w={api:s,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},E={api:s,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},i=async({canvasElement:e})=>{const t=S(e);await I(async()=>{const f=t.getByTestId("cross-ref");await D(f).toBeInTheDocument()},{timeout:3e3})};let x=0;function N(){return x++}const X={title:"Additional Entity Metadata/CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:C}}},render:e=>{const t=N();return`
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
        `},argTypes:W,args:v},r={args:$,play:i},o={args:w,play:i},a={args:E,play:i};var n,p,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: CrossRefTabWidget1Args,
  play: commonCrossRefWidgetPlay
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,y,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonCrossRefWidgetPlay
}`,...(m=(y=o.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonCrossRefWidgetPlay
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Y=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{r as CrossRefTabWidget1,a as DefiningOntologyUnavailable,o as SelectingDefiningOntology,Y as __namedExportsOrder,X as default};
