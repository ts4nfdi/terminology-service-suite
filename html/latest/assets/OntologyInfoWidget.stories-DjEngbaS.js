import{q as A,o as E,r as w,v as _,w as B,p as P,Z as S,z as $,i as h,bc as L}from"./QueryClientProvider-Cv6DMAwY.js";import{Z as N,E as W}from"./globals-BQAFDkgj.js";import{c as D,j as x}from"./client-hNkKQuBU.js";import{W as b}from"./OntologyInfoWidget-JdhsT_4C.js";import"./useQuery-D80UYlTP.js";/* empty css                                 */import"./OntologyBadge-VEH00cI7.js";import"./badge-2Dv_I7s6.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-CxG7mbtu.js";import"./_button-DR0DDSYL.js";import"./icon-Dbgqo2NT.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-Ooo0Ljl4.js";import"./RenderedReified-7PtmsR14.js";import"./ExpandableOntologyBadgeList-RmK6elIf.js";import"./Tooltip-DIwxeMH_.js";import"./icon_tip-4Wg2s-aI.js";import"./tool_tip-4Qko17uz.js";import"./shadow-BRsMk7Ev.js";import"./panel-pG-TvU-E.js";import"./popover_arrow.styles-CHH0a3nc.js";import"./portal-DMzDUsME.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./card-CJIbcMT9.js";import"./title-BjAFpbjY.js";import"./text-Dj3fvmL0.js";import"./link.styles-DeXSguuE.js";import"./button-Dca_e4tp.js";import"./_button_display-mhn372ul.js";import"./flex_item-DWpVg6bz.js";const{expect:j,waitFor:M,within:R}=__STORYBOOK_MODULE_TEST__,q={...h,...$,...S,...P,...B,..._,...w,...E,...A},C={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Z={api:N,ontologyId:"atc"},k={api:N,ontologyId:"ncit"},z={api:W,useLegacy:!1,ontologyId:"mp"},F={api:W,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},s=async({canvasElement:o})=>{const t=R(o);await M(async()=>{const e=t.getByTestId("ontology-info");await j(e).toBeInTheDocument()},{timeout:3e3})},g=new WeakMap;function K(o,t){let e=g.get(t);e||(e=D.createRoot(t),g.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:K};let U=0;function Y(){return U++}const Bo={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:L}}},render:o=>{const t=Y();return`
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
        `},argTypes:q,args:C},a={args:Z,play:s},n={args:k,play:s},i={args:z,play:s},r={args:F,play:s};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: OntologyInfoWidget1Args,
  play: commonOntologyInfoWidgetPlay
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var y,l,d;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: OntologyInfoWidget2Args,
  play: commonOntologyInfoWidgetPlay
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var I,f,u;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var O,T,v;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const Po=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{r as NavigateToEBIPage,a as OntologyInfoWidget1,n as OntologyInfoWidget2,i as OntologyInfoWidgetOLS4API,Po as __namedExportsOrder,Bo as default};
