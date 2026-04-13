import{o as w,U as F,V as L,v as U,p as x,x as M,y as V,u as Z,i as j,W as q}from"./QueryClientProvider-tBG0NWM0.js";import{Z as o,E as $}from"./globals-Dneqqh2P.js";import"./index-Ci3PGGUV.js";import"./client-hNkKQuBU.js";import"./BreadcrumbWidget-BW4L0WuF.js";import"./useQuery-CJ8-LNvG.js";import"./OntologyBadge-D74mBx0r.js";import"./badge-1LAF02M_.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-BGkdMWmt.js";import"./_button-DlbInGvA.js";import"./icon-CW9K28UO.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CnLckb93.js";import"./BreadcrumbPresentation-Ube3d70-.js";const{expect:K,waitFor:Q,within:R}=__STORYBOOK_MODULE_TEST__,Y={...j,...Z,...V,...M,...x,...U,...L,...F,...w},k={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},z={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},G={api:$,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},H={api:$,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},J={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},X={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"red",colorSecond:"grey"},rr={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},er={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",entity:{properties:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",ontologyId:"ncit",shortForm:"NCIT_C2985"}}},e=async({canvasElement:r})=>{const t=R(r);await Q(async()=>{const P=t.getByTestId("breadcrumb");await K(P).toBeInTheDocument()},{timeout:3e3})};let or=0;function tr(){return or++}const Ir={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:q}}},render:r=>{const t=tr();return`
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
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var W,O,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(D=(O=p.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var N,E,v;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const Cr=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle","EntityInput"];export{a as BreadcrumbWidgetDefault,c as CustomColors,p as CustomStyle,n as DefiningOntologyUnavailable,l as EntityInput,s as ErrorBreadcrumbWidget,i as SelectingDefiningOntology,Cr as __namedExportsOrder,Ir as default};
