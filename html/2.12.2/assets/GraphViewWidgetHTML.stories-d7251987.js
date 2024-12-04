import"./ModelTypeCheck-dd77ad34.js";import{E as o,T as t}from"./globals-1bcd394d.js";import{a,l as i,r as p,u as l}from"./storyArgs-fba56807.js";const s={...a,...i,...p,...l,rootWalk:{required:!1,description:"When true, the graph will show the tree hierarchy for the target node in form of a graph.",table:{defaultValue:{summary:!1}},type:{summary:"boolean"}}},g={api:o,iri:"",ontologyId:"",rootWalk:!1,useLegacy:!0},h={args:{api:t,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",useLegacy:!0,rootWalk:!1}},W={args:{api:t,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",useLegacy:!0,rootWalk:!0}},b={args:{api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",useLegacy:!0,rootWalk:!1}},m={args:{api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",useLegacy:!0,rootWalk:!0}};let n=0;function u(){return n++}const I={title:"GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const r=u();return`
<div id="graph_view_widget_container_${r}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createGraphView(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",                
        useLegacy:${e.useLegacy},
        rootWalk: ${e.rootWalk},
    },
    document.querySelector('#graph_view_widget_container_${r}')
)
<\/script>
        `},argTypes:s,args:g},_=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk"];export{b as ChebiWater,m as ChebiWaterRootWalk,h as GraphViewWidgetExample,W as RootWalkGraphExample,_ as __namedExportsOrder,I as default};
