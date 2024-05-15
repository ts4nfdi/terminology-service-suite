import"./semlookp_widgets.min-KiVJZQiA.js";/* empty css                         */import{e as o}from"./ModelTypeCheck-Cd-4DVPN.js";const i={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},ontologyId:{},iri:{description:"Iri of the term you want to fetch the tab information for."},parameter:{type:{required:!1}},entityType:{type:{required:!1},table:{type:{summary:`${o.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]}},a={ontologyId:"",entityType:"",parameter:"collection=nfdi4health",useLegacy:!0},y={storyName:"Default",args:{api:"https://semanticlookup.zbmed.de/api/",ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0}},g={storyName:"OLS3",args:{api:"https://semanticlookup.zbmed.de/api/",ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},l={storyName:"OLS4 V1",args:{api:"https://www.ebi.ac.uk/ols4/api/",ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},d={storyName:"OLS4 V2",args:{api:"https://www.ebi.ac.uk/ols4/api/",ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""}},u={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},b={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},m={args:{api:"https://www.ebi.ac.uk/ols4/api/",ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""}};let r=0;function p(){return r++}const w={title:"TabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=p();return`
<div id="tab_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createTab(
    {
        iri:"${t.iri}",
        api:"${t.api}",
        ontologyId:"${t.ontologyId}",
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:${t.useLegacy}
    },
    document.querySelector('#tab_widget_container_${e}')
)
<\/script>
        `},argTypes:i,args:a},f=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge"];export{y as Default,b as DefiningOntologyUnavailable,u as SelectingDefiningOntology,m as TabWidgetLarge,g as TabWidgetOLS3,l as TabWidgetOLS4V1,d as TabWidgetOLS4V2,f as __namedExportsOrder,w as default};
