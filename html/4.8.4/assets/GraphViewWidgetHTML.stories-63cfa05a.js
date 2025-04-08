import{a,m as i,w as p,G as l}from"./widgetDescriptions-004d52ae.js";/* empty css                                  */import{E as r,T as e}from"./globals-aa5ada23.js";import"./iframe-209c1292.js";import"../sb-preview/runtime.js";const s={...a,...i,...p,rootWalk:{required:!1,description:"When true, the graph will show the tree hierarchy for the target node in form of a graph.",table:{defaultValue:{summary:!1}},type:{summary:"boolean"}}},n={api:r,iri:"",ontologyId:"",rootWalk:!1},u={args:{api:e,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!1}},b={args:{api:e,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!0}},I={args:{api:r,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1}},_={args:{api:r,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0}};let d=0;function g(){return d++}const w={title:"Hierarchy and Graph/GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:l}}},render:o=>{const t=g();return`
<div id="graph_view_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createGraphView(
    {
        iri:"${o.iri}",
        ontologyId:"${o.ontologyId}",
        api:"${o.api}",                
        rootWalk: ${o.rootWalk},
        className:${o.className}
    },
    document.querySelector('#graph_view_widget_container_${t}')
)
<\/script>
        `},argTypes:s,args:n},f=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk"];export{I as ChebiWater,_ as ChebiWaterRootWalk,u as GraphViewWidgetExample,b as RootWalkGraphExample,f as __namedExportsOrder,w as default};
