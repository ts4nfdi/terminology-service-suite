import{Z as H,a as C,E as t}from"./globals-BQAFDkgj.js";import{aq as y,x as F,o as U,y as M,F as K,p as k,z as G,G as Z,r as q,aM as Y}from"./storyArgs-CNybPO01.js";import"./index-DD33oN0F.js";import"./index-Bl-ZOWkZ.js";import"./useQuery-CidFMm36.js";import"./index-C91c6Snj.js";/* empty css                               */import"./panel-DxNbXEZo.js";import"./shadow-hpW_Gm8d.js";import"./flex_group-BrdRh0Rx.js";import"./text-CwK6QkCY.js";import"./link.styles-Cwoei_NV.js";import"./flex_item-C3VJF-KW.js";import"./index-Czkze7ys.js";/* empty css                             */import"./OntologyInfoWidget-B1WVW2T7.js";/* empty css                                 */import"./OntologyBadge-QeaUz3Wa.js";import"./badge-1S-NH-ch.js";import"./href_validator-Cs1fZ0vS.js";import"./color_utils-C32VsIho.js";import"./_button-YkQj8NM0.js";import"./icon-CE3ukyQW.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CwdQ_heh.js";import"./RenderedReified-CV3uGpnQ.js";import"./ExpandableOntologyBadgeList-DuPGoLJ-.js";import"./Tooltip-d9QE-lRt.js";import"./icon_tip-2iimNjg9.js";import"./tool_tip-Cu82uPao.js";import"./observer-BN-lkF8-.js";import"./portal-2EC9qipk.js";import"./card-DqobdMLg.js";import"./title-DtV0diMW.js";import"./button-Bc5sVomR.js";import"./_button_display-DDARembv.js";import"./index-BcljCPaf.js";/* empty css                  *//* empty css                              */import"./GraphViewWidget-Bqft2Sfd.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./popover-Df51L6yb.js";import"./focus_trap-Ck4UtKVR.js";import"./screen_reader_only-E1t5Dz4g.js";import"./button_empty-BCDH6Gc9.js";import"./TermDepictionWidget-oW83NFts.js";import"./model-viewer-C2wGp_8x.js";import"./OlsThingApi-C8tVE3H-.js";import"./emotion-css.esm-Be2XztkC.js";/* empty css                        */const{expect:j,waitFor:z,within:Q}=__STORYBOOK_MODULE_TEST__,X={...q,...Z,...G,...k,...K,...M,...U,...F},J={api:"",parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:y.PREFERRED_ROOTS,hierarchyKeepExpansionStates:y.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:y.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ee={api:H,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0},ae={api:C,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},te={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},oe={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""},re={api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},ie={api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ne={api:t,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""},se={api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1},a=async({canvasElement:e})=>{const o=Q(e);await z(async()=>{const B=o.getByTestId("tab");await j(B).toBeInTheDocument()},{timeout:3e3})};let pe=0;function me(){return pe++}const na={title:"Additional Entity Metadata/TabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:Y}}},render:e=>{const o=me();return`
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
        `},argTypes:X,args:J},r={args:ee,play:a},i={name:"OLS3",args:ae,play:a},n={name:"OLS4 V1",args:te,play:a},s={name:"OLS4 V2",args:oe,play:a},p={args:re,play:a},m={args:ie,play:a},c={args:ne,play:a},g={args:se,play:a};var l,T,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,L,_;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "OLS4 V2",
  args: TabWidgetOLS4V2Args,
  play: commonTabWidgetPlay
}`,...(_=(L=s.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var I,W,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(x=(R=g.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const sa=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{r as Default,m as DefiningOntologyUnavailable,g as HiddenTabs,p as SelectingDefiningOntology,c as TabWidgetLarge,i as TabWidgetOLS3,n as TabWidgetOLS4V1,s as TabWidgetOLS4V2,sa as __namedExportsOrder,na as default};
