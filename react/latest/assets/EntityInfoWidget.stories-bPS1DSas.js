import{k as Q,o as X,l as $,m as oo,u as to,n as eo,p as ro,q as ao,r as so,v as io,i as no,w as go}from"./storyArgs-CKWFhvSi.js";import{E as po}from"./EntityInfoWidget-DD72fnck.js";import{T as yo,Z as l,E as e}from"./globals-Dneqqh2P.js";import"./iframe-BBIYaP6W.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-CXAOpW86.js";import"./ClassExpression-C1lD6UGi.js";import"./OntologyBadge-BQmsmlpA.js";import"./badge-Dw0AeH2i.js";import"./href_validator-BZ2CsoNM.js";import"./color_utils-U2KwnY__.js";import"./_button-Cesqm7i-.js";import"./icon-BBYr1C6g.js";import"./inner_text-D0njA3xv.js";import"./ExpandableOntologyBadgeList-DAUNR4uc.js";import"./icon_tip-DZn5sScr.js";import"./tool_tip-Btt7eLcl.js";import"./reposition_on_scroll-CLciJDyi.js";import"./shadow-BHyeyB8l.js";import"./panel-C6yz74qk.js";import"./portal-guWsKkQG.js";import"./useCombinedRefs-C97P5luP.js";import"./card-D-6cDQSG.js";import"./button-B4Vt_s_K.js";import"./_button_display-CM-F7xWC.js";import"./spacer-CKeLVN6Y.js";import"./text-c25A2Bo7.js";import"./link.styles-BYhvTIGr.js";import"./title-CMvH1Zdo.js";import"./flex_item-BOTyfm2X.js";const{expect:co,waitFor:mo,within:lo}=__STORYBOOK_MODULE_TEST__,Io={...no,...io,...so,...ao,...ro,...eo,...to,...oo,...$,...X,...Q},o={api:l,iri:"",useLegacy:!0,ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},uo={...o,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0},fo={...o,iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"},To={...o,iri:"https://openenergyplatform.org/ontology/oeo/OEO_00020163",entityType:"individual",ontologyId:"oeo",api:yo},Wo={...o,api:e,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"},Ao={...o,api:l,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"},Eo={...o,api:e,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89",entityType:"property",ontologyId:"ncit"},Po={...o,api:e,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029",entityType:"property",ontologyId:"ro"},bo={...o,api:e,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",entityType:"individual",ontologyId:"envo"},vo={...o,api:e,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603",entityType:"property",ontologyId:"micro"},No={...o,api:e,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page",entityType:"individual",ontologyId:"envo"},ho={...o,api:l,useLegacy:!0,iri:"http://id.loc.gov/vocabulary/iso639-1/zh"},t=async({canvasElement:G})=>{const H=lo(G);await mo(async()=>{const J=H.getByTestId("entity-info");await co(J).toBeInTheDocument()},{timeout:3e3})},rt={title:"Additional Entity Metadata/EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:go}}},component:po,argTypes:Io,args:o},r={args:uo,play:t},a={args:fo,play:t},s={args:To,play:t},i={args:Wo,play:t},n={args:Ao,play:t},g={args:Eo,play:t},p={args:Po,play:t},y={args:bo,play:t},c={args:vo,play:t},m={args:No,play:t},d={args:ho,play:t};var I,u,f;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: TermInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var T,W,A;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: PropertyInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(A=(W=a.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var E,P,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: IndividualInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(b=(P=s.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var v,N,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: InfoWidgetBadgesArgs,
  play: commonEntityInfoWidgetPlay
}`,...(h=(N=i.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var _,O,B;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: OptionalEntityTypeLegacyAPIArgs,
  play: commonEntityInfoWidgetPlay
}`,...(B=(O=n.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var S,L,C;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: InfoWidgetDomainArgs,
  play: commonEntityInfoWidgetPlay
}`,...(C=(L=g.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var D,w,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: InfoWidgetRangeArgs,
  play: commonEntityInfoWidgetPlay
}`,...(R=(w=p.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var k,M,x;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: InfoWidgetPropertyAssertionArgs,
  play: commonEntityInfoWidgetPlay
}`,...(x=(M=y.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var U,V,Z;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: InfoWidgetPropertyCharacteristicsArgs,
  play: commonEntityInfoWidgetPlay
}`,...(Z=(V=c.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var q,z,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityInfoWidgetPlay
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var K,Y,j;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: SkosmosImportArgs,
  play: commonEntityInfoWidgetPlay
}`,...(j=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};const at=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","OptionalEntityTypeLegacyAPI","InfoWidgetDomain","InfoWidgetRange","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","NavigateToEBIPage","SkosmosImport"];export{s as IndividualInfoWidget,i as InfoWidgetBadges,g as InfoWidgetDomain,y as InfoWidgetPropertyAssertion,c as InfoWidgetPropertyCharacteristics,p as InfoWidgetRange,m as NavigateToEBIPage,n as OptionalEntityTypeLegacyAPI,a as PropertyInfoWidget,d as SkosmosImport,r as TermInfoWidget,at as __namedExportsOrder,rt as default};
