import{j as o,C as i,F as a,u as n,p as c,n as p,q as d,l as g,i as s,I as y}from"./widgetDescriptions-Bq7gOAJM.js";/* empty css                                  */import{E as r,Z as l}from"./globals-CvFyH82M.js";/* empty css                              *//* empty css                  */const m={...s,...g,...d,...p,...c,...n,...a,...i,...o},u={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},$={args:{api:r,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},B={args:{api:r,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},N={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:l,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}};let T=0;function b(){return T++}const S={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:y}}},render:e=>{const t=b();return`
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
        `},argTypes:m,args:u},v=["SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget"];export{B as DefiningOntologyUnavailable,N as ErrorBreadcrumbWidget,$ as SelectingDefiningOntology,v as __namedExportsOrder,S as default};
