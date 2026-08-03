import{T as H}from"./widgetDescriptions-MmE0nvU9.js";import{Z as C,E as t,a as U}from"./globals-Dr4u9m4r.js";import{a2 as y,q as F,o as K,r as M,w as k,p as Z,t as q,x as G,i as Y}from"./QueryClientProvider-wfdc44vj.js";import"./index-DJYPJAm7.js";import"./client-DFp2fd_t.js";import"./index-7bywn96D.js";import"./useQuery-B6JW7uaM.js";/* empty css                               */import"./panel-DyspM-jY.js";import"./shadow-B8JELVCP.js";import"./_button-CNGnRqyT.js";import"./flex_group-j6iQt6Pg.js";import"./text-BCa_u-0I.js";import"./link.styles-BVnRgrxN.js";import"./flex_item-Xc8KziH2.js";import"./index-BQlediJF.js";/* empty css                             */import"./index-BpJvfapz.js";import"./OntologyBadge-BQYgfFLY.js";import"./badge-D7gjDvFE.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-BM5ucB2c.js";import"./icon-C9-DwYxQ.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-DyrLOj6C.js";import"./title-CLzcVaIZ.js";import"./button-CoB_Y1Qi.js";import"./_button_display-zQuHS8zi.js";import"./useCombinedRefs-CI08p5vq.js";import"./button_icon-SGll5Y8c.js";import"./health-ClkYOQzG.js";/* empty css                        */import"./EntityInfoWidget-BoIFcToS.js";import"./ClassExpression-SHY7uGGf.js";import"./ExpandableOntologyBadgeList-Bjv_ivaM.js";import"./Tooltip-BKAQ0Biq.js";import"./icon_tip-CZUwUeus.js";import"./tool_tip-BWZt8ZEC.js";import"./reposition_on_scroll-3UAIXJHW.js";import"./portal-DPy-z_V4.js";/* empty css                               *//* empty css                                *//* empty css                  *//* empty css                                    *//* empty css                                   *//* empty css                        */import"./MathFormulaWidget-BSSJgDIb.js";import"./purify.es-D6gMnemd.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";/* empty css                                 */import"./model-viewer-BNdxy5m2.js";/* empty css                          */import"./card-CcbtLDM2.js";import"./basic_table-B9T5hUBC.js";import"./form.styles-BbJq18g2.js";import"./table_pagination-CEjw2cLI.js";import"./button_empty-B5_GAIWA.js";import"./popover-GZ2_dunY.js";import"./screen_reader_only-yPc5lzva.js";import"./focus_trap-CiTk6QuG.js";import"./EntityRelationsWidget-BV6am6jQ.js";import"./GraphViewWidget-Cq825B71.js";import"./OntologyInfoWidget-B6L-qLSx.js";import"./TermDepictionWidget-DISfr80T.js";import"./OlsThingApi-Ezj-mqXl.js";import"./emotion-css.esm-m0UR6XM9.js";import"./switch-m9g-7c7I.js";import"./form_control_layout-BspIZmyH.js";import"./validatable_control-qhgCXUIa.js";const{expect:j,waitFor:Q,within:X}=__STORYBOOK_MODULE_TEST__,z={...Y,...G,...q,...Z,...k,...M,...K,...F},J={api:"",parameter:"",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:y.PREFERRED_ROOTS,hierarchyKeepExpansionStates:y.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:y.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ee={api:C,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0},ae={api:U,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},te={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},oe={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""},re={api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},ie={api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ne={api:t,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""},se={api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1,entityRelationTab:!1,entityInfoTab:!1},a=async({canvasElement:e})=>{const o=X(e);await Q(async()=>{const B=o.getByTestId("tab");await j(B).toBeInTheDocument()},{timeout:3e3})};let pe=0;function me(){return pe++}const _a={title:"Additional Entity Metadata/TabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:H}}},render:e=>{const o=me();return`
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
}`,...(S=(u=i.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var O,f,h;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "OLS4 V1",
  args: TabWidgetOLS4V1Args,
  play: commonTabWidgetPlay
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var A,L,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(R=c.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const Wa=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{r as Default,m as DefiningOntologyUnavailable,c as HiddenTabs,p as SelectingDefiningOntology,g as TabWidgetLarge,i as TabWidgetOLS3,n as TabWidgetOLS4V1,s as TabWidgetOLS4V2,Wa as __namedExportsOrder,_a as default};
