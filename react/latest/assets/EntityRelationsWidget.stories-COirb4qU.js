import{m as Y,o as J,n as X,r as Z,v as $,p as oo,q as to,t as ro,w as ao,j as eo,H as so,I as io}from"./storyArgs-DlkqV1RL.js";import{E as no}from"./EntityRelationsWidget-S_6X2xjH.js";import{E as o}from"./globals-1uEo64sR.js";import"./iframe-BpFuy5ep.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-5ur9KbsH.js";import"./ClassExpression-Dr_Lur29.js";import"./OntologyBadge-DWEUndkJ.js";import"./badge-Cw5FcrFI.js";import"./loading_spinner-CgeG--Yx.js";import"./href_validator-ejenqJUk.js";import"./color_utils-DFl2nPj6.js";import"./_button-Cjs4cHjv.js";import"./icon-BSNXWXNl.js";import"./inner_text-CmUn24Fr.js";import"./ExpandableOntologyBadgeList-BoivWUwo.js";import"./icon_tip-C8q6MFYu.js";import"./tool_tip-CYy1RsfB.js";import"./reposition_on_scroll-lIMJo7lV.js";import"./shadow-DI4vNkUI.js";import"./panel-BX_wHbxc.js";import"./portal-LixIgpqV.js";import"./useCombinedRefs-PLosiWF6.js";import"./card-zOIPCN-2.js";import"./button-BGM5gc-1.js";import"./_button_display-B4IrSCpc.js";import"./spacer-idPDVPev.js";import"./text-s4bt9A6x.js";import"./link.styles-CzsZAIZs.js";import"./title-D-7OiDDM.js";import"./flex_item-NjMNo1c1.js";const{expect:po,waitFor:go,within:lo}=__STORYBOOK_MODULE_TEST__,mo={...eo,...ao,...ro,...to,...oo,...$,...Z,...X,...J,...Y},yo={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},co={api:o,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"},uo={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"},To={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"},Ao={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"},bo={api:o,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"},Eo={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"},Io={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"},Oo={api:o,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"},vo={api:o,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"},fo={api:o,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"},So={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},t=async({canvasElement:H})=>{const K=lo(H);await go(async()=>{const L=K.getByTestId("entity-relations");await po(L).toBeInTheDocument()},{timeout:3e3})},rt={title:"Additional Entity Metadata/EntityRelationsWidget",component:no,parameters:{layout:"centered",docs:{source:{transform:io},description:{component:so}}},argTypes:mo,args:yo},r={args:co,play:t},a={args:uo,play:t},e={args:To,play:t},s={args:Ao,play:t},i={args:bo,play:t},n={args:Eo,play:t},p={args:Io,play:t},g={args:Oo,play:t},l={args:vo,play:t},m={args:fo,play:t},y={args:So,play:t};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(B=(_=n.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var W,D,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: PropertyChainArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var C,V,w;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: InstancesArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(w=(V=g.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var x,q,Q;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: AxiomsArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(Q=(q=l.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var G,M,U;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: QualifiedCardinalityArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(U=(M=m.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var j,k,z;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(z=(k=y.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const at=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{a as AllValuesFrom,l as Axioms,e as DifferentFrom,s as EquivalentTo,g as Instances,n as InverseOf,y as NavigateToEBIPage,p as PropertyChain,m as QualifiedCardinality,i as SingleValue,r as SubEntityOf,at as __namedExportsOrder,rt as default};
