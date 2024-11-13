import{a as g,i as n,r as i,c as s,k as y,u as r,m as l,n as d,q as p}from"./storyArgs-BTeOS3u2.js";import{a as e,E as a}from"./globals-BR6EHpzJ.js";const T={...g,...n,...i,...s,...y,...r,...l,...d,...p},I={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},v={args:{api:e,ontologyId:"atc"}},O={args:{api:e,ontologyId:"ncit"}},f={args:{api:a,useLegacy:!1,ontologyId:"mp"}},E={args:{api:a,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let c=0;function u(){return c++}const A={title:"OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered"},render:o=>{const t=u();return`
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
        `},argTypes:T,args:I},_=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{E as NavigateToEBIPage,v as OntologyInfoWidget1,O as OntologyInfoWidget2,f as OntologyInfoWidgetOLS4API,_ as __namedExportsOrder,A as default};
