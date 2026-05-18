import{o as N,v as E,p as v,x as L,y as D,u as b,i as B,a0 as S}from"./QueryClientProvider-C4FCUO2w.js";import{E as _,Z as I}from"./globals-Dneqqh2P.js";import"./index-Br95vTao.js";import"./client-DFp2fd_t.js";import"./useQuery-NoTDeaJ4.js";/* empty css                  */import"./EntityOntoListPresentation-CUATmJmv.js";/* empty css                                   */import"./ExpandableOntologyBadgeList-9sCfDgcL.js";import"./OntologyBadge-8bMFwXBs.js";import"./badge-CZkVOsFo.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-uujAFuP7.js";import"./_button-CpclIc37.js";import"./icon-Bz4NYFmO.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-C8w2C5zv.js";import"./text-DOBIlKdQ.js";import"./link.styles-DEcbRFNs.js";const{expect:$,waitFor:P,within:W}=__STORYBOOK_MODULE_TEST__,f={...B,...b,...D,...L,...v,...E,...N},w={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},M={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:I,entityType:"term",ontologyId:"ncbitaxon"},h={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:I,ontologyId:"foodon"},C={iri:"http://purl.obolibrary.org/obo/MONDO_0005015",api:_,entityType:"term",ontologyId:"efo",useLegacy:!0},F={iri:"http://purl.obolibrary.org/obo/HP_0000819",api:_,ontologyId:"hp"},n=async({canvasElement:t})=>{const o=W(t);await P(async()=>{const x=o.getByTestId("entity-onto-list");await $(x).toBeInTheDocument()},{timeout:3e3})};let Z=0;function j(){return Z++}const nt={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:S}}},render:t=>{const o=j();return`
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
        `},argTypes:f,args:w},e={args:M,play:n},r={args:h,play:n},a={args:C,play:n},i={args:F,play:n};var s,p,y;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const st=["v2ApiNCBITaxon","v2ApiFOODON","legacyApi","exceedsMaxDisplay"];export{st as __namedExportsOrder,nt as default,i as exceedsMaxDisplay,a as legacyApi,r as v2ApiFOODON,e as v2ApiNCBITaxon};
