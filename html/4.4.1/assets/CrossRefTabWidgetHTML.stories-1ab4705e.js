import{a as o,m as i,o as a,k as n,c as s,u as p,S as y}from"./widgetDescriptions-e2752ba8.js";/* empty css                                  */import{E as t}from"./globals-9d73b881.js";const g={...o,...i,...a,...n,...s,...p},c={api:"",iri:"",useLegacy:!0,ontologyId:"",entityType:"",parameter:"collection=nfdi4health"},u={args:{iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:t,entityType:"term",ontologyId:"rxno",parameter:""}},_={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},b={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let d=0;function l(){return d++}const A={title:"Additional Entity Metadata/CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:y}}},render:e=>{const r=l();return`
<div id="cross_ref_tab_widget_container_${r}"></div>

<script type="text/javascript">
window['Ts4nfdiWidgets'].createCrossRefTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        className:${e.className}
    },
    document.querySelector('#cross_ref_tab_widget_container_${r}')
)
<\/script>
        `},argTypes:g,args:c},I=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{u as CrossRefTabWidget1,b as DefiningOntologyUnavailable,_ as SelectingDefiningOntology,I as __namedExportsOrder,A as default};
