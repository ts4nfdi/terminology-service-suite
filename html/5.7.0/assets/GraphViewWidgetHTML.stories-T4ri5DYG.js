import{w as i,l,i as s,G as p}from"./widgetDescriptions-Bq7gOAJM.js";/* empty css                                  */import{E as o,T as a}from"./globals-CvFyH82M.js";const n={...s,...l,...i,rootWalk:{required:!1,description:"When true, the graph will show the tree hierarchy for the target node in form of a graph.",table:{defaultValue:{summary:!1}},type:{summary:"boolean"}}},c={api:o,iri:"",ontologyId:"",rootWalk:!1},y={args:{api:a,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!1}},m={args:{api:a,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!0},parameters:{docs:{disable:!0}}},W={args:{api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1},parameters:{docs:{disable:!0}}},I={args:{api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0},parameters:{docs:{disable:!0}}},k={args:{api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},parameters:{docs:{disable:!0}}},w={args:{api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:e=>{var t;let r=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(e))}?includeObsoleteEntities=true`;(t=window.open(r,"_blank"))==null||t.focus()}},parameters:{docs:{disable:!0}}};let d=0;function h(){return d++}const _={title:"Hierarchy and Graph/GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:p}}},render:e=>{const r=h();return`
<div id="graph_view_widget_container_${r}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createGraphView(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",                
        rootWalk: ${e.rootWalk},
        className:${e.className},
        hierarchy: ${e.hierarchy},
        edgeLabel: "${e.edgeLabel}",
        onNodeClick: ${e.onNodeClick}
    },
    document.querySelector('#graph_view_widget_container_${r}')
)
<\/script>
        `},argTypes:n,args:c},C=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback"];export{k as ChebiCaffeineHierarchy,W as ChebiWater,I as ChebiWaterRootWalk,y as GraphViewWidgetExample,m as RootWalkGraphExample,w as WithOnNodeDoubleClickCallback,C as __namedExportsOrder,_ as default};
