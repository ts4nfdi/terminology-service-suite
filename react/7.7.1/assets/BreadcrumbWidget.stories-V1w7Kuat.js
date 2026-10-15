import{o as U,$ as w,a0 as L,u as M,p as x,t as Z,v as j,q,j as H,a1 as K,H as Q}from"./storyArgs-DUK7Dmv-.js";import{a as R}from"./BreadcrumbWidget-vrJZ0RlO.js";import{Z as e,E as h}from"./globals-1uEo64sR.js";import"./iframe-WPgVEhzH.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-w_OuNH1X.js";import"./OntologyBadge-Dwbs3ooV.js";import"./badge-eQOjaZue.js";import"./loading_spinner-BJOcsxx2.js";import"./href_validator-DviA79Mc.js";import"./color_utils-dTQ0WLSQ.js";import"./_button-DBGwAeWx.js";import"./icon-BVzkvaIZ.js";import"./inner_text-D8PpCILz.js";const{expect:V,waitFor:Y,within:$}=__STORYBOOK_MODULE_TEST__,k={...H,...q,...j,...Z,...x,...M,...L,...w,...U},z={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"",onNavigateToOntology:"Console message"},G={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:""},J={api:h,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},X={api:h,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},rr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:e,ontologyId:"ncit",entityType:"term",parameter:""},er={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"red",colorSecond:"grey"},or={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},tr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:"",entity:{properties:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",ontologyId:"ncit",shortForm:"NCIT_C2985"}}},r=async({canvasElement:P})=>{const v=$(P);await Y(async()=>{const F=v.getByTestId("breadcrumb");await V(F).toBeInTheDocument()},{timeout:3e3})},Ar={title:"Additional Entity Metadata/BreadcrumbWidget",component:R,parameters:{layout:"centered",docs:{source:{transform:Q},description:{component:K}}},argTypes:k,args:z},o={args:G,play:r},t={args:J,play:r},a={args:X,play:r},s={args:rr,play:r},i={args:er,play:r},n={args:or,play:r},c={args:tr,play:r};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: BreadcrumbWidgetDefaultArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var l,y,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(d=(y=t.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var u,b,T;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(T=(b=a.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var A,C,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var I,S,W;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var _,O,f;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(f=(O=n.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var D,E,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const Cr=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle","EntityInput"];export{o as BreadcrumbWidgetDefault,i as CustomColors,n as CustomStyle,a as DefiningOntologyUnavailable,c as EntityInput,s as ErrorBreadcrumbWidget,t as SelectingDefiningOntology,Cr as __namedExportsOrder,Ar as default};
