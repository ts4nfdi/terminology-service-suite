import{ak as y,q as H,o as C,r as U,x as F,p as K,u as M,y as k,i as Z,aI as q}from"./QueryClientProvider-Cv6DMAwY.js";import{Z as G,a as Y,E as t}from"./globals-BQAFDkgj.js";import"./index-7Z0t_v0l.js";import"./client-hNkKQuBU.js";import"./index-e8teL0j7.js";import"./useQuery-D80UYlTP.js";/* empty css                               */import"./flex_group-O0zAkBzd.js";import"./panel-pG-TvU-E.js";import"./shadow-BRsMk7Ev.js";import"./text-Dj3fvmL0.js";import"./link.styles-DeXSguuE.js";import"./flex_item-DWpVg6bz.js";import"./index-BS3A02Nb.js";/* empty css                             */import"./index-lfIAgyP_.js";import"./title-BjAFpbjY.js";import"./button_icon-yDZ-49HD.js";import"./_button-DR0DDSYL.js";import"./_button_display-mhn372ul.js";import"./icon-Dbgqo2NT.js";import"./preload-helper-Dp1pzeXC.js";import"./href_validator-RjdtbSlK.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./health-6JZd6YNG.js";import"./button-Dca_e4tp.js";/* empty css                        */import"./GraphViewWidget-D9h0l7TH.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./popover-CJy3jVu9.js";import"./focus_trap-dYxqw4EE.js";import"./screen_reader_only-DI2vJL1y.js";import"./portal-DMzDUsME.js";import"./popover_arrow.styles-CHH0a3nc.js";import"./button_empty-BPGL8DZd.js";import"./OntologyInfoWidget-JdhsT_4C.js";/* empty css                                 */import"./OntologyBadge-VEH00cI7.js";import"./badge-2Dv_I7s6.js";import"./color_utils-CxG7mbtu.js";import"./inner_text-Ooo0Ljl4.js";import"./RenderedReified-7PtmsR14.js";import"./ExpandableOntologyBadgeList-RmK6elIf.js";import"./Tooltip-DIwxeMH_.js";import"./icon_tip-4Wg2s-aI.js";import"./tool_tip-4Qko17uz.js";import"./card-CJIbcMT9.js";import"./TermDepictionWidget-DGHU31as.js";import"./model-viewer-C2wGp_8x.js";import"./OlsThingApi-CBuqiEEB.js";import"./emotion-css.esm-BKBvaUqZ.js";const{expect:j,waitFor:Q,within:X}=__STORYBOOK_MODULE_TEST__,z={...Z,...k,...M,...K,...F,...U,...C,...H},J={api:"",parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:y.PREFERRED_ROOTS,hierarchyKeepExpansionStates:y.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:y.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ee={api:G,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0},ae={api:Y,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},te={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},oe={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""},re={api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},ie={api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ne={api:t,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""},se={api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1},a=async({canvasElement:e})=>{const o=X(e);await Q(async()=>{const B=o.getByTestId("tab");await j(B).toBeInTheDocument()},{timeout:3e3})};let pe=0;function me(){return pe++}const pa={title:"Additional Entity Metadata/TabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:q}}},render:e=>{const o=me();return`
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
        `},argTypes:z,args:J},r={args:ee,play:a},i={name:"OLS3",args:ae,play:a},n={name:"OLS4 V1",args:te,play:a},s={name:"OLS4 V2",args:oe,play:a},p={args:re,play:a},m={args:ie,play:a},c={args:ne,play:a},g={args:se,play:a};var l,T,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var N,D,w;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonTabWidgetPlay
}`,...(w=(D=m.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var $,v,P;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: TabWidgetLargeArgs,
  play: commonTabWidgetPlay
}`,...(P=(v=c.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var V,R,x;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: HiddenTabsArgs,
  play: commonTabWidgetPlay
}`,...(x=(R=g.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const ma=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{r as Default,m as DefiningOntologyUnavailable,g as HiddenTabs,p as SelectingDefiningOntology,c as TabWidgetLarge,i as TabWidgetOLS3,n as TabWidgetOLS4V1,s as TabWidgetOLS4V2,ma as __namedExportsOrder,pa as default};
