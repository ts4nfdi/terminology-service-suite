import"./ModelTypeCheck-DNlehkL7.js";import{E as o}from"./globals-BR6EHpzJ.js";import{a as i,i as a,j as r,l as n,c as g,o as y,k as p,m as s,n as l,q as T}from"./storyArgs-BqAWfwtj.js";/* empty css                        */const d={...i,...a,...r,...n,...g,...y,...p,...s,...l,...T},b={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},E={args:{api:o,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"}},O={args:{api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"}},h={args:{api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"}},_={args:{api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"}},A={args:{api:o,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"}},f={args:{api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"}},B={args:{api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"}},$={args:{api:o,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"}},D={args:{api:o,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"}},R={args:{api:o,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"}},w={args:{api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let u=0;function m(){return u++}const S={title:"EntityRelationsWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=m();return`
<div id="autocomplete_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityRelations(
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
    document.querySelector('#autocomplete_widget_container_${e}')
)
<\/script>
        `},argTypes:d,args:b},C=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{O as AllValuesFrom,D as Axioms,h as DifferentFrom,_ as EquivalentTo,$ as Instances,f as InverseOf,w as NavigateToEBIPage,B as PropertyChain,R as QualifiedCardinality,A as SingleValue,E as SubEntityOf,C as __namedExportsOrder,S as default};
