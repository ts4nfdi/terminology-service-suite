import{aI as y,r as H,o as C,t as U,x as F,p as K,u as M,y as k,j as Z,b9 as j}from"./provider-BuXM3p7M.js";import{Z as G,E as a,a as Y}from"./globals-1uEo64sR.js";import"./index-CrOLDKTj.js";import"./client-DFp2fd_t.js";import"./index-C9fPEszr.js";import"./QueryClientProvider-CyIVCpto.js";import"./useQuery-DRxfM8-_.js";import"./AlternativeNameTabPresentation-DeibeiQY.js";/* empty css                               */import"./panel-BDaAW1k1.js";import"./shadow-C2yBvPYV.js";import"./_button-BRP_bfbn.js";import"./flex_group-BJCwtRUg.js";import"./text-Dl6baijy.js";import"./link.styles-BfTT6KUx.js";import"./flex_item-ylCgN4dZ.js";import"./index-C2zFcGG7.js";import"./CrossRefTabPresentation-CYr4u309.js";/* empty css                             */import"./index-DzaheSM8.js";import"./HierarchyWidget-CSBjWnso.js";import"./OntologyBadge-CIo3S34k.js";import"./badge-Mf8vR9-7.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-B4rSnZdJ.js";import"./icon-BUcfkKK7.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-JVgd2FC_.js";import"./title-Ccw7R9oF.js";import"./button-yIKMEbZ4.js";import"./_button_display-BFH-u2Y_.js";import"./useCombinedRefs-Crz01-E9.js";import"./spacer-BQEThFvw.js";import"./accordion-B4VgIgb_.js";import"./button_icon-Bkr8Xnlu.js";import"./health-Des-97sB.js";import"./TabWidget-XsL1bcaU.js";/* empty css                        *//* empty css                               *//* empty css                                *//* empty css                                    *//* empty css                  *//* empty css                                   *//* empty css                        */import"./purify.es-5AjVNlXF.js";import"./EntityRelationsWidget-gEmqfJLK.js";import"./ClassExpression-BJxLc90P.js";import"./ExpandableOntologyBadgeList-mUQnhiby.js";import"./Tooltip-BNEJ4q4R.js";import"./icon_tip-B3ZRKpaJ.js";import"./tool_tip-DoB_Xfgv.js";import"./reposition_on_scroll--qEuL3-J.js";import"./portal-DRkmvPCC.js";import"./card-DEO6BUwT.js";import"./GraphViewWidget-DlZsJVho.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./popover-Dz5A4JTC.js";import"./screen_reader_only-DRERXpsO.js";import"./focus_trap-JmVhx2Sm.js";import"./button_empty-SCwa3tX3.js";/* empty css                                 */import"./OntologyInfoWidget-DY2Z3ysf.js";import"./model-viewer-BNdxy5m2.js";import"./TermDepictionWidget-OP-ggzK5.js";import"./OlsThingApi-ixhGSBkm.js";import"./overlay_mask-GooGEDK7.js";import"./emotion-css.esm-BESFG5u2.js";import"./switch-Cs-WZPOx.js";import"./form_control_layout-C9_E2o8S.js";import"./form.styles-DOGgUlwv.js";import"./validatable_control-sXkf8-Gi.js";/* empty css                          */import"./EntityInfoWidget-C_f023ej.js";import"./MathFormulaWidget-CMdW9oQw.js";import"./basic_table-nqO37vQI.js";import"./table_pagination-Cl-O2s8r.js";import"./is_within_hooks-Dv1hDbAE.js";import"./delay_render-Fk3zPF81.js";const{expect:q,waitFor:Q,within:X}=__STORYBOOK_MODULE_TEST__,z={...Z,...k,...M,...K,...F,...U,...C,...H},J={api:"",parameter:"",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:y.PREFERRED_ROOTS,hierarchyKeepExpansionStates:y.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:y.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ee={api:G,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0},te={api:Y,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},ae={api:a,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},oe={api:a,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""},re={api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},ie={api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ne={api:a,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""},se={api:a,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1,entityRelationTab:!1,entityInfoTab:!1},t=async({canvasElement:e})=>{const o=X(e);await Q(async()=>{const B=o.getByTestId("tab");await q(B).toBeInTheDocument()},{timeout:3e3})};let pe=0;function me(){return pe++}const Vt={title:"Additional Entity Metadata/TabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:j}}},render:e=>{const o=me();return`
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
