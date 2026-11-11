import{aI as y,r as H,o as C,t as U,x as F,p as K,u as M,y as k,j as Z,b9 as j}from"./provider-BlV9U33F.js";import{Z as G,E as a,a as Y}from"./globals-1uEo64sR.js";import"./index-Bf2gE5Bi.js";import"./client-DFp2fd_t.js";import"./index-D5X3s3gn.js";import"./QueryClientProvider-CVZB0IZw.js";import"./useQuery-BL03lWkx.js";import"./AlternativeNameTabPresentation-CVRtHtmj.js";/* empty css                               */import"./panel-DYRnR8Iv.js";import"./shadow-CEtHDbm9.js";import"./_button-B_KcUgtw.js";import"./flex_group-DRnMcAkk.js";import"./text-DHoFFw_8.js";import"./link.styles-BGS0RoP2.js";import"./flex_item-B86eDyE4.js";import"./index-B8REkzZp.js";import"./CrossRefTabPresentation-TTiIxiZ6.js";/* empty css                             */import"./index-DFtAoc-D.js";import"./HierarchyWidget-1_dRsS82.js";import"./OntologyBadge-BTM-PS8-.js";import"./badge-UcGW59xV.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-Duay4BcV.js";import"./icon-CJNnMZMY.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-7EH-VJdB.js";import"./title-IA6qqDOn.js";import"./button-DWdOfpVV.js";import"./_button_display-B8UjPbhb.js";import"./useCombinedRefs-Crz01-E9.js";import"./spacer-CGrUwYnj.js";import"./accordion-B65lchLv.js";import"./button_icon-1SpCw8U2.js";import"./health-DqlyCwZH.js";import"./TabWidget-CAWCBIvc.js";/* empty css                        *//* empty css                               *//* empty css                                *//* empty css                                    *//* empty css                  *//* empty css                                   *//* empty css                        */import"./purify.es-5AjVNlXF.js";import"./EntityRelationsWidget-C1exJ85C.js";import"./ClassExpression-C2AiXB51.js";import"./ExpandableOntologyBadgeList-BfLgfe3j.js";import"./Tooltip-aSxlNAK7.js";import"./icon_tip-DOmTgTrm.js";import"./tool_tip-DZhGT3RW.js";import"./reposition_on_scroll-Dqr8OWMC.js";import"./portal-Cl-RhKb3.js";import"./card-DbG63DwG.js";import"./GraphViewWidget-C_mWF28P.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./popover-CjzJN_hr.js";import"./screen_reader_only-B9COXGJN.js";import"./focus_trap-Bznzar4U.js";import"./button_empty-B7FSdqzz.js";/* empty css                                 */import"./OntologyInfoWidget-BmGbrSw2.js";import"./model-viewer-BNdxy5m2.js";import"./TermDepictionWidget-B4-eTmc2.js";import"./OlsThingApi-B1qgqosf.js";import"./overlay_mask-vtqg9f1F.js";import"./emotion-css.esm-CxlRctii.js";import"./switch-Bl3FIgDh.js";import"./form_control_layout-D0Jeo-WS.js";import"./form.styles-Cnzl9tXQ.js";import"./validatable_control-BkPeED1s.js";/* empty css                          */import"./EntityInfoWidget-B6aoYJTW.js";import"./MathFormulaWidget-D6UkFTA-.js";import"./basic_table-Ckmfh3ra.js";import"./table_pagination-CW777uTJ.js";import"./is_within_hooks-Dw6pVT7Z.js";import"./delay_render-BV5jCfeX.js";const{expect:q,waitFor:Q,within:X}=__STORYBOOK_MODULE_TEST__,z={...Z,...k,...M,...K,...F,...U,...C,...H},J={api:"",parameter:"",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:y.PREFERRED_ROOTS,hierarchyKeepExpansionStates:y.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:y.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ee={api:G,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0},te={api:Y,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},ae={api:a,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},oe={api:a,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""},re={api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},ie={api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ne={api:a,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""},se={api:a,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1,entityRelationTab:!1,entityInfoTab:!1},t=async({canvasElement:e})=>{const o=X(e);await Q(async()=>{const B=o.getByTestId("tab");await q(B).toBeInTheDocument()},{timeout:3e3})};let pe=0;function me(){return pe++}const Vt={title:"Additional Entity Metadata/TabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:j}}},render:e=>{const o=me();return`
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
