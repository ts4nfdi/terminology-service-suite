import{c as o,B as r,p as n,u as a,l as p,q as s,C as c,F as g,i as l,H as y}from"./widgetDescriptions-erLppZpy.js";/* empty css                                  */import{Z as d,E as i}from"./globals-BpbGe8p9.js";const m={...l,...g,...c,...s,...p,...a,...n,...r,...o},T={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",className:"",parameter:"collection=nfdi4health"},f={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:d,ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"}},I={args:{api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"",parameter:""}},$={args:{api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}};let u=0;function A(){return u++}const b={title:"Entity Metadata/DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:y}}},render:e=>{const t=A();return`
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
        `},argTypes:m,args:T},N=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{$ as DefiningOntologyUnavailable,f as DescriptionWidget1,I as SelectingDefiningOntology,N as __namedExportsOrder,b as default};
