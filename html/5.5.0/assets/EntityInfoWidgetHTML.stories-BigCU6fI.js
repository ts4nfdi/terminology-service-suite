import{o as a,j as r,k as n,l as g,u as s,m as y,p,n as l,q as d,r as c,i as T,E as I}from"./widgetDescriptions-DoY7HRjj.js";import{Z as e,E as o}from"./globals-CvFyH82M.js";/* empty css                  */const u={...T,...c,...d,...l,...p,...y,...s,...g,...n,...r,...a},b={api:e,iri:"",useLegacy:!0,ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},_={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0}},h={args:{iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"}},A={args:{iri:"http://purl.obolibrary.org/obo/IAO_0000423",entityType:"individual",ontologyId:"clo"}},W={args:{api:o,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"}},L={args:{api:e,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"}},O={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89"}},P={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029"}},B={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569"}},$={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603"}},C={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}},w={args:{api:e,useLegacy:!0,iri:"http://id.loc.gov/vocabulary/iso639-1/zh"}};let f=0;function m(){return f++}const D={title:"Additional Entity Metadata/EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:I}}},render:t=>{const i=m();return`        
<div id="entity_info_widget_container_${i}"></div>

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
    document.querySelector('#entity_info_widget_container_${i}')
)
<\/script>
        `},argTypes:u,args:b},R=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","InfoWidgetDomain","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","InfoWidgetRange","OptionalEntityTypeLegacyAPI","NavigateToEBIPage","SkosmosImport"];export{A as IndividualInfoWidget,W as InfoWidgetBadges,O as InfoWidgetDomain,B as InfoWidgetPropertyAssertion,$ as InfoWidgetPropertyCharacteristics,P as InfoWidgetRange,C as NavigateToEBIPage,L as OptionalEntityTypeLegacyAPI,h as PropertyInfoWidget,w as SkosmosImport,_ as TermInfoWidget,R as __namedExportsOrder,D as default};
