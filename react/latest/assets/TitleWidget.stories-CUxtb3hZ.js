import{I as J,H as X,c as $,u as tt,ag as et,ah as ot,p as rt,m as at,Y as it,r as st,i as nt,aC as lt}from"./storyArgs-BXVdPPjt.js";import{T as gt}from"./TitleWidget-DyGK4Awe.js";import{E as z,Z as e}from"./globals-Dneqqh2P.js";import"./iframe-CJjCTkBz.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-C3kH7y9o.js";import"./OlsThingApi-8CZlPu6A.js";import"./TitlePresentation-CLMQ6wMj.js";import"./text-DJrkA4f-.js";import"./link.styles-TuhNvmO2.js";import"./link-CvBSM9SV.js";import"./href_validator-DptWHRUT.js";import"./screen_reader_only-BYwJe7cx.js";import"./icon-tJidiDO6.js";const{expect:ct,waitFor:pt,within:yt}=__STORYBOOK_MODULE_TEST__,mt={...nt,...st,...it,...at,...rt,...ot,...et,...tt,...$,...X,...J},ut={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"term",titleText:"",defaultValue:"",className:"",parameter:""},Tt={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"},dt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology"},ht={api:z,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},It={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"},G={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"},Wt={api:z,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},At={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"custom-title-style"},Ot={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"none"},bt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",onNavigateTo:(m,u,T)=>{console.log("Navigation with IRI, ontologyId and thingType.",m,u,T)}},ft={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",href:"/"},t=async({canvasElement:m})=>{const u=yt(m);await pt(async()=>{const T=u.getByTestId("title");await ct(T).toBeInTheDocument()},{timeout:3e3})},kt={title:"Entity Metadata/TitleWidget",component:gt,parameters:{layout:"centered",docs:{description:{component:lt}}},argTypes:mt,args:ut},o={args:Tt,play:t},r={args:dt,play:t},a={args:ht,play:t},i={args:It,play:t},s={args:G,play:t},n={args:G,play:t},l={args:Wt,play:t},g={args:At,play:t},c={args:Ot,play:t},p={args:bt,play:t},y={args:ft,play:t};var d,h,I;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: TitleWidgetDefaultArgs,
  play: commonTitleWidgetPlay
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var W,A,O;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: OntologyTitleArgs,
  play: commonTitleWidgetPlay
}`,...(O=(A=r.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonTitleWidgetPlay
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var D,C,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: TitleWidgetWithTitleTextArgs,
  play: commonTitleWidgetPlay
}`,...(N=(C=i.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var _,P,v;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay
}`,...(v=(P=s.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var x,V,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay
}`,...(E=(V=n.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var L,w,B;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonTitleWidgetPlay
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var U,k,M;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: WithStylesArgs,
  play: commonTitleWidgetPlay
}`,...(M=(k=g.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var R,Y,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: WithoutStylesArgs,
  play: commonTitleWidgetPlay
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var F,H,K;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: OntologyTitleCustomOnNavigateArgs,
  play: commonTitleWidgetPlay
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,j,q;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: OntologyTitleCustomLinkArgs,
  play: commonTitleWidgetPlay
}`,...(q=(j=y.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const Mt=["TitleWidgetDefault","OntologyTitle","SelectingDefiningOntology","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","DefiningOntologyUnavailable","WithStyles","WithoutStyles","OntologyTitleCustomOnNavigate","OntologyTitleCustomLink"];export{l as DefiningOntologyUnavailable,s as IncorrectIriWithDefaultValue,n as IncorrectIriWithoutDefaultValue,r as OntologyTitle,y as OntologyTitleCustomLink,p as OntologyTitleCustomOnNavigate,a as SelectingDefiningOntology,o as TitleWidgetDefault,i as TitleWidgetWithTitleText,g as WithStyles,c as WithoutStyles,Mt as __namedExportsOrder,kt as default};
