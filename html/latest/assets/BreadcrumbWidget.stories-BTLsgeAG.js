import{o as w,a3 as F,a4 as L,v as x,p as U,x as M,y as Z,u as j,i as q,a5 as K}from"./QueryClientProvider-Cv6DMAwY.js";import{Z as o,E as $}from"./globals-BQAFDkgj.js";import"./index-DMmwMmfI.js";import"./client-hNkKQuBU.js";import"./BreadcrumbWidget-IDimH7uT.js";import"./useQuery-D80UYlTP.js";import"./OntologyBadge-VEH00cI7.js";import"./badge-2Dv_I7s6.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-CxG7mbtu.js";import"./_button-DR0DDSYL.js";import"./icon-Dbgqo2NT.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-Ooo0Ljl4.js";import"./BreadcrumbPresentation-C0_-gNyl.js";const{expect:Q,waitFor:R,within:V}=__STORYBOOK_MODULE_TEST__,Y={...q,...j,...Z,...M,...U,...x,...L,...F,...w},k={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},z={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},G={api:$,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},H={api:$,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},J={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},X={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"red",colorSecond:"grey"},rr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},er={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",entity:{properties:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",ontologyId:"ncit",shortForm:"NCIT_C2985"}}},e=async({canvasElement:r})=>{const t=V(r);await R(async()=>{const P=t.getByTestId("breadcrumb");await Q(P).toBeInTheDocument()},{timeout:3e3})};let or=0;function tr(){return or++}const Ir={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:K}}},render:r=>{const t=tr();return`
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
        `},argTypes:Y,args:k},a={args:z,play:e},i={args:G,play:e},n={args:H,play:e},s={args:J,play:e},c={args:X,play:e},p={args:rr,play:e},l={args:er,play:e};var m,g,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: BreadcrumbWidgetDefaultArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var y,u,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var T,A,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(I=(A=n.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var C,S,B;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var _,f,h;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var O,W,D;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(D=(W=p.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var N,E,v;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const Cr=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle","EntityInput"];export{a as BreadcrumbWidgetDefault,c as CustomColors,p as CustomStyle,n as DefiningOntologyUnavailable,l as EntityInput,s as ErrorBreadcrumbWidget,i as SelectingDefiningOntology,Cr as __namedExportsOrder,Ir as default};
