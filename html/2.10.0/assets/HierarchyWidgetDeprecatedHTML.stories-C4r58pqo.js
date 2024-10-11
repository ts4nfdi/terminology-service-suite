import"./ModelTypeCheck-DDiZrH6b.js";import{a as t}from"./globals-BR6EHpzJ.js";import{a as o,o as i,l as a,c}from"./storyArgs-C4pEll6Z.js";const d={...o,...i,...a,...c},p={api:"",iri:"",ontologyId:"",parameter:""},l={args:{iri:"http://purl.bioontology.org/ontology/MESH/D003704",api:t,ontologyId:"mesh",parameter:"nfdi4health"}};let n=0;function y(){return n++}const m={title:"HierarchyWidgetDeprecated",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const r=y();return`
<div id="hierarchy_widget_container_${r}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchyDeprecated(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
    },
    document.querySelector('#hierarchy_widget_container_${r}')
)
<\/script>
        `},argTypes:d,args:p},u=["HierarchyWidgetDeprecated1"];export{l as HierarchyWidgetDeprecated1,u as __namedExportsOrder,m as default};
