import{a as i,l as n,o as a,j as r,c as s,u as y,n as p,M as g}from"./widgetDescriptions-380db747.js";import{E as e}from"./globals-1bcd394d.js";/* empty css                  */const c={...i,...n,...a,...r,...s,...y,...p},d={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},_={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo"}},A={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,ontologyId:"ons"}},E={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo",useLegacy:!0}},w={args:{iri:"http://purl.obolibrary.org/obo/HP_0000819",api:e,ontologyId:"hp"}};let l=0;function u(){return l++}const L={title:"EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:t=>{const o=u();return`
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
        `},argTypes:c,args:d},I=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{I as __namedExportsOrder,L as default,w as exceedsMaxDisplay,E as legacyApi,_ as v2ApiEFO,A as v2ApiONS};
