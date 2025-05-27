import{u as i,p as r,o as n,j as s,k as p,q as y,n as g,l,i as T,Q as c}from"./widgetDescriptions-tqVhoc0Z.js";/* empty css                                  */import{Z as b,a as m,E as t}from"./globals-BpbGe8p9.js";import{H as a}from"./HierarchyWidget-DvbradJF.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EE_2VD4x.js";/* empty css                  */const d={...T,...l,...g,...y,...p,...s,...n,...r,...i},h={api:"",useLegacy:"true",ontologyId:"",entityType:"",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,graphViewTab:!0,termDepictionTab:!0,hierarchyPreferredRoots:a.PREFERRED_ROOTS,hierarchyKeepExpansionStates:a.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:a.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message",parameter:""},$={storyName:"Metadata Widget",args:{api:b,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term"}},D={storyName:"OLS3",args:{api:m,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"}},v={storyName:"OLS4 V1",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"}},R={storyName:"OLS4 V2",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""}},w={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},M={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},P={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"}},V={storyName:"Hidden Tabs",args:{api:t,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1}},W={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"}};let u=0;function I(){return u++}const H={title:"Entity Metadata/MetadataWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:c}}},render:e=>{const o=I();return`
<div id="metadata_widget_container_${o}"></div>

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
        onNavigateToEntity:${e.onNavigateToEntity},
        onNavigateToOntology:${e.onNavigateToOntology},
        onNavigateToDisambiguate:${e.onNavigateToDisambiguate},
        className:${e.className}
    },
    document.querySelector('#metadata_widget_container_${o}')
)
<\/script>
        `},argTypes:d,args:h},C=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{P as DefinedByAlsoAppearsInWidgets,M as DefiningOntologyUnavailable,V as HiddenTabs,$ as MetadataWidget1,D as OLS3,v as OLS4V1,R as OLS4V2,w as SelectingDefiningOntology,W as TermAsLink,C as __namedExportsOrder,H as default};
