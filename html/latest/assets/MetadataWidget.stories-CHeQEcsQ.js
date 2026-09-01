import{M as ue}from"./widgetDescriptions-MmE0nvU9.js";import{Q as Ne,k as Se,l as Ie,O as Oe,n as xe,_ as Ae,$ as Ee,a0 as Le,a1 as we,a2 as f,a3 as We,a4 as _e,a5 as De,a6 as ve,a7 as Pe,a8 as je,a9 as Me,aa as Re,u as $e,p as ke,q as He,o as Ce,r as Be,x as Ve,w as Fe,t as Ke,i as Ue}from"./QueryClientProvider-gEbidX2u.js";import{E as c,Z as Qe,a as qe}from"./globals-Dr4u9m4r.js";/* empty css                        *//* empty css                                 */import{c as Ge}from"./index-sOeWpOKg.js";import{c as Ze}from"./index-uVF_ZbZY.js";import{c as Ye}from"./index-DRVT_o0U.js";import{c as ze}from"./index-BwbBRuvV.js";import{c as Je}from"./index-BFNYCbMT.js";import{c as Xe}from"./index-DUy8HzaB.js";import{j as t,c as et}from"./client-DFp2fd_t.js";import{u as tt}from"./useQuery-B74h_AoR.js";/* empty css                  */import{B as at}from"./BreadcrumbPresentation-C6alcuTC.js";import"./OntologyBadge-BkkBnxW_.js";import{D as it}from"./DescriptionWidget-DLpIaa9Q.js";import{E as rt}from"./EntityDefinedByPresentation-Br3iTjD6.js";import{E as ot}from"./EntityOntoListPresentation-DLONLGG4.js";import{I as nt}from"./IriWidget-CI7tadqR.js";/* empty css                               *//* empty css                             */import{T as st,c as lt}from"./index-BOxQ4SzA.js";import{T as j,c as ct}from"./index-ChEq49C1.js";import{E as mt}from"./text-D4LBjtTs.js";import{E as _}from"./flex_group-0IL6tO-x.js";import{E as l}from"./flex_item-B6Jx2XQU.js";import{E as yt}from"./link-BiSrVecI.js";import{c as dt}from"./index-BwQeDr0N.js";import{c as gt}from"./index-BIzXaflv.js";import{c as pt}from"./index-CpRHWhzT.js";import"./BreadcrumbWidget-B65AVMYa.js";import"./icon-CUQXjhdI.js";import"./preload-helper-Dp1pzeXC.js";import"./MathFormulaWidget-CALDto44.js";import"./purify.es-5AjVNlXF.js";/* empty css                               */import"./badge-D3AFs2Fn.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-CGkX1w-2.js";import"./_button-QYLrXIiF.js";import"./inner_text-Bws_x2sS.js";import"./OlsThingApi-Ufrtcw9-.js";/* empty css                                *//* empty css                                    */import"./ExpandableOntologyBadgeList-CBaVoLX0.js";/* empty css                                   *//* empty css                        */import"./button_icon-CwGrBGLg.js";import"./_button_display-zi0zBCTG.js";import"./useCombinedRefs-CI08p5vq.js";import"./EntityInfoWidget-DxaUJbLj.js";import"./ClassExpression-BR8Oyt90.js";import"./Tooltip-BGjYVgpQ.js";import"./icon_tip-BSKsP_Oh.js";import"./tool_tip-CQAM9zON.js";import"./reposition_on_scroll-upl4ZMEL.js";import"./shadow-CHXLCShc.js";import"./panel-C1zQxB-I.js";import"./portal-BkxOFz36.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";/* empty css                                 */import"./model-viewer-BNdxy5m2.js";/* empty css                          */import"./card-Du6aGslE.js";import"./title-CsEYDJfN.js";import"./button-BD8_tb7m.js";import"./basic_table-ByrJxyRh.js";import"./form.styles-BNKBIZG6.js";import"./table_pagination-CeN14OYK.js";import"./button_empty-DlyfVIED.js";import"./popover-Csc18csF.js";import"./screen_reader_only-DlHELPzm.js";import"./focus_trap-H4LTbcZq.js";import"./EntityRelationsWidget-CmcwpxA2.js";import"./GraphViewWidget-C8xyeppn.js";import"./OntologyInfoWidget-CIFbYyf1.js";import"./TermDepictionWidget-iwAB2_M8.js";import"./emotion-css.esm-DzFGU2sU.js";import"./switch-BBrlwpee.js";import"./form_control_layout-Dr1pxRCo.js";import"./validatable_control-C11RI2vZ.js";import"./link.styles-BOROqduV.js";import"./health-B4kIlNyQ.js";function Tt(e){const{iri:i,api:o,ontologyId:T,entityType:d,parameter:w,useLegacy:m,onNavigateToOntology:D,hierarchyTab:ce,crossRefTab:me,terminologyInfoTab:ye,graphViewTab:de,termDepictionTab:ge,altNamesTab:pe,termLink:v,className:Te}=e,P=new Oe(o),n=Te||"ts4nfdi-metadata-style",{data:W,isLoading:h,isSuccess:he,isError:be,error:b}=tt(["metadata",o,w,d,i,T,m],async()=>{let a,g,y;if(m){const r=(await P.getEntityResponse(i,d,void 0,w,m))._embedded;a=Le({_embedded:{[Object.keys(r)[0]]:we(r[Object.keys(r)[0]],m,T)}}),g=r[Object.keys(r)[0]].map(p=>p.ontology_name),y=r[Object.keys(r)[0]].filter(p=>p.is_defining_ontology).map(p=>p.ontology_name)}else a=await P.getEntityObject(i,d,T,w,m),g=a.getAppearsIn(),y=a.getDefinedBy();return y=y.filter(r=>r!=a.getOntologyId()).sort(),g=g.filter(r=>r!=a.getOntologyId()&&!y.includes(r)).sort(),{entity:a,ontoList:g,definedBy:y}});function fe(a){return t.jsx("div",{className:n,"data-testid":"metadata",children:t.jsxs(_,{direction:"column",gutterSize:"m",children:[t.jsx(l,{grow:!1,children:v?t.jsx(yt,{href:v,target:"_blank",external:!1,children:t.jsx(j,{title:a.entity.getLabel(),className:`${n}-title`,isLoading:h,error:b})}):t.jsx(j,{title:a.entity.getLabel(),className:`${n}-title`,isLoading:h,error:b})}),t.jsx(l,{grow:!1,children:t.jsx("span",{children:t.jsx(at,{onNavigateToOntology:e.onNavigateToOntology,ontologyId:T||a.entity.getOntologyId(),shortForm:a.entity.getShortForm(),className:`${n}-breadcrumb`,colorFirst:e.colorFirst,colorSecond:e.colorSecond})})}),t.jsx(l,{children:t.jsx(_,{direction:"column",children:t.jsx(l,{children:t.jsx(_,{children:t.jsx(l,{grow:!1,children:t.jsx(nt,{iri:i,className:`${n}-iri`,iriText:e.iriText,urlPrefix:e.urlPrefix,externalIcon:e.externalIcon,copyButton:e.copyButton})})})})})}),t.jsx(l,{children:t.jsx(it,{description:a.entity.getDescription(),className:`${n}-description`,isLoading:h,error:b,descText:e.descText})}),(a.ontoList.length>0||a.definedBy.length>0)&&t.jsxs("div",{style:{margin:"0 12px 0"},children:[t.jsx(ot,{iri:e.iri,label:a.entity.getLabel()||"",ontolist:a.ontoList,entityType:d||a.entity.getType(),onNavigateToOntology:D,className:`${n}-entity-onto-list`}),t.jsx(rt,{iri:e.iri,ontolist:a.definedBy,label:a.entity.getLabel()||"",entityType:d||a.entity.getType(),onNavigateToOntology:D,className:`${n}-entity-defined-by`})]}),t.jsx(l,{children:t.jsx(st,{iri:i,entityType:e.entityType,api:o,ontologyId:e.ontologyId?e.ontologyId:a.entity.getOntologyId(),useLegacy:m,hierarchyTab:ce,crossRefTab:me,terminologyInfoTab:ye,termDepictionTab:ge,graphViewTab:de,altNamesTab:pe,entityInfoTab:e.entityInfoTab,entityRelationTab:e.entityRelationTab,hierarchyPreferredRoots:e.hierarchyPreferredRoots,hierarchyShowSiblingsOnInit:e.hierarchyShowSiblingsOnInit,hierarchyKeepExpansionStates:e.hierarchyKeepExpansionStates,onNavigateToEntity:e.onNavigateToEntity,onNavigateToOntology:e.onNavigateToOntology,onNavigateToDisambiguate:e.onNavigateToDisambiguate,className:`${n}-tab`,hierarchyWrap:e.hierarchyWrap,rootWalk:e.rootWalk,edgeLabel:e.edgeLabel,onNodeClick:e.onNodeClick,graphHierarchy:e.graphHierarchy,initialSelectedTab:e.initialSelectedTab,showHeader:e.showHeader,enableComparisonMode:e.enableComparisonMode,showComparisonTitleInHeader:e.showComparisonTitleInHeader,targetIri:e.targetIri})})]})})}return t.jsxs(t.Fragment,{children:[h&&t.jsx(xe,{}),be&&t.jsx(mt,{children:Ae(b,"metadata")}),he&&W&&t.jsx(t.Fragment,{children:Ee(W.entity)?fe(W):null})]})}function ht(e){const i=new Ne;return t.jsx(Se,{colorMode:"light",globalStyles:!1,children:t.jsx(Ie,{client:i,children:t.jsx(Tt,{iri:e.iri,ontologyId:e.ontologyId,api:e.api,entityType:e.entityType,parameter:e.parameter,useLegacy:e.useLegacy,termLink:e.termLink,altNamesTab:e.altNamesTab,hierarchyTab:e.hierarchyTab,crossRefTab:e.crossRefTab,terminologyInfoTab:e.terminologyInfoTab,graphViewTab:e.graphViewTab,entityInfoTab:e.entityInfoTab,entityRelationTab:e.entityRelationTab,termDepictionTab:e.termDepictionTab,hierarchyPreferredRoots:e.hierarchyPreferredRoots,hierarchyShowSiblingsOnInit:e.hierarchyShowSiblingsOnInit,hierarchyKeepExpansionStates:e.hierarchyKeepExpansionStates,onNavigateToEntity:e.onNavigateToEntity,onNavigateToOntology:e.onNavigateToOntology,onNavigateToDisambiguate:e.onNavigateToDisambiguate,className:e.className,initialSelectedTab:e.initialSelectedTab,copyButton:e.copyButton,descText:e.descText,titleText:e.titleText,defaultValue:e.defaultValue,iriText:e.iriText,externalIcon:e.externalIcon,urlPrefix:e.urlPrefix,hierarchyWrap:e.hierarchyWrap,rootWalk:e.rootWalk,graphHierarchy:e.graphHierarchy,edgeLabel:e.edgeLabel,onNodeClick:e.onNodeClick,colorSecond:e.colorSecond,colorFirst:e.colorFirst,showHeader:e.showHeader,showComparisonTitleInHeader:e.showComparisonTitleInHeader,enableComparisonMode:e.enableComparisonMode,targetIri:e.targetIri})})})}const{expect:bt,waitFor:ft,within:ut}=__STORYBOOK_MODULE_TEST__,Nt={...Ue,...Ke,...Fe,...Ve,...Be,...Ce,...He,...ke,...$e,...Re,...Me,...je,...Pe,...ve,...De,..._e,...We},St={api:"",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,graphViewTab:!0,termDepictionTab:!0,hierarchyPreferredRoots:f.PREFERRED_ROOTS,hierarchyKeepExpansionStates:f.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:f.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message",hierarchyWrap:f.WRAP,parameter:"",showHeader:!0,className:"ts4nfdi-metadata-style"},It={api:Qe,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",hierarchyWrap:!0,copyButton:"right"},Ot={api:qe,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"},xt={api:c,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"},At={api:c,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",initialSelectedTab:"ontology"},Et={api:c,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},Lt={api:c,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},wt={api:c,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"},Wt={api:c,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1,entityRelationTab:!1,entityInfoTab:!1},_t={api:c,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"},s=async({canvasElement:e})=>{const i=ut(e);await ft(async()=>{const o=i.getByTestId("metadata");await bt(o).toBeInTheDocument()},{timeout:3e3})},M=new WeakMap;function Dt(e,i){let o=M.get(i);o||(o=et.createRoot(i),M.set(i,o)),o.render(t.jsx(ht,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createMetadata:Dt,createTab:lt,createHierarchy:pt,createCrossRefTab:gt,createAlternativeNameTab:dt,createBreadcrumb:Ge,createDescription:Ze,createEntityDefinedBy:Ye,createEntityOntoList:ze,createIri:Je,createMathFormula:Xe,createTitle:ct};let vt=0;function Pt(){return vt++}const mi={title:"Entity Metadata/MetadataWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:ue}}},render:e=>{const i=Pt();return`
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
        `},argTypes:Nt,args:St},u={name:"Metadata Widget",args:{...It,className:"ts4nfdi-metadata-style"},play:s},N={name:"OLS3",args:{...Ot,className:"ts4nfdi-metadata-style"},play:s},S={name:"OLS4 V1",args:{...xt,className:"ts4nfdi-metadata-style"},play:s},I={name:"OLS4 V2",args:{...At,className:"ts4nfdi-metadata-style"},play:s},O={args:{...Et,className:"ts4nfdi-metadata-style"},play:s},x={args:{...Lt,className:"ts4nfdi-metadata-style"},play:s},A={args:{...wt,className:"ts4nfdi-metadata-style"},play:s},E={name:"Hidden Tabs",args:{...Wt,className:"ts4nfdi-metadata-style"},play:s},L={args:{..._t,className:"ts4nfdi-metadata-style"},play:s};var R,$,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Y=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var z,J,X;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...DefiningOntologyUnavailableArgs,
    className: "ts4nfdi-metadata-style"
  },
  play: commonMetadataWidgetPlay
}`,...(X=(J=x.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var ee,te,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(le=(se=L.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const yi=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{A as DefinedByAlsoAppearsInWidgets,x as DefiningOntologyUnavailable,E as HiddenTabs,u as MetadataWidget1,N as OLS3,S as OLS4V1,I as OLS4V2,O as SelectingDefiningOntology,L as TermAsLink,yi as __namedExportsOrder,mi as default};
