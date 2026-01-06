import{E as o,F as tr,a as ir}from"./globals-BQAFDkgj.js";import{aq as s,au as cr,az as nr,aA as pr,aB as yr,aC as lr,aD as gr,aE as dr,aF as mr,aG as ur,aH as hr,o as Tr,y as br,aI as Sr,aJ as Ar,aK as Hr,aL as Ir}from"./storyArgs-CNybPO01.js";import"./index-BcljCPaf.js";import"./index-Bl-ZOWkZ.js";import"./useQuery-CidFMm36.js";/* empty css                  *//* empty css                              */import"./ExpandableOntologyBadgeList-DuPGoLJ-.js";import"./OntologyBadge-QeaUz3Wa.js";import"./badge-1S-NH-ch.js";import"./href_validator-Cs1fZ0vS.js";import"./color_utils-C32VsIho.js";import"./_button-YkQj8NM0.js";import"./icon-CE3ukyQW.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CwdQ_heh.js";import"./panel-DxNbXEZo.js";import"./shadow-hpW_Gm8d.js";import"./text-CwK6QkCY.js";import"./link.styles-Cwoei_NV.js";const{expect:Or,waitFor:Er,within:_r}=__STORYBOOK_MODULE_TEST__,kr={...Hr,...Ar,...Sr,...br,...Tr,...hr,...ur,...mr,...dr,...gr,...lr,...yr,...pr,...nr,...cr},e={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:s.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:s.PREFERRED_ROOTS,keepExpansionStates:s.KEEP_EXPANSION_STATES,showSiblingsOnInit:s.SHOW_SIBLINGS_ON_INIT,useLegacy:s.USE_LEGACY,hierarchyWrap:s.WRAP,parameter:""},Pr={...e,apiUrl:o,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"},vr={...e,apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},Lr={...e,apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},Rr={...e,apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},fr={...e,apiUrl:o,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Wr={...e,apiUrl:o,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},Nr={...e,apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Ur={...e,apiUrl:tr,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},wr={...e,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},$r={...e,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},Gr={...e,apiUrl:ir,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0},Cr={...e,apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/HP_0003502",entityType:"class",ontologyId:"hp",useLegacy:!1,parameter:"lang=de"},Dr={...e,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},a=async({canvasElement:r})=>{const t=_r(r);await Er(async()=>{const sr=t.getByTestId("hierarchy");await Or(sr).toBeInTheDocument()},{timeout:3e3})};let Br=0;function xr(){return Br++}const ne={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:Ir}}},render:r=>{const t=xr();return`        
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
        className:"${r.className}",
        parameter:"${r.parameter}"
    },
    document.querySelector('#hierarchy_semlookp_container_${t}')
)
<\/script>
        `},argTypes:kr,args:e},i={args:Pr,play:a},c={args:vr,play:a},n={args:Lr,play:a},p={args:Rr,play:a},y={args:fr,play:a},l={args:Wr,play:a},g={args:Nr,play:a},d={args:Ur,play:a},m={args:wr,play:a},u={args:$r,play:a},h={args:Gr,play:a},T={args:Cr,play:a},b={args:Dr,play:a};var S,A,H;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(H=(A=i.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var I,O,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var _,k,P;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(P=(k=n.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var v,L,R;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var f,W,N;y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(N=(W=y.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var U,w,$;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...($=(w=l.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var G,C,D;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(D=(C=g.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var B,x,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var K,Y,q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(q=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var M,V,j;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(j=(V=u.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var z,J,X;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(X=(J=h.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,Q,rr;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: OLSGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(rr=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:rr.source}}};var er,ar,or;b.parameters={...b.parameters,docs:{...(er=b.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: SkosmosAgrovocGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(or=(ar=b.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};const pe=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman"];export{i as ClassHierarchy,p as IncludeObsoleteEntities,c as IndividualHierarchy,l as IndividualRoots,g as LargeHierarchy,h as OLS3Hierarchy,T as OLSGerman,u as OntoportalHierarchy,n as PreferredRoots,y as PropertyRoots,m as SagePubHierarchy,d as SkosHierarchy,b as SkosmosAgrovocGerman,pe as __namedExportsOrder,ne as default};
