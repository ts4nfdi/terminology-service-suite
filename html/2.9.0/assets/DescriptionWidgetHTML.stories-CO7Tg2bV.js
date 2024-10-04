import"./ModelTypeCheck-BZru_zIT.js";import{a as o,y as r,z as n,o as a,k as p,u as c,c as g,A as s}from"./storyArgs-DlyTPzuV.js";import{a as y,E as i}from"./globals-BR6EHpzJ.js";const d={...o,...r,...n,...a,...p,...c,...g,...s},l={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",parameter:"collection=nfdi4health"},h={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:y,ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"}},D={args:{api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"",parameter:""}},I={args:{api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}};let T=0;function m(){return T++}const f={title:"DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=m();return`
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
        `},argTypes:d,args:l},$=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{I as DefiningOntologyUnavailable,h as DescriptionWidget1,D as SelectingDefiningOntology,$ as __namedExportsOrder,f as default};
