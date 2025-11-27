import{H as tr}from"./HierarchyWidget-CmSuxNnr.js";import{E as a,F as ir,a as cr}from"./globals-CvFyH82M.js";import{ae as o,ai as nr,am as pr,an as yr,ao as gr,ap as lr,aq as mr,ar as dr,as as ur,at as hr,au as Tr,z as Ar,B as Hr,av as br,aw as Sr,ax as Ir,ay as Or,L as Er}from"./widgetDescriptions-Bv-fdvpN.js";import"./iframe-4vt7eyOh.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-BFYeHhfm.js";/* empty css                  */import"./panel-BMYuMqY-.js";import"./shadow-Cq6SD1hJ.js";import"./loading_spinner-BDnNTy53.js";import"./text-C7uI9-P8.js";import"./link.styles-D1gvuRhv.js";import"./icon-qePc5JLU.js";const{expect:Pr,waitFor:_r,within:kr}=__STORYBOOK_MODULE_TEST__,vr={...Ir,...Sr,...br,...Hr,...Ar,...Tr,...hr,...ur,...dr,...mr,...lr,...gr,...yr,...pr,...nr},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:""},Lr={...r,apiUrl:a,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"},Rr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},fr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},Wr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},Ur={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},wr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},Nr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Gr={...r,apiUrl:ir,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},Cr={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},Dr={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},Br={...r,apiUrl:cr,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0},Fr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/HP_0003502",entityType:"class",ontologyId:"hp",useLegacy:!1,parameter:"lang=de"},xr={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},e=async({canvasElement:ar})=>{const or=kr(ar);await _r(async()=>{const sr=or.getByTestId("hierarchy");await Pr(sr).toBeInTheDocument()},{timeout:3e3})},ee={title:"Hierarchy and Graph/HierarchyWidget",component:tr,parameters:{layout:"centered",docs:{source:{transform:Er},description:{component:Or}}},argTypes:vr,args:r},s={args:Lr,play:e},t={args:Rr,play:e},i={args:fr,play:e},c={args:Wr,play:e},n={args:Ur,play:e},p={args:wr,play:e},y={args:Nr,play:e},g={args:Gr,play:e},l={args:Cr,play:e},m={args:Dr,play:e},d={args:Br,play:e},u={args:Fr,play:e},h={args:xr,play:e};var T,A,H;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(H=(A=s.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var b,S,I;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(I=(S=t.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var O,E,P;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var _,k,v;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var L,R,f;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(f=(R=n.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var W,U,w;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(w=(U=p.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var N,G,C;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(C=(G=y.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var D,B,F;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var x,K,Y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(Y=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var M,V,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,X,Z;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(Z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var j,J,Q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: OLSGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var $,rr,er;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: SkosmosAgrovocGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(er=(rr=h.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};const ae=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman"];export{s as ClassHierarchy,c as IncludeObsoleteEntities,t as IndividualHierarchy,p as IndividualRoots,y as LargeHierarchy,d as OLS3Hierarchy,u as OLSGerman,m as OntoportalHierarchy,i as PreferredRoots,n as PropertyRoots,l as SagePubHierarchy,g as SkosHierarchy,h as SkosmosAgrovocGerman,ae as __namedExportsOrder,ee as default};
