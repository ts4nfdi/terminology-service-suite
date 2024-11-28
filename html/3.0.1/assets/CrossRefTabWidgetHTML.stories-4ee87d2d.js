import{a as o,l as i,o as a,j as n,c as s,u as p}from"./storyArgs-974907cc.js";import{E as t}from"./globals-1bcd394d.js";const y={...o,...i,...a,...n,...s,...p},g={api:"",iri:"",useLegacy:!0,ontologyId:"",entityType:"",parameter:"collection=nfdi4health"},m={args:{iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:t,entityType:"term",ontologyId:"rxno",parameter:""}},u={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},f={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let c=0;function l(){return c++}const _={title:"CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const r=l();return`
<div id="cross_ref_tab_widget_container_${r}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createCrossRefTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy}
    },
    document.querySelector('#cross_ref_tab_widget_container_${r}')
)
<\/script>
        `},argTypes:y,args:g},b=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{m as CrossRefTabWidget1,f as DefiningOntologyUnavailable,u as SelectingDefiningOntology,b as __namedExportsOrder,_ as default};
