import{a as i,l as n,o as y,j as a,c as r,u as p,n as g}from"./storyArgs-974907cc.js";import{E as t}from"./globals-1bcd394d.js";/* empty css                        */const s={...i,...n,...y,...a,...r,...p,...g},d={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},f={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo"}},_={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,ontologyId:"ons"}},A={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo",useLegacy:!0}};let c=0;function l(){return c++}const w={title:"EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const o=l();return`
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
        `},argTypes:s,args:d},I=["v2ApiONS","emptyInDefiningOntology","legacyApi"];export{I as __namedExportsOrder,w as default,f as emptyInDefiningOntology,A as legacyApi,_ as v2ApiONS};
