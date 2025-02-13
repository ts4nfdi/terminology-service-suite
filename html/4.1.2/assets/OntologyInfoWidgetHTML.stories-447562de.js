import{a as n,i as g,v as i,c as s,k as y,u as r,m as l,n as p,q as d,Y as c}from"./widgetDescriptions-f9c2704e.js";import{a as e,E as a}from"./globals-9d73b881.js";const T={...n,...g,...i,...s,...y,...r,...l,...p,...d},I={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},O={args:{api:e,ontologyId:"atc"}},f={args:{api:e,ontologyId:"ncit"}},E={args:{api:a,useLegacy:!1,ontologyId:"mp"}},A={args:{api:a,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let u=0;function m(){return u++}const _={title:"OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:c}}},render:o=>{const t=m();return`
<div id="ontology_info_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createOntologyInfo(
    {
        ontologyId:"${o.ontologyId}",
        api:"${o.api}",
        parameter:"${o.parameter}",
        useLegacy:${o.useLegacy},
        hasTitle:${o.hasTitle},
        showBadges:${o.showBadges},
        onNavigateToEntity:${o.onNavigateToEntity},
        onNavigateToOntology:${o.onNavigateToOntology},
        onNavigateToDisambiguate:${o.onNavigateToDisambiguate}
    },
    document.querySelector('#ontology_info_widget_container_${t}')
)
<\/script>
        `},argTypes:T,args:I},B=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{A as NavigateToEBIPage,O as OntologyInfoWidget1,f as OntologyInfoWidget2,E as OntologyInfoWidgetOLS4API,B as __namedExportsOrder,_ as default};
