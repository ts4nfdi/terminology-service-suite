import{H as r,m as n,n as s,q as y}from"./storyArgs-BTeOS3u2.js";/* empty css                                  */import{E as t,Z as p,a,T as g}from"./globals-BR6EHpzJ.js";import{H as o}from"./HierarchyWidget-Chkismhb.js";import"./index-L2N5pzd4.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                        */const l={api:{control:{type:"radio"},options:[t,p,a,g]},ontologyId:{description:"Ontology ID from where the term metadata should be taken."},iri:{description:"Iri of the term you want to fetch the metadata for."},entityType:{table:{type:{summary:`${r.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},parameter:{type:{required:!1}},...n,...s,...y},c={api:"",parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:"",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:o.PREFERRED_ROOTS,hierarchyKeepExpansionStates:o.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},_={storyName:"Metadata Widget",args:{api:a,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},S={storyName:"OLS3",args:{api:a,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},O={storyName:"OLS4 V1",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},L={storyName:"OLS4 V2",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""}},E={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},A={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},D={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"}},$={storyName:"Hidden Tabs",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1}},v={args:{api:t,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"}};let m=0;function T(){return m++}const P={title:"MetadataWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const i=T();return`
<div id="metadata_widget_container_${i}"></div>

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
    document.querySelector('#metadata_widget_container_${i}')
)
<\/script>
        `},argTypes:l,args:c},C=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{D as DefinedByAlsoAppearsInWidgets,A as DefiningOntologyUnavailable,$ as HiddenTabs,_ as MetadataWidget1,S as OLS3,O as OLS4V1,L as OLS4V2,E as SelectingDefiningOntology,v as TermAsLink,C as __namedExportsOrder,P as default};
