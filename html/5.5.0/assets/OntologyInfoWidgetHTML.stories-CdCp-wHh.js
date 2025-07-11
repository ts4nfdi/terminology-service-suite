import{o as n,j as g,k as i,u as s,m as y,p as r,w as l,r as d,i as p,ac as c}from"./widgetDescriptions-DoY7HRjj.js";import{Z as e,E as a}from"./globals-CvFyH82M.js";const T={...p,...d,...l,...r,...y,...s,...i,...g,...n},I={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},O={args:{api:e,ontologyId:"atc"}},f={args:{api:e,ontologyId:"ncit"}},A={args:{api:a,useLegacy:!1,ontologyId:"mp"}},E={args:{api:a,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let m=0;function u(){return m++}const _={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:c}}},render:o=>{const t=u();return`
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
        `},argTypes:T,args:I},$=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{E as NavigateToEBIPage,O as OntologyInfoWidget1,f as OntologyInfoWidget2,A as OntologyInfoWidgetOLS4API,$ as __namedExportsOrder,_ as default};
