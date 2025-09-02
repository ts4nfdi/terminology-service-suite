import{V as a,W as r,X as i,Y as n,Z as s,u as y,p,o as g,j as l,k as T,q as c,n as b,l as d,i as m,_ as h}from"./widgetDescriptions-Bq7gOAJM.js";/* empty css                                  */import{Z as u,a as I,E as t}from"./globals-CvFyH82M.js";const N={...m,...d,...b,...c,...T,...l,...g,...p,...y,...s,...n,...i,...r},S={api:"",useLegacy:"true",ontologyId:"",entityType:"",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,graphViewTab:!0,termDepictionTab:!0,hierarchyPreferredRoots:a.PREFERRED_ROOTS,hierarchyKeepExpansionStates:a.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:a.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message",hierarchyWrap:a.WRAP,parameter:""},L={storyName:"Metadata Widget",args:{api:u,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",hierarchyWrap:!0}},$={storyName:"OLS3",args:{api:I,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"}},D={storyName:"OLS4 V1",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"}},v={storyName:"OLS4 V2",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""}},R={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},W={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},w={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"}},P={storyName:"Hidden Tabs",args:{api:t,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1}},M={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"}};let f=0;function _(){return f++}const V={title:"Entity Metadata/MetadataWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:h}}},render:e=>{const o=_();return`
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
        `},argTypes:N,args:S},C=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{w as DefinedByAlsoAppearsInWidgets,W as DefiningOntologyUnavailable,P as HiddenTabs,L as MetadataWidget1,$ as OLS3,D as OLS4V1,v as OLS4V2,R as SelectingDefiningOntology,M as TermAsLink,C as __namedExportsOrder,V as default};
