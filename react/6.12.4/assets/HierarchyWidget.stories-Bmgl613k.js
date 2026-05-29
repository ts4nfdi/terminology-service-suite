import{a7 as o,a9 as br,a8 as Tr,L as Ar,af as Ir,ao as Sr,ap as Or,aq as Er,ar as _r,as as Pr,at as kr,au as Cr,av as Lr,aw as vr,o as Wr,l as Rr,ax as fr,ay as Nr,az as Ur,aA as Gr,G as wr}from"./storyArgs-Dtnm28xa.js";import{H as Dr}from"./HierarchyWidget-DquQHR_j.js";import{E as a,T as dr,a as Br,F as xr}from"./globals-Dneqqh2P.js";import"./iframe-BvzVtTGW.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-B6EWu0oq.js";import"./OntologyBadge-BCZ8KxGZ.js";import"./badge-BXYKVt73.js";import"./href_validator-DhoHdMR5.js";import"./color_utils-CC6S7Nfi.js";import"./_button-DvwR6LI_.js";import"./icon-D91bpMaZ.js";import"./inner_text-hg77rhhf.js";import"./title-BYvDYuOc.js";import"./text-CZ4xt03R.js";import"./link.styles-DniGXfOG.js";import"./button-DTAqrjCe.js";import"./_button_display-BAwxfyYm.js";import"./useCombinedRefs-0kmr4PCi.js";import"./spacer-CGus6xQw.js";import"./button_icon-DSMJeSAT.js";import"./flex_group-CbdRcm48.js";import"./flex_item-CAYYzcoa.js";import"./panel-BMCmxzQY.js";import"./shadow-CMYgpZzD.js";const{expect:Mr,waitFor:Fr,within:Kr}=__STORYBOOK_MODULE_TEST__,Qr={...Ur,...Nr,...fr,...Rr,...Wr,...vr,...Lr,...Cr,...kr,...Pr,..._r,...Er,...Or,...Sr,...Ir,...Ar,...Tr,...br},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:"",targetIri:"",showHeader:o.SHOW_HEADER,showComparisonTitleInHeader:o.SHOW_COMPARISON_TITLE_IN_HEADER},Yr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",entityType:"class",ontologyId:"efo"},Vr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},qr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},zr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},Xr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Zr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},jr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Jr={...r,apiUrl:xr,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},$r={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},re={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},ee={...r,apiUrl:Br,backendType:"ols",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"class",ontologyId:"ncit",useLegacy:!0},ae={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},oe={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},se={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},te={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",targetIri:"http://purl.obolibrary.org/obo/MONDO_0004335",entityType:"class",ontologyId:"efo"},ie={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",targetIri:"https://database.factgrid.de/entity/Q522788",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},e=async({canvasElement:ur})=>{const hr=Kr(ur);await Fr(async()=>{const Hr=hr.getByTestId("hierarchy");await Mr(Hr).toBeInTheDocument()},{timeout:3e3})},Re={title:"Hierarchy and Graph/HierarchyWidget",component:Dr,parameters:{layout:"centered",docs:{source:{transform:wr},description:{component:Gr}}},argTypes:Qr,args:r},s={args:Yr,play:e},t={args:Vr,play:e},i={args:qr,play:e},c={args:zr,play:e},n={args:Xr,play:e},p={args:Zr,play:e},y={args:jr,play:e},g={args:Jr,play:e},l={args:$r,play:e},m={args:re,play:e},d={args:ee,play:e},u={args:ae,play:e},h={args:oe,play:e},H={args:se,play:e},b={args:ie,play:e},T={args:te,play:e};var A,I,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var O,E,_;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var P,k,C;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,v,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(W=(v=c.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var R,f,N;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(N=(f=n.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var U,G,w;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(w=(G=p.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var D,B,x;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(x=(B=y.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var M,F,K;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(K=(F=g.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Q,Y,V;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(cr=(ir=H.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};var nr,pr,yr;b.parameters={...b.parameters,docs:{...(nr=b.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: CompareHierarchiesGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(yr=(pr=b.parameters)==null?void 0:pr.docs)==null?void 0:yr.source}}};var gr,lr,mr;T.parameters={...T.parameters,docs:{...(gr=T.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: CompareHierarchiesSubEntityArgs,
  play: commonHierarchyWidgetPlay
}`,...(mr=(lr=T.parameters)==null?void 0:lr.docs)==null?void 0:mr.source}}};const fe=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesGerman","CompareHierarchiesSubEntity"];export{s as ClassHierarchy,H as CompareHierarchies,b as CompareHierarchiesGerman,T as CompareHierarchiesSubEntity,c as IncludeObsoleteEntities,t as IndividualHierarchy,p as IndividualRoots,y as LargeHierarchy,d as OLS3Hierarchy,u as OLSGerman,m as OntoportalHierarchy,i as PreferredRoots,n as PropertyRoots,l as SagePubHierarchy,g as SkosHierarchy,h as SkosmosAgrovocGerman,fe as __namedExportsOrder,Re as default};
