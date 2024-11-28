import{a as i,l as r,o as n,j as o,c as p,u as y}from"./storyArgs-974907cc.js";import{a as g,E as a}from"./globals-1bcd394d.js";const l={...i,...r,...n,...o,...p,...y},s={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",parameter:"collection=nfdi4health"},u={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:g,entityType:"term",ontologyId:"ncit"}},A={args:{api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},_={args:{api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let c=0;function m(){return c++}const b={title:"AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=m();return`
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
        `},argTypes:l,args:s},v=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{u as AlternativeNameTabWidget1,_ as DefiningOntologyUnavailable,A as SelectingDefiningOntology,v as __namedExportsOrder,b as default};
