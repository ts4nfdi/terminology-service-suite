import{o as w,ap as F,aq as L,v as x,p as U,x as M,y as j,u as q,j as Z,ar as K}from"./provider-DhHV66nY.js";import{Z as o,E as h}from"./globals-1uEo64sR.js";import"./index-B8f6z20w.js";import"./client-DFp2fd_t.js";import"./BreadcrumbWidget-CpN4brMX.js";import"./QueryClientProvider-BiMFCrBx.js";import"./useQuery-tjcomNSo.js";import"./OntologyBadge-BNxGJs9M.js";import"./badge-DpG9ODGG.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-9svs92vp.js";import"./_button-BSE-Gefv.js";import"./icon-CQRupbKR.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-Dnj4m-7S.js";import"./BreadcrumbPresentation-6_yzXvc4.js";/* empty css                               */const{expect:Q,waitFor:R,within:V}=__STORYBOOK_MODULE_TEST__,Y={...Z,...q,...j,...M,...U,...x,...L,...F,...w},k={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"",onNavigateToOntology:"Console message"},z={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:""},G={api:h,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},H={api:h,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},J={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:o,ontologyId:"ncit",entityType:"term",parameter:""},X={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"red",colorSecond:"grey"},rr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},er={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"",entity:{properties:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",ontologyId:"ncit",shortForm:"NCIT_C2985"}}},e=async({canvasElement:r})=>{const t=V(r);await R(async()=>{const P=t.getByTestId("breadcrumb");await Q(P).toBeInTheDocument()},{timeout:3e3})};let or=0;function tr(){return or++}const Sr={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:K}}},render:r=>{const t=tr();return`
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
}`,...(I=(A=n.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var C,S,B;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var _,O,W;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var f,D,N;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var E,v,$;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
}`,...($=(v=m.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};const Br=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle","EntityInput"];export{a as BreadcrumbWidgetDefault,c as CustomColors,p as CustomStyle,n as DefiningOntologyUnavailable,m as EntityInput,s as ErrorBreadcrumbWidget,i as SelectingDefiningOntology,Br as __namedExportsOrder,Sr as default};
