import{a as t,l as i,o as a,j as n,c,u as p,z as g,B as y,n as d,C as l}from"./widgetDescriptions-40b8e8cc.js";import{E as r,a as s}from"./globals-1bcd394d.js";/* empty css                        */const m={...t,...i,...a,...n,...c,...p,...g,...y,...d},u={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},O={args:{api:r,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},f={args:{api:r,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},B={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:s,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}};let T=0;function b(){return T++}const N={title:"BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:l}}},render:e=>{const o=b();return`
<div id="breadcrumb_widget_container_${o}"></div>

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
    document.querySelector('#breadcrumb_widget_container_${o}')
)
<\/script>
        `},argTypes:m,args:u},S=["SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget"];export{f as DefiningOntologyUnavailable,B as ErrorBreadcrumbWidget,O as SelectingDefiningOntology,S as __namedExportsOrder,N as default};
