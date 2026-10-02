import{o as U,_ as w,$ as L,u as M,p as x,r as Z,t as j,n as G,j as K,a0 as Q,G as R}from"./storyArgs-C8WfEOzb.js";import{a as V}from"./BreadcrumbWidget-Bz8Kwhud.js";import{Z as e,E as h}from"./globals-Dr4u9m4r.js";import"./iframe-JBdhx46N.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-DeTO22kn.js";import"./OntologyBadge--pNSCqdG.js";import"./badge-b0c5PCt2.js";import"./loading_spinner-DUthGdDX.js";import"./href_validator-CkekUGF5.js";import"./color_utils-B7F8VJqM.js";import"./_button-CI1zSG47.js";import"./icon-BcZJV3r9.js";import"./inner_text-C-X7SGtb.js";const{expect:Y,waitFor:$,within:k}=__STORYBOOK_MODULE_TEST__,q={...K,...G,...j,...Z,...x,...M,...L,...w,...U},z={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"",onNavigateToOntology:"Console message"},H={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:""},J={api:h,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},X={api:h,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},rr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:e,ontologyId:"ncit",entityType:"term",parameter:""},er={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"red",colorSecond:"grey"},or={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},tr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",entityType:"term",parameter:"",entity:{properties:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",ontologyId:"ncit",shortForm:"NCIT_C2985"}}},r=async({canvasElement:P})=>{const v=k(P);await $(async()=>{const F=v.getByTestId("breadcrumb");await Y(F).toBeInTheDocument()},{timeout:3e3})},Ar={title:"Additional Entity Metadata/BreadcrumbWidget",component:V,parameters:{layout:"centered",docs:{source:{transform:R},description:{component:Q}}},argTypes:q,args:z},o={args:H,play:r},t={args:J,play:r},a={args:X,play:r},s={args:rr,play:r},n={args:er,play:r},i={args:or,play:r},c={args:tr,play:r};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var I,S,_;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var W,O,f;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(f=(O=i.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var D,E,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const Cr=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle","EntityInput"];export{o as BreadcrumbWidgetDefault,n as CustomColors,i as CustomStyle,a as DefiningOntologyUnavailable,c as EntityInput,s as ErrorBreadcrumbWidget,t as SelectingDefiningOntology,Cr as __namedExportsOrder,Ar as default};
