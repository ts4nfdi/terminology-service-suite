import{e as r}from"./ModelTypeCheck-aOz1gNrh.js";/* empty css                                  */import{E as t,Z as i,a,T as n}from"./globals-BR6EHpzJ.js";const s={api:{control:{type:"radio"},options:[t,i,a,n]},ontologyId:{},iri:{description:"Iri of the term you want to fetch the tab information for."},parameter:{type:{required:!1}},entityType:{type:{required:!1},table:{type:{summary:`${r.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]}},y={ontologyId:"",entityType:"",parameter:"collection=nfdi4health",useLegacy:!0,altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0},T={storyName:"Default",args:{api:a,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0}},d={storyName:"OLS3",args:{api:a,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},u={storyName:"OLS4 V1",args:{api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},m={storyName:"OLS4 V2",args:{api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""}},f={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},I={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},_={args:{api:t,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""}},L={storyName:"Hidden Tabs",args:{api:t,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1}};let p=0;function g(){return p++}const N={title:"TabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const o=g();return`
<div id="tab_widget_container_${o}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        altNamesTab: ${e.altNamesTab},
        hierarchyTab: ${e.hierarchyTab},
        crossRefTab: ${e.crossRefTab},
        terminologyInfoTab: ${e.terminologyInfoTab}
    },
    document.querySelector('#tab_widget_container_${o}')
)
<\/script>
        `},argTypes:s,args:y},O=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{T as Default,I as DefiningOntologyUnavailable,L as HiddenTabs,f as SelectingDefiningOntology,_ as TabWidgetLarge,d as TabWidgetOLS3,u as TabWidgetOLS4V1,m as TabWidgetOLS4V2,O as __namedExportsOrder,N as default};
