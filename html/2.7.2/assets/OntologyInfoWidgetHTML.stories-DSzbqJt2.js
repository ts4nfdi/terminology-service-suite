import"./ModelTypeCheck-C_ijCt8z.js";import{a as e,E as n}from"./globals-BR6EHpzJ.js";import{a,g,E as r,c as s,j as i,u as y}from"./storyArgs-CbrwscED.js";const d={...a,...g,...r,...s,...i,...y},l={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:""},m={args:{api:e,ontologyId:"atc"}},O={args:{api:e,ontologyId:"ncit"}},T={args:{api:n,useLegacy:!1,ontologyId:"mp"}};let p=0;function c(){return p++}const _={title:"OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered"},render:o=>{const t=c();return`
<div id="ontology_info_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createOntologyInfo(
    {
        ontologyId:"${o.ontologyId}",
        api:"${o.api}",
        parameter:"${o.parameter}",
        useLegacy:${o.useLegacy},
        hasTitle:${o.hasTitle},
        showBadges:${o.showBadges}
    },
    document.querySelector('#ontology_info_widget_container_${t}')
)
<\/script>
        `},argTypes:d,args:l},A=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API"];export{m as OntologyInfoWidget1,O as OntologyInfoWidget2,T as OntologyInfoWidgetOLS4API,A as __namedExportsOrder,_ as default};
