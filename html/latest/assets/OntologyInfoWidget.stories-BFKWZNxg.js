import{O as A}from"./widgetDescriptions-MmE0nvU9.js";import{E as N,Z as W}from"./globals-Dneqqh2P.js";import{q as E,o as w,r as _,v as B,w as P,p as S,I as $,z as h,i as L}from"./QueryClientProvider-CtwX41Lz.js";import{c as D,j as x}from"./client-DFp2fd_t.js";import{W as b}from"./OntologyInfoWidget-CzBbt_iM.js";import"./useQuery-B-NHskGH.js";/* empty css                                 *//* empty css                  */import"./OntologyBadge-D2arM_nt.js";import"./badge-8WVhgBVL.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-DjHAbZRu.js";import"./_button-PWlvcPYJ.js";import"./icon-C0mmS-ft.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-C8Kaes5k.js";import"./ClassExpression-Cg8dulDA.js";import"./ExpandableOntologyBadgeList-owNSbYTk.js";import"./Tooltip-DsZJCRVP.js";import"./icon_tip-nlnYXfrW.js";import"./tool_tip-DIq-z1SX.js";import"./reposition_on_scroll-CEs5f304.js";import"./shadow-DCgm-VgE.js";import"./panel-CpW21Fhm.js";import"./portal-_jewDgXP.js";import"./useCombinedRefs-CI08p5vq.js";import"./card-B1ay9tnb.js";import"./title-BLqAgqXK.js";import"./text-Cn8NwKpQ.js";import"./link.styles-C820-Rkj.js";import"./button-_ewPt-sA.js";import"./_button_display-CUDn-mdb.js";import"./flex_item-CGAZaKWG.js";const{expect:j,waitFor:M,within:R}=__STORYBOOK_MODULE_TEST__,q={...L,...h,...$,...S,...P,...B,..._,...w,...E},C={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Z={api:W,ontologyId:"atc"},k={api:W,ontologyId:"ncit"},z={api:N,useLegacy:!1,ontologyId:"mp"},F={api:N,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},s=async({canvasElement:o})=>{const t=R(o);await M(async()=>{const e=t.getByTestId("ontology-info");await j(e).toBeInTheDocument()},{timeout:3e3})},g=new WeakMap;function K(o,t){let e=g.get(t);e||(e=D.createRoot(t),g.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:K};let U=0;function Y(){return U++}const Po={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:A}}},render:o=>{const t=Y();return`
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var I,f,O;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var u,T,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const So=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{r as NavigateToEBIPage,a as OntologyInfoWidget1,n as OntologyInfoWidget2,i as OntologyInfoWidgetOLS4API,So as __namedExportsOrder,Po as default};
