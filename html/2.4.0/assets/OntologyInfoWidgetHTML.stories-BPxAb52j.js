import"./terminology-service-suite.min-BQo91ZY4.js";const o={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},hasTitle:{type:{required:!1},table:{defaultValue:{summary:!0}}},ontologyId:{table:{defaultValue:{summary:void 0}}},parameter:{type:{required:!1},table:{defaultValue:{summary:void 0}}},showBadges:{type:{required:!1},table:{defaultValue:{summary:!0}}},useLegacy:{type:{required:!1},table:{defaultValue:{summary:!0}}}},a={hasTitle:!0,showBadges:!0,useLegacy:!0},l={args:{api:"https://semanticlookup.zbmed.de/api/",ontologyId:"atc"}},r={args:{api:"https://semanticlookup.zbmed.de/api/",ontologyId:"ncit"}},d={args:{api:"https://www.ebi.ac.uk/ols4/api/",useLegacy:!1,ontologyId:"mp"}};let s=0;function i(){return s++}const u={title:"OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=i();return`
<div id="ontology_info_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createOntologyInfo(
    {
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        hasTitle:${e.hasTitle},
        showBadges:${e.showBadges}
    },
    document.querySelector('#ontology_info_widget_container_${t}')
)
<\/script>
        `},argTypes:o,args:a},g=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API"];export{l as OntologyInfoWidget1,r as OntologyInfoWidget2,d as OntologyInfoWidgetOLS4API,g as __namedExportsOrder,u as default};
