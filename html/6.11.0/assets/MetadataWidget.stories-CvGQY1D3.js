import{Q as ue,k as Ne,l as Se,O as Ie,n as Oe,a6 as xe,a7 as Ae,a8 as Ee,a9 as Le,aa as f,ab as we,ac as We,ad as _e,ae as De,af as ve,ag as Pe,ah as je,ai as Me,v as Re,p as $e,q as ke,o as He,r as Ce,y as Be,x as Ve,u as Fe,i as Ke,aj as Ue}from"./QueryClientProvider-tBG0NWM0.js";import{Z as Qe,a as qe,E as c}from"./globals-Dneqqh2P.js";/* empty css                             *//* empty css                                 */import{c as Ge}from"./index-Ci3PGGUV.js";import{c as Ze}from"./index-B_mFFmtq.js";import{c as Ye}from"./index-CWtNu_PK.js";import{c as Je}from"./index-DgShSEhT.js";import{c as Xe}from"./index-CDK9KUPc.js";import{j as t,c as ze}from"./client-hNkKQuBU.js";import{u as et}from"./useQuery-CJ8-LNvG.js";/* empty css                  */import{B as tt}from"./BreadcrumbPresentation-Ube3d70-.js";import"./OntologyBadge-D74mBx0r.js";import{D as at}from"./DescriptionWidget-CE1Pu9EX.js";import{E as it}from"./EntityDefinedByPresentation-CPU2Ass9.js";import{E as rt}from"./EntityOntoListPresentation-BezO58K9.js";import{I as ot}from"./IriWidget-DhsIPb7F.js";/* empty css                               *//* empty css                             */import{T as nt,c as st}from"./index-CRo4eUqC.js";import{T as j,c as lt}from"./index-B3i1AR0I.js";import{E as ct}from"./text-Bf6klxy0.js";import{E as _}from"./flex_group-kO_kVLPF.js";import{E as l}from"./flex_item-D1cL8VWd.js";import{E as mt}from"./link-MT5F__L5.js";import{c as yt}from"./index-BEos9GpZ.js";import{c as dt}from"./index-B4b_aO5k.js";import{c as gt}from"./index-_MIYHOO8.js";import"./BreadcrumbWidget-BW4L0WuF.js";import"./icon-CW9K28UO.js";import"./preload-helper-Dp1pzeXC.js";import"./badge-1LAF02M_.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-BGkdMWmt.js";import"./_button-DlbInGvA.js";import"./inner_text-CnLckb93.js";import"./OlsThingApi-B6xLE3Ry.js";/* empty css                                *//* empty css                                    */import"./ExpandableOntologyBadgeList-B7vitSpn.js";/* empty css                                   *//* empty css                        */import"./button_icon-BGmRF3rl.js";import"./_button_display-BPcL1Fhb.js";/* empty css                        */import"./EntityInfoWidget-CCetoN_k.js";import"./ClassExpression-BDCCBtXX.js";import"./Tooltip-DWDBDu7v.js";import"./icon_tip-BQUujVP3.js";import"./tool_tip-TDjIL_x9.js";import"./shadow-DrkSvs48.js";import"./panel-CmjUMykD.js";import"./popover_arrow.styles-C9XUL52R.js";import"./portal-cejDdY-l.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./card-3hfvfJNY.js";import"./title-XQGlUu7n.js";import"./button-DNxJpH64.js";import"./EntityRelationsWidget-BiOIo5BH.js";import"./GraphViewWidget-Bb9cM_eJ.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./popover-Lanbdo8G.js";import"./focus_trap-BZEPbe3u.js";import"./screen_reader_only-ByBZZHSH.js";import"./button_empty-BcNoj_Oc.js";import"./OntologyInfoWidget-CvO8rpMX.js";/* empty css                                 */import"./TermDepictionWidget-CiSjGaIG.js";import"./model-viewer-C2wGp_8x.js";import"./emotion-css.esm-CVeUUQIW.js";import"./switch-wloZeMYK.js";import"./form_control_layout-BafC1dhI.js";import"./form.styles-ClyXq14D.js";/* empty css                          */import"./link.styles-CSK3t4GY.js";import"./health-KDbvPlbW.js";function pt(e){const{iri:i,api:o,ontologyId:T,entityType:d,parameter:w,useLegacy:m,onNavigateToOntology:D,hierarchyTab:ce,crossRefTab:me,terminologyInfoTab:ye,graphViewTab:de,termDepictionTab:ge,altNamesTab:pe,termLink:v,className:Te}=e,P=new Ie(o),n=Te||"ts4nfdi-metadata-style",{data:W,isLoading:h,isSuccess:he,isError:be,error:b}=et(["metadata",o,w,d,i,T,m],async()=>{let a,g,y;if(m){const r=(await P.getEntityResponse(i,d,void 0,w,m))._embedded;a=Ee({_embedded:{[Object.keys(r)[0]]:Le(r[Object.keys(r)[0]],m,T)}}),g=r[Object.keys(r)[0]].map(p=>p.ontology_name),y=r[Object.keys(r)[0]].filter(p=>p.is_defining_ontology).map(p=>p.ontology_name)}else a=await P.getEntityObject(i,d,T,w,m),g=a.getAppearsIn(),y=a.getDefinedBy();return y=y.filter(r=>r!=a.getOntologyId()).sort(),g=g.filter(r=>r!=a.getOntologyId()&&!y.includes(r)).sort(),{entity:a,ontoList:g,definedBy:y}});function fe(a){return t.jsx("div",{className:n,"data-testid":"metadata",children:t.jsxs(_,{direction:"column",children:[t.jsx(l,{grow:!1,children:v?t.jsx(mt,{href:v,target:"_blank",external:!1,children:t.jsx(j,{title:a.entity.getLabel(),className:`${n}-title`,isLoading:h,error:b})}):t.jsx(j,{title:a.entity.getLabel(),className:`${n}-title`,isLoading:h,error:b})}),t.jsx(l,{grow:!1,children:t.jsx("span",{children:t.jsx(tt,{onNavigateToOntology:e.onNavigateToOntology,ontologyId:T||a.entity.getOntologyId(),shortForm:a.entity.getShortForm(),className:`${n}-breadcrumb`,colorFirst:e.colorFirst,colorSecond:e.colorSecond})})}),t.jsx(l,{children:t.jsx(_,{direction:"column",children:t.jsx(l,{children:t.jsx(_,{children:t.jsx(l,{grow:!1,children:t.jsx(ot,{iri:i,className:`${n}-iri`,iriText:e.iriText,urlPrefix:e.urlPrefix,externalIcon:e.externalIcon,copyButton:e.copyButton})})})})})}),t.jsx(l,{children:t.jsx(at,{description:a.entity.getDescription(),className:`${n}-description`,isLoading:h,error:b,descText:e.descText})}),t.jsxs("div",{style:{margin:"0 12px 0"},children:[t.jsx(rt,{iri:e.iri,label:a.entity.getLabel()||"",ontolist:a.ontoList,entityType:d||a.entity.getType(),onNavigateToOntology:D,className:`${n}-entity-onto-list`}),t.jsx(it,{iri:e.iri,ontolist:a.definedBy,label:a.entity.getLabel()||"",entityType:d||a.entity.getType(),onNavigateToOntology:D,className:`${n}-entity-defined-by`})]}),t.jsx(l,{children:t.jsx(nt,{iri:i,entityType:e.entityType,api:o,ontologyId:e.ontologyId?e.ontologyId:a.entity.getOntologyId(),useLegacy:m,hierarchyTab:ce,crossRefTab:me,terminologyInfoTab:ye,termDepictionTab:ge,graphViewTab:de,altNamesTab:pe,entityInfoTab:e.entityInfoTab,entityRelationTab:e.entityRelationTab,hierarchyPreferredRoots:e.hierarchyPreferredRoots,hierarchyShowSiblingsOnInit:e.hierarchyShowSiblingsOnInit,hierarchyKeepExpansionStates:e.hierarchyKeepExpansionStates,onNavigateToEntity:e.onNavigateToEntity,onNavigateToOntology:e.onNavigateToOntology,onNavigateToDisambiguate:e.onNavigateToDisambiguate,className:`${n}-tab`,hierarchyWrap:e.hierarchyWrap,rootWalk:e.rootWalk,edgeLabel:e.edgeLabel,onNodeClick:e.onNodeClick,graphHierarchy:e.graphHierarchy,initialSelectedTab:e.initialSelectedTab,showHeader:e.showHeader,enableComparisonMode:e.enableComparisonMode,showComparisonTitleInHeader:e.showComparisonTitleInHeader,targetIri:e.targetIri})})]})})}return t.jsxs(t.Fragment,{children:[h&&t.jsx(Oe,{}),be&&t.jsx(ct,{children:xe(b,"metadata")}),he&&W&&t.jsx(t.Fragment,{children:Ae(W.entity)?fe(W):null})]})}function Tt(e){const i=new ue;return t.jsx(Ne,{colorMode:"light",globalStyles:!1,children:t.jsx(Se,{client:i,children:t.jsx(pt,{iri:e.iri,ontologyId:e.ontologyId,api:e.api,entityType:e.entityType,parameter:e.parameter,useLegacy:e.useLegacy,termLink:e.termLink,altNamesTab:e.altNamesTab,hierarchyTab:e.hierarchyTab,crossRefTab:e.crossRefTab,terminologyInfoTab:e.terminologyInfoTab,graphViewTab:e.graphViewTab,entityInfoTab:e.entityInfoTab,entityRelationTab:e.entityRelationTab,termDepictionTab:e.termDepictionTab,hierarchyPreferredRoots:e.hierarchyPreferredRoots,hierarchyShowSiblingsOnInit:e.hierarchyShowSiblingsOnInit,hierarchyKeepExpansionStates:e.hierarchyKeepExpansionStates,onNavigateToEntity:e.onNavigateToEntity,onNavigateToOntology:e.onNavigateToOntology,onNavigateToDisambiguate:e.onNavigateToDisambiguate,className:e.className,initialSelectedTab:e.initialSelectedTab,copyButton:e.copyButton,descText:e.descText,titleText:e.titleText,defaultValue:e.defaultValue,iriText:e.iriText,externalIcon:e.externalIcon,urlPrefix:e.urlPrefix,hierarchyWrap:e.hierarchyWrap,rootWalk:e.rootWalk,graphHierarchy:e.graphHierarchy,edgeLabel:e.edgeLabel,onNodeClick:e.onNodeClick,colorSecond:e.colorSecond,colorFirst:e.colorFirst,showHeader:e.showHeader,showComparisonTitleInHeader:e.showComparisonTitleInHeader,enableComparisonMode:e.enableComparisonMode,targetIri:e.targetIri})})})}const{expect:ht,waitFor:bt,within:ft}=__STORYBOOK_MODULE_TEST__,ut={...Ke,...Fe,...Ve,...Be,...Ce,...He,...ke,...$e,...Re,...Me,...je,...Pe,...ve,...De,..._e,...We,...we},Nt={api:"",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,graphViewTab:!0,termDepictionTab:!0,hierarchyPreferredRoots:f.PREFERRED_ROOTS,hierarchyKeepExpansionStates:f.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:f.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message",hierarchyWrap:f.WRAP,parameter:"",showHeader:!0,className:"ts4nfdi-metadata-style"},St={api:Qe,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",hierarchyWrap:!0,copyButton:"right"},It={api:qe,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"},Ot={api:c,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"},xt={api:c,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",initialSelectedTab:"ontology"},At={api:c,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},Et={api:c,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},Lt={api:c,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"},wt={api:c,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1,entityRelationTab:!1,entityInfoTab:!1},Wt={api:c,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"},s=async({canvasElement:e})=>{const i=ft(e);await bt(async()=>{const o=i.getByTestId("metadata");await ht(o).toBeInTheDocument()},{timeout:3e3})},M=new WeakMap;function _t(e,i){let o=M.get(i);o||(o=ze.createRoot(i),M.set(i,o)),o.render(t.jsx(Tt,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createMetadata:_t,createTab:st,createHierarchy:gt,createCrossRefTab:dt,createAlternativeNameTab:yt,createBreadcrumb:Ge,createDescription:Ze,createEntityDefinedBy:Ye,createEntityOntoList:Je,createIri:Xe,createTitle:lt};let Dt=0;function vt(){return Dt++}const ii={title:"Entity Metadata/MetadataWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:Ue}}},render:e=>{const i=vt();return`
<div id="metadata_widget_container_${i}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMetadata(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        termLink: "${e.termLink}",
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
    document.querySelector('#metadata_widget_container_${i}')
)
<\/script>
        `},argTypes:ut,args:Nt},u={name:"Metadata Widget",args:{...St,className:"ts4nfdi-metadata-style"},play:s},N={name:"OLS3",args:{...It,className:"ts4nfdi-metadata-style"},play:s},S={name:"OLS4 V1",args:{...Ot,className:"ts4nfdi-metadata-style"},play:s},I={name:"OLS4 V2",args:{...xt,className:"ts4nfdi-metadata-style"},play:s},O={args:{...At,className:"ts4nfdi-metadata-style"},play:s},x={args:{...Et,className:"ts4nfdi-metadata-style"},play:s},A={args:{...Lt,className:"ts4nfdi-metadata-style"},play:s},E={name:"Hidden Tabs",args:{...wt,className:"ts4nfdi-metadata-style"},play:s},L={args:{...Wt,className:"ts4nfdi-metadata-style"},play:s};var R,$,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Metadata Widget",
  args: {
    ...MetadataWidget1Args,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(k=($=u.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var H,C,B;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "OLS3",
  args: {
    ...OLS3Args,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(B=(C=N.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var V,F,K;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "OLS4 V1",
  args: {
    ...OLS4V1Args,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(K=(F=S.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,Q,q;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "OLS4 V2",
  args: {
    ...OLS4V2Args,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(q=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};var G,Z,Y;O.parameters={...O.parameters,docs:{...(G=O.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...SelectingDefiningOntologyArgs,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(Y=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var J,X,z;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...DefiningOntologyUnavailableArgs,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var ee,te,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...DefinedByAlsoAppearsInWidgetsArgs,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(ae=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ie,re,oe;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Hidden Tabs",
  args: {
    ...HiddenTabsArgs,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(oe=(re=E.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,se,le;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...TermAsLinkArgs,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(le=(se=L.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const ri=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{A as DefinedByAlsoAppearsInWidgets,x as DefiningOntologyUnavailable,E as HiddenTabs,u as MetadataWidget1,N as OLS3,S as OLS4V1,I as OLS4V2,O as SelectingDefiningOntology,L as TermAsLink,ri as __namedExportsOrder,ii as default};
