import{j as o,u as n,p as y,n as a,q as r,l as p,i as s,I as g}from"./widgetDescriptions-Bq4r40e3.js";/* empty css                                  */import{E as t}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d={...s,...p,...r,...a,...y,...n,...o},c={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},E={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo"}},I={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,ontologyId:"ons"}},w={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo",useLegacy:!0}};let l=0;function m(){return l++}const O={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:e=>{const i=m();return`
<div id="entity_defined_by_widget_container_${i}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityDefinedBy(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        onNavigateToOntology:${e.onNavigateToOntology},
        className:${e.className}
    },
    document.querySelector('#entity_defined_by_widget_container_${i}')
)
<\/script>
        `},argTypes:d,args:c},N=["v2ApiONS","emptyInDefiningOntology","legacyApi"];export{N as __namedExportsOrder,O as default,E as emptyInDefiningOntology,w as legacyApi,I as v2ApiONS};
