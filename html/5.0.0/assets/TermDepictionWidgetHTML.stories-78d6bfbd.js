import{a as o,m as r,w as n,u as a,a1 as p}from"./widgetDescriptions-02a1740f.js";import{E as t}from"./globals-aa5ada23.js";import"./iframe-d333685b.js";import"../sb-preview/runtime.js";const c={...o,...r,...n,...a},s={api:t,iri:"",ontologyId:"",useLegacy:!1},T={args:{api:t,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1}},_={args:{api:t,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1}};let d=0;function g(){return d++}const D={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:p}}},render:e=>{const i=g();return`
<div id="term_depiction_widget_container_${i}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDepiction(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",                
        useLegacy:${e.useLegacy},
    },
    document.querySelector('#term_depiction_widget_container_${i}')
)
<\/script>
        `},argTypes:c,args:s},I=["TermDepictionWidgetExample","TermDepictionWidget3D"];export{_ as TermDepictionWidget3D,T as TermDepictionWidgetExample,I as __namedExportsOrder,D as default};
