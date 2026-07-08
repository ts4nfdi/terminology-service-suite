import{m as br}from"./OlsEntityApi-DeSzVYq3.js";import{H as Tr}from"./widgetDescriptions-CXOrmZHM.js";import{H as Ar}from"./HierarchyWidget-CVPMQvM2.js";import{R as o,T as Ir,S as Sr,z as Or,Z as Er,a3 as _r,a4 as Pr,a5 as kr,a6 as Cr,a7 as Lr,a8 as Rr,a9 as Wr,aa as fr,ab as vr,o as Nr,k as Ur,ac as Dr,ad as Gr,ae as wr}from"./storyArgs-A40HnVS6.js";import{E as a,T as dr,a as Br,F as Mr}from"./globals-Dneqqh2P.js";import"./iframe-Cdh1mNhJ.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-Osnf6a3n.js";import"./OntologyBadge-CXg3ERHy.js";import"./badge-Cmy1L44V.js";import"./href_validator-CdLwqFvc.js";import"./color_utils-Bvhpg27c.js";import"./_button-BXD3e-iM.js";import"./icon-BYTnCjHI.js";import"./inner_text-BGK4ZphR.js";import"./title-B3sNlECc.js";import"./text-BO6s6G_y.js";import"./link.styles-BM-cQV6j.js";import"./button-DzHY6ifU.js";import"./_button_display-DdGJx34M.js";import"./useCombinedRefs-CKHHkxIF.js";import"./spacer-CFWgF9yz.js";import"./button_icon-NvOQi2Mt.js";import"./flex_group-DtQYZil2.js";import"./flex_item-DWJjv-ki.js";import"./panel-tmucGouL.js";import"./shadow-plOKcf16.js";const{expect:xr,waitFor:Fr,within:Kr}=__STORYBOOK_MODULE_TEST__,Qr={...wr,...Gr,...Dr,...Ur,...Nr,...vr,...fr,...Wr,...Rr,...Lr,...Cr,...kr,...Pr,..._r,...Er,...Or,...Sr,...Ir},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:"",targetIri:"",showHeader:o.SHOW_HEADER,showComparisonTitleInHeader:o.SHOW_COMPARISON_TITLE_IN_HEADER},Yr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",entityType:"class",ontologyId:"efo"},Vr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},Zr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},zr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},Xr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},jr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},qr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Jr={...r,apiUrl:Mr,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},$r={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},re={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},ee={...r,apiUrl:Br,backendType:"ols",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"class",ontologyId:"ncit",useLegacy:!0},ae={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},oe={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},se={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},te={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",targetIri:"http://purl.obolibrary.org/obo/MONDO_0004335",entityType:"class",ontologyId:"efo"},ie={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",targetIri:"https://database.factgrid.de/entity/Q522788",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},e=async({canvasElement:hr})=>{const ur=Kr(hr);await Fr(async()=>{const Hr=ur.getByTestId("hierarchy");await xr(Hr).toBeInTheDocument()},{timeout:3e3})},Ne={title:"Hierarchy and Graph/HierarchyWidget",component:Ar,parameters:{layout:"centered",docs:{source:{transform:br},description:{component:Tr}}},argTypes:Qr,args:r},s={args:Yr,play:e},t={args:Vr,play:e},i={args:Zr,play:e},c={args:zr,play:e},n={args:Xr,play:e},p={args:jr,play:e},y={args:qr,play:e},g={args:Jr,play:e},l={args:$r,play:e},m={args:re,play:e},d={args:ee,play:e},h={args:ae,play:e},u={args:oe,play:e},H={args:se,play:e},b={args:ie,play:e},T={args:te,play:e};var A,I,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var O,E,_;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var P,k,C;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,R,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var f,v,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var U,D,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(G=(D=p.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var w,B,M;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(M=(B=y.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var x,F,K;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(K=(F=g.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Q,Y,V;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(V=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};var Z,z,X;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(X=(z=m.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var j,q,J;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(J=(q=d.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var $,rr,er;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: OLSGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(er=(rr=h.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,or,sr;u.parameters={...u.parameters,docs:{...(ar=u.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: SkosmosAgrovocGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(sr=(or=u.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var tr,ir,cr;H.parameters={...H.parameters,docs:{...(tr=H.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: CompareHierarchiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(cr=(ir=H.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};var nr,pr,yr;b.parameters={...b.parameters,docs:{...(nr=b.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: CompareHierarchiesGermanArgs,
  play: commonHierarchyWidgetPlay
}`,...(yr=(pr=b.parameters)==null?void 0:pr.docs)==null?void 0:yr.source}}};var gr,lr,mr;T.parameters={...T.parameters,docs:{...(gr=T.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: CompareHierarchiesSubEntityArgs,
  play: commonHierarchyWidgetPlay
}`,...(mr=(lr=T.parameters)==null?void 0:lr.docs)==null?void 0:mr.source}}};const Ue=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesGerman","CompareHierarchiesSubEntity"];export{s as ClassHierarchy,H as CompareHierarchies,b as CompareHierarchiesGerman,T as CompareHierarchiesSubEntity,c as IncludeObsoleteEntities,t as IndividualHierarchy,p as IndividualRoots,y as LargeHierarchy,d as OLS3Hierarchy,h as OLSGerman,m as OntoportalHierarchy,i as PreferredRoots,n as PropertyRoots,l as SagePubHierarchy,g as SkosHierarchy,u as SkosmosAgrovocGerman,Ue as __namedExportsOrder,Ne as default};
