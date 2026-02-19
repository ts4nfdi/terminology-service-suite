import{ae as o,am as mr,an as dr,R as ur,ai as hr,ao as Hr,ap as Tr,aq as br,ar as Ar,as as Ir,at as Sr,au as Er,av as Or,aw as _r,o as Pr,z as kr,ax as vr,ay as wr,az as Lr,aA as Rr,L as Wr}from"./storyArgs-BXaqVnci.js";import{H as fr}from"./HierarchyWidget-DdPQGwUw.js";import{E as a,F as Cr,a as Ur}from"./globals-BQAFDkgj.js";import"./iframe-D6RYroSH.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-qHBwtFk-.js";import"./title-NZ55UdS3.js";import"./text-lkAphQ2Q.js";import"./loading_spinner-CVdmt-nO.js";import"./link.styles-BqW3fVvj.js";import"./button_icon-CBVIxe-h.js";import"./_button-l74fIanX.js";import"./_button_display-Bm-uJyGU.js";import"./icon-Bsau_sfl.js";import"./href_validator-CE5FVb0h.js";import"./resize_observer-2MXYJlkX.js";import"./observer-CyIwzCln.js";import"./flex_group-DpimFo0i.js";import"./flex_item-s4DeOxka.js";import"./panel-C1UeVyCI.js";import"./shadow-DH1WdWVC.js";import"./button-Dj_sIQGD.js";const{expect:Nr,waitFor:Dr,within:Gr}=__STORYBOOK_MODULE_TEST__,Br={...Lr,...wr,...vr,...kr,...Pr,..._r,...Or,...Er,...Sr,...Ir,...Ar,...br,...Tr,...Hr,...hr,...ur,...dr,...mr},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:"",targetIri:"",showHeader:o.SHOW_HEADER,showComparisonTitleInHeader:o.SHOW_COMPARISON_TITLE_IN_HEADER},Fr={...r,apiUrl:a,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"},xr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},Kr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},Mr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},Yr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},zr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},Vr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},qr={...r,apiUrl:Cr,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},Xr={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},Zr={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},jr={...r,apiUrl:Ur,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0},Jr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/HP_0003502",entityType:"class",ontologyId:"hp",useLegacy:!1,parameter:"lang=de"},Qr={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},$r={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},re={...r,apiUrl:a,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",targetIri:"http://www.ebi.ac.uk/efo/EFO_0000405",entityType:"class",ontologyId:"efo"},e=async({canvasElement:yr})=>{const gr=Gr(yr);await Dr(async()=>{const lr=gr.getByTestId("hierarchy");await Nr(lr).toBeInTheDocument()},{timeout:3e3})},Ee={title:"Hierarchy and Graph/HierarchyWidget",component:fr,parameters:{layout:"centered",docs:{source:{transform:Wr},description:{component:Rr}}},argTypes:Br,args:r},s={args:Fr,play:e},t={args:xr,play:e},i={args:Kr,play:e},c={args:Mr,play:e},n={args:Yr,play:e},p={args:zr,play:e},y={args:Vr,play:e},g={args:qr,play:e},l={args:Xr,play:e},m={args:Zr,play:e},d={args:jr,play:e},u={args:Jr,play:e},h={args:Qr,play:e},H={args:$r,play:e},T={args:re,play:e};var b,A,I;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(I=(A=s.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var S,E,O;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(O=(E=t.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var _,P,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var v,w,L;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(L=(w=c.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var R,W,f;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(f=(W=n.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var C,U,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(N=(U=p.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var D,G,B;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(B=(G=y.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var F,x,K;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(K=(x=g.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var M,Y,z;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var V,q,X;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(X=(q=m.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};var Z,j,J;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(J=(j=d.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var Q,$,rr;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: OLSGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(rr=($=u.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,ar,or;h.parameters={...h.parameters,docs:{...(er=h.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: SkosmosAgrovocGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(or=(ar=h.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var sr,tr,ir;H.parameters={...H.parameters,docs:{...(sr=H.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: CompareHierarchiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(ir=(tr=H.parameters)==null?void 0:tr.docs)==null?void 0:ir.source}}};var cr,nr,pr;T.parameters={...T.parameters,docs:{...(cr=T.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: CompareHierarchiesSubEntityArgs,
  play: commonHierarchyWidgetPlay
}`,...(pr=(nr=T.parameters)==null?void 0:nr.docs)==null?void 0:pr.source}}};const Oe=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesSubEntity"];export{s as ClassHierarchy,H as CompareHierarchies,T as CompareHierarchiesSubEntity,c as IncludeObsoleteEntities,t as IndividualHierarchy,p as IndividualRoots,y as LargeHierarchy,d as OLS3Hierarchy,u as OLSGerman,m as OntoportalHierarchy,i as PreferredRoots,n as PropertyRoots,l as SagePubHierarchy,g as SkosHierarchy,h as SkosmosAgrovocGerman,Oe as __namedExportsOrder,Ee as default};
