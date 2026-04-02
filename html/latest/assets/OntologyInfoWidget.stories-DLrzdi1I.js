import{q as A,o as E,r as w,v as _,w as B,p as P,M as S,z as $,i as h,be as L}from"./QueryClientProvider-DoKhBl31.js";import{Z as N,E as W}from"./globals-BQAFDkgj.js";import{c as D,j as x}from"./client-hNkKQuBU.js";import{W as b}from"./OntologyInfoWidget-CF3RaLB_.js";import"./useQuery-BUxAEVUP.js";/* empty css                                 */import"./OntologyBadge-C4-mp1PH.js";import"./badge-qZhq8Gqg.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-BHaxMbo3.js";import"./_button-Dz-XatGf.js";import"./icon-1SMQ27Zb.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-DM3VqPGZ.js";import"./ClassExpression-D8XndRvk.js";import"./ExpandableOntologyBadgeList-DlR6X2Vj.js";import"./Tooltip-B6BFRu-Q.js";import"./icon_tip-DQPkXEpj.js";import"./tool_tip-BswyLmne.js";import"./shadow-CxIvaG3S.js";import"./panel-C3cvE46E.js";import"./popover_arrow.styles-CAvBaF2y.js";import"./portal-_OCfn0QL.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./card-Bj4evJ1x.js";import"./title-CFV7nWBF.js";import"./text-D1HJ6Q9S.js";import"./link.styles-YP6iW4HB.js";import"./button-C57y98bM.js";import"./_button_display-CMPPXgXv.js";import"./flex_item-CXPIO8tU.js";const{expect:M,waitFor:j,within:R}=__STORYBOOK_MODULE_TEST__,q={...h,...$,...S,...P,...B,..._,...w,...E,...A},C={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Z={api:N,ontologyId:"atc"},k={api:N,ontologyId:"ncit"},z={api:W,useLegacy:!1,ontologyId:"mp"},F={api:W,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},s=async({canvasElement:o})=>{const t=R(o);await j(async()=>{const e=t.getByTestId("ontology-info");await M(e).toBeInTheDocument()},{timeout:3e3})},g=new WeakMap;function K(o,t){let e=g.get(t);e||(e=D.createRoot(t),g.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:K};let U=0;function Y(){return U++}const Bo={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:L}}},render:o=>{const t=Y();return`
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
        `},argTypes:q,args:C},a={args:Z,play:s},n={args:k,play:s},i={args:z,play:s},r={args:F,play:s};var p,m,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const Po=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{r as NavigateToEBIPage,a as OntologyInfoWidget1,n as OntologyInfoWidget2,i as OntologyInfoWidgetOLS4API,Po as __namedExportsOrder,Bo as default};
