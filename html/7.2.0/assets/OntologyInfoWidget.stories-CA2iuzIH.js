import{O as A}from"./widgetDescriptions-MmE0nvU9.js";import{E as N,Z as W}from"./globals-Dr4u9m4r.js";import{q as E,o as _,r as w,u as B,v as P,p as S,H as $,y as h,i as L}from"./QueryClientProvider-BWR2RZKW.js";import{c as D,j as x}from"./client-DFp2fd_t.js";import{W as b}from"./OntologyInfoWidget-DrSRrijC.js";import"./useQuery-BPvcPTdj.js";/* empty css                                 *//* empty css                  */import"./OntologyBadge-DSjYdqyJ.js";import"./badge-B111yAZU.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-D_ZqHfV2.js";import"./_button-Z79RMxwL.js";import"./icon-baKPdkWm.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-_W8cA1zy.js";import"./ClassExpression-DpW3ofPL.js";import"./ExpandableOntologyBadgeList-CgbwAIUG.js";import"./Tooltip-Domw9sTA.js";import"./icon_tip-Na4ZyDxK.js";import"./tool_tip-Bq27UR7w.js";import"./reposition_on_scroll-DH_8Ucla.js";import"./shadow-BUamHIi1.js";import"./panel-hUx2yjLe.js";import"./portal-VFnzH7kw.js";import"./useCombinedRefs-CI08p5vq.js";import"./card-yH-LURbY.js";import"./title-PyS5yIIq.js";import"./text-CPqqw-PA.js";import"./link.styles-BloqUXLf.js";import"./button-u8LXtq5J.js";import"./_button_display-DbZrowCo.js";import"./flex_item-ioVQuD1G.js";const{expect:j,waitFor:M,within:R}=__STORYBOOK_MODULE_TEST__,q={...L,...h,...$,...S,...P,...B,...w,..._,...E},C={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Z={api:W,ontologyId:"atc"},k={api:W,ontologyId:"ncit"},F={api:N,useLegacy:!1,ontologyId:"mp"},H={api:N,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},s=async({canvasElement:o})=>{const t=R(o);await M(async()=>{const e=t.getByTestId("ontology-info");await j(e).toBeInTheDocument()},{timeout:3e3})},g=new WeakMap;function K(o,t){let e=g.get(t);e||(e=D.createRoot(t),g.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:K};let U=0;function Y(){return U++}const Po={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:A}}},render:o=>{const t=Y();return`
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
        `},argTypes:q,args:C},a={args:Z,play:s},n={args:k,play:s},i={args:F,play:s},r={args:H,play:s};var p,m,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: OntologyInfoWidget1Args,
  play: commonOntologyInfoWidgetPlay
}`,...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: OntologyInfoWidget2Args,
  play: commonOntologyInfoWidgetPlay
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var I,f,u;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var O,T,v;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const So=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{r as NavigateToEBIPage,a as OntologyInfoWidget1,n as OntologyInfoWidget2,i as OntologyInfoWidgetOLS4API,So as __namedExportsOrder,Po as default};
