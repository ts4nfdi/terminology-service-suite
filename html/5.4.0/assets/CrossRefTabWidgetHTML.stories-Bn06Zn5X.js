import{u as o,p as i,n as a,q as n,l as s,i as p,T as y}from"./widgetDescriptions-Bq4r40e3.js";/* empty css                                  */import{E as t}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g={...p,...s,...n,...a,...i,...o},c={api:"",iri:"",useLegacy:!0,ontologyId:"",entityType:"",parameter:"collection=nfdi4health"},b={args:{iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:t,entityType:"term",ontologyId:"rxno",parameter:""}},A={args:{api:t,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""}},I={args:{api:t,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""}};let d=0;function l(){return d++}const R={title:"Additional Entity Metadata/CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:y}}},render:e=>{const r=l();return`
<div id="cross_ref_tab_widget_container_${r}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createCrossRefTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        className:"${e.className}"
    },
    document.querySelector('#cross_ref_tab_widget_container_${r}')
)
<\/script>
        `},argTypes:g,args:c},$=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{b as CrossRefTabWidget1,I as DefiningOntologyUnavailable,A as SelectingDefiningOntology,$ as __namedExportsOrder,R as default};
