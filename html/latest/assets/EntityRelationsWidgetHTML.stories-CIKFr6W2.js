import{o as e,j as a,k as r,m as n,q as g,p as y,l as p,n as s,r as l,i as d,v as T}from"./widgetDescriptions-BmGoKb71.js";import{E as o}from"./globals-CvFyH82M.js";/* empty css                  */const b={...d,...l,...s,...p,...y,...g,...n,...r,...a,...e},u={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},N={args:{api:o,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"}},O={args:{api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"}},h={args:{api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"}},A={args:{api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"}},_={args:{api:o,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"}},f={args:{api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"}},B={args:{api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"}},$={args:{api:o,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"}},D={args:{api:o,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"}},R={args:{api:o,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"}},w={args:{api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let m=0;function c(){return m++}const C={title:"Additional Entity Metadata/EntityRelationsWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:T}}},render:t=>{const i=c();return`
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
        `},argTypes:b,args:u},F=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{O as AllValuesFrom,D as Axioms,h as DifferentFrom,A as EquivalentTo,$ as Instances,f as InverseOf,w as NavigateToEBIPage,B as PropertyChain,R as QualifiedCardinality,_ as SingleValue,N as SubEntityOf,F as __namedExportsOrder,C as default};
