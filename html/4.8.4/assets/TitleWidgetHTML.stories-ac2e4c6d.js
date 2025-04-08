import{a as r,o as a,F as l,m as n,c as p,a5 as g,a6 as s,u as c,i as y,a7 as u}from"./widgetDescriptions-004d52ae.js";/* empty css                                  */import{Z as e,E as o}from"./globals-aa5ada23.js";import"./iframe-209c1292.js";import"../sb-preview/runtime.js";const T={...r,...a,...l,...n,...p,...g,...s,...c,...y},d={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},A={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"}},D={args:{api:o,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""}},N={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"}},x={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",defaultValue:"default value"}},$={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"}},C={args:{api:o,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}},V={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"custom-title-style"}};let m=0;function h(){return m++}const S={title:"Entity Metadata/TitleWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:u}}},render:t=>{const i=h();return`
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
        `},argTypes:T,args:d},O=["TitleWidgetDefault","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","SelectingDefiningOntology","DefiningOntologyUnavailable","WithStyles"];export{C as DefiningOntologyUnavailable,x as IncorrectIriWithDefaultValue,$ as IncorrectIriWithoutDefaultValue,D as SelectingDefiningOntology,A as TitleWidgetDefault,N as TitleWidgetWithTitleText,V as WithStyles,O as __namedExportsOrder,S as default};
