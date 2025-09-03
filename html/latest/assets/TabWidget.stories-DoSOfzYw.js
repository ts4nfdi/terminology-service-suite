import{Z as F,a as H,E as t}from"./globals-CvFyH82M.js";import{ag as y,w as C,x as U,y as K,F as M,p as k,z as G,G as Z,q,aF as Y}from"./storyArgs-AFjXh7XW.js";import"./index-CUkG_MdM.js";import"./index-ZCdkkhYt.js";import"./useQuery-BSQecOR7.js";import"./index-Dmlmg-hv.js";/* empty css                               */import"./flex_group-Bf8PzYzu.js";import"./panel-DRTqr2vT.js";import"./shadow-DBsugtKM.js";import"./text-dCu-lByA.js";import"./link.styles-CJzvf_6u.js";import"./flex_item-DZLNRa3p.js";import"./index-BlBzNiQX.js";/* empty css                             */import"./OntologyInfoWidget-CiVQaRfc.js";import"./StructureRendering-D0MbTVRQ.js";/* empty css                  */import"./icon_tip-DA644TT0.js";import"./tool_tip-Dt8i4P_D.js";import"./icon-RvlT3YZ5.js";import"./preload-helper-Dp1pzeXC.js";import"./observer-y2cdnWU0.js";import"./portal-DiJ1n8WN.js";/* empty css                                 */import"./card-DDtcYfLy.js";import"./href_validator-CCXnw10u.js";import"./_button-jUUP9GKn.js";import"./color_utils-cNYMWQjX.js";import"./title-r0G8vGmv.js";import"./button-7mVtQWS6.js";import"./_button_display-CiKRspDS.js";import"./index-DF7bW0m1.js";/* empty css                              */import"./GraphViewWidget-Dv-2vz6W.js";import"./ts4nfdiGraphStyle-pEL6bT6-.js";import"./popover-DSoekXbz.js";import"./focus_trap-BP_Hws0S.js";import"./screen_reader_only-B9DY1sFH.js";import"./button_empty-C2K4yniN.js";import"./TermDepictionWidget-CyGDOw6g.js";import"./model-viewer-D-tw6fs6.js";import"./OlsThingApi-D88Wvf0r.js";import"./inner_text-DNMRkBuz.js";/* empty css                        */const{expect:j,waitFor:z,within:Q}=__STORYBOOK_MODULE_TEST__,X={...q,...Z,...G,...k,...M,...K,...U,...C},J={api:"",parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:y.PREFERRED_ROOTS,hierarchyKeepExpansionStates:y.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:y.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ee={api:F,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0},ae={api:H,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},te={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},oe={api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""},re={api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},ie={api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ne={api:t,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""},se={api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1},a=async({canvasElement:e})=>{const o=Q(e);await z(async()=>{const B=o.getByTestId("tab");await j(B).toBeInTheDocument()},{timeout:3e3})};let pe=0;function ge(){return pe++}const aa={title:"Additional Entity Metadata/TabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:Y}}},render:e=>{const o=ge();return`
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
        hierarchyPreferredRoots:${e.hierarchyPreferredRoots},
        hierarchyKeepExpansionStates:${e.hierarchyKeepExpansionStates},
        hierarchyShowSiblingsOnInit:${e.hierarchyShowSiblingsOnInit},
        onNavigateToEntity:${e.onNavigateToEntity},
        onNavigateToOntology:${e.onNavigateToOntology},
        onNavigateToDisambiguate:${e.onNavigateToDisambiguate}
    },
    document.querySelector('#tab_widget_container_${o}')
)
<\/script>
        `},argTypes:X,args:J},r={args:ee,play:a},i={name:"OLS3",args:ae,play:a},n={name:"OLS4 V1",args:te,play:a},s={name:"OLS4 V2",args:oe,play:a},p={args:re,play:a},g={args:ie,play:a},c={args:ne,play:a},m={args:se,play:a};var l,d,T;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: DefaultArgs,
  play: commonTabWidgetPlay
}`,...(T=(d=r.parameters)==null?void 0:d.docs)==null?void 0:T.source}}};var b,u,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "OLS3",
  args: TabWidgetOLS3Args,
  play: commonTabWidgetPlay
}`,...(S=(u=i.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var O,f,h;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "OLS4 V1",
  args: TabWidgetOLS4V1Args,
  play: commonTabWidgetPlay
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var A,L,_;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "OLS4 V2",
  args: TabWidgetOLS4V2Args,
  play: commonTabWidgetPlay
}`,...(_=(L=s.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var I,W,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonTabWidgetPlay
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var N,D,w;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonTabWidgetPlay
}`,...(w=(D=g.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var v,P,$;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: TabWidgetLargeArgs,
  play: commonTabWidgetPlay
}`,...($=(P=c.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var R,V,x;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: HiddenTabsArgs,
  play: commonTabWidgetPlay
}`,...(x=(V=m.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const ta=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{r as Default,g as DefiningOntologyUnavailable,m as HiddenTabs,p as SelectingDefiningOntology,c as TabWidgetLarge,i as TabWidgetOLS3,n as TabWidgetOLS4V1,s as TabWidgetOLS4V2,ta as __namedExportsOrder,aa as default};
