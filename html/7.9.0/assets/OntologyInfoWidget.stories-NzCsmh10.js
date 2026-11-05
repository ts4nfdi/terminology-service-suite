import{r as S,o as L,t as $,v as D,w as x,p as j,ab as U,z as M,j as R,bD as C}from"./provider-DhHV66nY.js";import{E as y,T as q,Z as b}from"./globals-1uEo64sR.js";import{c as Z,j as k}from"./client-DFp2fd_t.js";import{W as z}from"./OntologyInfoWidget-DHSwjRRa.js";import"./QueryClientProvider-BiMFCrBx.js";import"./useQuery-tjcomNSo.js";/* empty css                                 *//* empty css                  */import"./OntologyBadge-BNxGJs9M.js";import"./badge-DpG9ODGG.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-9svs92vp.js";import"./_button-BSE-Gefv.js";import"./icon-CQRupbKR.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-Dnj4m-7S.js";import"./ClassExpression-DskazWaQ.js";import"./ExpandableOntologyBadgeList-Cbq5yPqY.js";import"./Tooltip-DoByHMJy.js";import"./icon_tip-Bbs8sq6M.js";import"./tool_tip-B8oiUMjF.js";import"./reposition_on_scroll-DnVR_CoT.js";import"./shadow-BzKSJvFB.js";import"./panel-B6ojztOC.js";import"./portal-DiAFq_36.js";import"./useCombinedRefs-Crz01-E9.js";import"./card-f1vAeYHd.js";import"./spacer-BdCuJF-n.js";import"./button-BSY0IPzv.js";import"./_button_display-BXraxBWm.js";import"./text-ATQ4pZKH.js";import"./link.styles-D92Rj0Iv.js";import"./title-BwNiWjLn.js";import"./flex_item-DFagJcvy.js";const{expect:F,waitFor:K,within:Y}=__STORYBOOK_MODULE_TEST__,G={...R,...M,...U,...j,...x,...D,...$,...L,...S},H={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},J={api:b,ontologyId:"atc"},Q={api:b,ontologyId:"ncit"},V={api:y,useLegacy:!1,ontologyId:"mp"},X={api:y,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},oo={api:y,useLegacy:!1,ontologyId:"uberon",hasTitle:!0,showBadges:!0},to={api:q,useLegacy:!1,ontologyId:"ohdab"},a=async({canvasElement:o})=>{const t=Y(o);await K(async()=>{const e=t.getByTestId("ontology-info");await F(e).toBeInTheDocument()},{timeout:3e3})},c=new WeakMap;function eo(o,t){let e=c.get(t);e||(e=Z.createRoot(t),c.set(t,e)),e.render(k.jsx(z,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:eo};let ao=0;function no(){return ao++}const Co={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:C}}},render:o=>{const t=no();return`
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
        `},argTypes:G,args:H},n={args:J,play:a},r={args:Q,play:a},s={args:V,play:a},g={args:X,play:a},i={args:oo,play:a},p={args:to,play:a};var m,l,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: OntologyInfoWidget1Args,
  play: commonOntologyInfoWidgetPlay
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var I,O,f;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: OntologyInfoWidget2Args,
  play: commonOntologyInfoWidgetPlay
}`,...(f=(O=r.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var u,T,W;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(W=(T=s.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var N,v,A;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(A=(v=g.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var E,_,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: OntologyInfoWidgetUberon,
  play: commonOntologyInfoWidgetPlay
}`,...(w=(_=i.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var P,h,B;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: OntologyInfoWidgetOhdab,
  play: commonOntologyInfoWidgetPlay
}`,...(B=(h=p.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};const qo=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage","OntologyInfoUberon","OntologyInfoOhdab"];export{g as NavigateToEBIPage,p as OntologyInfoOhdab,i as OntologyInfoUberon,n as OntologyInfoWidget1,r as OntologyInfoWidget2,s as OntologyInfoWidgetOLS4API,qo as __namedExportsOrder,Co as default};
