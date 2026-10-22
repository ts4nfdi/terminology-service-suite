import{B as w}from"./widgetDescriptions-MmE0nvU9.js";import{Z as o,E as $}from"./globals-1uEo64sR.js";import{o as F,N as L,P as U,w as x,p as M,y as j,z as Z,v as q,j as z}from"./QueryClientProvider-6hKZIOP_.js";import"./index-Cs3LcYvg.js";import"./client-DFp2fd_t.js";import"./BreadcrumbWidget-DYNaQqvH.js";import"./useQuery-PpBP71X6.js";import"./OntologyBadge-BR04T-Xn.js";import"./badge-DG7v8hsD.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-DyNMilgU.js";import"./_button-Bj85HAIw.js";import"./icon-0ejhv3d-.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-ffLv0PfC.js";import"./BreadcrumbPresentation-CYdP-m8p.js";/* empty css                               */const{expect:K,waitFor:Q,within:R}=__STORYBOOK_MODULE_TEST__,V={...z,...q,...Z,...j,...M,...x,...U,...L,...F},Y={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"",onNavigateToOntology:"Console message"},k={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:""},G={api:$,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},H={api:$,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},J={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:o,ontologyId:"ncit",entityType:"term",parameter:""},X={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"red",colorSecond:"grey"},rr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},er={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"",entity:{properties:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",ontologyId:"ncit",shortForm:"NCIT_C2985"}}},e=async({canvasElement:r})=>{const t=R(r);await Q(async()=>{const h=t.getByTestId("breadcrumb");await K(h).toBeInTheDocument()},{timeout:3e3})};let or=0;function tr(){return or++}const Cr={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:w}}},render:r=>{const t=tr();return`
<div id="breadcrumb_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createBreadcrumb(
    {
        iri:"${r.iri}",
        ontologyId:"${r.ontologyId}",
        api:"${r.api}",
        entityType:"${r.entityType}",
        useLegacy:${r.useLegacy},
        colorFirst:"${r.colorFirst}",
        colorSecond:"${r.colorSecond}",
        parameter:"${r.parameter}",
        onNavigateToOntology:${r.onNavigateToOntology},
        className: "${r.className}"
    },
    document.querySelector('#breadcrumb_widget_container_${t}')
)
<\/script>
        `},argTypes:V,args:Y},a={args:k,play:e},i={args:G,play:e},n={args:H,play:e},s={args:J,play:e},c={args:X,play:e},p={args:rr,play:e},m={args:er,play:e};var g,l,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: BreadcrumbWidgetDefaultArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var d,u,b;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var T,A,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(I=(A=n.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var B,C,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var _,O,W;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var f,N,D;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(D=(N=p.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,v,P;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(P=(v=m.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const Sr=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle","EntityInput"];export{a as BreadcrumbWidgetDefault,c as CustomColors,p as CustomStyle,n as DefiningOntologyUnavailable,m as EntityInput,s as ErrorBreadcrumbWidget,i as SelectingDefiningOntology,Sr as __namedExportsOrder,Cr as default};
