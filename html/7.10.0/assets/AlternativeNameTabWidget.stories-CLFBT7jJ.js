import{c as N,v as I,p as O,x as f,y as S,u as W,j as D,aW as $}from"./provider-DhHV66nY.js";import{Z as w,E as v}from"./globals-1uEo64sR.js";import"./index-B1zv6hq-.js";import"./client-DFp2fd_t.js";import"./QueryClientProvider-BiMFCrBx.js";import"./useQuery-tjcomNSo.js";import"./AlternativeNameTabPresentation-CFfOKs8o.js";/* empty css                               */import"./panel-B6ojztOC.js";import"./shadow-BzKSJvFB.js";import"./_button-BSE-Gefv.js";import"./flex_group-CD5HcYk5.js";import"./text-ATQ4pZKH.js";import"./link.styles-D92Rj0Iv.js";import"./flex_item-DFagJcvy.js";const{expect:E,waitFor:P,within:h}=__STORYBOOK_MODULE_TEST__,x={...D,...W,...S,...f,...O,...I,...N},L={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",className:"",parameter:""},q={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:w,entityType:"term",ontologyId:"ncit"},B={api:v,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},F={api:v,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},R={api:"https://example.com/nonexistent/",iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",parameter:""},n=async({canvasElement:e})=>{const t=h(e);await P(async()=>{const _=t.getByTestId("alternative-name");await E(_).toBeInTheDocument()},{timeout:3e3})};let U=0;function C(){return U++}const ae={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:$}}},render:e=>{const t=C();return`
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
        `},argTypes:x,args:L},a={args:q,play:n},r={args:B,play:n},o={args:F,play:n},i={args:R,play:n};var s,p,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: AlternativeNameTabWidget1Args,
  play: commonAlternativeNameTabWidgetPlay
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var y,d,u;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var T,A,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: RequestFailedArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(b=(A=i.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const re=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable","RequestFailed"];export{a as AlternativeNameTabWidget1,o as DefiningOntologyUnavailable,i as RequestFailed,r as SelectingDefiningOntology,re as __namedExportsOrder,ae as default};
