import"./terminology-service-suite.min-BJNtsYio.js";import{e as o}from"./ModelTypeCheck-Cd-4DVPN.js";const i={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},hasTitle:{type:{required:!1},table:{defaultValue:{summary:!0}}},ontologyId:{table:{defaultValue:{summary:void 0}}},entityType:{type:{required:!1},control:{type:"radio"},table:{type:{summary:`${o.join(" | ")}`}},options:["term","class","property","individual","INVALID STRING",""]},iri:{},parameter:{type:{required:!1},table:{defaultValue:{summary:void 0}}},showBadges:{type:{required:!1},table:{defaultValue:{summary:!0}}},useLegacy:{type:{required:!1},table:{defaultValue:{summary:!0}}}},r={api:"https://semanticlookup.zbmed.de/api/",hasTitle:!0,showBadges:!0,useLegacy:!0,ontologyId:"",entityType:"",parameter:""},l={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0}},y={args:{iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"}},d={args:{iri:"http://purl.obolibrary.org/obo/IAO_0000423",entityType:"individual",ontologyId:"clo"}},u={args:{api:"https://www.ebi.ac.uk/ols4/api/",useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"}},g={args:{api:"https://semanticlookup.zbmed.de/ols/api/",iri:"http://purl.obolibrary.org/obo/NCIT_C88403"}},c={args:{api:"https://www.ebi.ac.uk/ols4/api/",useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89"}},b={args:{api:"https://www.ebi.ac.uk/ols4/api/",useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029"}},I={args:{api:"https://www.ebi.ac.uk/ols4/api/",useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569"}},f={args:{api:"https://www.ebi.ac.uk/ols4/api/",useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603"}};let a=0;function s(){return a++}const m={title:"EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=s();return`        
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
        useLegacy:${t.useLegacy}
    },
    document.querySelector('#entity_info_widget_container_${e}')
)
<\/script>
        `},argTypes:i,args:r},h=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","InfoWidgetDomain","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","InfoWidgetRange","OptionalEntityTypeLegacyAPI"];export{d as IndividualInfoWidget,u as InfoWidgetBadges,c as InfoWidgetDomain,I as InfoWidgetPropertyAssertion,f as InfoWidgetPropertyCharacteristics,b as InfoWidgetRange,g as OptionalEntityTypeLegacyAPI,y as PropertyInfoWidget,l as TermInfoWidget,h as __namedExportsOrder,m as default};
