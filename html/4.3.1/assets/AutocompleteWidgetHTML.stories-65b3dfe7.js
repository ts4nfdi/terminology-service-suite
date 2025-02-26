import{a as l,s as i,p as n,b as c,c as p,h as d,d as g,e as m,t as u,f as h,g as y,i as f,A}from"./widgetDescriptions-c17d01c0.js";/* empty css                                  */import{Z as a,G as t,a as s,T as r}from"./globals-9d73b881.js";import{a as S}from"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const w={argTypes:{...l,...i,...n,...c,...p,...d,...g,...m,...u,...h,...y,...f}};a,S("selectionChangedEvent");const T={args:{api:a,ts4nfdiGateway:!1,singleSelection:!0,allowCustomTerms:!1,selectionChangedEvent:()=>{},hasShortSelectedLabel:!0,placeholder:"Search for a Concept",preselected:[],showApiSource:!0,singleSuggestionRow:!1,parameter:"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"}},G={args:{}},L={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},N={args:{api:t,ts4nfdiGateway:!0,parameter:"database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form"}},M={args:{api:t,ts4nfdiGateway:!0,parameter:"database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form"}},$={args:{api:t,ts4nfdiGateway:!0,showApiSource:!1,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},v={args:{singleSuggestionRow:!0}},O={args:{preselected:[{label:"COVID-19",iri:"http://purl.bioontology.org/ontology/MESH/D000086382"}]}},H={args:{preselected:[{label:"COVID-19",iri:"http://purl.bioontology.org/ontology/MESH/D00008"}],allowCustomTerms:!0}},V={args:{allowCustomTerms:!0,preselected:[{label:"freetext"}]}},U={args:{preselected:[{iri:"ht3stp://purl.bioontology.org/ontology/MESH/D000086382"}]}},F={args:{api:s,parameter:"collection=nfdi4health&lang=de&type=class"}},R={args:{api:s,parameter:"fieldList=description,label,iri,ontology_name,type,short_form"}},x={args:{hasShortSelectedLabel:!1}},k={args:{allowCustomTerms:!0}},B={args:{singleSelection:!1}},Z={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"},{iri:"http://purl.bioontology.org/ontology/MESH/D003920"}],singleSelection:!1}},j={args:{api:r,parameter:"classification=NFDI4CHEM&schema=collection"}},q={args:{api:r,parameter:"classification=DataPLANT&schema=collection"}};let W=0;function _(){return W++}const J={title:"Search/AutocompleteWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:A}}},render:e=>{const o=_();return`
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
        `},...w,...T},Y=["WithDefaults","UseAPIGatewayWithOLS","UseAPIGatewayWithOntoPortal","UseAPIGatewayWithSkosmos","HideApiSourceApiGateway","WithDefaultsCompact","WithPreselectedValue","WithPreselectedValueAndUnresolvedIri","WithCustomValue","WithInvalidValue","WithMultipleValues","AllowMultipleTerms","AllowAddingCustomTerms","WithGermanInput","WithLongForm","WithDescriptionAndShortForm","TibNFDI4CHEM","TibDataPlant"];export{k as AllowAddingCustomTerms,B as AllowMultipleTerms,$ as HideApiSourceApiGateway,q as TibDataPlant,j as TibNFDI4CHEM,L as UseAPIGatewayWithOLS,N as UseAPIGatewayWithOntoPortal,M as UseAPIGatewayWithSkosmos,V as WithCustomValue,G as WithDefaults,v as WithDefaultsCompact,R as WithDescriptionAndShortForm,F as WithGermanInput,U as WithInvalidValue,x as WithLongForm,Z as WithMultipleValues,O as WithPreselectedValue,H as WithPreselectedValueAndUnresolvedIri,Y as __namedExportsOrder,J as default};
