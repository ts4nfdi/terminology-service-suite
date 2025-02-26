import{a as n,j as g,w as i,c as s,l as y,u as r,n as l,q as d,r as p,W as c}from"./widgetDescriptions-c17d01c0.js";import{a as e,E as a}from"./globals-9d73b881.js";const T={...n,...g,...i,...s,...y,...r,...l,...d,...p},I={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},O={args:{api:e,ontologyId:"atc"}},f={args:{api:e,ontologyId:"ncit"}},E={args:{api:a,useLegacy:!1,ontologyId:"mp"}},A={args:{api:a,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let N=0;function u(){return N++}const _={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:c}}},render:o=>{const t=u();return`
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
        `},argTypes:T,args:I},W=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{A as NavigateToEBIPage,O as OntologyInfoWidget1,f as OntologyInfoWidget2,E as OntologyInfoWidgetOLS4API,W as __namedExportsOrder,_ as default};
