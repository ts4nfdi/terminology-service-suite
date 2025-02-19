import{a as r,l as i,o as a,j as n,c,u as p,z as g,B as y,n as d,C as l}from"./widgetDescriptions-5eb81691.js";import{E as o,a as s}from"./globals-9d73b881.js";/* empty css                  */const m={...r,...i,...a,...n,...c,...p,...g,...y,...d},u={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},O={args:{api:o,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},f={args:{api:o,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},B={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:s,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}};let T=0;function b(){return T++}const N={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:l}}},render:e=>{const t=b();return`
<div id="breadcrumb_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createBreadcrumb(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        entityType:"${e.entityType}",
        colorFirst:"${e.colorFirst}",
        colorSecond:"${e.colorSecond}",
        parameter:"${e.parameter}",
        onNavigateToOntology:${e.onNavigateToOntology}
    },
    document.querySelector('#breadcrumb_widget_container_${t}')
)
<\/script>
        `},argTypes:m,args:u},S=["SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget"];export{f as DefiningOntologyUnavailable,B as ErrorBreadcrumbWidget,O as SelectingDefiningOntology,S as __namedExportsOrder,N as default};
