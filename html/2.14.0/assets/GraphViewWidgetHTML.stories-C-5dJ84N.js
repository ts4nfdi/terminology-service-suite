import{a,l as i,r as l}from"./storyArgs-Be9vmJ2a.js";import{E as r,T as t}from"./globals-BR6EHpzJ.js";const p={...a,...i,...l,rootWalk:{required:!1,description:"When true, the graph will show the tree hierarchy for the target node in form of a graph.",table:{defaultValue:{summary:!1}},type:{summary:"boolean"}}},s={api:r,iri:"",ontologyId:"",rootWalk:!1},c={args:{api:t,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!1}},y={args:{api:t,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!0}},u={args:{api:r,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1}},W={args:{api:r,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0}};let n=0;function g(){return n++}const b={title:"GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered"},render:o=>{const e=g();return`
<div id="graph_view_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createGraphView(
    {
        iri:"${o.iri}",
        ontologyId:"${o.ontologyId}",
        api:"${o.api}",                
        useLegacy:${o.useLegacy},
        rootWalk: ${o.rootWalk},
    },
    document.querySelector('#graph_view_widget_container_${e}')
)
<\/script>
        `},argTypes:p,args:s},m=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk"];export{u as ChebiWater,W as ChebiWaterRootWalk,c as GraphViewWidgetExample,y as RootWalkGraphExample,m as __namedExportsOrder,b as default};
