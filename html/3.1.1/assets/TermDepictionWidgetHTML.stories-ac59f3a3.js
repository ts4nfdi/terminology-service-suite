import{a as o,l as r,v as n,u as c,a3 as p}from"./widgetDescriptions-40b8e8cc.js";import{E as i}from"./globals-1bcd394d.js";const a={...o,...r,...n,...c},s={api:i,iri:"",ontologyId:"",useLegacy:!1},u={args:{api:i,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1}};let d=0;function g(){return d++}const l={title:"TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:p}}},render:e=>{const t=g();return`
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
        `},argTypes:a,args:s},T=["TermDepictionWidgetExample"];export{u as TermDepictionWidgetExample,T as __namedExportsOrder,l as default};
