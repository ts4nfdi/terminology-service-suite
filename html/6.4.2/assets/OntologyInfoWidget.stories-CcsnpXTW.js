import{Z as W,E as v}from"./globals-CvFyH82M.js";import{w as A,x as E,y as _,B as w,C as B,p as P,a2 as S,H as L,q as $,b0 as h}from"./storyArgs-CHCFEocA.js";import{c as D,j as x}from"./index-Bl-ZOWkZ.js";import{W as b}from"./OntologyInfoWidget-DUYuMjEO.js";import"./useQuery-eCAqdNjx.js";import"./StructureRendering-qPDeJiVl.js";/* empty css                  */import"./icon_tip-DssVUXOY.js";import"./tool_tip-Dq6xpJC_.js";import"./icon-mJshcVLQ.js";import"./preload-helper-Dp1pzeXC.js";import"./shadow--Fm4bwzP.js";import"./panel-Dz_94pTP.js";import"./observer-CR8MQXwC.js";import"./portal-BdASisAI.js";/* empty css                                 */import"./card-CSn88swr.js";import"./href_validator-Cs1fZ0vS.js";import"./_button-G5yDh9NY.js";import"./color_utils-B1RI_rmw.js";import"./title-DJ63GZCw.js";import"./text-sZMdXYAe.js";import"./link.styles-BhOFnrbR.js";import"./button-DsRK99EW.js";import"./_button_display-BPybvRlU.js";import"./flex_item-CrO4-cAs.js";const{expect:j,waitFor:C,within:M}=__STORYBOOK_MODULE_TEST__,R={...$,...L,...S,...P,...B,...w,..._,...E,...A},q={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Z={api:W,ontologyId:"atc"},k={api:W,ontologyId:"ncit"},F={api:v,useLegacy:!1,ontologyId:"mp"},H={api:v,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},g=async({canvasElement:o})=>{const t=M(o);await C(async()=>{const e=t.getByTestId("ontology-info");await j(e).toBeInTheDocument()},{timeout:3e3})},i=new WeakMap;function K(o,t){let e=i.get(t);e||(e=D.createRoot(t),i.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:K};let U=0;function Y(){return U++}const Wo={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:h}}},render:o=>{const t=Y();return`
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
        onNavigateToEntity:${o.onNavigateToEntity},
        onNavigateToOntology:${o.onNavigateToOntology},
        onNavigateToDisambiguate:${o.onNavigateToDisambiguate},
        className:${o.className}
    },
    document.querySelector('#ontology_info_widget_container_${t}')
)
<\/script>
        `},argTypes:R,args:q},a={args:Z,play:g},n={args:k,play:g},s={args:F,play:g},r={args:H,play:g};var p,y,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: OntologyInfoWidget1Args,
  play: commonOntologyInfoWidgetPlay
}`,...(c=(y=a.parameters)==null?void 0:y.docs)==null?void 0:c.source}}};var m,l,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: OntologyInfoWidget2Args,
  play: commonOntologyInfoWidgetPlay
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var I,f,u;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(u=(f=s.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var O,T,N;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(N=(T=r.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const vo=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{r as NavigateToEBIPage,a as OntologyInfoWidget1,n as OntologyInfoWidget2,s as OntologyInfoWidgetOLS4API,vo as __namedExportsOrder,Wo as default};
