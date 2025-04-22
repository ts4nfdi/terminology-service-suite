import{a as i,m as n,o as a,k as r,c as s,u as p,q as y,K as g}from"./widgetDescriptions-02a1740f.js";/* empty css                                  */import{E as e}from"./globals-aa5ada23.js";/* empty css                  */import"./iframe-d333685b.js";import"../sb-preview/runtime.js";const c={...i,...n,...a,...r,...s,...p,...y},d={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},w={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo"}},I={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,ontologyId:"ons"}},L={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo",useLegacy:!0}},f={args:{iri:"http://purl.obolibrary.org/obo/HP_0000819",api:e,ontologyId:"hp"}};let l=0;function m(){return l++}const v={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:t=>{const o=m();return`
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
        `},argTypes:c,args:d},N=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{N as __namedExportsOrder,v as default,f as exceedsMaxDisplay,L as legacyApi,w as v2ApiEFO,I as v2ApiONS};
