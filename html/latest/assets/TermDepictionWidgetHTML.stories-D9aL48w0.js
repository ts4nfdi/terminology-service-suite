import{u as o,w as r,l as n,i as a,aq as c}from"./widgetDescriptions-DoY7HRjj.js";import{E as t}from"./globals-CvFyH82M.js";const p={...a,...n,...r,...o},s={api:t,iri:"",ontologyId:"",useLegacy:!1},l={args:{api:t,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1}},u={args:{api:t,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1}};let d=0;function g(){return d++}const T={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:c}}},render:e=>{const i=g();return`
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
        `},argTypes:p,args:s},_=["TermDepictionWidgetExample","TermDepictionWidget3D"];export{u as TermDepictionWidget3D,l as TermDepictionWidgetExample,_ as __namedExportsOrder,T as default};
