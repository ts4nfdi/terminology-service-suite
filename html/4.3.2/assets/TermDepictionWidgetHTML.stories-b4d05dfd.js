import{a as o,m as r,w as n,u as a,a1 as c}from"./widgetDescriptions-eb80b1a6.js";import{E as i}from"./globals-9d73b881.js";const p={...o,...r,...n,...a},s={api:i,iri:"",ontologyId:"",useLegacy:!1},u={args:{api:i,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1}};let d=0;function g(){return d++}const l={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:c}}},render:e=>{const t=g();return`
<div id="term_depiction_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDepiction(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",                
        useLegacy:${e.useLegacy},
    },
    document.querySelector('#term_depiction_widget_container_${t}')
)
<\/script>
        `},argTypes:p,args:s},T=["TermDepictionWidgetExample"];export{u as TermDepictionWidgetExample,T as __namedExportsOrder,l as default};
