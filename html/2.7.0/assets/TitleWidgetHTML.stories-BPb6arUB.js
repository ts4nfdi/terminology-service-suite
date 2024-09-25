import"./ModelTypeCheck-CpmdorZG.js";import{a as i,E as r}from"./globals-BR6EHpzJ.js";import{a,o,x as l,k as n,c as g,J as p,K as s,u as y,L as c}from"./storyArgs-CZuvESEs.js";const T={...a,...o,...l,...n,...g,...p,...s,...y,...c},d={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},A={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:i,ontologyId:"ncit",thingType:"term"}},I={args:{api:r,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""}},N={args:{api:r,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}},b={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:i,ontologyId:"ncit",thingType:"term",className:"title-styles"}};let u=0;function m(){return u++}const W={title:"TitleWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=m();return`
<div id="title_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createTitle(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        titleText:"${e.titleText}",
        thingType:"${e.thingType}",
        parameter:"${e.parameter}",
        useLegacy:"${e.useLegacy}",
        defaultValue:"${e.defaultValue}",
        className:"${e.className}"
    },
    document.querySelector('#title_widget_container_${t}')
)
<\/script>
        `},argTypes:T,args:d},$=["TitleWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","TitleWidgetWithStyles"];export{N as DefiningOntologyUnavailable,I as SelectingDefiningOntology,A as TitleWidgetDefault,b as TitleWidgetWithStyles,$ as __namedExportsOrder,W as default};
