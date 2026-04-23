import{a7 as o,a9 as Tr,a8 as br,L as Ar,af as Ir,ao as Sr,ap as Er,aq as Or,ar as _r,as as Pr,at as kr,au as fr,av as Lr,aw as vr,o as wr,l as Cr,ax as Wr,ay as Rr,az as Ur,aA as Nr,G as Gr}from"./storyArgs-Evx-wMLu.js";import{H as Dr}from"./HierarchyWidget-JIZZHmz4.js";import{E as a,F as Br,a as Fr,T as dr}from"./globals-Dneqqh2P.js";import"./iframe-CfxKY3wJ.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-m9xRwLj_.js";import"./OntologyBadge-DWCt6YqU.js";import"./badge-ClhQPwYE.js";import"./href_validator-8f9eGl2L.js";import"./color_utils-DAsswt-H.js";import"./_button-B6nbxLh3.js";import"./icon-BIjUEb8V.js";import"./inner_text-eFtkIFDq.js";import"./title-CA0hYBoF.js";import"./text-DsVPKzkZ.js";import"./link.styles-BHtuDENE.js";import"./button-NZV0RNyO.js";import"./_button_display-CfjOiPtx.js";import"./spacer-jahlcCai.js";import"./button_icon-NRANMwRQ.js";import"./resize_observer-BbflhR27.js";import"./observer-fdCcL414.js";import"./flex_group-JiSOlFQ5.js";import"./flex_item-D-eoiaWz.js";import"./panel-mjunHdUn.js";import"./shadow-C0Nkui7X.js";const{expect:xr,waitFor:Kr,within:Mr}=__STORYBOOK_MODULE_TEST__,Qr={...Ur,...Rr,...Wr,...Cr,...wr,...vr,...Lr,...fr,...kr,...Pr,..._r,...Or,...Er,...Sr,...Ir,...Ar,...br,...Tr},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:"",targetIri:"",showHeader:o.SHOW_HEADER,showComparisonTitleInHeader:o.SHOW_COMPARISON_TITLE_IN_HEADER},Yr={...r,apiUrl:a,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"},Vr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},qr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},zr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},Xr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Zr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},jr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Jr={...r,apiUrl:Br,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},$r={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},re={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},ee={...r,apiUrl:Fr,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0},ae={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},oe={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},se={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},te={...r,apiUrl:a,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",targetIri:"http://www.ebi.ac.uk/efo/EFO_0000405",entityType:"class",ontologyId:"efo"},ie={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",targetIri:"https://database.factgrid.de/entity/Q522788",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},e=async({canvasElement:ur})=>{const hr=Mr(ur);await Kr(async()=>{const Hr=hr.getByTestId("hierarchy");await xr(Hr).toBeInTheDocument()},{timeout:3e3})},We={title:"Hierarchy and Graph/HierarchyWidget",component:Dr,parameters:{layout:"centered",docs:{source:{transform:Gr},description:{component:Nr}}},argTypes:Qr,args:r},s={args:Yr,play:e},t={args:Vr,play:e},i={args:qr,play:e},c={args:zr,play:e},n={args:Xr,play:e},p={args:Zr,play:e},y={args:jr,play:e},g={args:Jr,play:e},l={args:$r,play:e},m={args:re,play:e},d={args:ee,play:e},u={args:ae,play:e},h={args:oe,play:e},H={args:se,play:e},T={args:ie,play:e},b={args:te,play:e};var A,I,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var E,O,_;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(_=(O=t.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var P,k,f;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(f=(k=i.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var L,v,w;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,W,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(R=(W=n.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var U,N,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(G=(N=p.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var D,B,F;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(F=(B=y.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var x,K,M;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,Y,V;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(V=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};var q,z,X;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(X=(z=m.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var Z,j,J;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(J=(j=d.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var $,rr,er;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: OLSGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(er=(rr=u.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,or,sr;h.parameters={...h.parameters,docs:{...(ar=h.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: SkosmosAgrovocGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(sr=(or=h.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var tr,ir,cr;H.parameters={...H.parameters,docs:{...(tr=H.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: CompareHierarchiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(cr=(ir=H.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};var nr,pr,yr;T.parameters={...T.parameters,docs:{...(nr=T.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: CompareHierarchiesGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(yr=(pr=T.parameters)==null?void 0:pr.docs)==null?void 0:yr.source}}};var gr,lr,mr;b.parameters={...b.parameters,docs:{...(gr=b.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: CompareHierarchiesSubEntityArgs,
  play: commonHierarchyWidgetPlay
}`,...(mr=(lr=b.parameters)==null?void 0:lr.docs)==null?void 0:mr.source}}};const Re=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesGerman","CompareHierarchiesSubEntity"];export{s as ClassHierarchy,H as CompareHierarchies,T as CompareHierarchiesGerman,b as CompareHierarchiesSubEntity,c as IncludeObsoleteEntities,t as IndividualHierarchy,p as IndividualRoots,y as LargeHierarchy,d as OLS3Hierarchy,u as OLSGerman,m as OntoportalHierarchy,i as PreferredRoots,n as PropertyRoots,l as SagePubHierarchy,g as SkosHierarchy,h as SkosmosAgrovocGerman,Re as __namedExportsOrder,We as default};
