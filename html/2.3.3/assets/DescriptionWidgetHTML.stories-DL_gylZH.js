import"./terminology-service-suite.min-BLNVgPF1.js";import{t as o}from"./ModelTypeCheck-Cd-4DVPN.js";const i={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},color:{table:{type:{summary:"EuiLinkColor | string"}},control:{type:"radio"},options:["default","subdued","success","accent","danger","warning","ghost","#00FFFF","rgb(255,0,255)"]},descText:{},ontologyId:{description:"Ontology ID from where the object description should be taken."},thingType:{description:"Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",table:{type:{summary:`${o.join(" | ")}`}},control:{type:"radio"},options:["ontology","term","class","property","individual","","INVALID STRING"]},iri:{description:"Object IRI whose description you want to fetch. For ontologies this is ignored, since the 'ontologyId' arg is sufficient."},parameter:{type:{required:!1}},useLegacy:{required:!1}},r={parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:""},c={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:"https://semanticlookup.zbmed.de/api/",ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"}},d={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"",parameter:""}},l={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""}};let n=0;function s(){return n++}const g={title:"DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=s();return`
<div id="description_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createDescription(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        api:"${t.api}",
        descText:"${t.descText}",
        thingType:"${t.thingType}",
        parameter:"${t.parameter}",
        color:"${t.color}",
        useLegacy:${t.useLegacy}
    },
    document.querySelector('#description_widget_container_${e}')
)
<\/script>
        `},argTypes:i,args:r},y=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{l as DefiningOntologyUnavailable,c as DescriptionWidget1,d as SelectingDefiningOntology,y as __namedExportsOrder,g as default};
