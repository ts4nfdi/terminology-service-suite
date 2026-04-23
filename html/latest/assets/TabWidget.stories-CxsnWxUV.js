import{aa as y,q as H,o as C,r as U,x as F,p as K,u as M,y as k,i as Z,aA as q}from"./QueryClientProvider-tBG0NWM0.js";import{Z as G,a as Y,E as t}from"./globals-Dneqqh2P.js";import"./index-CWJpOCVr.js";import"./client-hNkKQuBU.js";import"./index-BEos9GpZ.js";import"./useQuery-CJ8-LNvG.js";/* empty css                               */import"./panel-CmjUMykD.js";import"./shadow-DrkSvs48.js";import"./flex_group-kO_kVLPF.js";import"./text-Bf6klxy0.js";import"./link.styles-CSK3t4GY.js";import"./flex_item-D1cL8VWd.js";import"./index-B4b_aO5k.js";/* empty css                             */import"./index-_MIYHOO8.js";import"./OntologyBadge-D74mBx0r.js";import"./badge-1LAF02M_.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-BGkdMWmt.js";import"./_button-DlbInGvA.js";import"./icon-CW9K28UO.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CnLckb93.js";import"./title-XQGlUu7n.js";import"./button-DNxJpH64.js";import"./_button_display-BPcL1Fhb.js";import"./button_icon-BGmRF3rl.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./health-KDbvPlbW.js";/* empty css                        */import"./EntityInfoWidget-CCetoN_k.js";import"./ClassExpression-BDCCBtXX.js";import"./ExpandableOntologyBadgeList-B7vitSpn.js";import"./Tooltip-DWDBDu7v.js";import"./icon_tip-BQUujVP3.js";import"./tool_tip-TDjIL_x9.js";import"./popover_arrow.styles-C9XUL52R.js";import"./portal-cejDdY-l.js";import"./card-3hfvfJNY.js";import"./EntityRelationsWidget-BiOIo5BH.js";import"./GraphViewWidget-BQOkVsrw.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./popover-Lanbdo8G.js";import"./focus_trap-BZEPbe3u.js";import"./screen_reader_only-ByBZZHSH.js";import"./button_empty-BcNoj_Oc.js";import"./OntologyInfoWidget-CvO8rpMX.js";/* empty css                                 */import"./TermDepictionWidget-CiSjGaIG.js";import"./model-viewer-C2wGp_8x.js";import"./OlsThingApi-B6xLE3Ry.js";import"./emotion-css.esm-CVeUUQIW.js";import"./switch-wloZeMYK.js";import"./form_control_layout-BafC1dhI.js";import"./form.styles-ClyXq14D.js";const{expect:j,waitFor:Q,within:X}=__STORYBOOK_MODULE_TEST__,z={...Z,...k,...M,...K,...F,...U,...C,...H},J={api:"",parameter:"",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:y.PREFERRED_ROOTS,hierarchyKeepExpansionStates:y.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:y.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ee={api:G,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0},ae={api:Y,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},te={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},oe={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""},re={api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},ie={api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ne={api:t,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""},se={api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1,entityRelationTab:!1,entityInfoTab:!1},a=async({canvasElement:e})=>{const o=X(e);await Q(async()=>{const B=o.getByTestId("tab");await j(B).toBeInTheDocument()},{timeout:3e3})};let pe=0;function me(){return pe++}const la={title:"Additional Entity Metadata/TabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:q}}},render:e=>{const o=me();return`
<div id="tab_widget_container_${o}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        altNamesTab: ${e.altNamesTab},
        hierarchyTab: ${e.hierarchyTab},
        crossRefTab: ${e.crossRefTab},
        terminologyInfoTab: ${e.terminologyInfoTab},
        graphViewTab: ${e.graphViewTab},
        termDepictionTab: ${e.termDepictionTab},
        hierarchyPreferredRoots:${e.hierarchyPreferredRoots},
        hierarchyKeepExpansionStates:${e.hierarchyKeepExpansionStates},
        hierarchyShowSiblingsOnInit:${e.hierarchyShowSiblingsOnInit},
        hierarchyWrap:${e.hierarchyWrap},
        onNavigateToEntity:${e.onNavigateToEntity},
        onNavigateToOntology:${e.onNavigateToOntology},
        onNavigateToDisambiguate:${e.onNavigateToDisambiguate},
        className:"${e.className}"
    },
    document.querySelector('#tab_widget_container_${o}')
)
<\/script>
        `},argTypes:z,args:J},r={args:ee,play:a},i={name:"OLS3",args:ae,play:a},n={name:"OLS4 V1",args:te,play:a},s={name:"OLS4 V2",args:oe,play:a},p={args:re,play:a},m={args:ie,play:a},g={args:ne,play:a},c={args:se,play:a};var l,T,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: DefaultArgs,
  play: commonTabWidgetPlay
}`,...(d=(T=r.parameters)==null?void 0:T.docs)==null?void 0:d.source}}};var b,u,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "OLS3",
  args: TabWidgetOLS3Args,
  play: commonTabWidgetPlay
}`,...(S=(u=i.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var O,h,f;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "OLS4 V1",
  args: TabWidgetOLS4V1Args,
  play: commonTabWidgetPlay
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,L,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "OLS4 V2",
  args: TabWidgetOLS4V2Args,
  play: commonTabWidgetPlay
}`,...(I=(L=s.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var _,W,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonTabWidgetPlay
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var D,N,w;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonTabWidgetPlay
}`,...(w=(N=m.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var $,v,P;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: TabWidgetLargeArgs,
  play: commonTabWidgetPlay
}`,...(P=(v=g.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var V,R,x;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: HiddenTabsArgs,
  play: commonTabWidgetPlay
}`,...(x=(R=c.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const Ta=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{r as Default,m as DefiningOntologyUnavailable,c as HiddenTabs,p as SelectingDefiningOntology,g as TabWidgetLarge,i as TabWidgetOLS3,n as TabWidgetOLS4V1,s as TabWidgetOLS4V2,Ta as __namedExportsOrder,la as default};
