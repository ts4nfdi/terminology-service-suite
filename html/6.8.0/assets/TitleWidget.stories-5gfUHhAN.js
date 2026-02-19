import{T as H,S as J,c as X,v as tt,b8 as et,b9 as ot,p as rt,u as at,a6 as it,y as st,i as nt,ba as lt}from"./QueryClientProvider-Cv6DMAwY.js";import{Z as o,E as z}from"./globals-BQAFDkgj.js";import"./index-Bi8AsoDW.js";import"./client-hNkKQuBU.js";import"./useQuery-D80UYlTP.js";import"./OlsThingApi-CBuqiEEB.js";/* empty css                          */import"./text-Dj3fvmL0.js";import"./link.styles-DeXSguuE.js";import"./link-CaYxHkJi.js";import"./href_validator-RjdtbSlK.js";import"./icon-Dbgqo2NT.js";import"./preload-helper-Dp1pzeXC.js";import"./screen_reader_only-DI2vJL1y.js";const{expect:gt,waitFor:ct,within:pt}=__STORYBOOK_MODULE_TEST__,yt={...nt,...st,...it,...at,...rt,...ot,...et,...tt,...X,...J,...H},mt={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"term",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},ut={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",thingType:"term"},Tt={iri:"http://purl.obolibrary.org/obo/NCIT",api:o,ontologyId:"ncit",thingType:"ontology"},dt={api:z,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},ht={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:o,ontologyId:"ncit",thingType:"term",titleText:"title text"},G={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:o,ontologyId:"ncit",thingType:"term"},It={api:z,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},Wt={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",thingType:"term",className:"custom-title-style"},At={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",thingType:"term",className:"none"},bt={iri:"http://purl.obolibrary.org/obo/NCIT",api:o,ontologyId:"ncit",thingType:"ontology",onNavigateTo:(t,r,T)=>{console.log("Navigation with IRI, ontologyId and thingType.",t,r,T)}},ft={iri:"http://purl.obolibrary.org/obo/NCIT",api:o,ontologyId:"ncit",thingType:"ontology",href:"/"},e=async({canvasElement:t})=>{const r=pt(t);await ct(async()=>{const T=r.getByTestId("title");await gt(T).toBeInTheDocument()},{timeout:3e3})};let Ot=0;function St(){return Ot++}const kt={title:"Entity Metadata/TitleWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:lt}}},render:t=>{const r=St();return`
<div id="title_widget_container_${r}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createTitle(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        api:"${t.api}",
        titleText:"${t.titleText}",
        thingType:"${t.thingType}",
        parameter:"${t.parameter}",
        useLegacy:"${t.useLegacy}",
        defaultValue:"${t.defaultValue}",
        className:"${t.className}",
        onNavigateTo:${t.onNavigateTo},
        href:"${t.href}",
    },
    document.querySelector('#title_widget_container_${r}')
)
<\/script>
        `},argTypes:yt,args:mt},a={args:ut,play:e},i={args:Tt,play:e},s={args:dt,play:e},n={args:ht,play:e},l={args:G,play:e},g={args:G,play:e},c={args:It,play:e},p={args:Wt,play:e},y={args:At,play:e},m={args:bt,play:e},u={args:ft,play:e};var d,h,I;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: TitleWidgetDefaultArgs,
  play: commonTitleWidgetPlay
}`,...(I=(h=a.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var W,A,b;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: OntologyTitleArgs,
  play: commonTitleWidgetPlay
}`,...(b=(A=i.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var f,O,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonTitleWidgetPlay
}`,...(S=(O=s.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var N,D,_;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: TitleWidgetWithTitleTextArgs,
  play: commonTitleWidgetPlay
}`,...(_=(D=n.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var C,v,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay
}`,...(P=(v=l.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var x,$,V;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay
}`,...(V=($=g.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var L,w,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonTitleWidgetPlay
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var B,U,k;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: WithStylesArgs,
  play: commonTitleWidgetPlay
}`,...(k=(U=p.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var M,R,Z;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: WithoutStylesArgs,
  play: commonTitleWidgetPlay
}`,...(Z=(R=y.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var j,q,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: OntologyTitleCustomOnNavigateArgs,
  play: commonTitleWidgetPlay
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var K,Q,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: OntologyTitleCustomLinkArgs,
  play: commonTitleWidgetPlay
}`,...(Y=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const Mt=["TitleWidgetDefault","OntologyTitle","SelectingDefiningOntology","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","DefiningOntologyUnavailable","WithStyles","WithoutStyles","OntologyTitleCustomOnNavigate","OntologyTitleCustomLink"];export{c as DefiningOntologyUnavailable,l as IncorrectIriWithDefaultValue,g as IncorrectIriWithoutDefaultValue,i as OntologyTitle,u as OntologyTitleCustomLink,m as OntologyTitleCustomOnNavigate,s as SelectingDefiningOntology,a as TitleWidgetDefault,n as TitleWidgetWithTitleText,p as WithStyles,y as WithoutStyles,Mt as __namedExportsOrder,kt as default};
