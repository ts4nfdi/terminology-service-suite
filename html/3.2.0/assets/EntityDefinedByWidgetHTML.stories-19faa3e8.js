import{a as i,l as n,o as y,j as r,c as a,u as p,n as g,L as s}from"./widgetDescriptions-0c7687ca.js";import{E as t}from"./globals-1bcd394d.js";/* empty css                  */const d={...i,...n,...y,...r,...a,...p,...g},c={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},_={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo"}},A={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,ontologyId:"ons"}},w={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo",useLegacy:!0}};let l=0;function m(){return l++}const E={title:"EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:s}}},render:e=>{const o=m();return`
<div id="entity_defined_by_widget_container_${o}"></div>

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
    document.querySelector('#entity_defined_by_widget_container_${o}')
)
<\/script>
        `},argTypes:d,args:c},I=["v2ApiONS","emptyInDefiningOntology","legacyApi"];export{I as __namedExportsOrder,E as default,_ as emptyInDefiningOntology,w as legacyApi,A as v2ApiONS};
