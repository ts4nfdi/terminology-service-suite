import{a as o,A as r,B as n,o as a,l as p,u as c,c as g,C as s}from"./storyArgs-974907cc.js";import{a as y,E as i}from"./globals-1bcd394d.js";const l={...o,...r,...n,...a,...p,...c,...g,...s},d={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",parameter:"collection=nfdi4health"},_={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:y,ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"}},h={args:{api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"",parameter:""}},D={args:{api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}};let T=0;function m(){return T++}const I={title:"DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=m();return`
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
        `},argTypes:l,args:d},f=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{D as DefiningOntologyUnavailable,_ as DescriptionWidget1,h as SelectingDefiningOntology,f as __namedExportsOrder,I as default};
