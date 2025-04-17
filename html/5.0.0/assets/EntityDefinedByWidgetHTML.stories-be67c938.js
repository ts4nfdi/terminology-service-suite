import{a as o,m as n,o as y,k as a,c as r,u as p,q as s,I as g}from"./widgetDescriptions-02a1740f.js";/* empty css                                  */import{E as t}from"./globals-aa5ada23.js";/* empty css                  */import"./iframe-d333685b.js";import"../sb-preview/runtime.js";const d={...o,...n,...y,...a,...r,...p,...s},c={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},I={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo"}},w={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,ontologyId:"ons"}},O={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo",useLegacy:!0}};let m=0;function l(){return m++}const N={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:e=>{const i=l();return`
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
        `},argTypes:d,args:c},D=["v2ApiONS","emptyInDefiningOntology","legacyApi"];export{D as __namedExportsOrder,N as default,I as emptyInDefiningOntology,O as legacyApi,w as v2ApiONS};
