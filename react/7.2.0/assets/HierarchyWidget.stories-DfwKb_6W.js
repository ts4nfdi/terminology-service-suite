import{H as br,m as Tr}from"./OlsEntityApi-Br0Zq8xj.js";import{H as Ar}from"./HierarchyWidget-Wu5zEb5a.js";import{T as o,V as Ir,U as Sr,y as Or,$ as Er,a5 as _r,a6 as Pr,a7 as kr,a8 as Cr,a9 as Lr,aa as Wr,ab as fr,ac as vr,ad as Rr,o as Nr,k as Ur,ae as Dr,af as Gr,ag as wr}from"./storyArgs-BMfzGQAS.js";import{E as a,T as dr,a as Br,F as Mr}from"./globals-Dr4u9m4r.js";import"./iframe-DMKrAS_T.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-CdY_vUx0.js";import"./OntologyBadge-DN8dHW9x.js";import"./badge-LpOUoxc8.js";import"./href_validator-DL_VXGFm.js";import"./color_utils-PoKf_Z-5.js";import"./_button-BRXNBxtS.js";import"./icon-DN4_tkR3.js";import"./inner_text-Ch_Vts3e.js";import"./title-Bn81vFdV.js";import"./text-6wP6Ct4w.js";import"./link.styles-BuCz81h7.js";import"./button-DITcg1JV.js";import"./_button_display-BdGxJKt_.js";import"./useCombinedRefs-BHSBNv-C.js";import"./spacer-Cv-oLz6t.js";import"./button_icon-DhMG0kCe.js";import"./flex_group-DChuCmnS.js";import"./flex_item-DAR4Tuud.js";import"./panel-CzMEd1mT.js";import"./shadow-XrIb-kB8.js";const{expect:xr,waitFor:Fr,within:Kr}=__STORYBOOK_MODULE_TEST__,Qr={...wr,...Gr,...Dr,...Ur,...Nr,...Rr,...vr,...fr,...Wr,...Lr,...Cr,...kr,...Pr,..._r,...Er,...Or,...Sr,...Ir},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:"",targetIri:"",showHeader:o.SHOW_HEADER,showComparisonTitleInHeader:o.SHOW_COMPARISON_TITLE_IN_HEADER},Vr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",entityType:"class",ontologyId:"efo"},Yr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},Xr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},Zr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},$r={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},jr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},qr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},zr={...r,apiUrl:Mr,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},Jr={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},re={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},ee={...r,apiUrl:Br,backendType:"ols",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"class",ontologyId:"ncit",useLegacy:!0},ae={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},oe={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},se={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},te={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",targetIri:"http://purl.obolibrary.org/obo/MONDO_0004335",entityType:"class",ontologyId:"efo"},ie={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",targetIri:"https://database.factgrid.de/entity/Q522788",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},e=async({canvasElement:hr})=>{const ur=Kr(hr);await Fr(async()=>{const Hr=ur.getByTestId("hierarchy");await xr(Hr).toBeInTheDocument()},{timeout:3e3})},Re={title:"Hierarchy and Graph/HierarchyWidget",component:Ar,parameters:{layout:"centered",docs:{source:{transform:Tr},description:{component:br}}},argTypes:Qr,args:r},s={args:Vr,play:e},t={args:Yr,play:e},i={args:Xr,play:e},c={args:Zr,play:e},n={args:$r,play:e},p={args:jr,play:e},y={args:qr,play:e},g={args:zr,play:e},l={args:Jr,play:e},m={args:re,play:e},d={args:ee,play:e},h={args:ae,play:e},u={args:oe,play:e},H={args:se,play:e},b={args:ie,play:e},T={args:te,play:e};var A,I,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var O,E,_;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var P,k,C;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,W,f;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(f=(W=c.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var v,R,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(N=(R=n.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var U,D,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(G=(D=p.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var w,B,M;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(M=(B=y.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var x,F,K;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(K=(F=g.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Q,V,Y;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(Y=(V=l.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var X,Z,$;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var j,q,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,rr,er;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(mr=(lr=T.parameters)==null?void 0:lr.docs)==null?void 0:mr.source}}};const Ne=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesGerman","CompareHierarchiesSubEntity"];export{s as ClassHierarchy,H as CompareHierarchies,b as CompareHierarchiesGerman,T as CompareHierarchiesSubEntity,c as IncludeObsoleteEntities,t as IndividualHierarchy,p as IndividualRoots,y as LargeHierarchy,d as OLS3Hierarchy,h as OLSGerman,m as OntoportalHierarchy,i as PreferredRoots,n as PropertyRoots,l as SagePubHierarchy,g as SkosHierarchy,u as SkosmosAgrovocGerman,Ne as __namedExportsOrder,Re as default};
