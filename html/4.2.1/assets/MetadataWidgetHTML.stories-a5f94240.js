import{a as r,l as n,j as s,o as y,m as p,n as g,q as l,c as T,u as c,S as m}from"./widgetDescriptions-5f3d180b.js";/* empty css                                  */import{a as i,E as t}from"./globals-9d73b881.js";import{H as o}from"./HierarchyWidget-467382a7.js";import"./index-59a18794.js";import"./_commonjsHelpers-725317a4.js";/* empty css                  */const d={...r,...n,...s,...y,...p,...g,...l,...T,...c},b={api:"",useLegacy:"true",ontologyId:"",entityType:"",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:o.PREFERRED_ROOTS,hierarchyKeepExpansionStates:o.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message",parameter:""},L={storyName:"Metadata Widget",args:{api:i,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"}},E={storyName:"OLS3",args:{api:i,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"}},$={storyName:"OLS4 V1",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"}},v={storyName:"OLS4 V2",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""}},D={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},C={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},P={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"}},M={storyName:"Hidden Tabs",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1}},R={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"}};let h=0;function I(){return h++}const W={title:"Entity Metadata/MetadataWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:m}}},render:e=>{const a=I();return`
<div id="metadata_widget_container_${a}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createMetadata(
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
        hierarchyPreferredRoots:${e.hierarchyPreferredRoots},
        hierarchyKeepExpansionStates:${e.hierarchyKeepExpansionStates},
        hierarchyShowSiblingsOnInit:${e.hierarchyShowSiblingsOnInit},
        onNavigateToEntity:${e.onNavigateToEntity},
        onNavigateToOntology:${e.onNavigateToOntology},
        onNavigateToDisambiguate:${e.onNavigateToDisambiguate}
    },
    document.querySelector('#metadata_widget_container_${a}')
)
<\/script>
        `},argTypes:d,args:b},H=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{P as DefinedByAlsoAppearsInWidgets,C as DefiningOntologyUnavailable,M as HiddenTabs,L as MetadataWidget1,E as OLS3,$ as OLS4V1,v as OLS4V2,D as SelectingDefiningOntology,R as TermAsLink,H as __namedExportsOrder,W as default};
