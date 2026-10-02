import{O as A}from"./widgetDescriptions-MmE0nvU9.js";import{E as N,Z as W}from"./globals-Dr4u9m4r.js";import{r as E,o as w,t as _,v as B,w as P,p as S,I as $,z as h,j as L}from"./QueryClientProvider-Do8L4puV.js";import{c as D,j as x}from"./client-DFp2fd_t.js";import{W as b}from"./OntologyInfoWidget-DZ5FI0CZ.js";import"./useQuery-CIkILH5n.js";/* empty css                                 *//* empty css                  */import"./OntologyBadge-Dxk6bInt.js";import"./badge-BaoRKJqd.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-BU9yCWrU.js";import"./_button-DhlYrVXD.js";import"./icon-Cm1UIAGU.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-MoOv1346.js";import"./ClassExpression-D4zrKPdb.js";import"./ExpandableOntologyBadgeList-BwNrNYzV.js";import"./Tooltip-980VDW8B.js";import"./icon_tip-DoOGhfqJ.js";import"./tool_tip-BzGt3NSt.js";import"./reposition_on_scroll-Ceki3zLD.js";import"./shadow-djjuuZEz.js";import"./panel-D0b7-77x.js";import"./portal-EesfENoO.js";import"./useCombinedRefs-CI08p5vq.js";import"./card-CAra5ilQ.js";import"./title-COw6zJis.js";import"./text-BAeCwnXn.js";import"./link.styles-B0I9gBTI.js";import"./button-I0f2nRz-.js";import"./_button_display-BE2tt-PT.js";import"./flex_item-x_hbH7Bu.js";const{expect:j,waitFor:M,within:R}=__STORYBOOK_MODULE_TEST__,C={...L,...h,...$,...S,...P,...B,..._,...w,...E},q={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Z={api:W,ontologyId:"atc"},k={api:W,ontologyId:"ncit"},z={api:N,useLegacy:!1,ontologyId:"mp"},F={api:N,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},s=async({canvasElement:o})=>{const t=R(o);await M(async()=>{const e=t.getByTestId("ontology-info");await j(e).toBeInTheDocument()},{timeout:3e3})},g=new WeakMap;function K(o,t){let e=g.get(t);e||(e=D.createRoot(t),g.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:K};let U=0;function Y(){return U++}const Po={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:A}}},render:o=>{const t=Y();return`
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
        `},argTypes:C,args:q},a={args:Z,play:s},n={args:k,play:s},r={args:z,play:s},i={args:F,play:s};var p,m,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: OntologyInfoWidget1Args,
  play: commonOntologyInfoWidgetPlay
}`,...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: OntologyInfoWidget2Args,
  play: commonOntologyInfoWidgetPlay
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var I,f,O;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(O=(f=r.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var u,T,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(v=(T=i.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const So=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{i as NavigateToEBIPage,a as OntologyInfoWidget1,n as OntologyInfoWidget2,r as OntologyInfoWidgetOLS4API,So as __namedExportsOrder,Po as default};
