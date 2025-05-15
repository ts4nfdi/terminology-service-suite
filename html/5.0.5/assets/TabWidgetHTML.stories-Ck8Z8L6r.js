import{o as r,j as n,k as s,T as y,V as g}from"./widgetDescriptions-erLppZpy.js";/* empty css                                  */import{E as t,Z as a,T as p,a as T}from"./globals-BpbGe8p9.js";import{H as o}from"./HierarchyWidget-DvbradJF.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EE_2VD4x.js";/* empty css                  */const l={api:{control:{type:"radio"},options:[t,a,a,p]},ontologyId:{},iri:{description:"Iri of the term you want to fetch the tab information for."},parameter:{type:{required:!1}},entityType:{type:{required:!1},table:{type:{summary:`${y.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},...s,...n,...r},c={api:"",parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:"",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:o.PREFERRED_ROOTS,hierarchyKeepExpansionStates:o.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},_={storyName:"Default",args:{api:a,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0}},E={storyName:"OLS3",args:{api:T,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},L={storyName:"OLS4 V1",args:{api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},D={storyName:"OLS4 V2",args:{api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""}},$={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},v={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},A={args:{api:t,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""}},w={storyName:"Hidden Tabs",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1}};let b=0;function d(){return b++}const W={title:"Additional Entity Metadata/TabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:e=>{const i=d();return`
<div id="tab_widget_container_${i}"></div>

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
    document.querySelector('#tab_widget_container_${i}')
)
<\/script>
        `},argTypes:l,args:c},R=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{_ as Default,v as DefiningOntologyUnavailable,w as HiddenTabs,$ as SelectingDefiningOntology,A as TabWidgetLarge,E as TabWidgetOLS3,L as TabWidgetOLS4V1,D as TabWidgetOLS4V2,R as __namedExportsOrder,W as default};
