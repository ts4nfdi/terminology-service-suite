import"./ModelTypeCheck-DKS1_r5t.js";import{E as t,a as o}from"./globals-BR6EHpzJ.js";import{a as i,l as a,o as n,j as c,c as g,u as p,y,z as l,n as d}from"./storyArgs-CLJe14HA.js";/* empty css                        */const s={...i,...a,...n,...c,...g,...p,...y,...l,...d},m={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},O={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},f={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},N={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}};let u=0;function T(){return u++}const S={title:"BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const r=T();return`
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
        `},argTypes:s,args:m},$=["SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget"];export{f as DefiningOntologyUnavailable,N as ErrorBreadcrumbWidget,O as SelectingDefiningOntology,$ as __namedExportsOrder,S as default};
