import"./ModelTypeCheck-DjhzoFkW.js";import{E as t}from"./globals-BR6EHpzJ.js";import{a as e,g as i,i as a,k as n,c as p,o as y,j as s}from"./storyArgs-BKWp3Ckm.js";const l={...e,...i,...a,...n,...p,...y,...s},g={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:""},T={args:{api:t,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"}},I={args:{api:t,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"}},h={args:{api:t,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"}},_={args:{api:t,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"}},O={args:{api:t,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"}},A={args:{api:t,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"}},f={args:{api:t,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"}},E={args:{api:t,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"}},R={args:{api:t,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"}},$={args:{api:t,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"}};let d=0;function u(){return d++}const v={title:"EntityRelationsWidget",tags:["autodocs"],parameters:{layout:"centered"},render:o=>{const r=u();return`
<div id="autocomplete_widget_container_${r}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityRelations(
    {
        api:"${o.api}",
        entityType:"${o.entityType}",
        ontologyId:"${o.ontologyId}",
        iri:"${o.iri}",
        hasTitle:${o.hasTitle},
        showBadges:${o.showBadges},
        parameter:"${o.parameter}"
    },
    document.querySelector('#autocomplete_widget_container_${r}')
)
<\/script>
        `},argTypes:l,args:g},w=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality"];export{I as AllValuesFrom,R as Axioms,h as DifferentFrom,_ as EquivalentTo,E as Instances,A as InverseOf,f as PropertyChain,$ as QualifiedCardinality,O as SingleValue,T as SubEntityOf,w as __namedExportsOrder,v as default};
