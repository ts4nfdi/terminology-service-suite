import"./semlookp_widgets.min-BThAjXaX.js";/* empty css                         */import{e as i}from"./ModelTypeCheck-Cd-4DVPN.js";const o={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},ontologyId:{},iri:{description:"Iri of the term you want to fetch the tab information for."},parameter:{type:{required:!1}},entityType:{type:{required:!1},table:{type:{summary:`${i.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]}},a={ontologyId:"",entityType:"",parameter:"collection=nfdi4health",useLegacy:!0},c={storyName:"Default",args:{api:"https://semanticlookup.zbmed.de/api/",ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0}},l={storyName:"OLS3",args:{api:"https://semanticlookup.zbmed.de/api/",ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},d={storyName:"OLS4 V1",args:{api:"https://www.ebi.ac.uk/ols4/api/",ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},g={storyName:"OLS4 V2",args:{api:"https://www.ebi.ac.uk/ols4/api/",ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""}},u={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},b={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let r=0;function p(){return r++}const m={title:"TabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=p();return`
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
        `},argTypes:o,args:a},w=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{c as Default,b as DefiningOntologyUnavailable,u as SelectingDefiningOntology,l as TabWidgetOLS3,d as TabWidgetOLS4V1,g as TabWidgetOLS4V2,w as __namedExportsOrder,m as default};
