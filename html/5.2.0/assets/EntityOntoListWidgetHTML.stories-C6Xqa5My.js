import{j as i,u as n,p as a,n as r,q as s,l as p,i as y,K as g}from"./widgetDescriptions-BjaIB8IO.js";/* empty css                                  */import{E as e}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const c={...y,...p,...s,...r,...a,...n,...i},d={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},E={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo"}},w={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,ontologyId:"ons"}},I={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo",useLegacy:!0}},L={args:{iri:"http://purl.obolibrary.org/obo/HP_0000819",api:e,ontologyId:"hp"}};let l=0;function m(){return l++}const f={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:t=>{const o=m();return`
<div id="entity_onto_list_widget_container_${o}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityOntoList(
    {
        iri:"${t.iri}",
        api:"${t.api}",
        ontologyId:"${t.ontologyId}",
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:${t.useLegacy},
        onNavigateToOntology:${t.onNavigateToOntology},
        className:"${t.className}"
    },
    document.querySelector('#entity_onto_list_widget_container_${o}')
)
<\/script>
        `},argTypes:c,args:d},v=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{v as __namedExportsOrder,f as default,L as exceedsMaxDisplay,I as legacyApi,E as v2ApiEFO,w as v2ApiONS};
