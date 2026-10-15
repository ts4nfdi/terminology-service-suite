import{J as H,I as X,c as $,u as tt,ar as et,as as ot,p as rt,q as at,a2 as it,v as st,j as nt,aN as lt}from"./storyArgs-DUK7Dmv-.js";import{T as gt}from"./TitleWidget-ClLo9hXw.js";import{E as z,Z as e}from"./globals-1uEo64sR.js";import"./iframe-WPgVEhzH.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-w_OuNH1X.js";import"./OlsThingApi-CjyOzJ9i.js";import"./text-B_uqAVYr.js";import"./loading_spinner-BJOcsxx2.js";import"./link.styles-Czq83h68.js";import"./link-29o2gVJ-.js";import"./href_validator-DviA79Mc.js";import"./screen_reader_only-5fGB285D.js";import"./icon-BVzkvaIZ.js";const{expect:ct,waitFor:pt,within:yt}=__STORYBOOK_MODULE_TEST__,mt={...nt,...st,...it,...at,...rt,...ot,...et,...tt,...$,...X,...H},ut={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"term",titleText:"",defaultValue:"",className:"",parameter:""},Tt={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"},dt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology"},ht={api:z,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},It={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"},G={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"},Wt={api:z,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},At={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"custom-title-style"},Ot={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"none"},bt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",onNavigateTo:(m,u,T)=>{console.log("Navigation with IRI, ontologyId and thingType.",m,u,T)}},ft={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",href:"/"},t=async({canvasElement:m})=>{const u=yt(m);await pt(async()=>{const T=u.getByTestId("title");await ct(T).toBeInTheDocument()},{timeout:3e3})},kt={title:"Entity Metadata/TitleWidget",component:gt,parameters:{layout:"centered",docs:{description:{component:lt}}},argTypes:mt,args:ut},o={args:Tt,play:t},r={args:dt,play:t},a={args:ht,play:t},i={args:It,play:t},s={args:G,play:t},n={args:G,play:t},l={args:Wt,play:t},g={args:At,play:t},c={args:Ot,play:t},p={args:bt,play:t},y={args:ft,play:t};var d,h,I;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: TitleWidgetDefaultArgs,
  play: commonTitleWidgetPlay
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var W,A,O;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: OntologyTitleArgs,
  play: commonTitleWidgetPlay
}`,...(O=(A=r.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonTitleWidgetPlay
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var D,N,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: TitleWidgetWithTitleTextArgs,
  play: commonTitleWidgetPlay
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var _,P,v;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(k=g.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var R,Z,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: WithoutStylesArgs,
  play: commonTitleWidgetPlay
}`,...(j=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var q,F,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: OntologyTitleCustomOnNavigateArgs,
  play: commonTitleWidgetPlay
}`,...(J=(F=p.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,Y;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: OntologyTitleCustomLinkArgs,
  play: commonTitleWidgetPlay
}`,...(Y=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const Mt=["TitleWidgetDefault","OntologyTitle","SelectingDefiningOntology","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","DefiningOntologyUnavailable","WithStyles","WithoutStyles","OntologyTitleCustomOnNavigate","OntologyTitleCustomLink"];export{l as DefiningOntologyUnavailable,s as IncorrectIriWithDefaultValue,n as IncorrectIriWithoutDefaultValue,r as OntologyTitle,y as OntologyTitleCustomLink,p as OntologyTitleCustomOnNavigate,a as SelectingDefiningOntology,o as TitleWidgetDefault,i as TitleWidgetWithTitleText,g as WithStyles,c as WithoutStyles,Mt as __namedExportsOrder,kt as default};
