import{c as o,B as r,p as n,u as a,l as p,q as s,C as c,F as g,i as l,H as y}from"./widgetDescriptions-BMWeeRAp.js";/* empty css                                  */import{Z as d,E as i}from"./globals-CvFyH82M.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m={...l,...g,...c,...s,...p,...a,...n,...r,...o},T={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",className:"",parameter:"collection=nfdi4health"},$={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:d,ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"}},b={args:{api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"",parameter:""}},N={args:{api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}};let u=0;function A(){return u++}const O={title:"Entity Metadata/DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:y}}},render:e=>{const t=A();return`
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
        `},argTypes:m,args:T},x=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{N as DefiningOntologyUnavailable,$ as DescriptionWidget1,b as SelectingDefiningOntology,x as __namedExportsOrder,O as default};
