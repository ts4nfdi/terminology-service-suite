import"./ModelTypeCheck-CncDrMd5.js";import{E as t,a as o}from"./globals-BR6EHpzJ.js";import{a as i,k as a,o as n,i as c,c as p,u as y,w as d,x as g}from"./storyArgs-C4w3f5_f.js";const l={...i,...a,...n,...c,...p,...y,...d,...g},s={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health"},A={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},I={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}},f={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:o,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"}};let m=0;function u(){return m++}const S={title:"BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const r=u();return`
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
    },
    document.querySelector('#breadcrumb_widget_container_${r}')
)
<\/script>
        `},argTypes:l,args:s},B=["SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget"];export{I as DefiningOntologyUnavailable,f as ErrorBreadcrumbWidget,A as SelectingDefiningOntology,B as __namedExportsOrder,S as default};
