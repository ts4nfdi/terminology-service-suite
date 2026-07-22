import{B as w}from"./widgetDescriptions-MmE0nvU9.js";import{Z as o,E as h}from"./globals-Dneqqh2P.js";import{o as F,M as L,N as x,v as M,p as U,x as Z,y as j,u as q,i as K}from"./QueryClientProvider-CtwX41Lz.js";import"./index-CS_fQTEr.js";import"./client-DFp2fd_t.js";import"./BreadcrumbWidget-DsGmlYdQ.js";import"./useQuery-B-NHskGH.js";import"./OntologyBadge-D2arM_nt.js";import"./badge-8WVhgBVL.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-DjHAbZRu.js";import"./_button-PWlvcPYJ.js";import"./icon-C0mmS-ft.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-C8Kaes5k.js";import"./BreadcrumbPresentation-BJjwt5qO.js";/* empty css                               */const{expect:Q,waitFor:R,within:V}=__STORYBOOK_MODULE_TEST__,Y={...K,...q,...j,...Z,...U,...M,...x,...L,...F},k={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"",onNavigateToOntology:"Console message"},z={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:""},G={api:h,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},H={api:h,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},J={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:o,ontologyId:"ncit",entityType:"term",parameter:""},X={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"red",colorSecond:"grey"},rr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},er={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"",entity:{properties:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",ontologyId:"ncit",shortForm:"NCIT_C2985"}}},e=async({canvasElement:r})=>{const t=V(r);await R(async()=>{const P=t.getByTestId("breadcrumb");await Q(P).toBeInTheDocument()},{timeout:3e3})};let or=0;function tr(){return or++}const Cr={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:w}}},render:r=>{const t=tr();return`
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
        `},argTypes:Y,args:k},a={args:z,play:e},i={args:G,play:e},n={args:H,play:e},s={args:J,play:e},c={args:X,play:e},p={args:rr,play:e},m={args:er,play:e};var g,l,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(D=(N=p.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,v,$;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
}`,...($=(v=m.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};const Sr=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle","EntityInput"];export{a as BreadcrumbWidgetDefault,c as CustomColors,p as CustomStyle,n as DefiningOntologyUnavailable,m as EntityInput,s as ErrorBreadcrumbWidget,i as SelectingDefiningOntology,Sr as __namedExportsOrder,Cr as default};
