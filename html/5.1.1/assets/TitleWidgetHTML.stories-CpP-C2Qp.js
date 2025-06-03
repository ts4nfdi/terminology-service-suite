import{ap as a,aq as l,c as n,u as g,ar as p,as as y,p as s,l as T,B as c,q as u,i as d,at as h}from"./widgetDescriptions-BJ--BacN.js";/* empty css                                  */import{Z as e,E as i}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I={...d,...u,...c,...T,...s,...y,...p,...g,...n,...l,...a},m={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},O={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"}},v={args:{iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology"}},D={args:{api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""}},$={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"}},x={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",defaultValue:"default value"}},V={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"}},L={args:{api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}},S={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"custom-title-style"}},E={args:{iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",onNavigateTo:(t,o,r)=>{console.log("Navigation with IRI, ontologyId and thingType.",t,o,r)}}},w={args:{iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",href:"/"}};let b=0;function f(){return b++}const M={title:"Entity Metadata/TitleWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:h}}},render:t=>{const o=f();return`
<div id="title_widget_container_${o}"></div>

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
        onNavigateTo:"${t.onNavigateTo}"
        href:"${t.href}"
    },
    document.querySelector('#title_widget_container_${o}')
)
<\/script>
        `},argTypes:I,args:m},q=["TitleWidgetDefault","OntologyTitle","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","SelectingDefiningOntology","DefiningOntologyUnavailable","WithStyles","OntologyTitleCustomLink","OntologyTitleCustomOnNavigate"];export{L as DefiningOntologyUnavailable,x as IncorrectIriWithDefaultValue,V as IncorrectIriWithoutDefaultValue,v as OntologyTitle,w as OntologyTitleCustomLink,E as OntologyTitleCustomOnNavigate,D as SelectingDefiningOntology,O as TitleWidgetDefault,$ as TitleWidgetWithTitleText,S as WithStyles,q as __namedExportsOrder,M as default};
