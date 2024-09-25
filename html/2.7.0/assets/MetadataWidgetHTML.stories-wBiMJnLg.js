import{e as r}from"./ModelTypeCheck-CpmdorZG.js";/* empty css                                  */import{E as e,Z as i,a as o,T as n}from"./globals-BR6EHpzJ.js";const y={api:{control:{type:"radio"},options:[e,i,o,n]},ontologyId:{description:"Ontology ID from where the term metadata should be taken."},iri:{description:"Iri of the term you want to fetch the metadata for."},entityType:{table:{type:{summary:`${r.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},parameter:{type:{required:!1}}},p={parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:""},m={storyName:"Metadata Widget",args:{api:o,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},u={storyName:"OLS3",args:{api:o,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},I={storyName:"OLS4 V1",args:{api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!0}},T={storyName:"OLS4 V2",args:{api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""}},_={args:{api:e,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},O={args:{api:e,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let s=0;function d(){return s++}const L={title:"MetadataWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const a=d();return`
<div id="metadata_widget_container_${a}"></div>

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
    document.querySelector('#metadata_widget_container_${a}')
)
<\/script>
        `},argTypes:y,args:p},N=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{O as DefiningOntologyUnavailable,m as MetadataWidget1,u as OLS3,I as OLS4V1,T as OLS4V2,_ as SelectingDefiningOntology,N as __namedExportsOrder,L as default};
