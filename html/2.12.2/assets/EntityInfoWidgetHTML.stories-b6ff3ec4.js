import"./ModelTypeCheck-dd77ad34.js";import{a as i,i as a,o as r,j as n,c as g,k as s,u as y,l as p,m as l,n as T,q as d}from"./storyArgs-fba56807.js";import{a as I,E as o,Z as c}from"./globals-1bcd394d.js";/* empty css                        */const u={...i,...a,...r,...n,...g,...s,...y,...p,...l,...T,...d},b={api:I,iri:"",useLegacy:!0,ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},A={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0}},W={args:{iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"}},h={args:{iri:"http://purl.obolibrary.org/obo/IAO_0000423",entityType:"individual",ontologyId:"clo"}},O={args:{api:o,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"}},P={args:{api:c,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"}},L={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89"}},B={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029"}},D={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569"}},$={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603"}},C={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let f=0;function N(){return f++}const w={title:"EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=N();return`        
<div id="entity_info_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityInfo(
    {
        api:"${t.api}",
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        hasTitle:${t.hasTitle},
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:${t.useLegacy},
        onNavigateToEntity:${t.onNavigateToEntity},
        onNavigateToOntology:${t.onNavigateToOntology},
        onNavigateToDisambiguate:${t.onNavigateToDisambiguate}
    },
    document.querySelector('#entity_info_widget_container_${e}')
)
<\/script>
        `},argTypes:u,args:b},R=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","InfoWidgetDomain","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","InfoWidgetRange","OptionalEntityTypeLegacyAPI","NavigateToEBIPage"];export{h as IndividualInfoWidget,O as InfoWidgetBadges,L as InfoWidgetDomain,D as InfoWidgetPropertyAssertion,$ as InfoWidgetPropertyCharacteristics,B as InfoWidgetRange,C as NavigateToEBIPage,P as OptionalEntityTypeLegacyAPI,W as PropertyInfoWidget,A as TermInfoWidget,R as __namedExportsOrder,w as default};
