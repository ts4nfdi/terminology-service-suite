import"./ModelTypeCheck-B1dDMo3q.js";import{Z as a,G as t,a as s}from"./globals-BR6EHpzJ.js";import{a as r}from"./chunk-WFFRPTHA-DEDbbGN5.js";import{a as i,s as l,p as n,b as p,c,h as d,d as g,e as m,t as h,f as u,g as y}from"./storyArgs-DXfIqlp-.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const S={argTypes:{...i,...l,...n,...p,...c,...d,...g,...m,...h,...u,...y}};a,r("selectionChangedEvent");const f={args:{api:a,ts4nfdiGateway:!1,singleSelection:!0,allowCustomTerms:!1,selectionChangedEvent:()=>{},hasShortSelectedLabel:!0,placeholder:"Search for a Concept",preselected:[],showApiSource:!0,parameter:"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"}},L={args:{}},E={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},D={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form"}},I={args:{api:t,ts4nfdiGateway:!0,parameter:"database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form"}},P={args:{api:t,ts4nfdiGateway:!0,showApiSource:!1,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},$={args:{singleSuggestionRow:!0}},M={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"}]}},v={args:{allowCustomTerms:!0,preselected:[{label:"freetext"}]}},O={args:{preselected:[{iri:"ht3stp://purl.bioontology.org/ontology/MESH/D000086382"}]}},H={args:{api:s,parameter:"collection=nfdi4health&lang=de&type=class"}},N={args:{api:s,parameter:"fieldList=description,label,iri,ontology_name,type,short_form"}},V={args:{hasShortSelectedLabel:!1}},U={args:{allowCustomTerms:!0}},k={args:{singleSelection:!1}},x={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"},{iri:"http://purl.bioontology.org/ontology/MESH/D003920"}],singleSelection:!1}};let A=0;function w(){return A++}const F={title:"AutocompleteWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const o=w();return`
<div id="autocomplete_widget_container_${o}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createAutocomplete(
    {
        api:"${e.api}",
        parameter:"${e.parameter}",
        selectionChangedEvent:${e.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm,"")},
        preselected:${JSON.stringify(e.preselected).replace(/"([^"]+)":/g,"$1:")},
        placeholder:"${e.placeholder}",
        hasShortSelectedLabel:${e.hasShortSelectedLabel},
        allowCustomTerms:${e.allowCustomTerms},
        singleSelection:${e.singleSelection},
        ts4nfdiGateway:${e.ts4nfdiGateway},
        singleSuggestionRow:${e.singleSuggestionRow},
        showApiSource:${e.showApiSource},
    },
    document.querySelector('#autocomplete_widget_container_${o}')
)
<\/script>
        `},...S,...f},R=["WithDefaults","UseAPIGatewayWithOLS","UseAPIGatewayWithOntoPortal","UseAPIGatewayWithSkosmos","HideApiSourceApiGateway","WithDefaultsCompact","WithValue","WithCustomValue","WithInvalidValue","WithMultipleValues","AllowMultipleTerms","AllowAddingCustomTerms","WithGermanInput","DisplaySelectedEntityWithLongForm","WithDescriptionAndShortForm"];export{U as AllowAddingCustomTerms,k as AllowMultipleTerms,V as DisplaySelectedEntityWithLongForm,P as HideApiSourceApiGateway,E as UseAPIGatewayWithOLS,D as UseAPIGatewayWithOntoPortal,I as UseAPIGatewayWithSkosmos,v as WithCustomValue,L as WithDefaults,$ as WithDefaultsCompact,N as WithDescriptionAndShortForm,H as WithGermanInput,O as WithInvalidValue,x as WithMultipleValues,M as WithValue,R as __namedExportsOrder,F as default};
