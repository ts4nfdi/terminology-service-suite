import{e as i}from"./ModelTypeCheck-DDiZrH6b.js";/* empty css                                  */import{E as t,Z as r,a as o,T as n}from"./globals-BR6EHpzJ.js";const p={api:{control:{type:"radio"},options:[t,r,o,n]},ontologyId:{},iri:{description:"Iri of the term you want to fetch the tab information for."},parameter:{type:{required:!1}},entityType:{type:{required:!1},table:{type:{summary:`${i.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]}},s={ontologyId:"",entityType:"",parameter:"collection=nfdi4health",useLegacy:!0},u={storyName:"Default",args:{api:o,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0}},b={storyName:"OLS3",args:{api:o,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},m={storyName:"OLS4 V1",args:{api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0}},T={storyName:"OLS4 V2",args:{api:t,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""}},f={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},I={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},_={args:{api:t,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""}};let y=0;function g(){return y++}const L={title:"TabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const a=g();return`
<div id="tab_widget_container_${a}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy}
    },
    document.querySelector('#tab_widget_container_${a}')
)
<\/script>
        `},argTypes:p,args:s},O=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge"];export{u as Default,I as DefiningOntologyUnavailable,f as SelectingDefiningOntology,_ as TabWidgetLarge,b as TabWidgetOLS3,m as TabWidgetOLS4V1,T as TabWidgetOLS4V2,O as __namedExportsOrder,L as default};
