import{aa as o,ac as He,ab as be,J as Ie,ai as Ae,an as Se,ao as fe,ap as Ee,aq as Ne,ar as Oe,as as _e,at as ke,au as Pe,av as we,o as ve,r as Ce,aw as Le,ax as We,ay as Re,az as Ue}from"./QueryClientProvider-DoKhBl31.js";import{E as s,F as $e,a as Ge,T as ue}from"./globals-BQAFDkgj.js";import"./index-Cmbb7n-t.js";import"./client-hNkKQuBU.js";import"./useQuery-BUxAEVUP.js";import"./OntologyBadge-C4-mp1PH.js";import"./badge-qZhq8Gqg.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-BHaxMbo3.js";import"./_button-Dz-XatGf.js";import"./icon-1SMQ27Zb.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-DM3VqPGZ.js";import"./title-CFV7nWBF.js";import"./text-D1HJ6Q9S.js";import"./link.styles-YP6iW4HB.js";import"./button-C57y98bM.js";import"./_button_display-CMPPXgXv.js";import"./button_icon-DW3z-k9V.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./health-BvJuQRw1.js";import"./flex_group-EieU2dm1.js";import"./flex_item-CXPIO8tU.js";import"./panel-C3cvE46E.js";import"./shadow-CxIvaG3S.js";const{expect:De,waitFor:Be,within:xe}=__STORYBOOK_MODULE_TEST__,Fe={...Re,...We,...Le,...Ce,...ve,...we,...Pe,...ke,..._e,...Oe,...Ne,...Ee,...fe,...Se,...Ae,...Ie,...be,...He},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:"",targetIri:"",showHeader:o.SHOW_HEADER,showComparisonTitleInHeader:o.SHOW_COMPARISON_TITLE_IN_HEADER},Ke={...r,apiUrl:s,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"},Me={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},Qe={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},Ye={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},qe={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Ve={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},je={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},ze={...r,apiUrl:$e,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},Je={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},Xe={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},Ze={...r,apiUrl:Ge,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0},er={...r,apiUrl:ue,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},rr={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},ar={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},sr={...r,apiUrl:s,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",targetIri:"http://www.ebi.ac.uk/efo/EFO_0000405",entityType:"class",ontologyId:"efo"},or={...r,apiUrl:ue,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",targetIri:"https://database.factgrid.de/entity/Q522788",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},a=async({canvasElement:e})=>{const t=xe(e);await Be(async()=>{const Te=t.getByTestId("hierarchy");await De(Te).toBeInTheDocument()},{timeout:3e3})};let tr=0;function ir(){return tr++}const Lr={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:Ue}}},render:e=>{const t=ir();return`        
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
        `},argTypes:Fe,args:r},i={args:{...Ke,className:"ts4nfdi-hierarchy-style"},play:a},n={args:{...Me,className:"ts4nfdi-hierarchy-style"},play:a},c={args:{...Qe,className:"ts4nfdi-hierarchy-style"},play:a},y={args:{...Ye,className:"ts4nfdi-hierarchy-style"},play:a},p={args:{...qe,className:"ts4nfdi-hierarchy-style"},play:a},l={args:{...Ve,className:"ts4nfdi-hierarchy-style"},play:a},m={args:{...je,className:"ts4nfdi-hierarchy-style"},play:a},d={args:{...ze,className:"ts4nfdi-hierarchy-style"},play:a},g={args:{...Je,className:"ts4nfdi-hierarchy-style"},play:a},h={args:{...Xe,className:"ts4nfdi-hierarchy-style"},play:a},u={args:{...Ze,className:"ts4nfdi-hierarchy-style"},play:a},T={args:{...er,className:"ts4nfdi-hierarchy-style"},play:a},H={args:{...rr,className:"ts4nfdi-hierarchy-style"},play:a},b={args:{...ar,className:"ts4nfdi-hierarchy-style"},play:a},I={args:{...or,className:"ts4nfdi-hierarchy-style"},play:a},A={args:{...sr,className:"ts4nfdi-hierarchy-style"},play:a};var S,f,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...ClassHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(E=(f=i.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var N,O,_;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...IndividualHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(_=(O=n.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var k,P,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...PreferredRootsArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(w=(P=c.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var v,C,L;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...IncludeObsoleteEntitiesArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(L=(C=y.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var W,R,U;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...PropertyRootsArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var $,G,D;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...IndividualRootsArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(D=(G=l.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var B,x,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...LargeHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(F=(x=m.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var K,M,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...SkosHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(Q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var Y,q,V;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(se=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,te,ie;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...SkosmosAgrovocGermanArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(ie=(te=H.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ne,ce,ye;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...CompareHierarchiesArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(ye=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ye.source}}};var pe,le,me;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const Wr=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesGerman","CompareHierarchiesSubEntity"];export{i as ClassHierarchy,b as CompareHierarchies,I as CompareHierarchiesGerman,A as CompareHierarchiesSubEntity,y as IncludeObsoleteEntities,n as IndividualHierarchy,l as IndividualRoots,m as LargeHierarchy,u as OLS3Hierarchy,T as OLSGerman,h as OntoportalHierarchy,c as PreferredRoots,p as PropertyRoots,g as SagePubHierarchy,d as SkosHierarchy,H as SkosmosAgrovocGerman,Wr as __namedExportsOrder,Lr as default};
