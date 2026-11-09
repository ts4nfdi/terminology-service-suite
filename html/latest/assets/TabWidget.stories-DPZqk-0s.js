import{aI as y,r as H,o as C,t as U,x as F,p as K,u as M,y as k,j as Z,b9 as j}from"./provider-DhHV66nY.js";import{Z as G,E as a,a as Y}from"./globals-1uEo64sR.js";import"./index-DZdTT4Hg.js";import"./client-DFp2fd_t.js";import"./index-B1zv6hq-.js";import"./QueryClientProvider-BiMFCrBx.js";import"./useQuery-tjcomNSo.js";import"./AlternativeNameTabPresentation-CFfOKs8o.js";/* empty css                               */import"./panel-B6ojztOC.js";import"./shadow-BzKSJvFB.js";import"./_button-BSE-Gefv.js";import"./flex_group-CD5HcYk5.js";import"./text-ATQ4pZKH.js";import"./link.styles-D92Rj0Iv.js";import"./flex_item-DFagJcvy.js";import"./index-MEmEDBjJ.js";import"./CrossRefTabPresentation-9P9W1cr9.js";/* empty css                             */import"./index-Bjd_B0sN.js";import"./HierarchyWidget-BCTG_TPS.js";import"./OntologyBadge-BNxGJs9M.js";import"./badge-DpG9ODGG.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-9svs92vp.js";import"./icon-CQRupbKR.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-Dnj4m-7S.js";import"./title-BwNiWjLn.js";import"./button-BSY0IPzv.js";import"./_button_display-BXraxBWm.js";import"./useCombinedRefs-Crz01-E9.js";import"./spacer-BdCuJF-n.js";import"./accordion-CjYCruaq.js";import"./button_icon-_yosOSG-.js";import"./health-DROwO0jC.js";import"./TabWidget-C8rADRcn.js";/* empty css                        *//* empty css                               *//* empty css                                *//* empty css                                    *//* empty css                  *//* empty css                                   *//* empty css                        */import"./purify.es-5AjVNlXF.js";import"./EntityRelationsWidget-BD1RTkHA.js";import"./ClassExpression-hQzRvCgU.js";import"./ExpandableOntologyBadgeList-Cbq5yPqY.js";import"./Tooltip-DoByHMJy.js";import"./icon_tip-Bbs8sq6M.js";import"./tool_tip-B8oiUMjF.js";import"./reposition_on_scroll-DnVR_CoT.js";import"./portal-DiAFq_36.js";import"./card-f1vAeYHd.js";import"./GraphViewWidget-DhPFf-l2.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./popover-CUAHLhzx.js";import"./screen_reader_only-CJHC7Tyx.js";import"./focus_trap-qu0duNoA.js";import"./button_empty-BLkbRN6C.js";/* empty css                                 */import"./OntologyInfoWidget-Dy0G2USQ.js";import"./model-viewer-BNdxy5m2.js";import"./TermDepictionWidget-BjbbH7VA.js";import"./OlsThingApi-DhSZsCMA.js";import"./overlay_mask-Cd8sGqAM.js";import"./emotion-css.esm-CtgQPJjC.js";import"./switch-BzglpfIp.js";import"./form_control_layout-N9JiznET.js";import"./form.styles-C1X7_6nV.js";import"./validatable_control-C4KtUjSj.js";/* empty css                          */import"./EntityInfoWidget-DHNsBqmw.js";import"./MathFormulaWidget-BVATrNbB.js";import"./basic_table-ByYwVgFr.js";import"./table_pagination-B8m1-nBp.js";import"./is_within_hooks-ZAJdxzQF.js";import"./delay_render-B6la2GtU.js";const{expect:q,waitFor:Q,within:X}=__STORYBOOK_MODULE_TEST__,z={...Z,...k,...M,...K,...F,...U,...C,...H},J={api:"",parameter:"",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:y.PREFERRED_ROOTS,hierarchyKeepExpansionStates:y.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:y.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ee={api:G,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0},te={api:Y,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},ae={api:a,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},oe={api:a,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""},re={api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},ie={api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ne={api:a,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""},se={api:a,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1,entityRelationTab:!1,entityInfoTab:!1},t=async({canvasElement:e})=>{const o=X(e);await Q(async()=>{const B=o.getByTestId("tab");await q(B).toBeInTheDocument()},{timeout:3e3})};let pe=0;function me(){return pe++}const Vt={title:"Additional Entity Metadata/TabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:j}}},render:e=>{const o=me();return`
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
        `},argTypes:z,args:J},r={args:ee,play:t},i={name:"OLS3",args:te,play:t},n={name:"OLS4 V1",args:ae,play:t},s={name:"OLS4 V2",args:oe,play:t},p={args:re,play:t},m={args:ie,play:t},g={args:ne,play:t},c={args:se,play:t};var l,T,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,I,L;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "OLS4 V2",
  args: TabWidgetOLS4V2Args,
  play: commonTabWidgetPlay
}`,...(L=(I=s.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var _,W,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(x=(R=c.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const Rt=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{r as Default,m as DefiningOntologyUnavailable,c as HiddenTabs,p as SelectingDefiningOntology,g as TabWidgetLarge,i as TabWidgetOLS3,n as TabWidgetOLS4V1,s as TabWidgetOLS4V2,Rt as __namedExportsOrder,Vt as default};
