import{T as J}from"./TitleWidget-Ct-2yni7.js";import{Z as e,E as z}from"./globals-CvFyH82M.js";import{au as X,av as $,a as tt,E as et,aw as ot,ax as rt,p as at,C as it,Z as st,H as nt,j as lt,ay as gt}from"./widgetDescriptions-DRTzUJd7.js";import"./iframe-C4bF4efa.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-CQObhazd.js";import"./TitlePresentation-CiPon1d1.js";import"./text-DxkUwwjJ.js";import"./loading_spinner-DhxwhVR-.js";import"./link.styles-BbDjNv3f.js";import"./link-COdNsvSd.js";import"./href_validator-Bp2TaeXQ.js";import"./icon-sERmvwjW.js";import"./screen_reader_only-Co73nWWv.js";import"./OlsThingApi-e3_NKZ_j.js";const{expect:ct,waitFor:pt,within:yt}=__STORYBOOK_MODULE_TEST__,mt={...lt,...nt,...st,...it,...at,...rt,...ot,...et,...tt,...$,...X},ut={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"term",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},Tt={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"},dt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology"},ht={api:z,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},Wt={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"},G={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"},It={api:z,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},At={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"custom-title-style"},Ot={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"none"},bt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",onNavigateTo:(m,u,T)=>{console.log("Navigation with IRI, ontologyId and thingType.",m,u,T)}},ft={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",href:"/"},t=async({canvasElement:m})=>{const u=yt(m);await pt(async()=>{const T=u.getByTestId("title");await ct(T).toBeInTheDocument()},{timeout:3e3})},Mt={title:"Entity Metadata/TitleWidget",component:J,parameters:{layout:"centered",docs:{description:{component:gt}}},argTypes:mt,args:ut},o={args:Tt,play:t},r={args:dt,play:t},a={args:ht,play:t},i={args:Wt,play:t},s={args:G,play:t},n={args:G,play:t},l={args:It,play:t},g={args:At,play:t},c={args:Ot,play:t},p={args:bt,play:t},y={args:ft,play:t};var d,h,W;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: TitleWidgetDefaultArgs,
  play: commonTitleWidgetPlay
}`,...(W=(h=o.parameters)==null?void 0:h.docs)==null?void 0:W.source}}};var I,A,O;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(k=g.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var Z,R,j;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: WithoutStylesArgs,
  play: commonTitleWidgetPlay
}`,...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var F,H,K;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: OntologyTitleCustomOnNavigateArgs,
  play: commonTitleWidgetPlay
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,Y,q;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: OntologyTitleCustomLinkArgs,
  play: commonTitleWidgetPlay
}`,...(q=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const Zt=["TitleWidgetDefault","OntologyTitle","SelectingDefiningOntology","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","DefiningOntologyUnavailable","WithStyles","WithoutStyles","OntologyTitleCustomOnNavigate","OntologyTitleCustomLink"];export{l as DefiningOntologyUnavailable,s as IncorrectIriWithDefaultValue,n as IncorrectIriWithoutDefaultValue,r as OntologyTitle,y as OntologyTitleCustomLink,p as OntologyTitleCustomOnNavigate,a as SelectingDefiningOntology,o as TitleWidgetDefault,i as TitleWidgetWithTitleText,g as WithStyles,c as WithoutStyles,Zt as __namedExportsOrder,Mt as default};
