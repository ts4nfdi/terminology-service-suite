import{Z as o,E as P}from"./globals-CvFyH82M.js";import{x as F,a2 as w,a3 as x,B as U,p as L,F as M,G as q,z as Z,q as j,a4 as z}from"./storyArgs-AFjXh7XW.js";import"./index-UV9g94KQ.js";import"./index-ZCdkkhYt.js";import"./BreadcrumbWidget-BWy6fB8k.js";import"./useQuery-BSQecOR7.js";import"./BreadcrumbPresentation-CUIOsEdc.js";import"./badge-WsMI9jLf.js";import"./href_validator-CCXnw10u.js";import"./color_utils-cNYMWQjX.js";import"./_button-jUUP9GKn.js";import"./icon-RvlT3YZ5.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-DNMRkBuz.js";const{expect:G,waitFor:K,within:Q}=__STORYBOOK_MODULE_TEST__,R={...j,...Z,...q,...M,...L,...U,...x,...w,...F},V={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},Y={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},k={api:P,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},H={api:P,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},J={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},X={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"red",colorSecond:"grey"},rr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},er={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",entity:{properties:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",ontologyId:"ncit",shortForm:"NCIT_C2985"}}},e=async({canvasElement:r})=>{const t=Q(r);await K(async()=>{const $=t.getByTestId("breadcrumb");await G($).toBeInTheDocument()},{timeout:3e3})};let or=0;function tr(){return or++}const Ar={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:z}}},render:r=>{const t=tr();return`
<div id="breadcrumb_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createBreadcrumb(
    {
        iri:"${r.iri}",
        ontologyId:"${r.ontologyId}",
        api:"${r.api}",
        entityType:"${r.entityType}",
        colorFirst:"${r.colorFirst}",
        colorSecond:"${r.colorSecond}",
        parameter:"${r.parameter}",
        onNavigateToOntology:${r.onNavigateToOntology},
        className: "${r.className}"
    },
    document.querySelector('#breadcrumb_widget_container_${t}')
)
<\/script>
        `},argTypes:R,args:V},a={args:Y,play:e},i={args:k,play:e},n={args:H,play:e},s={args:J,play:e},c={args:X,play:e},p={args:rr,play:e},l={args:er,play:e};var m,g,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: BreadcrumbWidgetDefaultArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var y,u,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var T,A,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(I=(A=n.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var B,C,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var _,f,h;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var O,W,D;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(D=(W=p.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var N,E,v;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const Ir=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle","EntityInput"];export{a as BreadcrumbWidgetDefault,c as CustomColors,p as CustomStyle,n as DefiningOntologyUnavailable,l as EntityInput,s as ErrorBreadcrumbWidget,i as SelectingDefiningOntology,Ir as __namedExportsOrder,Ar as default};
