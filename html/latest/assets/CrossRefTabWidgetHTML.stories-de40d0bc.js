import{a as o,l as i,o as a,j as n,c as s,u as p,V as y}from"./widgetDescriptions-085c7c97.js";import{E as t}from"./globals-1bcd394d.js";const g={...o,...i,...a,...n,...s,...p},c={api:"",iri:"",useLegacy:!0,ontologyId:"",entityType:"",parameter:"collection=nfdi4health"},f={args:{iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:t,entityType:"term",ontologyId:"rxno",parameter:""}},u={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},_={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let d=0;function l(){return d++}const b={title:"CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:y}}},render:e=>{const r=l();return`
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
        `},argTypes:g,args:c},A=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{f as CrossRefTabWidget1,_ as DefiningOntologyUnavailable,u as SelectingDefiningOntology,A as __namedExportsOrder,b as default};
