import{q as A,o as E,r as w,v as _,w as B,p as P,Z as S,z as $,i as h,bc as L}from"./QueryClientProvider-D8K9bTbJ.js";import{Z as N,E as W}from"./globals-BQAFDkgj.js";import{c as D,j as x}from"./client-hNkKQuBU.js";import{W as b}from"./OntologyInfoWidget-DconKs8X.js";import"./useQuery-Dc2JQcLb.js";/* empty css                                 */import"./OntologyBadge-CxJaNx3Z.js";import"./badge-DxSqQw1e.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-BPHhPKbH.js";import"./_button-Rlt13UgJ.js";import"./icon-D9LuBdn0.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-eK6dSNvJ.js";import"./RenderedReified-BSAunmbk.js";import"./ExpandableOntologyBadgeList-BJqctQdj.js";import"./Tooltip-HzqOVg_r.js";import"./icon_tip-BJxcXO1b.js";import"./tool_tip-B4cjRSmI.js";import"./shadow-DokUYloO.js";import"./panel-CdcDF6Xe.js";import"./popover_arrow.styles-DYxcxk5U.js";import"./portal-Y4k7GxLd.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./card-BxnZMHp1.js";import"./title-DIzCZEOd.js";import"./text-BIRiCrdX.js";import"./link.styles-juWMymlq.js";import"./button-qBVuCdlQ.js";import"./_button_display-n_FzhJR_.js";import"./flex_item-CakXoFf1.js";const{expect:j,waitFor:M,within:R}=__STORYBOOK_MODULE_TEST__,q={...h,...$,...S,...P,...B,..._,...w,...E,...A},C={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Z={api:N,ontologyId:"atc"},k={api:N,ontologyId:"ncit"},z={api:W,useLegacy:!1,ontologyId:"mp"},F={api:W,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},s=async({canvasElement:o})=>{const t=R(o);await M(async()=>{const e=t.getByTestId("ontology-info");await j(e).toBeInTheDocument()},{timeout:3e3})},g=new WeakMap;function K(o,t){let e=g.get(t);e||(e=D.createRoot(t),g.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:K};let U=0;function Y(){return U++}const Bo={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:L}}},render:o=>{const t=Y();return`
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
