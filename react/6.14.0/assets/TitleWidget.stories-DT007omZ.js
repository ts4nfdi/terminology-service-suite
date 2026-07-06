import{L as J}from"./OlsEntityApi-DA0Br-_S.js";import{T as X}from"./TitleWidget-VdO-C_Es.js";import{E as G,Z as e}from"./globals-Dneqqh2P.js";import{w as $,v as tt,c as et,u as ot,Z as rt,_ as at,p as it,l as st,I as nt,q as lt,i as gt}from"./storyArgs-BuKpVoP9.js";import"./iframe-BgEbPGoe.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-DGPt6DbV.js";import"./OlsThingApi-CjUthiao.js";import"./TitlePresentation-5mIMdqwb.js";import"./text-Dx86h5RK.js";import"./link.styles-BkWFlva0.js";import"./link-CZCanm7W.js";import"./href_validator-CngU9IKs.js";import"./screen_reader_only-Chj49qTq.js";import"./icon-Ck00f2tb.js";const{expect:ct,waitFor:pt,within:yt}=__STORYBOOK_MODULE_TEST__,mt={...gt,...lt,...nt,...st,...it,...at,...rt,...ot,...et,...tt,...$},ut={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"term",titleText:"",defaultValue:"",className:"",parameter:""},Tt={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"},dt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology"},ht={api:G,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},It={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"},H={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"},Wt={api:G,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},At={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"custom-title-style"},Ot={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"none"},bt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",onNavigateTo:(m,u,T)=>{console.log("Navigation with IRI, ontologyId and thingType.",m,u,T)}},ft={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",href:"/"},t=async({canvasElement:m})=>{const u=yt(m);await pt(async()=>{const T=u.getByTestId("title");await ct(T).toBeInTheDocument()},{timeout:3e3})},Mt={title:"Entity Metadata/TitleWidget",component:X,parameters:{layout:"centered",docs:{description:{component:J}}},argTypes:mt,args:ut},o={args:Tt,play:t},r={args:dt,play:t},a={args:ht,play:t},i={args:It,play:t},s={args:H,play:t},n={args:H,play:t},l={args:Wt,play:t},g={args:At,play:t},c={args:Ot,play:t},p={args:bt,play:t},y={args:ft,play:t};var d,h,I;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(P=s.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var x,V,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay
}`,...(L=(V=n.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var E,w,B;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonTitleWidgetPlay
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var U,k,M;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: WithStylesArgs,
  play: commonTitleWidgetPlay
}`,...(M=(k=g.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var Z,R,q;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: WithoutStylesArgs,
  play: commonTitleWidgetPlay
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var F,K,Q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: OntologyTitleCustomOnNavigateArgs,
  play: commonTitleWidgetPlay
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,j,z;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: OntologyTitleCustomLinkArgs,
  play: commonTitleWidgetPlay
}`,...(z=(j=y.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const Zt=["TitleWidgetDefault","OntologyTitle","SelectingDefiningOntology","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","DefiningOntologyUnavailable","WithStyles","WithoutStyles","OntologyTitleCustomOnNavigate","OntologyTitleCustomLink"];export{l as DefiningOntologyUnavailable,s as IncorrectIriWithDefaultValue,n as IncorrectIriWithoutDefaultValue,r as OntologyTitle,y as OntologyTitleCustomLink,p as OntologyTitleCustomOnNavigate,a as SelectingDefiningOntology,o as TitleWidgetDefault,i as TitleWidgetWithTitleText,g as WithStyles,c as WithoutStyles,Zt as __namedExportsOrder,Mt as default};
