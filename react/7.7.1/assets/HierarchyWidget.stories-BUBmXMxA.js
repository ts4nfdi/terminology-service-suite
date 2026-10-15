import{ai as o,ak as br,aj as Tr,M as Ar,aq as Ir,az as Sr,aA as Or,aB as Er,aC as _r,aD as Pr,aE as kr,aF as Cr,aG as Lr,aH as Wr,o as vr,n as Rr,aI as Nr,aJ as fr,aK as Ur,aL as Dr,H as Gr}from"./storyArgs-DUK7Dmv-.js";import{H as wr}from"./HierarchyWidget-Gbx7NQWJ.js";import{E as a,T as dr,a as Br,F as Mr}from"./globals-1uEo64sR.js";import"./iframe-WPgVEhzH.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-w_OuNH1X.js";import"./OntologyBadge-Dwbs3ooV.js";import"./badge-eQOjaZue.js";import"./loading_spinner-BJOcsxx2.js";import"./href_validator-DviA79Mc.js";import"./color_utils-dTQ0WLSQ.js";import"./_button-DBGwAeWx.js";import"./icon-BVzkvaIZ.js";import"./inner_text-D8PpCILz.js";import"./title-CTj4BLLF.js";import"./text-B_uqAVYr.js";import"./link.styles-Czq83h68.js";import"./button-DABHP6Uy.js";import"./_button_display-D03kr6EW.js";import"./useCombinedRefs-ci-61FQF.js";import"./spacer-DY22r_9H.js";import"./button_icon-B8L3XDLC.js";import"./flex_group-DzLeFKCi.js";import"./flex_item-BCCizxqD.js";import"./panel-CTwz3eHK.js";import"./shadow-4Z4vcK18.js";const{expect:Fr,waitFor:Kr,within:xr}=__STORYBOOK_MODULE_TEST__,Qr={...Ur,...fr,...Nr,...Rr,...vr,...Wr,...Lr,...Cr,...kr,...Pr,..._r,...Er,...Or,...Sr,...Ir,...Ar,...Tr,...br},r={apiUrl:"",backendType:"ols",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY,hierarchyWrap:o.WRAP,parameter:"",targetIri:"",showHeader:o.SHOW_HEADER,showComparisonTitleInHeader:o.SHOW_COMPARISON_TITLE_IN_HEADER},Yr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",entityType:"class",ontologyId:"efo"},Vr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},jr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},qr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},zr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Jr={...r,apiUrl:a,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},Xr={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Zr={...r,apiUrl:Mr,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},$r={...r,apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},re={...r,apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},ee={...r,apiUrl:Br,backendType:"ols",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"class",ontologyId:"ncit",useLegacy:!0},ae={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},oe={...r,apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"},se={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/CHEBI_27594",targetIri:"http://purl.obolibrary.org/obo/CHEBI_18248",entityType:"class",ontologyId:"chebi"},te={...r,apiUrl:a,backendType:"ols",iri:"http://purl.obolibrary.org/obo/MONDO_0005015",targetIri:"http://purl.obolibrary.org/obo/MONDO_0004335",entityType:"class",ontologyId:"efo"},ie={...r,apiUrl:dr,backendType:"ols",iri:"https://database.factgrid.de/entity/Q692839",targetIri:"https://database.factgrid.de/entity/Q522788",entityType:"class",ontologyId:"ohdab",useLegacy:!1,parameter:"lang=de"},e=async({canvasElement:hr})=>{const ur=xr(hr);await Kr(async()=>{const Hr=ur.getByTestId("hierarchy");await Fr(Hr).toBeInTheDocument()},{timeout:3e3})},Ne={title:"Hierarchy and Graph/HierarchyWidget",component:wr,parameters:{layout:"centered",docs:{source:{transform:Gr},description:{component:Dr}}},argTypes:Qr,args:r},s={args:Yr,play:e},t={args:Vr,play:e},i={args:jr,play:e},c={args:qr,play:e},n={args:zr,play:e},p={args:Jr,play:e},y={args:Xr,play:e},g={args:Zr,play:e},l={args:$r,play:e},m={args:re,play:e},d={args:ee,play:e},h={args:ae,play:e},u={args:oe,play:e},H={args:se,play:e},b={args:ie,play:e},T={args:te,play:e};var A,I,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var O,E,_;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var P,k,C;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,W,v;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(v=(W=c.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var R,N,f;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(f=(N=n.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var U,D,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(G=(D=p.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var w,B,M;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(M=(B=y.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var F,K,x;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(x=(K=g.parameters)==null?void 0:K.docs)==null?void 0:x.source}}};var Q,Y,V;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(V=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};var j,q,z;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,X,Z;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(Z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,rr,er;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(mr=(lr=T.parameters)==null?void 0:lr.docs)==null?void 0:mr.source}}};const fe=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman","CompareHierarchies","CompareHierarchiesGerman","CompareHierarchiesSubEntity"];export{s as ClassHierarchy,H as CompareHierarchies,b as CompareHierarchiesGerman,T as CompareHierarchiesSubEntity,c as IncludeObsoleteEntities,t as IndividualHierarchy,p as IndividualRoots,y as LargeHierarchy,d as OLS3Hierarchy,h as OLSGerman,m as OntoportalHierarchy,i as PreferredRoots,n as PropertyRoots,l as SagePubHierarchy,g as SkosHierarchy,u as SkosmosAgrovocGerman,fe as __namedExportsOrder,Ne as default};
