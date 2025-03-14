import{a as i,m as n,o as a,k as r,c as s,u as y,q as p,K as g}from"./widgetDescriptions-ae56023b.js";/* empty css                                  */import{E as e}from"./globals-aa5ada23.js";/* empty css                  */const c={...i,...n,...a,...r,...s,...y,...p},d={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},A={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo"}},E={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,ontologyId:"ons"}},w={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo",useLegacy:!0}},I={args:{iri:"http://purl.obolibrary.org/obo/HP_0000819",api:e,ontologyId:"hp"}};let l=0;function m(){return l++}const L={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:t=>{const o=m();return`
<div id="entity_onto_list_widget_container_${o}"></div>

<script type="text/javascript">
window['Ts4nfdiWidgets'].createEntityOntoList(
    {
        iri:"${t.iri}",
        api:"${t.api}",
        ontologyId:"${t.ontologyId}",
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:${t.useLegacy},
        onNavigateToOntology:${t.onNavigateToOntology},
        className:${t.className}
    },
    document.querySelector('#entity_onto_list_widget_container_${o}')
)
<\/script>
        `},argTypes:c,args:d},f=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{f as __namedExportsOrder,L as default,I as exceedsMaxDisplay,w as legacyApi,A as v2ApiEFO,E as v2ApiONS};
