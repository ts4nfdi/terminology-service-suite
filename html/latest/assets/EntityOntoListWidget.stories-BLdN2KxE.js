import{o as L,v as N,p as E,x as v,y as D,u as b,j as B,ax as f}from"./provider-DhHV66nY.js";import{E as _,Z as x}from"./globals-1uEo64sR.js";import"./index-DGhN1DvZ.js";import"./client-DFp2fd_t.js";import"./QueryClientProvider-BiMFCrBx.js";import"./useQuery-tjcomNSo.js";/* empty css                  */import"./EntityOntoListPresentation-BkNEAwkK.js";/* empty css                                   */import"./ExpandableOntologyBadgeList-Cbq5yPqY.js";import"./OntologyBadge-BNxGJs9M.js";import"./badge-DpG9ODGG.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-9svs92vp.js";import"./_button-BSE-Gefv.js";import"./icon-CQRupbKR.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-Dnj4m-7S.js";import"./text-ATQ4pZKH.js";import"./link.styles-D92Rj0Iv.js";const{expect:S,waitFor:$,within:P}=__STORYBOOK_MODULE_TEST__,W={...B,...b,...D,...v,...E,...N,...L},w={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},M={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:x,entityType:"term",ontologyId:"ncbitaxon",useLegacy:!1},h={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:x,ontologyId:"foodon",useLegacy:!1},C={iri:"http://purl.obolibrary.org/obo/MONDO_0005015",api:_,entityType:"term",ontologyId:"efo",useLegacy:!0},F={iri:"http://purl.obolibrary.org/obo/HP_0000819",api:_,ontologyId:"hp",useLegacy:!0},s=async({canvasElement:t})=>{const o=P(t);await $(async()=>{const I=o.getByTestId("entity-onto-list");await S(I).toBeInTheDocument()},{timeout:3e3})};let j=0;function Z(){return j++}const nt={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:t=>{const o=Z();return`
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
        `},argTypes:W,args:w},e={args:M,play:s},r={args:h,play:s},a={args:C,play:s},i={args:F,play:s};var n,p,y;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: v2ApiNCBITaxonArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(y=(p=e.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var c,g,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: v2ApiFOODONArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var O,A,T;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: exceedsMaxDisplayArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const pt=["v2ApiNCBITaxon","v2ApiFOODON","legacyApi","exceedsMaxDisplay"];export{pt as __namedExportsOrder,nt as default,i as exceedsMaxDisplay,a as legacyApi,r as v2ApiFOODON,e as v2ApiNCBITaxon};
