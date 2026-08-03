import{d as N}from"./widgetDescriptions-MmE0nvU9.js";import{E as _,Z as I}from"./globals-Dr4u9m4r.js";import{o as E,u as L,p as v,w as D,x as b,t as B,i as S}from"./QueryClientProvider-wfdc44vj.js";import"./index-CV4HX_xY.js";import"./client-DFp2fd_t.js";import"./useQuery-B6JW7uaM.js";/* empty css                  */import"./EntityOntoListPresentation-BgTg3gFk.js";/* empty css                                   */import"./ExpandableOntologyBadgeList-Bjv_ivaM.js";import"./OntologyBadge-BQYgfFLY.js";import"./badge-D7gjDvFE.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-BM5ucB2c.js";import"./_button-CNGnRqyT.js";import"./icon-C9-DwYxQ.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-DyrLOj6C.js";import"./text-BCa_u-0I.js";import"./link.styles-BVnRgrxN.js";const{expect:$,waitFor:f,within:w}=__STORYBOOK_MODULE_TEST__,P={...S,...B,...b,...D,...v,...L,...E},W={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},M={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:I,entityType:"term",ontologyId:"ncbitaxon"},h={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:I,ontologyId:"foodon"},C={iri:"http://purl.obolibrary.org/obo/MONDO_0005015",api:_,entityType:"term",ontologyId:"efo",useLegacy:!0},F={iri:"http://purl.obolibrary.org/obo/HP_0000819",api:_,ontologyId:"hp"},n=async({canvasElement:t})=>{const o=w(t);await f(async()=>{const x=o.getByTestId("entity-onto-list");await $(x).toBeInTheDocument()},{timeout:3e3})};let Z=0;function j(){return Z++}const st={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:N}}},render:t=>{const o=j();return`
<div id="entity_onto_list_widget_container_${o}"></div>

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
    document.querySelector('#entity_onto_list_widget_container_${o}')
)
<\/script>
        `},argTypes:P,args:W},e={args:M,play:n},r={args:h,play:n},a={args:C,play:n},i={args:F,play:n};var s,p,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: v2ApiNCBITaxonArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var y,g,m;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: v2ApiFOODONArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var O,A,T;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: exceedsMaxDisplayArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const pt=["v2ApiNCBITaxon","v2ApiFOODON","legacyApi","exceedsMaxDisplay"];export{pt as __namedExportsOrder,st as default,i as exceedsMaxDisplay,a as legacyApi,r as v2ApiFOODON,e as v2ApiNCBITaxon};
