import{Q as a,u as i,p as r,o as n,j as s,k as y,q as p,n as g,l,i as T,R as c}from"./widgetDescriptions-BjaIB8IO.js";/* empty css                                  */import{Z as b,a as m,E as t}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d={...T,...l,...g,...p,...y,...s,...n,...r,...i},h={api:"",useLegacy:"true",ontologyId:"",entityType:"",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,graphViewTab:!0,termDepictionTab:!0,hierarchyPreferredRoots:a.PREFERRED_ROOTS,hierarchyKeepExpansionStates:a.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:a.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message",parameter:""},A={storyName:"Metadata Widget",args:{api:b,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term"}},E={storyName:"OLS3",args:{api:m,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"}},L={storyName:"OLS4 V1",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"}},$={storyName:"OLS4 V2",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""}},D={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},v={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},R={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"}},w={storyName:"Hidden Tabs",args:{api:t,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1}},M={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"}};let u=0;function I(){return u++}const P={title:"Entity Metadata/MetadataWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:c}}},render:e=>{const o=I();return`
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
        `},argTypes:d,args:h},V=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{R as DefinedByAlsoAppearsInWidgets,v as DefiningOntologyUnavailable,w as HiddenTabs,A as MetadataWidget1,E as OLS3,L as OLS4V1,$ as OLS4V2,D as SelectingDefiningOntology,M as TermAsLink,V as __namedExportsOrder,P as default};
