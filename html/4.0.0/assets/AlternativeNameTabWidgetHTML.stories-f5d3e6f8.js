import{a as i,l as r,o as n,j as o,c as p,u as y,U as g}from"./widgetDescriptions-380db747.js";import{a as l,E as a}from"./globals-1bcd394d.js";const s={...i,...r,...n,...o,...p,...y},c={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",parameter:"collection=nfdi4health"},A={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:l,entityType:"term",ontologyId:"ncit"}},_={args:{api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},b={args:{api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let m=0;function d(){return m++}const v={title:"AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:e=>{const t=d();return`
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
        `},argTypes:s,args:c},N=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{A as AlternativeNameTabWidget1,b as DefiningOntologyUnavailable,_ as SelectingDefiningOntology,N as __namedExportsOrder,v as default};
