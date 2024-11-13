import{a as r,s as i,p as l,b as n,c as p,h as c,d,e as g,t as m,f as h,g as u}from"./storyArgs-BTeOS3u2.js";import{Z as a,G as t,a as s}from"./globals-BR6EHpzJ.js";import{a as y}from"./chunk-WFFRPTHA-DEDbbGN5.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const S={argTypes:{...r,...i,...l,...n,...p,...c,...d,...g,...m,...h,...u}};a,y("selectionChangedEvent");const f={args:{api:a,ts4nfdiGateway:!1,singleSelection:!0,allowCustomTerms:!1,selectionChangedEvent:()=>{},hasShortSelectedLabel:!0,placeholder:"Search for a Concept",preselected:[],showApiSource:!0,parameter:"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"}},G={args:{}},L={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},E={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form"}},D={args:{api:t,ts4nfdiGateway:!0,parameter:"database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form"}},I={args:{api:t,ts4nfdiGateway:!0,showApiSource:!1,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},P={args:{singleSuggestionRow:!0}},$={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"}]}},M={args:{allowCustomTerms:!0,preselected:[{label:"freetext"}]}},v={args:{preselected:[{iri:"ht3stp://purl.bioontology.org/ontology/MESH/D000086382"}]}},O={args:{api:s,parameter:"collection=nfdi4health&lang=de&type=class"}},H={args:{api:s,parameter:"fieldList=description,label,iri,ontology_name,type,short_form"}},N={args:{hasShortSelectedLabel:!1}},V={args:{allowCustomTerms:!0}},U={args:{singleSelection:!1}},k={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"},{iri:"http://purl.bioontology.org/ontology/MESH/D003920"}],singleSelection:!1}};let A=0;function w(){return A++}const x={title:"AutocompleteWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const o=w();return`
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
        `},...S,...f},F=["WithDefaults","UseAPIGatewayWithOLS","UseAPIGatewayWithOntoPortal","UseAPIGatewayWithSkosmos","HideApiSourceApiGateway","WithDefaultsCompact","WithValue","WithCustomValue","WithInvalidValue","WithMultipleValues","AllowMultipleTerms","AllowAddingCustomTerms","WithGermanInput","DisplaySelectedEntityWithLongForm","WithDescriptionAndShortForm"];export{V as AllowAddingCustomTerms,U as AllowMultipleTerms,N as DisplaySelectedEntityWithLongForm,I as HideApiSourceApiGateway,L as UseAPIGatewayWithOLS,E as UseAPIGatewayWithOntoPortal,D as UseAPIGatewayWithSkosmos,M as WithCustomValue,G as WithDefaults,P as WithDefaultsCompact,H as WithDescriptionAndShortForm,O as WithGermanInput,v as WithInvalidValue,k as WithMultipleValues,$ as WithValue,F as __namedExportsOrder,x as default};
