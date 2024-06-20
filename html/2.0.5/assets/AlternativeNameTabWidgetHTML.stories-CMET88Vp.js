import"./terminology-service-suite.min-3hW59OWZ.js";import{e as i}from"./ModelTypeCheck-Cd-4DVPN.js";const a={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},iri:{description:"Iri of the term you want to fetch the alternative names for."},ontologyId:{},entityType:{table:{type:{summary:`${i.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},parameter:{type:{required:!1}},useLegacy:{type:{required:!1},control:"boolean",description:"Toggle between OLS3 (legacy) and OLS4 API versions.",default:!0}},o={parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:""},s={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:"https://semanticlookup.zbmed.de/api/",entityType:"term",ontologyId:"ncit"}},y={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},c={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let r=0;function n(){return r++}const d={title:"AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=n();return`
<div id="alternative_name_tab_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createAlternativeNameTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy}
    },
    document.querySelector('#alternative_name_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:a,args:o},m=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{s as AlternativeNameTabWidget1,c as DefiningOntologyUnavailable,y as SelectingDefiningOntology,m as __namedExportsOrder,d as default};
