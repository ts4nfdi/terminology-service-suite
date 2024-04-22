import"./semlookp_widgets.min-CNyORsB-.js";import{e as r}from"./ModelTypeCheck-Cd-4DVPN.js";const o={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/"]},iri:{},ontologyId:{},entityType:{table:{type:{summary:`${r.join(" | ")}`}},control:{type:"radio"},options:["term","class","property","individual","","INVALID STRING"]},colorFirst:{table:{type:{summary:"EuiLinkColor | string"}},control:{type:"radio"},options:["primary","accent","success","warning","danger","ghost","text","subdued","#00FFFF"]},colorSecond:{table:{type:{summary:"EuiLinkColor | string"}},control:{type:"radio"},options:["primary","accent","success","warning","danger","ghost","text","subdued","#00FFFF"]},parameter:{type:{required:!1}},useLegacy:{type:{required:!1}}},i={parameter:"collection=nfdi4health",useLegacy:!0,iri:"",ontologyId:"",entityType:"",colorFirst:"",colorSecond:""},d={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:"https://semanticlookup.zbmed.de/api/",ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}},s={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},l={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},y={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:"https://semanticlookup.zbmed.de/api/",ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}};let a=0;function n(){return a++}const m={title:"BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=n();return`
<div id="breadcrumb_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createBreadcrumb(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        api:"${t.api}",
        entityType:"${t.entityType}",
        colorFirst:"${t.colorFirst}",
        colorSecond:"${t.colorSecond}",
        parameter:"${t.parameter}",
    },
    document.querySelector('#breadcrumb_widget_container_${e}')
)
<\/script>
        `},argTypes:o,args:i},u=["BreadcrumbWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget"];export{d as BreadcrumbWidget1,l as DefiningOntologyUnavailable,y as ErrorBreadcrumbWidget,s as SelectingDefiningOntology,u as __namedExportsOrder,m as default};
