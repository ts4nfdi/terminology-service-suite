import"./terminology-service-suite.min-DUYVJAsv.js";const o={argTypes:{api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/","https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/"]},selectionChangedEvent:{action:"selectionChangedEvent"},placeholder:{},preselected:{},parameter:{},hasShortSelectedLabel:{required:!1},allowCustomTerms:{required:!1},singleSelection:{required:!1},ts4nfdiGateway:{required:!1},singleSuggestionRow:{required:!1}}},a={args:{api:"https://semanticlookup.zbmed.de/ols/api/",ts4nfdiGateway:!1,hasShortSelectedLabel:!0,allowCustomTerms:!1,singleSelection:!0,placeholder:"Search for a Concept",preselected:[],selectionChangedEvent:()=>{},parameter:"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"}},r={args:{}},n={args:{api:"https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/",ts4nfdiGateway:!0,parameter:"database=ols&fieldList=description,label,iri,ontology_name,type,short_form"}},p={args:{api:"https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/",ts4nfdiGateway:!0,parameter:"database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form"}},d={args:{api:"https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/",ts4nfdiGateway:!0,parameter:"database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form"}},c={args:{singleSuggestionRow:!0}},m={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"}]}},g={args:{allowCustomTerms:!0,preselected:[{label:"freetext"}]}},u={args:{preselected:[{iri:"ht3stp://purl.bioontology.org/ontology/MESH/D000086382"}]}},h={args:{api:"https://semanticlookup.zbmed.de/api/",parameter:"collection=nfdi4health&lang=de&type=class"}},y={args:{api:"https://semanticlookup.zbmed.de/api/",parameter:"fieldList=description,label,iri,ontology_name,type,short_form"}},f={args:{hasShortSelectedLabel:!1}},w={args:{allowCustomTerms:!0}},S={args:{singleSelection:!1}},b={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"},{iri:"http://purl.bioontology.org/ontology/MESH/D003920"}],singleSelection:!1}};let s=0;function i(){return s++}const W={title:"AutocompleteWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=i();return`
<div id="autocomplete_widget_container_${t}"></div>

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
    document.querySelector('#autocomplete_widget_container_${t}')
)
<\/script>
        `},...o,...a},A=["WithDefaults","UseAPIGatewayWithOLS","UseAPIGatewayWithOntoPortal","UseAPIGatewayWithSkosmos","WithDefaultsCompact","WithValue","WithCustomValue","WithInvalidValue","WithMultipleValues","AllowMultipleTerms","AllowAddingCustomTerms","WithGermanInput","DisplaySelectedEntityWithLongForm","WithDescriptionAndShortForm"];export{w as AllowAddingCustomTerms,S as AllowMultipleTerms,f as DisplaySelectedEntityWithLongForm,n as UseAPIGatewayWithOLS,p as UseAPIGatewayWithOntoPortal,d as UseAPIGatewayWithSkosmos,g as WithCustomValue,r as WithDefaults,c as WithDefaultsCompact,y as WithDescriptionAndShortForm,h as WithGermanInput,u as WithInvalidValue,b as WithMultipleValues,m as WithValue,A as __namedExportsOrder,W as default};
