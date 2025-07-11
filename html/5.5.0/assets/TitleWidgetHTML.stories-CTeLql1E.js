import{ar as a,as as l,c as n,u as g,at as p,au as y,p as s,l as T,K as c,q as u,i as d,av as h}from"./widgetDescriptions-DoY7HRjj.js";/* empty css                                  */import{Z as e,E as i}from"./globals-CvFyH82M.js";const I={...d,...u,...c,...T,...s,...y,...p,...g,...n,...l,...a},m={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},C={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"}},W={args:{iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology"}},O={args:{api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""}},v={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"}},D={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",defaultValue:"default value"}},$={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"}},x={args:{api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}},V={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"custom-title-style"}},L={args:{iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",onNavigateTo:(t,o,r)=>{console.log("Navigation with IRI, ontologyId and thingType.",t,o,r)}}},S={args:{iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",href:"/"}};let b=0;function f(){return b++}const E={title:"Entity Metadata/TitleWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:h}}},render:t=>{const o=f();return`
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
        className:"${t.className}",
        onNavigateTo:${t.onNavigateTo},
        href:"${t.href}",
    },
    document.querySelector('#title_widget_container_${o}')
)
<\/script>
        `},argTypes:I,args:m},w=["TitleWidgetDefault","OntologyTitle","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","SelectingDefiningOntology","DefiningOntologyUnavailable","WithStyles","OntologyTitleCustomLink","OntologyTitleCustomOnNavigate"];export{x as DefiningOntologyUnavailable,D as IncorrectIriWithDefaultValue,$ as IncorrectIriWithoutDefaultValue,W as OntologyTitle,S as OntologyTitleCustomLink,L as OntologyTitleCustomOnNavigate,O as SelectingDefiningOntology,C as TitleWidgetDefault,v as TitleWidgetWithTitleText,V as WithStyles,w as __namedExportsOrder,E as default};
