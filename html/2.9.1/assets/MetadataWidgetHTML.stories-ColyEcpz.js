import{e as r}from"./ModelTypeCheck-B98VjQUn.js";/* empty css                                  */import{E as e,Z as i,a as o,T as n}from"./globals-BR6EHpzJ.js";import{m as y}from"./storyArgs-Drsbv0EO.js";const p={api:{control:{type:"radio"},options:[e,i,o,n]},ontologyId:{description:"Ontology ID from where the term metadata should be taken."},iri:{description:"Iri of the term you want to fetch the metadata for."},entityType:{table:{type:{summary:`${r.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},parameter:{type:{required:!1}},...y},s={api:"",parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:"",iri:"",onNavigateToOntology:"Console message"},I={storyName:"Metadata Widget",args:{api:o,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},T={storyName:"OLS3",args:{api:o,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},O={storyName:"OLS4 V1",args:{api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},N={storyName:"OLS4 V2",args:{api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""}},_={args:{api:e,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},b={args:{api:e,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},f={args:{api:e,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"}};let g=0;function d(){return g++}const L={title:"MetadataWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const a=d();return`
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
        onNavigateToOntology:${t.onNavigateToOntology}
    },
    document.querySelector('#metadata_widget_container_${a}')
)
<\/script>
        `},argTypes:p,args:s},S=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets"];export{f as DefinedByAlsoAppearsInWidgets,b as DefiningOntologyUnavailable,I as MetadataWidget1,T as OLS3,O as OLS4V1,N as OLS4V2,_ as SelectingDefiningOntology,S as __namedExportsOrder,L as default};
