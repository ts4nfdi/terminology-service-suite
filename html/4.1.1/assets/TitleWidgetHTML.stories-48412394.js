import{a as r,o as a,I as l,l as n,c as g,a4 as p,a5 as s,u as c,a6 as y,a7 as T}from"./widgetDescriptions-92bb00c2.js";import{a as e,E as o}from"./globals-9d73b881.js";const u={...r,...a,...l,...n,...g,...p,...s,...c,...y},d={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},b={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"}},W={args:{api:o,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""}},_={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"}},A={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",defaultValue:"default value"}},N={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"}},D={args:{api:o,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}},x={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"title-styles"}};let I=0;function m(){return I++}const $={title:"TitleWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:T}}},render:t=>{const i=m();return`
<div id="title_widget_container_${i}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createTitle(
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
        `},argTypes:u,args:d},C=["TitleWidgetDefault","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","SelectingDefiningOntology","DefiningOntologyUnavailable","TitleWidgetWithStyles"];export{D as DefiningOntologyUnavailable,A as IncorrectIriWithDefaultValue,N as IncorrectIriWithoutDefaultValue,W as SelectingDefiningOntology,b as TitleWidgetDefault,x as TitleWidgetWithStyles,_ as TitleWidgetWithTitleText,C as __namedExportsOrder,$ as default};
