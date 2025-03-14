import{a as o,m as n,o as y,k as a,c as r,u as p,q as s,I as g}from"./widgetDescriptions-02f375d7.js";/* empty css                                  */import{E as t}from"./globals-aa5ada23.js";/* empty css                  */const d={...o,...n,...y,...a,...r,...p,...s},c={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},A={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo"}},E={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,ontologyId:"ons"}},I={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo",useLegacy:!0}};let l=0;function m(){return l++}const w={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:e=>{const i=m();return`
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
        `},argTypes:d,args:c},O=["v2ApiONS","emptyInDefiningOntology","legacyApi"];export{O as __namedExportsOrder,w as default,A as emptyInDefiningOntology,I as legacyApi,E as v2ApiONS};
