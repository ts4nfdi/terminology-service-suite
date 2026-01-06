import{Z as W,E as v}from"./globals-BQAFDkgj.js";import{x as A,o as E,y as _,B as w,C as B,p as P,a3 as S,H as $,r as h,b1 as L}from"./storyArgs-CNybPO01.js";import{c as D,j as x}from"./index-Bl-ZOWkZ.js";import{W as b}from"./OntologyInfoWidget-B1WVW2T7.js";import"./useQuery-CidFMm36.js";/* empty css                                 */import"./OntologyBadge-QeaUz3Wa.js";import"./badge-1S-NH-ch.js";import"./href_validator-Cs1fZ0vS.js";import"./color_utils-C32VsIho.js";import"./_button-YkQj8NM0.js";import"./icon-CE3ukyQW.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CwdQ_heh.js";import"./RenderedReified-CV3uGpnQ.js";import"./ExpandableOntologyBadgeList-DuPGoLJ-.js";import"./Tooltip-d9QE-lRt.js";import"./icon_tip-2iimNjg9.js";import"./tool_tip-Cu82uPao.js";import"./shadow-hpW_Gm8d.js";import"./panel-DxNbXEZo.js";import"./observer-BN-lkF8-.js";import"./portal-2EC9qipk.js";import"./card-DqobdMLg.js";import"./title-DtV0diMW.js";import"./text-CwK6QkCY.js";import"./link.styles-Cwoei_NV.js";import"./button-Bc5sVomR.js";import"./_button_display-DDARembv.js";import"./flex_item-C3VJF-KW.js";const{expect:j,waitFor:C,within:M}=__STORYBOOK_MODULE_TEST__,R={...h,...$,...S,...P,...B,...w,..._,...E,...A},q={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Z={api:W,ontologyId:"atc"},k={api:W,ontologyId:"ncit"},F={api:v,useLegacy:!1,ontologyId:"mp"},H={api:v,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},s=async({canvasElement:o})=>{const t=M(o);await C(async()=>{const e=t.getByTestId("ontology-info");await j(e).toBeInTheDocument()},{timeout:3e3})},g=new WeakMap;function K(o,t){let e=g.get(t);e||(e=D.createRoot(t),g.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:K};let U=0;function Y(){return U++}const _o={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:L}}},render:o=>{const t=Y();return`
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
        `},argTypes:R,args:q},a={args:Z,play:s},n={args:k,play:s},i={args:F,play:s},r={args:H,play:s};var p,m,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(N=(T=r.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const wo=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{r as NavigateToEBIPage,a as OntologyInfoWidget1,n as OntologyInfoWidget2,i as OntologyInfoWidgetOLS4API,wo as __namedExportsOrder,_o as default};
