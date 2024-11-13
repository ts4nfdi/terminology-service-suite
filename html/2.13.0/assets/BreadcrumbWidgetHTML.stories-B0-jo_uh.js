import{a as o,l as i,o as a,j as n,c,u as g,y as p,z as y,n as l}from"./storyArgs-BTeOS3u2.js";import{E as t,a as d}from"./globals-BR6EHpzJ.js";/* empty css                        */const s={...o,...i,...a,...n,...c,...g,...p,...y,...l},m={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},I={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},O={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},f={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:d,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}};let u=0;function T(){return u++}const N={title:"BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const r=T();return`
<div id="breadcrumb_widget_container_${r}"></div>

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
    document.querySelector('#breadcrumb_widget_container_${r}')
)
<\/script>
        `},argTypes:s,args:m},S=["SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget"];export{O as DefiningOntologyUnavailable,f as ErrorBreadcrumbWidget,I as SelectingDefiningOntology,S as __namedExportsOrder,N as default};
