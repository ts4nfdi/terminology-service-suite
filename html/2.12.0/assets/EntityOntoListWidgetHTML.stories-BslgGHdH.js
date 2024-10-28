import"./ModelTypeCheck--mKOexLc.js";import{E as e}from"./globals-BR6EHpzJ.js";import{a as i,l as n,o as a,j as r,c as y,u as p,n as s}from"./storyArgs-DmctzxIo.js";/* empty css                        */const g={...i,...n,...a,...r,...y,...p,...s},c={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},O={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo"}},A={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,ontologyId:"ons"}},E={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo",useLegacy:!0}},w={args:{iri:"http://purl.obolibrary.org/obo/HP_0000819",api:e,ontologyId:"hp"}};let d=0;function l(){return d++}const I={title:"EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const o=l();return`
<div id="entity_onto_list_widget_container_${o}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityOntoList(
    {
        iri:"${t.iri}",
        api:"${t.api}",
        ontologyId:"${t.ontologyId}",
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:${t.useLegacy},
        onNavigateToOntology:${t.onNavigateToOntology}
    },
    document.querySelector('#entity_onto_list_widget_container_${o}')
)
<\/script>
        `},argTypes:g,args:c},L=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{L as __namedExportsOrder,I as default,w as exceedsMaxDisplay,E as legacyApi,O as v2ApiEFO,A as v2ApiONS};
