import{H as r,m as n,n as s,q as y}from"./storyArgs-BTeOS3u2.js";/* empty css                                  */import{E as t,Z as g,a,T as p}from"./globals-BR6EHpzJ.js";import{H as o}from"./HierarchyWidget-Chkismhb.js";import"./index-L2N5pzd4.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                        */const T={api:{control:{type:"radio"},options:[t,g,a,p]},ontologyId:{},iri:{description:"Iri of the term you want to fetch the tab information for."},parameter:{type:{required:!1}},entityType:{type:{required:!1},table:{type:{summary:`${r.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},...n,...s,...y},l={api:"",parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:"",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:o.PREFERRED_ROOTS,hierarchyKeepExpansionStates:o.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},O={storyName:"Default",args:{api:a,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0}},S={storyName:"OLS3",args:{api:a,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},_={storyName:"OLS4 V1",args:{api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},E={storyName:"OLS4 V2",args:{api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""}},L={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},D={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},$={args:{api:t,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""}},v={storyName:"Hidden Tabs",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1}};let c=0;function b(){return c++}const w={title:"TabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const i=b();return`
<div id="tab_widget_container_${i}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createTab(
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
        `},argTypes:T,args:l},A=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{O as Default,D as DefiningOntologyUnavailable,v as HiddenTabs,L as SelectingDefiningOntology,$ as TabWidgetLarge,S as TabWidgetOLS3,_ as TabWidgetOLS4V1,E as TabWidgetOLS4V2,A as __namedExportsOrder,w as default};
