import{a as o,l as n,o as y,j as a,c as r,u as p,n as g,L as s}from"./widgetDescriptions-5eb81691.js";import{E as t}from"./globals-9d73b881.js";/* empty css                  */const d={...o,...n,...y,...a,...r,...p,...g},c={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},_={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo"}},A={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,ontologyId:"ons"}},E={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo",useLegacy:!0}};let l=0;function m(){return l++}const w={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:s}}},render:e=>{const i=m();return`
<div id="entity_defined_by_widget_container_${i}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityDefinedBy(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        onNavigateToOntology:${e.onNavigateToOntology}
    },
    document.querySelector('#entity_defined_by_widget_container_${i}')
)
<\/script>
        `},argTypes:d,args:c},I=["v2ApiONS","emptyInDefiningOntology","legacyApi"];export{I as __namedExportsOrder,w as default,_ as emptyInDefiningOntology,E as legacyApi,A as v2ApiONS};
