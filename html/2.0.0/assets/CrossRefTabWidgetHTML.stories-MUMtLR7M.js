import"./semlookp_widgets.min-BLUfpFpL.js";import{e as o}from"./ModelTypeCheck-Cd-4DVPN.js";const i={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},iri:{description:"IRI of the entity you want to fetch the cross references for."},ontologyId:{},entityType:{table:{type:{summary:`${o.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},parameter:{type:{required:!1}},useLegacy:{type:{required:!1},control:"boolean",description:"Toggle between OLS3 (legacy) and OLS4 API versions.",default:!0}},r={parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:""},c={args:{iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:"https://www.ebi.ac.uk/ols4/api/",entityType:"term",ontologyId:"rxno",parameter:""}},y={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},l={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let a=0;function n(){return a++}const d={title:"CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=n();return`
<div id="cross_ref_tab_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createCrossRefTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy}
    },
    document.querySelector('#cross_ref_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:i,args:r},g=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{c as CrossRefTabWidget1,l as DefiningOntologyUnavailable,y as SelectingDefiningOntology,g as __namedExportsOrder,d as default};
