import{a as i,m as r,o as n,k as o,c as p,u as s,i as y,R as g}from"./widgetDescriptions-004d52ae.js";/* empty css                                  */import{Z as l,E as a}from"./globals-aa5ada23.js";import"./iframe-209c1292.js";import"../sb-preview/runtime.js";const c={...i,...r,...n,...o,...p,...s,...y},m={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",className:"",parameter:"collection=nfdi4health"},v={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:l,entityType:"term",ontologyId:"ncit"}},I={args:{api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},f={args:{api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let d=0;function T(){return d++}const $={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:e=>{const t=T();return`
<div id="alternative_name_tab_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createAlternativeNameTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        className:${e.className}
    },
    document.querySelector('#alternative_name_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:c,args:m},O=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{v as AlternativeNameTabWidget1,f as DefiningOntologyUnavailable,I as SelectingDefiningOntology,O as __namedExportsOrder,$ as default};
