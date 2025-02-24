import{a as r,s as l,p as n,b as c,c as p,h as g,d as m,e as d,t as h,f as u,g as y,i as f,A}from"./widgetDescriptions-a43d5516.js";/* empty css                                  */import{Z as a,G as t,a as s,T as i}from"./globals-9d73b881.js";import{a as S}from"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const w={argTypes:{...r,...l,...n,...c,...p,...g,...m,...d,...h,...u,...y,...f}};a,S("selectionChangedEvent");const T={args:{api:a,ts4nfdiGateway:!1,singleSelection:!0,allowCustomTerms:!1,selectionChangedEvent:()=>{},hasShortSelectedLabel:!0,placeholder:"Search for a Concept",preselected:[],showApiSource:!0,singleSuggestionRow:!1,parameter:"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"}},L={args:{}},P={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},N={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form"}},M={args:{api:t,ts4nfdiGateway:!0,parameter:"database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form"}},$={args:{api:t,ts4nfdiGateway:!0,showApiSource:!1,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},v={args:{singleSuggestionRow:!0}},H={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"}]}},O={args:{allowCustomTerms:!0,preselected:[{label:"freetext"}]}},V={args:{preselected:[{iri:"ht3stp://purl.bioontology.org/ontology/MESH/D000086382"}]}},F={args:{api:s,parameter:"collection=nfdi4health&lang=de&type=class"}},R={args:{api:s,parameter:"fieldList=description,label,iri,ontology_name,type,short_form"}},U={args:{hasShortSelectedLabel:!1}},x={args:{allowCustomTerms:!0}},k={args:{singleSelection:!1}},B={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"},{iri:"http://purl.bioontology.org/ontology/MESH/D003920"}],singleSelection:!1}},Z={args:{api:i,parameter:"classification=NFDI4CHEM&schema=collection"}},j={args:{api:i,parameter:"classification=DataPLANT&schema=collection"}};let _=0;function W(){return _++}const q={title:"Search/AutocompleteWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:A}}},render:e=>{const o=W();return`
<div id="autocomplete_widget_container_${o}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createAutocomplete(
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
        className: "${e.className}"
    },
    document.querySelector('#autocomplete_widget_container_${o}')
)
<\/script>
        `},...w,...T},J=["WithDefaults","UseAPIGatewayWithOLS","UseAPIGatewayWithOntoPortal","UseAPIGatewayWithSkosmos","HideApiSourceApiGateway","WithDefaultsCompact","WithValue","WithCustomValue","WithInvalidValue","WithMultipleValues","AllowMultipleTerms","AllowAddingCustomTerms","WithGermanInput","WithLongForm","WithDescriptionAndShortForm","TibNFDI4CHEM","TibDataPlant"];export{x as AllowAddingCustomTerms,k as AllowMultipleTerms,$ as HideApiSourceApiGateway,j as TibDataPlant,Z as TibNFDI4CHEM,P as UseAPIGatewayWithOLS,N as UseAPIGatewayWithOntoPortal,M as UseAPIGatewayWithSkosmos,O as WithCustomValue,L as WithDefaults,v as WithDefaultsCompact,R as WithDescriptionAndShortForm,F as WithGermanInput,V as WithInvalidValue,U as WithLongForm,B as WithMultipleValues,H as WithValue,J as __namedExportsOrder,q as default};
