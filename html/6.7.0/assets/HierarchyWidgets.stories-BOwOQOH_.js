import{ak as s,at as mr,au as dr,W as ur,ao as hr,av as Tr,aw as Hr,ax as br,ay as Ir,az as Ar,aA as Sr,aB as Er,aC as Or,aD as _r,o as kr,r as Pr,aE as wr,aF as vr,aG as Wr,aH as Lr}from"./QueryClientProvider-Cv6DMAwY.js";import{E as o,F as Rr,a as fr}from"./globals-BQAFDkgj.js";import"./index-lfIAgyP_.js";import"./client-hNkKQuBU.js";import"./useQuery-D80UYlTP.js";import"./title-BjAFpbjY.js";import"./text-Dj3fvmL0.js";import"./link.styles-DeXSguuE.js";import"./button_icon-yDZ-49HD.js";import"./_button-DR0DDSYL.js";import"./_button_display-mhn372ul.js";import"./icon-Dbgqo2NT.js";import"./preload-helper-Dp1pzeXC.js";import"./href_validator-RjdtbSlK.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./health-6JZd6YNG.js";import"./flex_group-O0zAkBzd.js";import"./flex_item-DWpVg6bz.js";import"./panel-pG-TvU-E.js";import"./shadow-BRsMk7Ev.js";import"./button-Dca_e4tp.js";const{expect:Cr,waitFor:Nr,within:Ur}=__STORYBOOK_MODULE_TEST__,$r={...Wr,...vr,...wr,...Pr,...kr,..._r,...Or,...Er,...Sr,...Ar,...Ir,...br,...Hr,...Tr,...hr,...ur,...dr,...mr},e={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:s.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:s.PREFERRED_ROOTS,keepExpansionStates:s.KEEP_EXPANSION_STATES,showSiblingsOnInit:s.SHOW_SIBLINGS_ON_INIT,useLegacy:s.USE_LEGACY,hierarchyWrap:s.WRAP,parameter:"",targetIri:"",showHeader:s.SHOW_HEADER,showComparisonTitleInHeader:s.SHOW_COMPARISON_TITLE_IN_HEADER},Dr={...e,apiUrl:o,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"},Gr={...e,apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},Br={...e,apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},Fr={...e,apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},xr={...e,apiUrl:o,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Kr={...e,apiUrl:o,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},Mr={...e,apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Yr={...e,apiUrl:Rr,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},Vr={...e,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},jr={...e,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},qr={...e,apiUrl:fr,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0},zr={...e,apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/HP_0003502",entityType:"class",ontologyId:"hp",useLegacy:!1,parameter:"lang=de"},Xr={...e,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},Zr={...e,apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},Jr={...e,apiUrl:o,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",targetIri:"http://www.ebi.ac.uk/efo/EFO_0000405",entityType:"class",ontologyId:"efo"},a=async({canvasElement:r})=>{const t=Ur(r);await Nr(async()=>{const gr=t.getByTestId("hierarchy");await Cr(gr).toBeInTheDocument()},{timeout:3e3})};let Qr=0;function re(){return Qr++}const Ee={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:Lr}}},render:r=>{const t=re();return`        
<div id="hierarchy_semlookp_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createHierarchy(
    {
        apiUrl:"${r.apiUrl}",
        apiKey:"${r.apiKey}",
        backendType:"${r.backendType}",
        iri:"${r.iri}",
        entityType:"${r.entityType}",
        ontologyId:"${r.ontologyId}",
        includeObsoleteEntities:${r.includeObsoleteEntities},
        useLegacy:${r.useLegacy},
        preferredRoots:${r.preferredRoots},
        keepExpansionStates:${r.keepExpansionStates},
        showSiblingsOnInit:${r.showSiblingsOnInit},
        onNavigateToEntity:${r.onNavigateToEntity},
        onNavigateToOntology:${r.onNavigateToOntology},
        hierarchyWrap:${r.hierarchyWrap},
        showHeader:${r.showHeader},
        showComparisonTitleInHeader:${r.showComparisonTitleInHeader},
        targetIri:"${r.targetIri}",
        className:"${r.className}",
        parameter:"${r.parameter}"
    },
    document.querySelector('#hierarchy_semlookp_container_${t}')
)
<\/script>
        `},argTypes:$r,args:e},i={args:Dr,play:a},c={args:Gr,play:a},n={args:Br,play:a},p={args:Fr,play:a},y={args:xr,play:a},l={args:Kr,play:a},g={args:Mr,play:a},m={args:Yr,play:a},d={args:Vr,play:a},u={args:jr,play:a},h={args:qr,play:a},T={args:zr,play:a},H={args:Xr,play:a},b={args:Zr,play:a},I={args:Jr,play:a};var A,S,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var O,_,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var P,w,v;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var W,L,R;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var f,C,N;y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(N=(C=y.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var U,$,D;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(D=($=l.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var G,B,F;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var x,K,M;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Y,V,j;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,z,X;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(X=(z=u.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var Z,J,Q;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var rr,er,ar;T.parameters={...T.parameters,docs:{...(rr=T.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: OLSGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(ar=(er=T.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var or,sr,tr;H.parameters={...H.parameters,docs:{...(or=H.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: SkosmosAgrovocGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(tr=(sr=H.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};var ir,cr,nr;b.parameters={...b.parameters,docs:{...(ir=b.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: CompareHierarchiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(nr=(cr=b.parameters)==null?void 0:cr.docs)==null?void 0:nr.source}}};var pr,yr,lr;I.parameters={...I.parameters,docs:{...(pr=I.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  args: CompareHierarchiesSubEntityArgs,
  play: commonHierarchyWidgetPlay
}`,...(lr=(yr=I.parameters)==null?void 0:yr.docs)==null?void 0:lr.source}}};const Oe=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesSubEntity"];export{i as ClassHierarchy,b as CompareHierarchies,I as CompareHierarchiesSubEntity,p as IncludeObsoleteEntities,c as IndividualHierarchy,l as IndividualRoots,g as LargeHierarchy,h as OLS3Hierarchy,T as OLSGerman,u as OntoportalHierarchy,n as PreferredRoots,y as PropertyRoots,d as SagePubHierarchy,m as SkosHierarchy,H as SkosmosAgrovocGerman,Oe as __namedExportsOrder,Ee as default};
