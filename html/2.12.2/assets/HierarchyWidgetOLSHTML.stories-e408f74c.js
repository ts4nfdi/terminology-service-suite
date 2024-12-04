import"./ModelTypeCheck-dd77ad34.js";/* empty css                                  */import{E as i}from"./globals-1bcd394d.js";import{a as r,o as a,l as n,j as y,n as g,m as p}from"./storyArgs-fba56807.js";import{a as o}from"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const c={...r,...a,...n,...y,...g,...p},s={api:"",iri:"",ontologyId:"",entityType:"",onNavigateToEntity:o("onNavigateToEntity"),onNavigateToOntology:o("onNavigateToOntology")},v={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:i,ontologyId:"efo",entityType:"class"}};let d=0;function T(){return d++}const A={title:"HierarchyWidgetOLS",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=T();return`
<div id="hierarchy_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchyOLS(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        entityType:"${t.entityType}",
        api:"${t.api}",
    },
    document.querySelector('#hierarchy_widget_container_${e}')
)
<\/script>
        `},argTypes:c,args:s},I=["HierarchyWidgetOLS1"];export{v as HierarchyWidgetOLS1,I as __namedExportsOrder,A as default};
