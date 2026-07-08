import{m as H}from"./OlsEntityApi-CLIh31Tw.js";import{b as J}from"./widgetDescriptions-CXOrmZHM.js";import{E as X}from"./EntityRelationsWidget-BMuhWTqs.js";import{E as o}from"./globals-Dneqqh2P.js";import{j as Z,o as $,k as oo,m as ro,q as to,p as ao,l as eo,n as io,r as so,i as no}from"./storyArgs-8y09BLPx.js";import"./iframe-D1bE6IOg.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-BKm5Yksz.js";import"./ClassExpression-DQ4UQuRn.js";import"./OntologyBadge-Bj9QPuoW.js";import"./badge-D_NOMuIp.js";import"./href_validator-Dme5ogDQ.js";import"./color_utils-FKhpo9bp.js";import"./_button-D2MUqDw1.js";import"./icon-BmvXYwZ-.js";import"./inner_text-DetKi12f.js";import"./ExpandableOntologyBadgeList-CJy7-xeP.js";import"./icon_tip-Ko9Yq2BS.js";import"./tool_tip-7cLHEBLZ.js";import"./reposition_on_scroll-CO42mX56.js";import"./shadow-BppnE0PI.js";import"./panel-DYIm1j9l.js";import"./portal-BbEzik7G.js";import"./useCombinedRefs-D2osI8Mj.js";import"./card-CrdPv3vl.js";import"./button-CZGIzVE5.js";import"./_button_display-BPyfzXuj.js";import"./spacer-DxX9KGdR.js";import"./text-E1srQjgr.js";import"./link.styles-CxXsSYEo.js";import"./title-Bq4CeUBM.js";import"./flex_item-PnH_Y1n5.js";const{expect:po,waitFor:go,within:lo}=__STORYBOOK_MODULE_TEST__,mo={...no,...so,...io,...eo,...ao,...to,...ro,...oo,...$,...Z},yo={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},co={api:o,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"},uo={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"},To={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"},Ao={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"},bo={api:o,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"},Eo={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"},Io={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"},Oo={api:o,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"},fo={api:o,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"},vo={api:o,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"},So={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},r=async({canvasElement:K})=>{const L=lo(K);await go(async()=>{const Y=L.getByTestId("entity-relations");await po(Y).toBeInTheDocument()},{timeout:3e3})},ar={title:"Additional Entity Metadata/EntityRelationsWidget",component:X,parameters:{layout:"centered",docs:{source:{transform:H},description:{component:J}}},argTypes:mo,args:yo},t={args:co,play:r},a={args:uo,play:r},e={args:To,play:r},i={args:Ao,play:r},s={args:bo,play:r},n={args:Eo,play:r},p={args:Io,play:r},g={args:Oo,play:r},l={args:fo,play:r},m={args:vo,play:r},y={args:So,play:r};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: SubEntityOfArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var T,A,b;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: AllValuesFromArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var E,I,O;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: DifferentFromArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(O=(I=e.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var f,v,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: EquivalentToArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var h,P,R;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: SingleValueArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(R=(P=s.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var N,_,B;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(z=(j=y.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const er=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{a as AllValuesFrom,l as Axioms,e as DifferentFrom,i as EquivalentTo,g as Instances,n as InverseOf,y as NavigateToEBIPage,p as PropertyChain,m as QualifiedCardinality,s as SingleValue,t as SubEntityOf,er as __namedExportsOrder,ar as default};
