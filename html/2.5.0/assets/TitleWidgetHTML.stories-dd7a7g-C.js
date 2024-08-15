import"./terminology-service-suite.min-DUYVJAsv.js";import{t as i}from"./ModelTypeCheck-Cd-4DVPN.js";const o={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},ontologyId:{description:"Ontology ID from where the object title/label should be taken."},thingType:{description:"Sets the type of the object whose title/label you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",table:{type:{summary:`${i.join(" | ")}`}},control:{type:"radio"},options:["ontology","term","class","property","individual","","INVALID STRING"]},iri:{description:"Object IRI whose label you want to fetch. For ontologies this is ignored, since the 'ontologyId' arg is sufficient."},titleText:{},default_value:{control:"text"},parameter:{type:{required:!1}}},r={parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",thingType:"",titleText:""},s={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:"https://semanticlookup.zbmed.de/api/",ontologyId:"ncit",thingType:"term"}},c={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""}},g={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}};let n=0;function a(){return n++}const d={title:"TitleWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=a();return`
<div id="title_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createTitle(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        api:"${t.api}",
        titleText:"${t.titleText}",
        thingType:"${t.thingType}",
        parameter:"${t.parameter}",
        useLegacy:${t.useLegacy},
    },
    document.querySelector('#title_widget_container_${e}')
)
<\/script>
        `},argTypes:o,args:r},y=["TitleWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{g as DefiningOntologyUnavailable,c as SelectingDefiningOntology,s as TitleWidget1,y as __namedExportsOrder,d as default};
