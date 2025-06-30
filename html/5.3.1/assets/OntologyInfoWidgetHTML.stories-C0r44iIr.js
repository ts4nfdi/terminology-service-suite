import{o as n,j as g,k as i,u as s,m as y,p as r,w as l,r as p,i as d,a7 as c}from"./widgetDescriptions-CEP5Vzee.js";import{Z as e,E as a}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T={...d,...p,...l,...r,...y,...s,...i,...g,...n},I={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},A={args:{api:e,ontologyId:"atc"}},E={args:{api:e,ontologyId:"ncit"}},_={args:{api:a,useLegacy:!1,ontologyId:"mp"}},$={args:{api:a,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let m=0;function u(){return m++}const B={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:c}}},render:o=>{const t=u();return`
<div id="ontology_info_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createOntologyInfo(
    {
        ontologyId:"${o.ontologyId}",
        api:"${o.api}",
        parameter:"${o.parameter}",
        useLegacy:${o.useLegacy},
        hasTitle:${o.hasTitle},
        showBadges:${o.showBadges},
        onNavigateToEntity:${o.onNavigateToEntity},
        onNavigateToOntology:${o.onNavigateToOntology},
        onNavigateToDisambiguate:${o.onNavigateToDisambiguate},
        className:${o.className}
    },
    document.querySelector('#ontology_info_widget_container_${t}')
)
<\/script>
        `},argTypes:T,args:I},W=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{$ as NavigateToEBIPage,A as OntologyInfoWidget1,E as OntologyInfoWidget2,_ as OntologyInfoWidgetOLS4API,W as __namedExportsOrder,B as default};
