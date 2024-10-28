import"./ModelTypeCheck--mKOexLc.js";import{E as t}from"./globals-BR6EHpzJ.js";import{a as i,l as n,o as y,j as r,c as a,u as p,n as g}from"./storyArgs-DmctzxIo.js";/* empty css                        */const s={...i,...n,...y,...r,...a,...p,...g},d={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},_={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo"}},A={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,ontologyId:"ons"}},w={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:t,entityType:"term",ontologyId:"efo",useLegacy:!0}};let c=0;function l(){return c++}const I={title:"EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const o=l();return`
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
        `},argTypes:s,args:d},O=["v2ApiONS","emptyInDefiningOntology","legacyApi"];export{O as __namedExportsOrder,I as default,_ as emptyInDefiningOntology,w as legacyApi,A as v2ApiONS};
