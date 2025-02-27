import{a as r,o as a,F as l,m as n,c as g,a5 as p,a6 as s,u as c,i as y,a7 as u}from"./widgetDescriptions-e2752ba8.js";/* empty css                                  */import{a as e,E as o}from"./globals-9d73b881.js";const T={...r,...a,...l,...n,...g,...p,...s,...c,...y},d={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},_={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"}},W={args:{api:o,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""}},A={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"}},N={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",defaultValue:"default value"}},D={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"}},x={args:{api:o,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}},$={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"custom-title-style"}};let m=0;function I(){return m++}const C={title:"Entity Metadata/TitleWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:u}}},render:t=>{const i=I();return`
<div id="title_widget_container_${i}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createTitle(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        api:"${t.api}",
        titleText:"${t.titleText}",
        thingType:"${t.thingType}",
        parameter:"${t.parameter}",
        useLegacy:"${t.useLegacy}",
        defaultValue:"${t.defaultValue}",
        className:"${t.className}"
    },
    document.querySelector('#title_widget_container_${i}')
)
<\/script>
        `},argTypes:T,args:d},V=["TitleWidgetDefault","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","SelectingDefiningOntology","DefiningOntologyUnavailable","WithStyles"];export{x as DefiningOntologyUnavailable,N as IncorrectIriWithDefaultValue,D as IncorrectIriWithoutDefaultValue,W as SelectingDefiningOntology,_ as TitleWidgetDefault,A as TitleWidgetWithTitleText,$ as WithStyles,V as __namedExportsOrder,C as default};
