import{aa as o,ac as de,ab as ge,J as he,ai as ue,an as Te,ao as He,ap as be,aq as Ie,ar as Se,as as Ae,at as Ee,au as fe,av as Oe,o as Ne,r as _e,aw as ke,ax as Pe,ay as we,az as ve}from"./QueryClientProvider-CPt-q_PP.js";import{E as s,F as Le,a as Re}from"./globals-BQAFDkgj.js";import"./index-CyCKQwdd.js";import"./client-hNkKQuBU.js";import"./useQuery-zCszzi3z.js";import"./OntologyBadge-CcouZuvv.js";import"./badge-Da_yYfKu.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-CyGgYq0e.js";import"./_button-DJSF0-jH.js";import"./icon-CdMdMJ2_.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-C_LlcIOb.js";import"./title-CLDjvmLE.js";import"./text-Bx4ixop4.js";import"./link.styles-Dyy2Pwtk.js";import"./button-DXpxv5pB.js";import"./_button_display-B_kUF9Du.js";import"./button_icon-d4c6NFhO.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./health-BsZtErEN.js";import"./flex_group-CLqlV9tc.js";import"./flex_item-DWAFqmiO.js";import"./panel-DDfF7mxD.js";import"./shadow-DFJWDPLo.js";const{expect:We,waitFor:Ce,within:Ue}=__STORYBOOK_MODULE_TEST__,$e={...we,...Pe,...ke,..._e,...Ne,...Oe,...fe,...Ee,...Ae,...Se,...Ie,...be,...He,...Te,...ue,...he,...ge,...de},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:"",targetIri:"",showHeader:o.SHOW_HEADER,showComparisonTitleInHeader:o.SHOW_COMPARISON_TITLE_IN_HEADER},De={...r,apiUrl:s,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"},Ge={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},Be={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},xe={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},Fe={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Ke={...r,apiUrl:s,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},Me={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Ye={...r,apiUrl:Le,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},qe={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},Ve={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},je={...r,apiUrl:Re,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0},ze={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/HP_0003502",entityType:"class",ontologyId:"hp",useLegacy:!1,parameter:"lang=de"},Je={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},Xe={...r,apiUrl:s,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},Ze={...r,apiUrl:s,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",targetIri:"http://www.ebi.ac.uk/efo/EFO_0000405",entityType:"class",ontologyId:"efo"},a=async({canvasElement:e})=>{const t=Ue(e);await Ce(async()=>{const me=t.getByTestId("hierarchy");await We(me).toBeInTheDocument()},{timeout:3e3})};let Qe=0;function er(){return Qe++}const _r={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:ve}}},render:e=>{const t=er();return`        
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
        `},argTypes:$e,args:r},i={args:{...De,className:"ts4nfdi-hierarchy-style"},play:a},n={args:{...Ge,className:"ts4nfdi-hierarchy-style"},play:a},c={args:{...Be,className:"ts4nfdi-hierarchy-style"},play:a},y={args:{...xe,className:"ts4nfdi-hierarchy-style"},play:a},p={args:{...Fe,className:"ts4nfdi-hierarchy-style"},play:a},l={args:{...Ke,className:"ts4nfdi-hierarchy-style"},play:a},m={args:{...Me,className:"ts4nfdi-hierarchy-style"},play:a},d={args:{...Ye,className:"ts4nfdi-hierarchy-style"},play:a},g={args:{...qe,className:"ts4nfdi-hierarchy-style"},play:a},h={args:{...Ve,className:"ts4nfdi-hierarchy-style"},play:a},u={args:{...je,className:"ts4nfdi-hierarchy-style"},play:a},T={args:{...ze,className:"ts4nfdi-hierarchy-style"},play:a},H={args:{...Je,className:"ts4nfdi-hierarchy-style"},play:a},b={args:{...Xe,className:"ts4nfdi-hierarchy-style"},play:a},I={args:{...Ze,className:"ts4nfdi-hierarchy-style"},play:a};var S,A,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...ClassHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var f,O,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...IndividualHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(N=(O=n.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var _,k,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...PreferredRootsArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var w,v,L;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...IncludeObsoleteEntitiesArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(L=(v=y.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var R,W,C;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...PropertyRootsArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(C=(W=p.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var U,$,D;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...IndividualRootsArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(D=($=l.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var G,B,x;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...LargeHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(x=(B=m.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var F,K,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...SkosHierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Y,q,V;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(z=h.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var X,Z,Q;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...OLS3HierarchyArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(Q=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var ee,re,ae;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...OLSGermanArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(ae=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,te;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...SkosmosAgrovocGermanArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(te=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,ne,ce;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...CompareHierarchiesArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(ce=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var ye,pe,le;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...CompareHierarchiesSubEntityArgs,
    className: "ts4nfdi-hierarchy-style"
  },
  play: commonHierarchyWidgetPlay
}`,...(le=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};const kr=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesSubEntity"];export{i as ClassHierarchy,b as CompareHierarchies,I as CompareHierarchiesSubEntity,y as IncludeObsoleteEntities,n as IndividualHierarchy,l as IndividualRoots,m as LargeHierarchy,u as OLS3Hierarchy,T as OLSGerman,h as OntoportalHierarchy,c as PreferredRoots,p as PropertyRoots,g as SagePubHierarchy,d as SkosHierarchy,H as SkosmosAgrovocGerman,kr as __namedExportsOrder,_r as default};
