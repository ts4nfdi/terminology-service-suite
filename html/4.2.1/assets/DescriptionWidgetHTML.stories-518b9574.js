import{a as o,F as r,H as n,o as a,l as p,u as c,c as s,I as g,K as y}from"./widgetDescriptions-5f3d180b.js";import{a as d,E as i}from"./globals-9d73b881.js";const l={...o,...r,...n,...a,...p,...c,...s,...g},T={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",parameter:"collection=nfdi4health"},h={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:d,ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"}},A={args:{api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"",parameter:""}},I={args:{api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}};let m=0;function u(){return m++}const f={title:"Entity Metadata/DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:y}}},render:e=>{const t=u();return`
<div id="description_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createDescription(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        descText:"${e.descText}",
        thingType:"${e.thingType}",
        parameter:"${e.parameter}",
        color:"${e.color}",
        useLegacy:${e.useLegacy}
    },
    document.querySelector('#description_widget_container_${t}')
)
<\/script>
        `},argTypes:l,args:T},$=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{I as DefiningOntologyUnavailable,h as DescriptionWidget1,A as SelectingDefiningOntology,$ as __namedExportsOrder,f as default};
