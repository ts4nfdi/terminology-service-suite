import"./ModelTypeCheck-DjhzoFkW.js";import{E as i}from"./globals-BR6EHpzJ.js";import{a as o,k as r,E as n,u as a}from"./storyArgs-BKWp3Ckm.js";const p={...o,...r,...n,...a},c={api:i,iri:"",ontologyId:"",useLegacy:!1},u={args:{api:i,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1}};let s=0;function g(){return s++}const l={title:"TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=g();return`
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
        `},argTypes:p,args:c},T=["TermDepictionWidgetExample"];export{u as TermDepictionWidgetExample,T as __namedExportsOrder,l as default};
