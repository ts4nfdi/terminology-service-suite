import"./semlookp_widgets.min-BLUfpFpL.js";import{e as i}from"./ModelTypeCheck-Cd-4DVPN.js";const e={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/","https://service.tib.eu/ts4tib/api/"]},hasTitle:{type:{required:!1}},entityType:{table:{type:{summary:`${i.join(" | ")}`}},control:{type:"radio"},options:["ontology","term","class","property","individual",void 0,"INVALID STRING"]},iri:{},parameter:{type:{required:!1}},ontologyId:{type:{required:!1}},showBadges:{}},r={hasTitle:!0,showBadges:!0},l={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"}},y={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"}},d={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"}},u={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"}},b={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"}},c={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"}},g={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"}},w={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"}},m={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"}},h={args:{api:"https://www.ebi.ac.uk/ols4/api/",entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"}};let a=0;function p(){return a++}const T={title:"EntityRelationsWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const o=p();return`
<div id="autocomplete_widget_container_${o}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityRelations(
    {
        api:"${t.api}",
        entityType:"${t.entityType}",
        ontologyId:"${t.ontologyId}",
        iri:"${t.iri}",
        hasTitle:${t.hasTitle},
        showBadges:${t.showBadges},
        parameter:"${t.parameter}"
    },
    document.querySelector('#autocomplete_widget_container_${o}')
)
<\/script>
        `},argTypes:e,args:r},I=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality"];export{y as AllValuesFrom,m as Axioms,d as DifferentFrom,u as EquivalentTo,w as Instances,c as InverseOf,g as PropertyChain,h as QualifiedCardinality,b as SingleValue,l as SubEntityOf,I as __namedExportsOrder,T as default};
