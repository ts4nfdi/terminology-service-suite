import{a,l as i,v as p,G as l}from"./widgetDescriptions-5eb81691.js";import{E as r,T as e}from"./globals-9d73b881.js";const s={...a,...i,...p,rootWalk:{required:!1,description:"When true, the graph will show the tree hierarchy for the target node in form of a graph.",table:{defaultValue:{summary:!1}},type:{summary:"boolean"}}},n={api:r,iri:"",ontologyId:"",rootWalk:!1},y={args:{api:e,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!1}},W={args:{api:e,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!0}},u={args:{api:r,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1}},b={args:{api:r,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0}};let g=0;function d(){return g++}const m={title:"GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:l}}},render:o=>{const t=d();return`
<div id="graph_view_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createGraphView(
    {
        iri:"${o.iri}",
        ontologyId:"${o.ontologyId}",
        api:"${o.api}",                
        rootWalk: ${o.rootWalk},
    },
    document.querySelector('#graph_view_widget_container_${t}')
)
<\/script>
        `},argTypes:s,args:n},I=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk"];export{u as ChebiWater,b as ChebiWaterRootWalk,y as GraphViewWidgetExample,W as RootWalkGraphExample,I as __namedExportsOrder,m as default};
