import"./ModelTypeCheck-C_ijCt8z.js";import{a as e,E as r}from"./globals-BR6EHpzJ.js";import{a as o,o as a,x as l,k as n,c as g,J as p,K as s,u as y,L as c}from"./storyArgs-CbrwscED.js";const T={...o,...a,...l,...n,...g,...p,...s,...y,...c},u={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},b={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"}},W={args:{api:r,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""}},_={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"}},A={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",defaultValue:"default value"}},N={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"}},D={args:{api:r,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}},x={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"title-styles"}};let d=0;function m(){return d++}const $={title:"TitleWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const i=m();return`
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
        `},argTypes:T,args:u},C=["TitleWidgetDefault","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","SelectingDefiningOntology","DefiningOntologyUnavailable","TitleWidgetWithStyles"];export{D as DefiningOntologyUnavailable,A as IncorrectIriWithDefaultValue,N as IncorrectIriWithoutDefaultValue,W as SelectingDefiningOntology,b as TitleWidgetDefault,x as TitleWidgetWithStyles,_ as TitleWidgetWithTitleText,C as __namedExportsOrder,$ as default};
