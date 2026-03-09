import{o as v,v as w,p as L,x as I,y as x,u as N,i as S,ab as f}from"./QueryClientProvider-D8K9bTbJ.js";import{E as s}from"./globals-BQAFDkgj.js";import"./index-Ctmr84u5.js";import"./client-hNkKQuBU.js";import"./useQuery-Dc2JQcLb.js";/* empty css                  */import"./EntityOntoListPresentation-BSyp8nEX.js";/* empty css                                   */import"./ExpandableOntologyBadgeList-BJqctQdj.js";import"./OntologyBadge-CxJaNx3Z.js";import"./badge-DxSqQw1e.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-BPHhPKbH.js";import"./_button-Rlt13UgJ.js";import"./icon-D9LuBdn0.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-eK6dSNvJ.js";import"./text-BIRiCrdX.js";import"./link.styles-juWMymlq.js";const{expect:$,waitFor:W,within:D}=__STORYBOOK_MODULE_TEST__,F={...S,...N,...x,...I,...L,...w,...v},P={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},b={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,entityType:"term",ontologyId:"efo"},h={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,ontologyId:"ons"},M={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,entityType:"term",ontologyId:"efo",useLegacy:!0},B={iri:"http://purl.obolibrary.org/obo/HP_0000819",api:s,ontologyId:"hp"},n=async({canvasElement:t})=>{const e=D(t);await W(async()=>{const _=e.getByTestId("entity-onto-list");await $(_).toBeInTheDocument()},{timeout:3e3})};let k=0;function j(){return k++}const rt={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:t=>{const e=j();return`
<div id="entity_onto_list_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityOntoList(
    {
        iri:"${t.iri}",
        api:"${t.api}",
        ontologyId:"${t.ontologyId}",
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:"${t.useLegacy}",
        onNavigateToOntology:${t.onNavigateToOntology},
        className:"${t.className}"
    },
    document.querySelector('#entity_onto_list_widget_container_${e}')
)
<\/script>
        `},argTypes:F,args:P},o={args:b,play:n},i={args:h,play:n},a={args:M,play:n},r={args:B,play:n};var p,c,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: v2ApiEFOArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(y=(c=o.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var m,g,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: v2ApiONSArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(d=(g=i.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var l,u,A;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(A=(u=a.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var O,T,E;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: exceedsMaxDisplayArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(E=(T=r.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const st=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{st as __namedExportsOrder,rt as default,r as exceedsMaxDisplay,a as legacyApi,o as v2ApiEFO,i as v2ApiONS};
