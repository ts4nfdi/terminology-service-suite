import{e as r}from"./ModelTypeCheck-DKS1_r5t.js";/* empty css                                  */import{E as e,Z as i,a as o,T as n}from"./globals-BR6EHpzJ.js";import{n as s}from"./storyArgs-CLJe14HA.js";const y={api:{control:{type:"radio"},options:[e,i,o,n]},ontologyId:{description:"Ontology ID from where the term metadata should be taken."},iri:{description:"Iri of the term you want to fetch the metadata for."},entityType:{table:{type:{summary:`${r.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},parameter:{type:{required:!1}},...s},p={api:"",parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:"",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,onNavigateToOntology:"Console message"},b={storyName:"Metadata Widget",args:{api:o,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},u={storyName:"OLS3",args:{api:o,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},I={storyName:"OLS4 V1",args:{api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},f={storyName:"OLS4 V2",args:{api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""}},N={args:{api:e,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},h={args:{api:e,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},L={args:{api:e,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"}},_={storyName:"Hidden Tabs",args:{api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1}},O={args:{api:e,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"}};let l=0;function g(){return l++}const A={title:"MetadataWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const a=g();return`
<div id="metadata_widget_container_${a}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createMetadata(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        api:"${t.api}",
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:${t.useLegacy},
        onNavigateToOntology:${t.onNavigateToOntology},
        termLink: "${t.termLink}",
        altNamesTab: ${t.altNamesTab},
        hierarchyTab: ${t.hierarchyTab},
        crossRefTab: ${t.crossRefTab},
        terminologyInfoTab: ${t.terminologyInfoTab}
    },
    document.querySelector('#metadata_widget_container_${a}')
)
<\/script>
        `},argTypes:y,args:p},S=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{L as DefinedByAlsoAppearsInWidgets,h as DefiningOntologyUnavailable,_ as HiddenTabs,b as MetadataWidget1,u as OLS3,I as OLS4V1,f as OLS4V2,N as SelectingDefiningOntology,O as TermAsLink,S as __namedExportsOrder,A as default};
