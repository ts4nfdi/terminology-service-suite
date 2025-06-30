import{u as o,w as r,l as n,i as a,al as p}from"./widgetDescriptions-CEP5Vzee.js";import{E as t}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const c={...a,...n,...r,...o},s={api:t,iri:"",ontologyId:"",useLegacy:!1},T={args:{api:t,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1}},_={args:{api:t,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1}};let d=0;function g(){return d++}const D={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:p}}},render:e=>{const i=g();return`
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
