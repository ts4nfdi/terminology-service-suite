import{a as e,j as a,k as r,m as n,c as g,o as y,l as p,n as s,q as l,r as d,v as T}from"./widgetDescriptions-02a1740f.js";import{E as o}from"./globals-aa5ada23.js";/* empty css                  */import"./iframe-d333685b.js";import"../sb-preview/runtime.js";const b={...e,...a,...r,...n,...g,...y,...p,...s,...l,...d},m={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},h={args:{api:o,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"}},A={args:{api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"}},_={args:{api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"}},f={args:{api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"}},B={args:{api:o,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"}},$={args:{api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"}},D={args:{api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"}},R={args:{api:o,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"}},w={args:{api:o,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"}},C={args:{api:o,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"}},F={args:{api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let u=0;function c(){return u++}const S={title:"Additional Entity Metadata/EntityRelationsWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:T}}},render:t=>{const i=c();return`
<div id="autocomplete_widget_container_${i}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityRelations(
    {
        api:"${t.api}",
        entityType:"${t.entityType}",
        ontologyId:"${t.ontologyId}",
        iri:"${t.iri}",
        hasTitle:${t.hasTitle},
        showBadges:${t.showBadges},
        parameter:"${t.parameter}",
        onNavigateToEntity:${t.onNavigateToEntity},
        onNavigateToOntology:${t.onNavigateToOntology},
        onNavigateToDisambiguate:${t.onNavigateToDisambiguate}
    },
    document.querySelector('#autocomplete_widget_container_${i}')
)
<\/script>
        `},argTypes:b,args:m},P=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{A as AllValuesFrom,w as Axioms,_ as DifferentFrom,f as EquivalentTo,R as Instances,$ as InverseOf,F as NavigateToEBIPage,D as PropertyChain,C as QualifiedCardinality,B as SingleValue,h as SubEntityOf,P as __namedExportsOrder,S as default};
