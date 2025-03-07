import{a as r,m as i,o as a,k as n,c,u as p,a2 as s,a3 as d,q as y,a4 as g}from"./widgetDescriptions-e66f4996.js";/* empty css                                  */import{E as o,Z as l}from"./globals-aa5ada23.js";/* empty css                  */const m={...r,...i,...a,...n,...c,...p,...s,...d,...y},u={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},O={args:{api:o,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},B={args:{api:o,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},S={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:l,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}};let T=0;function b(){return T++}const $={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:e=>{const t=b();return`
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
        `},argTypes:m,args:u},N=["SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget"];export{B as DefiningOntologyUnavailable,S as ErrorBreadcrumbWidget,O as SelectingDefiningOntology,N as __namedExportsOrder,$ as default};
