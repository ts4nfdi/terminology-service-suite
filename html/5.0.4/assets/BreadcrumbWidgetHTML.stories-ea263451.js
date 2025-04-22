import{a as r,m as i,o as a,k as n,c,u as p,a2 as s,a3 as d,q as y,a4 as g}from"./widgetDescriptions-02a1740f.js";/* empty css                                  */import{E as o,Z as l}from"./globals-aa5ada23.js";/* empty css                  */import"./iframe-d333685b.js";import"../sb-preview/runtime.js";const m={...r,...i,...a,...n,...c,...p,...s,...d,...y},u={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},S={args:{api:o,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},$={args:{api:o,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},N={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:l,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}};let T=0;function b(){return T++}const v={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:e=>{const t=b();return`
<div id="breadcrumb_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createBreadcrumb(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        entityType:"${e.entityType}",
        colorFirst:"${e.colorFirst}",
        colorSecond:"${e.colorSecond}",
        parameter:"${e.parameter}",
        onNavigateToOntology:${e.onNavigateToOntology},
        className: "${e.className}"
    },
    document.querySelector('#breadcrumb_widget_container_${t}')
)
<\/script>
        `},argTypes:m,args:u},E=["SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget"];export{$ as DefiningOntologyUnavailable,N as ErrorBreadcrumbWidget,S as SelectingDefiningOntology,E as __namedExportsOrder,v as default};
