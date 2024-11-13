import{a as o,l as r,r as n,u as a}from"./storyArgs-BTeOS3u2.js";import{E as i}from"./globals-BR6EHpzJ.js";const c={...o,...r,...n,...a},p={api:i,iri:"",ontologyId:"",useLegacy:!1},m={args:{api:i,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1}};let s=0;function g(){return s++}const u={title:"TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=g();return`
<div id="term_depiction_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createDepiction(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",                
        useLegacy:${e.useLegacy},
    },
    document.querySelector('#term_depiction_widget_container_${t}')
)
<\/script>
        `},argTypes:c,args:p},l=["TermDepictionWidgetExample"];export{m as TermDepictionWidgetExample,l as __namedExportsOrder,u as default};
