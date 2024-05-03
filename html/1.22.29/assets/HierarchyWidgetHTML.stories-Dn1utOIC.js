import"./semlookp_widgets.min-BThAjXaX.js";/* empty css                         */import{e as i}from"./ModelTypeCheck-Cd-4DVPN.js";const o={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/","https://service.tib.eu/ts4tib/api/"]},ontologyId:{description:"Ontology ID from where the term hierarchy should be taken."},iri:{description:"Iri of the term you want to fetch the term hierarchy for."},entityType:{table:{type:{summary:`${i.join(" | ")}`}},control:{type:"radio"},options:["property","individual","class","term","","not specified"]}},r={ontologyId:"",entityType:"",iri:""},c={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:"https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/",ontologyId:"efo",entityType:"class"}};let a=0;function s(){return a++}const y={title:"HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=s();return`
<div id="hierarchy_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchy(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        entityType:"${t.entityType}",
        api:"${t.api}",
    },
    document.querySelector('#hierarchy_widget_container_${e}')
)
<\/script>
        `},argTypes:o,args:r},h=["HierarchyWidget1"];export{c as HierarchyWidget1,h as __namedExportsOrder,y as default};
