import{c as i,u as r,p as n,n as o,q as p,l as s,i as y,S as l}from"./widgetDescriptions-BjaIB8IO.js";/* empty css                                  */import{Z as g,E as a}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const c={...y,...s,...p,...o,...n,...r,...i},m={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",className:"",parameter:"collection=nfdi4health"},v={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:g,entityType:"term",ontologyId:"ncit"}},I={args:{api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},f={args:{api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let d=0;function T(){return d++}const $={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:l}}},render:e=>{const t=T();return`
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
        className:"${e.className}"
    },
    document.querySelector('#alternative_name_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:c,args:m},O=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{v as AlternativeNameTabWidget1,f as DefiningOntologyUnavailable,I as SelectingDefiningOntology,O as __namedExportsOrder,$ as default};
