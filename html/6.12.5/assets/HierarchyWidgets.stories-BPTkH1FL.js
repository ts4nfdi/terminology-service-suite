import{aa as o,ac as be,ab as He,J as Ie,ai as Ae,an as Se,ao as Ne,ap as Oe,aq as fe,ar as Ee,as as _e,at as Pe,au as ke,av as ve,o as Ce,r as Le,aw as We,ax as Re,ay as Ue,az as we}from"./QueryClientProvider-CF5rkF5q.js";import{E as s,T as ue,a as $e,F as De}from"./globals-Dneqqh2P.js";import"./index-Bl5RM93q.js";import"./client-DFp2fd_t.js";import"./useQuery-DgfFOhgk.js";import"./OntologyBadge-DbDXsTWI.js";import"./badge-Ba5Os3US.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-TuW4LsP8.js";import"./_button-BbAKCsGY.js";import"./icon-C3lGepSg.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-BhZz4Fkb.js";import"./title-DOrNVFQq.js";import"./text-CqhZXRY4.js";import"./link.styles-B52HwVam.js";import"./button-DMH61d-i.js";import"./_button_display-DPpp1Lod.js";import"./useCombinedRefs-CI08p5vq.js";import"./button_icon-BWr8uysJ.js";import"./health-DVEjIuly.js";import"./flex_group-D7KdzxVe.js";import"./flex_item-BUUDphw2.js";import"./panel-CEST4cjP.js";import"./shadow-DoZX0Z6P.js";const{expect:Ge,waitFor:Be,within:xe}=__STORYBOOK_MODULE_TEST__,Ke={...Ue,...Re,...We,...Le,...Ce,...ve,...ke,...Pe,..._e,...Ee,...fe,...Oe,...Ne,...Se,...Ae,...Ie,...He,...be},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:"",targetIri:"",showHeader:o.SHOW_HEADER,showComparisonTitleInHeader:o.SHOW_COMPARISON_TITLE_IN_HEADER},Me={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",entityType:"class",ontologyId:"efo"},Fe={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},Qe={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},Ye={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},qe={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Ve={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},je={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},ze={...r,apiUrl:De,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},Je={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},Xe={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},Ze={...r,apiUrl:$e,backendType:"ols",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"class",ontologyId:"ncit",useLegacy:!0},er={...r,apiUrl:ue,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},rr={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},ar={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},sr={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",targetIri:"http://purl.obolibrary.org/obo/MONDO_0004335",entityType:"class",ontologyId:"efo"},or={...r,apiUrl:ue,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",targetIri:"https://database.factgrid.de/entity/Q522788",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},a=async({canvasElement:e})=>{const t=xe(e);await Be(async()=>{const Te=t.getByTestId("hierarchy");await Ge(Te).toBeInTheDocument()},{timeout:3e3})};let tr=0;function ir(){return tr++}const Lr={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:we}}},render:e=>{const t=ir();return`        
<div id="hierarchy_semlookp_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createHierarchy(
    {
        apiUrl:"${e.apiUrl}",
        apiKey:"${e.apiKey}",
        backendType:"${e.backendType}",
        iri:"${e.iri}",
        entityType:"${e.entityType}",
        ontologyId:"${e.ontologyId}",
        includeObsoleteEntities:${e.includeObsoleteEntities},
        useLegacy:${e.useLegacy},
        preferredRoots:${e.preferredRoots},
        keepExpansionStates:${e.keepExpansionStates},
        showSiblingsOnInit:${e.showSiblingsOnInit},
        onNavigateToEntity:${e.onNavigateToEntity},
        onNavigateToOntology:${e.onNavigateToOntology},
        hierarchyWrap:${e.hierarchyWrap},
        showHeader:${e.showHeader},
        showComparisonTitleInHeader:${e.showComparisonTitleInHeader},
        targetIri:"${e.targetIri}",
        className:"${e.className}",
        parameter:"${e.parameter}"
    },
    document.querySelector('#hierarchy_semlookp_container_${t}')
)
<\/script>
        `},argTypes:Ke,args:r},i={args:{...Me,className:"ts4nfdi-hierarchy-style"},play:a},n={args:{...Fe,className:"ts4nfdi-hierarchy-style"},play:a},c={args:{...Qe,className:"ts4nfdi-hierarchy-style"},play:a},y={args:{...Ye,className:"ts4nfdi-hierarchy-style"},play:a},p={args:{...qe,className:"ts4nfdi-hierarchy-style"},play:a},l={args:{...Ve,className:"ts4nfdi-hierarchy-style"},play:a},m={args:{...je,className:"ts4nfdi-hierarchy-style"},play:a},d={args:{...ze,className:"ts4nfdi-hierarchy-style"},play:a},g={args:{...Je,className:"ts4nfdi-hierarchy-style"},play:a},h={args:{...Xe,className:"ts4nfdi-hierarchy-style"},play:a},u={args:{...Ze,className:"ts4nfdi-hierarchy-style"},play:a},T={args:{...er,className:"ts4nfdi-hierarchy-style"},play:a},b={args:{...rr,className:"ts4nfdi-hierarchy-style"},play:a},H={args:{...ar,className:"ts4nfdi-hierarchy-style"},play:a},I={args:{...or,className:"ts4nfdi-hierarchy-style"},play:a},A={args:{...sr,className:"ts4nfdi-hierarchy-style"},play:a};var S,N,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...ClassHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var f,E,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...IndividualHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(_=(E=n.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var P,k,v;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...PreferredRootsArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var C,L,W;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...IncludeObsoleteEntitiesArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(W=(L=y.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var R,U,w;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...PropertyRootsArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(w=(U=p.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var $,D,G;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...IndividualRootsArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(G=(D=l.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var B,x,K;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...LargeHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(K=(x=m.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var M,F,Q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...SkosHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(Q=(F=d.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var Y,q,V;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...SagePubHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(V=(q=g.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var j,z,J;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...OntoportalHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(J=(z=h.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var X,Z,ee;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...OLS3HierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,se;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...OLSGermanArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(se=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,te,ie;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...SkosmosAgrovocGermanArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(ie=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ne,ce,ye;H.parameters={...H.parameters,docs:{...(ne=H.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...CompareHierarchiesArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(ye=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:ye.source}}};var pe,le,me;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...CompareHierarchiesGermanArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(me=(le=I.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var de,ge,he;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...CompareHierarchiesSubEntityArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(he=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const Wr=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesGerman","CompareHierarchiesSubEntity"];export{i as ClassHierarchy,H as CompareHierarchies,I as CompareHierarchiesGerman,A as CompareHierarchiesSubEntity,y as IncludeObsoleteEntities,n as IndividualHierarchy,l as IndividualRoots,m as LargeHierarchy,u as OLS3Hierarchy,T as OLSGerman,h as OntoportalHierarchy,c as PreferredRoots,p as PropertyRoots,g as SagePubHierarchy,d as SkosHierarchy,b as SkosmosAgrovocGerman,Wr as __namedExportsOrder,Lr as default};
