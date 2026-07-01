import{k as H,o as J,l as X,n as Z,r as $,p as oo,m as to,q as ro,v as ao,i as eo,F as so,G as io}from"./storyArgs-CKWFhvSi.js";import{E as no}from"./EntityRelationsWidget-D8NOvprl.js";import{E as o}from"./globals-Dneqqh2P.js";import"./iframe-BBIYaP6W.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-CXAOpW86.js";import"./ClassExpression-C1lD6UGi.js";import"./OntologyBadge-BQmsmlpA.js";import"./badge-Dw0AeH2i.js";import"./href_validator-BZ2CsoNM.js";import"./color_utils-U2KwnY__.js";import"./_button-Cesqm7i-.js";import"./icon-BBYr1C6g.js";import"./inner_text-D0njA3xv.js";import"./ExpandableOntologyBadgeList-DAUNR4uc.js";import"./icon_tip-DZn5sScr.js";import"./tool_tip-Btt7eLcl.js";import"./reposition_on_scroll-CLciJDyi.js";import"./shadow-BHyeyB8l.js";import"./panel-C6yz74qk.js";import"./portal-guWsKkQG.js";import"./useCombinedRefs-C97P5luP.js";import"./card-D-6cDQSG.js";import"./button-B4Vt_s_K.js";import"./_button_display-CM-F7xWC.js";import"./spacer-CKeLVN6Y.js";import"./text-c25A2Bo7.js";import"./link.styles-BYhvTIGr.js";import"./title-CMvH1Zdo.js";import"./flex_item-BOTyfm2X.js";const{expect:po,waitFor:go,within:lo}=__STORYBOOK_MODULE_TEST__,mo={...eo,...ao,...ro,...to,...oo,...$,...Z,...X,...J,...H},yo={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},co={api:o,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"},uo={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"},To={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"},Ao={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"},bo={api:o,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"},Eo={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"},Io={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"},Oo={api:o,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"},vo={api:o,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"},fo={api:o,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"},So={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},t=async({canvasElement:L})=>{const Y=lo(L);await go(async()=>{const j=Y.getByTestId("entity-relations");await po(j).toBeInTheDocument()},{timeout:3e3})},tt={title:"Additional Entity Metadata/EntityRelationsWidget",component:no,parameters:{layout:"centered",docs:{source:{transform:io},description:{component:so}}},argTypes:mo,args:yo},r={args:co,play:t},a={args:uo,play:t},e={args:To,play:t},s={args:Ao,play:t},i={args:bo,play:t},n={args:Eo,play:t},p={args:Io,play:t},g={args:Oo,play:t},l={args:vo,play:t},m={args:fo,play:t},y={args:So,play:t};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: SubEntityOfArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var T,A,b;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: AllValuesFromArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var E,I,O;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: DifferentFromArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(O=(I=e.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var v,f,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: EquivalentToArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,P,R;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: SingleValueArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(R=(P=i.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var N,_,B;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: InverseOfArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(B=(_=n.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var W,F,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: PropertyChainArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(D=(F=p.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var C,V,x;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: InstancesArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(x=(V=g.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var w,q,Q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: AxiomsArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(Q=(q=l.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var G,k,M;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: QualifiedCardinalityArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(M=(k=m.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var U,z,K;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(K=(z=y.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};const rt=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{a as AllValuesFrom,l as Axioms,e as DifferentFrom,s as EquivalentTo,g as Instances,n as InverseOf,y as NavigateToEBIPage,p as PropertyChain,m as QualifiedCardinality,i as SingleValue,r as SubEntityOf,rt as __namedExportsOrder,tt as default};
