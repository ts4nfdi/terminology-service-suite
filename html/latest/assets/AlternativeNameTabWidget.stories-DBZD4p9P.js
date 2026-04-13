import{c as u,v as b,p as v,x as _,y as N,u as O,i as f,al as I}from"./QueryClientProvider-tBG0NWM0.js";import{Z as D,E as T}from"./globals-Dneqqh2P.js";import"./index-BEos9GpZ.js";import"./client-hNkKQuBU.js";import"./useQuery-CJ8-LNvG.js";/* empty css                               */import"./panel-CmjUMykD.js";import"./shadow-DrkSvs48.js";import"./flex_group-kO_kVLPF.js";import"./text-Bf6klxy0.js";import"./link.styles-CSK3t4GY.js";import"./flex_item-D1cL8VWd.js";const{expect:S,waitFor:W,within:$}=__STORYBOOK_MODULE_TEST__,w={...f,...O,...N,..._,...v,...b,...u},E={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",className:"",parameter:"collection=nfdi4health"},h={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:D,entityType:"term",ontologyId:"ncit"},P={api:T,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},L={api:T,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},n=async({canvasElement:e})=>{const t=$(e);await W(async()=>{const A=t.getByTestId("alternative-name");await S(A).toBeInTheDocument()},{timeout:3e3})};let x=0;function B(){return x++}const k={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:I}}},render:e=>{const t=B();return`
<div id="alternative_name_tab_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createAlternativeNameTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:"${e.useLegacy}",
        className:"${e.className}"
    },
    document.querySelector('#alternative_name_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:w,args:E},a={args:h,play:n},r={args:P,play:n},i={args:L,play:n};var o,s,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: AlternativeNameTabWidget1Args,
  play: commonAlternativeNameTabWidgetPlay
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,y,d;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(d=(y=i.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const z=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{a as AlternativeNameTabWidget1,i as DefiningOntologyUnavailable,r as SelectingDefiningOntology,z as __namedExportsOrder,k as default};
