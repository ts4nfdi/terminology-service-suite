import"./ModelTypeCheck-gMiCjj6X.js";import{a as i,E as a}from"./globals-BR6EHpzJ.js";import{a as r,k as n,o,i as p,c as y,u as g}from"./storyArgs-BnZ-Go0-.js";const l={...r,...n,...o,...p,...y,...g},s={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",parameter:"collection=nfdi4health"},A={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:i,entityType:"term",ontologyId:"ncit"}},_={args:{api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},b={args:{api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let c=0;function m(){return c++}const v={title:"AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=m();return`
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
        `},argTypes:l,args:s},I=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{A as AlternativeNameTabWidget1,b as DefiningOntologyUnavailable,_ as SelectingDefiningOntology,I as __namedExportsOrder,v as default};
