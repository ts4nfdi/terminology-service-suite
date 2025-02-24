import{a as i,m as r,o as n,k as o,c as p,u as s,i as y,R as g}from"./widgetDescriptions-a43d5516.js";/* empty css                                  */import{a as l,E as a}from"./globals-9d73b881.js";const c={...i,...r,...n,...o,...p,...s,...y},m={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",className:"",parameter:"collection=nfdi4health"},b={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:l,entityType:"term",ontologyId:"ncit"}},N={args:{api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},v={args:{api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let d=0;function T(){return d++}const I={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:e=>{const t=T();return`
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
        `},argTypes:c,args:m},f=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{b as AlternativeNameTabWidget1,v as DefiningOntologyUnavailable,N as SelectingDefiningOntology,f as __namedExportsOrder,I as default};
