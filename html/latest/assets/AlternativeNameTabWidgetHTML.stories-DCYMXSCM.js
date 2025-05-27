import{c as i,u as r,p as n,n as o,q as p,l as s,i as y,R as l}from"./widgetDescriptions-tqVhoc0Z.js";/* empty css                                  */import{Z as g,E as a}from"./globals-BpbGe8p9.js";const c={...y,...s,...p,...o,...n,...r,...i},m={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",className:"",parameter:"collection=nfdi4health"},b={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:g,entityType:"term",ontologyId:"ncit"}},N={args:{api:a,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},v={args:{api:a,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let d=0;function T(){return d++}const I={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:l}}},render:e=>{const t=T();return`
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
