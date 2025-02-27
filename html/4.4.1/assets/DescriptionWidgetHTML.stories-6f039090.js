import{a as o,B as r,C as n,o as a,m as p,u as s,c,F as g,i as y,H as d}from"./widgetDescriptions-e2752ba8.js";/* empty css                                  */import{a as l,E as i}from"./globals-9d73b881.js";const m={...o,...r,...n,...a,...p,...s,...c,...g,...y},T={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",className:"",parameter:"collection=nfdi4health"},I={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:l,ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"}},f={args:{api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"",parameter:""}},$={args:{api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}};let u=0;function D(){return u++}const N={title:"Entity Metadata/DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:d}}},render:e=>{const t=D();return`
<div id="description_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDescription(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        descText:"${e.descText}",
        thingType:"${e.thingType}",
        parameter:"${e.parameter}",
        color:"${e.color}",
        useLegacy:"${e.useLegacy}",
        className:"${e.className}",
        
    },
    document.querySelector('#description_widget_container_${t}')
)
<\/script>
        `},argTypes:m,args:T},b=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{$ as DefiningOntologyUnavailable,I as DescriptionWidget1,f as SelectingDefiningOntology,b as __namedExportsOrder,N as default};
