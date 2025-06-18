import{o as a,j as r,k as n,l as g,u as s,m as y,p,n as l,q as d,r as c,i as T,E as I}from"./widgetDescriptions-BjaIB8IO.js";import{Z as i,E as o}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u={...T,...c,...d,...l,...p,...y,...s,...g,...n,...r,...a},f={api:i,iri:"",useLegacy:!0,ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},A={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0}},W={args:{iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"}},h={args:{iri:"http://purl.obolibrary.org/obo/IAO_0000423",entityType:"individual",ontologyId:"clo"}},O={args:{api:o,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"}},L={args:{api:i,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"}},P={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89"}},B={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029"}},$={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569"}},C={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603"}},w={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let b=0;function m(){return b++}const D={title:"Additional Entity Metadata/EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:I}}},render:t=>{const e=m();return`        
<div id="entity_info_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityInfo(
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
        `},argTypes:u,args:f},R=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","InfoWidgetDomain","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","InfoWidgetRange","OptionalEntityTypeLegacyAPI","NavigateToEBIPage"];export{h as IndividualInfoWidget,O as InfoWidgetBadges,P as InfoWidgetDomain,$ as InfoWidgetPropertyAssertion,C as InfoWidgetPropertyCharacteristics,B as InfoWidgetRange,w as NavigateToEBIPage,L as OptionalEntityTypeLegacyAPI,W as PropertyInfoWidget,A as TermInfoWidget,R as __namedExportsOrder,D as default};
