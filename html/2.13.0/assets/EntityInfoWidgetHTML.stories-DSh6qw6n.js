import{a as i,i as a,o as r,j as n,c as g,k as s,u as y,l as p,m as l,n as T,q as d}from"./storyArgs-BTeOS3u2.js";import{a as I,E as o,Z as c}from"./globals-BR6EHpzJ.js";/* empty css                        */const u={...i,...a,...r,...n,...g,...s,...y,...p,...l,...T,...d},b={api:I,iri:"",useLegacy:!0,ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},v={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0}},A={args:{iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"}},W={args:{iri:"http://purl.obolibrary.org/obo/IAO_0000423",entityType:"individual",ontologyId:"clo"}},h={args:{api:o,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"}},O={args:{api:c,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"}},P={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89"}},L={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029"}},B={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569"}},D={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603"}},$={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let f=0;function N(){return f++}const C={title:"EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=N();return`        
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
        `},argTypes:u,args:b},w=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","InfoWidgetDomain","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","InfoWidgetRange","OptionalEntityTypeLegacyAPI","NavigateToEBIPage"];export{W as IndividualInfoWidget,h as InfoWidgetBadges,P as InfoWidgetDomain,B as InfoWidgetPropertyAssertion,D as InfoWidgetPropertyCharacteristics,L as InfoWidgetRange,$ as NavigateToEBIPage,O as OptionalEntityTypeLegacyAPI,A as PropertyInfoWidget,v as TermInfoWidget,w as __namedExportsOrder,C as default};
