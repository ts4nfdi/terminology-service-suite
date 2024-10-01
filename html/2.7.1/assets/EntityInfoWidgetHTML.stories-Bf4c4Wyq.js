import"./ModelTypeCheck-DjhzoFkW.js";import{a as r,g as i,o as a,i as n,c as s,j as y,u as g,k as p}from"./storyArgs-BKWp3Ckm.js";import{a as d,E as e,Z as l}from"./globals-BR6EHpzJ.js";const c={...r,...i,...a,...n,...s,...y,...g,...p},I={api:d,iri:"",useLegacy:!0,ontologyId:"",entityType:"",hasTitle:!0,showBadges:!0,parameter:""},m={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0}},W={args:{iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"}},h={args:{iri:"http://purl.obolibrary.org/obo/IAO_0000423",entityType:"individual",ontologyId:"clo"}},A={args:{api:e,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"}},E={args:{api:l,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"}},L={args:{api:e,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89"}},P={args:{api:e,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029"}},N={args:{api:e,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569"}},O={args:{api:e,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603"}};let u=0;function T(){return u++}const w={title:"EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const o=T();return`        
<div id="entity_info_widget_container_${o}"></div>

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
    document.querySelector('#entity_info_widget_container_${o}')
)
<\/script>
        `},argTypes:c,args:I},$=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","InfoWidgetDomain","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","InfoWidgetRange","OptionalEntityTypeLegacyAPI"];export{h as IndividualInfoWidget,A as InfoWidgetBadges,L as InfoWidgetDomain,N as InfoWidgetPropertyAssertion,O as InfoWidgetPropertyCharacteristics,P as InfoWidgetRange,E as OptionalEntityTypeLegacyAPI,W as PropertyInfoWidget,m as TermInfoWidget,$ as __namedExportsOrder,w as default};
