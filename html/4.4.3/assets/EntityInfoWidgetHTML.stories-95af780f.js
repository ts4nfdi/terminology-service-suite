import{a,j as r,o as n,k as g,c as s,l as y,u as p,m as l,n as d,q as c,r as T,E as I}from"./widgetDescriptions-e66f4996.js";import{Z as i,E as o}from"./globals-aa5ada23.js";/* empty css                  */const u={...a,...r,...n,...g,...s,...y,...p,...l,...d,...c,...T},f={api:i,iri:"",useLegacy:!0,ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},_={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0}},A={args:{iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"}},W={args:{iri:"http://purl.obolibrary.org/obo/IAO_0000423",entityType:"individual",ontologyId:"clo"}},h={args:{api:o,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"}},O={args:{api:i,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"}},L={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89"}},P={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029"}},B={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569"}},$={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603"}},C={args:{api:o,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"}};let b=0;function m(){return b++}const w={title:"Additional Entity Metadata/EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:I}}},render:t=>{const e=m();return`        
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
        `},argTypes:u,args:f},D=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","InfoWidgetDomain","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","InfoWidgetRange","OptionalEntityTypeLegacyAPI","NavigateToEBIPage"];export{W as IndividualInfoWidget,h as InfoWidgetBadges,L as InfoWidgetDomain,B as InfoWidgetPropertyAssertion,$ as InfoWidgetPropertyCharacteristics,P as InfoWidgetRange,C as NavigateToEBIPage,O as OptionalEntityTypeLegacyAPI,A as PropertyInfoWidget,_ as TermInfoWidget,D as __namedExportsOrder,w as default};
