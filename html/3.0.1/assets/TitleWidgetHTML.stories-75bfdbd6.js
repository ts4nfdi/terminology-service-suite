import{a as o,o as a,C as l,l as n,c as g,M as p,N as s,u as y,O as c}from"./storyArgs-974907cc.js";import{a as e,E as r}from"./globals-1bcd394d.js";const T={...o,...a,...l,...n,...g,...p,...s,...y,...c},u={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},f={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"}},b={args:{api:r,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""}},W={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"}},_={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",defaultValue:"default value"}},N={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"}},A={args:{api:r,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}},D={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"title-styles"}};let d=0;function I(){return d++}const x={title:"TitleWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const i=I();return`
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
        `},argTypes:T,args:u},C=["TitleWidgetDefault","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","SelectingDefiningOntology","DefiningOntologyUnavailable","TitleWidgetWithStyles"];export{A as DefiningOntologyUnavailable,_ as IncorrectIriWithDefaultValue,N as IncorrectIriWithoutDefaultValue,b as SelectingDefiningOntology,f as TitleWidgetDefault,D as TitleWidgetWithStyles,W as TitleWidgetWithTitleText,C as __namedExportsOrder,x as default};
