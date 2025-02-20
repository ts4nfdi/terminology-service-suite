import{a as r,s as i,p as l,b as n,c as p,h as c,d as g,e as d,t as m,f as u,g as h,A as y}from"./widgetDescriptions-5f3d180b.js";import{Z as a,G as t,a as s}from"./globals-9d73b881.js";import{a as S}from"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const f={argTypes:{...r,...i,...l,...n,...p,...c,...g,...d,...m,...u,...h}};a,S("selectionChangedEvent");const A={args:{api:a,ts4nfdiGateway:!1,singleSelection:!0,allowCustomTerms:!1,selectionChangedEvent:()=>{},hasShortSelectedLabel:!0,placeholder:"Search for a Concept",preselected:[],showApiSource:!0,singleSuggestionRow:!1,parameter:"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"}},L={args:{}},E={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},I={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form"}},D={args:{api:t,ts4nfdiGateway:!0,parameter:"database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form"}},P={args:{api:t,ts4nfdiGateway:!0,showApiSource:!1,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},$={args:{singleSuggestionRow:!0}},M={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"}]}},v={args:{allowCustomTerms:!0,preselected:[{label:"freetext"}]}},O={args:{preselected:[{iri:"ht3stp://purl.bioontology.org/ontology/MESH/D000086382"}]}},H={args:{api:s,parameter:"collection=nfdi4health&lang=de&type=class"}},N={args:{api:s,parameter:"fieldList=description,label,iri,ontology_name,type,short_form"}},V={args:{hasShortSelectedLabel:!1}},R={args:{allowCustomTerms:!0}},U={args:{singleSelection:!1}},k={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"},{iri:"http://purl.bioontology.org/ontology/MESH/D003920"}],singleSelection:!1}};let w=0;function T(){return w++}const x={title:"Search/AutocompleteWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:y}}},render:e=>{const o=T();return`
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
        `},...f,...A},F=["WithDefaults","UseAPIGatewayWithOLS","UseAPIGatewayWithOntoPortal","UseAPIGatewayWithSkosmos","HideApiSourceApiGateway","WithDefaultsCompact","WithValue","WithCustomValue","WithInvalidValue","WithMultipleValues","AllowMultipleTerms","AllowAddingCustomTerms","WithGermanInput","WithLongForm","WithDescriptionAndShortForm"];export{R as AllowAddingCustomTerms,U as AllowMultipleTerms,P as HideApiSourceApiGateway,E as UseAPIGatewayWithOLS,I as UseAPIGatewayWithOntoPortal,D as UseAPIGatewayWithSkosmos,v as WithCustomValue,L as WithDefaults,$ as WithDefaultsCompact,N as WithDescriptionAndShortForm,H as WithGermanInput,O as WithInvalidValue,V as WithLongForm,k as WithMultipleValues,M as WithValue,F as __namedExportsOrder,x as default};
