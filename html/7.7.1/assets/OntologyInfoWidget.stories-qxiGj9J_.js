import{O as A}from"./widgetDescriptions-MmE0nvU9.js";import{E as W,Z as v}from"./globals-1uEo64sR.js";import{t as E,o as w,u as _,w as B,x as P,p as S,J as $,A as h,j as L}from"./QueryClientProvider-6hKZIOP_.js";import{c as D,j as x}from"./client-DFp2fd_t.js";import{W as b}from"./OntologyInfoWidget-BLUrDxnU.js";import"./useQuery-PpBP71X6.js";/* empty css                                 *//* empty css                  */import"./OntologyBadge-BR04T-Xn.js";import"./badge-DG7v8hsD.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-DyNMilgU.js";import"./_button-Bj85HAIw.js";import"./icon-0ejhv3d-.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-ffLv0PfC.js";import"./ClassExpression-D9_uUkk7.js";import"./ExpandableOntologyBadgeList-DJLsjmWx.js";import"./Tooltip-DjIQ8OAZ.js";import"./icon_tip-DTyV_kVK.js";import"./tool_tip-Va_Fx6UH.js";import"./reposition_on_scroll-zamDhJss.js";import"./shadow-ytd10zAr.js";import"./panel-DW4ou0_L.js";import"./portal-CYk9vyXd.js";import"./useCombinedRefs-CI08p5vq.js";import"./card-B-b-fMxL.js";import"./title-Cq2pr2Qr.js";import"./text-wLnySTD4.js";import"./link.styles-C3kPFcK_.js";import"./button-BvqPTkoD.js";import"./_button_display-fV70tv3c.js";import"./flex_item-D7Lfm8gL.js";const{expect:j,waitFor:M,within:R}=__STORYBOOK_MODULE_TEST__,C={...L,...h,...$,...S,...P,...B,..._,...w,...E},q={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Z={api:v,ontologyId:"atc"},k={api:v,ontologyId:"ncit"},F={api:W,useLegacy:!1,ontologyId:"mp"},J={api:W,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},s=async({canvasElement:o})=>{const t=R(o);await M(async()=>{const e=t.getByTestId("ontology-info");await j(e).toBeInTheDocument()},{timeout:3e3})},g=new WeakMap;function K(o,t){let e=g.get(t);e||(e=D.createRoot(t),g.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:K};let U=0;function Y(){return U++}const Po={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:A}}},render:o=>{const t=Y();return`
<div id="ontology_info_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createOntologyInfo(
    {
        ontologyId:"${o.ontologyId}",
        api:"${o.api}",
        parameter:"${o.parameter}",
        useLegacy:${o.useLegacy},
        hasTitle:${o.hasTitle},
        showBadges:${o.showBadges},
        width:${o.width},
        onNavigateToEntity:${o.onNavigateToEntity},
        onNavigateToOntology:${o.onNavigateToOntology},
        onNavigateToDisambiguate:${o.onNavigateToDisambiguate},
        className:${o.className}
    },
    document.querySelector('#ontology_info_widget_container_${t}')
)
<\/script>
        `},argTypes:C,args:q},a={args:Z,play:s},n={args:k,play:s},i={args:F,play:s},r={args:J,play:s};var p,m,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: OntologyInfoWidget1Args,
  play: commonOntologyInfoWidgetPlay
}`,...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: OntologyInfoWidget2Args,
  play: commonOntologyInfoWidgetPlay
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var I,f,u;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var O,T,N;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(N=(T=r.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const So=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{r as NavigateToEBIPage,a as OntologyInfoWidget1,n as OntologyInfoWidget2,i as OntologyInfoWidgetOLS4API,So as __namedExportsOrder,Po as default};
