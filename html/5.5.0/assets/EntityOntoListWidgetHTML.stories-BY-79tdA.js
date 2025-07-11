import{j as i,u as n,p as a,n as r,q as s,l as y,i as p,P as g}from"./widgetDescriptions-DoY7HRjj.js";/* empty css                                  */import{E as e}from"./globals-CvFyH82M.js";/* empty css                  */const c={...p,...y,...s,...r,...a,...n,...i},d={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"",parameter:"",onNavigateToOntology:"Console message"},A={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo"}},E={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,ontologyId:"ons"}},w={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:e,entityType:"term",ontologyId:"efo",useLegacy:!0}},I={args:{iri:"http://purl.obolibrary.org/obo/HP_0000819",api:e,ontologyId:"hp"}};let l=0;function u(){return l++}const L={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:g}}},render:t=>{const o=u();return`
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
        `},argTypes:c,args:d},f=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{f as __namedExportsOrder,L as default,I as exceedsMaxDisplay,w as legacyApi,A as v2ApiEFO,E as v2ApiONS};
