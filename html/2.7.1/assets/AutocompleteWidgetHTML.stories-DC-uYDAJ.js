import"./ModelTypeCheck-DjhzoFkW.js";import{Z as a,G as t,a as s}from"./globals-BR6EHpzJ.js";import{a as l}from"./chunk-WFFRPTHA-DEDbbGN5.js";import{a as r,s as i,p as n,b as p,c,h as d,d as g,e as m,t as h,f as u}from"./storyArgs-BKWp3Ckm.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const y={argTypes:{...r,...i,...n,...p,...c,...d,...g,...m,...h,...u}};a,l("selectionChangedEvent");const f={args:{api:a,ts4nfdiGateway:!1,singleSelection:!0,allowCustomTerms:!1,selectionChangedEvent:()=>{},hasShortSelectedLabel:!0,placeholder:"Search for a Concept",preselected:[],parameter:"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"}},L={args:{}},E={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},G={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form"}},D={args:{api:t,ts4nfdiGateway:!0,parameter:"database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form"}},I={args:{singleSuggestionRow:!0}},P={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"}]}},$={args:{allowCustomTerms:!0,preselected:[{label:"freetext"}]}},M={args:{preselected:[{iri:"ht3stp://purl.bioontology.org/ontology/MESH/D000086382"}]}},v={args:{api:s,parameter:"collection=nfdi4health&lang=de&type=class"}},O={args:{api:s,parameter:"fieldList=description,label,iri,ontology_name,type,short_form"}},N={args:{hasShortSelectedLabel:!1}},V={args:{allowCustomTerms:!0}},H={args:{singleSelection:!1}},U={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"},{iri:"http://purl.bioontology.org/ontology/MESH/D003920"}],singleSelection:!1}};let S=0;function A(){return S++}const k={title:"AutocompleteWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const o=A();return`
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
    },
    document.querySelector('#autocomplete_widget_container_${o}')
)
<\/script>
        `},...y,...f},x=["WithDefaults","UseAPIGatewayWithOLS","UseAPIGatewayWithOntoPortal","UseAPIGatewayWithSkosmos","WithDefaultsCompact","WithValue","WithCustomValue","WithInvalidValue","WithMultipleValues","AllowMultipleTerms","AllowAddingCustomTerms","WithGermanInput","DisplaySelectedEntityWithLongForm","WithDescriptionAndShortForm"];export{V as AllowAddingCustomTerms,H as AllowMultipleTerms,N as DisplaySelectedEntityWithLongForm,E as UseAPIGatewayWithOLS,G as UseAPIGatewayWithOntoPortal,D as UseAPIGatewayWithSkosmos,$ as WithCustomValue,L as WithDefaults,I as WithDefaultsCompact,O as WithDescriptionAndShortForm,v as WithGermanInput,M as WithInvalidValue,U as WithMultipleValues,P as WithValue,x as __namedExportsOrder,k as default};
