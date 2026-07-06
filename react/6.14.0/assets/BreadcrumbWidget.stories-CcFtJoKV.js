import{B as U,m as w}from"./OlsEntityApi-DA0Br-_S.js";import{a as L}from"./BreadcrumbWidget-DGYgmaq4.js";import{Z as e,E as h}from"./globals-Dneqqh2P.js";import{o as M,G as x,H as Z,u as q,p as G,n as H,q as K,l as Q,i as R}from"./storyArgs-BuKpVoP9.js";import"./iframe-BgEbPGoe.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-DGPt6DbV.js";import"./OntologyBadge-BVVKR30u.js";import"./badge-rE8WFTAm.js";import"./href_validator-CngU9IKs.js";import"./color_utils-CS09NDzf.js";import"./_button-DWWhk025.js";import"./icon-Ck00f2tb.js";import"./inner_text-DTgG_pCf.js";const{expect:V,waitFor:Y,within:j}=__STORYBOOK_MODULE_TEST__,k={...R,...Q,...K,...H,...G,...q,...Z,...x,...M},z={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"",onNavigateToOntology:"Console message"},J={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:""},X={api:h,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},$={api:h,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},rr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:e,ontologyId:"ncit",entityType:"term",parameter:""},er={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"red",colorSecond:"grey"},or={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},tr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:"",entity:{properties:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",ontologyId:"ncit",shortForm:"NCIT_C2985"}}},r=async({canvasElement:P})=>{const v=j(P);await Y(async()=>{const F=v.getByTestId("breadcrumb");await V(F).toBeInTheDocument()},{timeout:3e3})},Ar={title:"Additional Entity Metadata/BreadcrumbWidget",component:L,parameters:{layout:"centered",docs:{source:{transform:w},description:{component:U}}},argTypes:k,args:z},o={args:J,play:r},t={args:X,play:r},a={args:$,play:r},s={args:rr,play:r},i={args:er,play:r},n={args:or,play:r},c={args:tr,play:r};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: BreadcrumbWidgetDefaultArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,y,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(d=(y=t.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var u,b,T;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(T=(b=a.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var A,B,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var I,S,W;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var _,f,O;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(O=(f=n.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var D,E,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const Br=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle","EntityInput"];export{o as BreadcrumbWidgetDefault,i as CustomColors,n as CustomStyle,a as DefiningOntologyUnavailable,c as EntityInput,s as ErrorBreadcrumbWidget,t as SelectingDefiningOntology,Br as __namedExportsOrder,Ar as default};
