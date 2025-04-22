import{a as n,j as g,w as i,c as s,l as y,u as r,n as l,q as p,r as d,W as c}from"./widgetDescriptions-02a1740f.js";import{Z as e,E as a}from"./globals-aa5ada23.js";import"./iframe-d333685b.js";import"../sb-preview/runtime.js";const T={...n,...g,...i,...s,...y,...r,...l,...p,...d},I={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},A={args:{api:e,ontologyId:"atc"}},E={args:{api:e,ontologyId:"ncit"}},_={args:{api:a,useLegacy:!1,ontologyId:"mp"}},W={args:{api:a,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let m=0;function u(){return m++}const $={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:c}}},render:o=>{const t=u();return`
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
        `},argTypes:T,args:I},B=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{W as NavigateToEBIPage,A as OntologyInfoWidget1,E as OntologyInfoWidget2,_ as OntologyInfoWidgetOLS4API,B as __namedExportsOrder,$ as default};
