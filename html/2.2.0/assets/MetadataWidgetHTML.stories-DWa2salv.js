import"./terminology-service-suite.min-BCx-WkVK.js";/* empty css                                  */import{e as o}from"./ModelTypeCheck-Cd-4DVPN.js";const a={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},ontologyId:{description:"Ontology ID from where the term metadata should be taken."},iri:{description:"Iri of the term you want to fetch the metadata for."},entityType:{table:{type:{summary:`${o.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},parameter:{type:{required:!1}}},i={parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:""},d={storyName:"Metadata Widget",args:{api:"https://semanticlookup.zbmed.de/api/",ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},c={storyName:"OLS3",args:{api:"https://semanticlookup.zbmed.de/api/",ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},l={storyName:"OLS4 V1",args:{api:"https://www.ebi.ac.uk/ols4/api/",ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},g={storyName:"OLS4 V2",args:{api:"https://www.ebi.ac.uk/ols4/api/",ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""}},m={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},u={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let r=0;function n(){return r++}const b={title:"MetadataWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=n();return`
<div id="metadata_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createMetadata(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        api:"${t.api}",
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:${t.useLegacy}
    },
    document.querySelector('#metadata_widget_container_${e}')
)
<\/script>
        `},argTypes:a,args:i},h=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{u as DefiningOntologyUnavailable,d as MetadataWidget1,c as OLS3,l as OLS4V1,g as OLS4V2,m as SelectingDefiningOntology,h as __namedExportsOrder,b as default};
