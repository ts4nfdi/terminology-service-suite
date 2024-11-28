import{a,l as i,r as l}from"./storyArgs-974907cc.js";import{E as r,T as e}from"./globals-1bcd394d.js";const p={...a,...i,...l,rootWalk:{required:!1,description:"When true, the graph will show the tree hierarchy for the target node in form of a graph.",table:{defaultValue:{summary:!1}},type:{summary:"boolean"}}},s={api:r,iri:"",ontologyId:"",rootWalk:!1},c={args:{api:e,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!1}},y={args:{api:e,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!0}},W={args:{api:r,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1}},u={args:{api:r,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0}};let n=0;function g(){return n++}const b={title:"GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered"},render:o=>{const t=g();return`
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
        `},argTypes:p,args:s},m=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk"];export{W as ChebiWater,u as ChebiWaterRootWalk,c as GraphViewWidgetExample,y as RootWalkGraphExample,m as __namedExportsOrder,b as default};
