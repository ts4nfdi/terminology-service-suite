import{d as H,m as J}from"./OlsEntityApi-Cavub7Uh.js";import{E as X}from"./EntityRelationsWidget-CDrASTEX.js";import{E as o}from"./globals-Dr4u9m4r.js";import{k as Z,o as $,l as oo,n as to,r as ro,p as ao,m as eo,q as so,t as io,j as no}from"./storyArgs-DMwDDPC7.js";import"./iframe-CBH6BS6G.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-BpQrH4aq.js";import"./ClassExpression-CFW7_9So.js";import"./OntologyBadge-D3E2jNN-.js";import"./badge-wmhQJc4Z.js";import"./loading_spinner-CmBzACc1.js";import"./href_validator-BAxz2c9I.js";import"./color_utils-CBAFetxN.js";import"./_button-C5lLbozJ.js";import"./icon-CrXfIDHd.js";import"./inner_text-DjKYbKPT.js";import"./ExpandableOntologyBadgeList-D4IaR7fV.js";import"./icon_tip-F5UO92Xy.js";import"./tool_tip-DCigf3_C.js";import"./reposition_on_scroll-CMaYENRU.js";import"./shadow-Cv_DLcHs.js";import"./panel-DPK6IZI9.js";import"./portal-YXDwbcMZ.js";import"./useCombinedRefs-DnOQdU4I.js";import"./card-C61LbiVK.js";import"./button-CL8cR0qu.js";import"./_button_display-BIZ6jIB_.js";import"./spacer-Y365qv4S.js";import"./text-CtRUUpqB.js";import"./link.styles-DiFUwcoV.js";import"./title-DG12Mwq4.js";import"./flex_item-DbnsmiR7.js";const{expect:po,waitFor:go,within:lo}=__STORYBOOK_MODULE_TEST__,mo={...no,...io,...so,...eo,...ao,...ro,...to,...oo,...$,...Z},yo={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},co={api:o,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"},uo={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"},To={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"},Ao={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"},bo={api:o,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"},Eo={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"},Io={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"},Oo={api:o,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"},fo={api:o,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"},vo={api:o,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"},So={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},t=async({canvasElement:K})=>{const L=lo(K);await go(async()=>{const Y=L.getByTestId("entity-relations");await po(Y).toBeInTheDocument()},{timeout:3e3})},at={title:"Additional Entity Metadata/EntityRelationsWidget",component:X,parameters:{layout:"centered",docs:{source:{transform:J},description:{component:H}}},argTypes:mo,args:yo},r={args:co,play:t},a={args:uo,play:t},e={args:To,play:t},s={args:Ao,play:t},i={args:bo,play:t},n={args:Eo,play:t},p={args:Io,play:t},g={args:Oo,play:t},l={args:fo,play:t},m={args:vo,play:t},y={args:So,play:t};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: SubEntityOfArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var T,A,b;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: AllValuesFromArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var E,I,O;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: DifferentFromArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(O=(I=e.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var f,v,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: EquivalentToArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var h,P,R;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: SingleValueArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(R=(P=i.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var N,_,B;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: InverseOfArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(B=(_=n.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var W,D,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: PropertyChainArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var C,V,x;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: InstancesArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(x=(V=g.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var w,q,Q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: AxiomsArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(Q=(q=l.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var k,G,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: QualifiedCardinalityArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(M=(G=m.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var U,j,z;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(z=(j=y.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const et=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{a as AllValuesFrom,l as Axioms,e as DifferentFrom,s as EquivalentTo,g as Instances,n as InverseOf,y as NavigateToEBIPage,p as PropertyChain,m as QualifiedCardinality,i as SingleValue,r as SubEntityOf,et as __namedExportsOrder,at as default};
