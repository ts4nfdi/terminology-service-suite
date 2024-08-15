import"./terminology-service-suite.min-BQo91ZY4.js";const o={argTypes:{api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},selectionChangedEvent:{action:"selectionChangedEvent"},placeholder:{},preselected:{},parameter:{},hasShortSelectedLabel:{required:!1},allowCustomTerms:{required:!1},singleSelection:{required:!1},singleSuggestionRow:{required:!1}}},l={args:{api:"https://semanticlookup.zbmed.de/ols/api/",parameter:"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",hasShortSelectedLabel:!0,allowCustomTerms:!1,singleSelection:!0,placeholder:"Search for a Concept",preselected:[],selectionChangedEvent:()=>{}}},a={args:{}},n={args:{singleSuggestionRow:!0}},c={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"}]}},p={args:{allowCustomTerms:!0,preselected:[{label:"freetext"}]}},d={args:{preselected:[{iri:"ht3stp://purl.bioontology.org/ontology/MESH/D000086382"}]}},u={args:{api:"https://semanticlookup.zbmed.de/api/",parameter:"collection=nfdi4health&lang=de&type=class"}},m={args:{api:"https://semanticlookup.zbmed.de/api/",parameter:"fieldList=description,label,iri,ontology_name,type,short_form"}},g={args:{hasShortSelectedLabel:!1}},h={args:{allowCustomTerms:!0}},S={args:{singleSelection:!1}},y={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"},{iri:"http://purl.bioontology.org/ontology/MESH/D003920"}],singleSelection:!1}};let i=0;function s(){return i++}const f={title:"AutocompleteWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=s();return`
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
        singleSuggestionRow:${e.singleSuggestionRow},
    },
    document.querySelector('#autocomplete_widget_container_${t}')
)
<\/script>
        `},...o,...l},W=["WithDefaults","WithDefaultsCompact","WithValue","WithCustomValue","WithInvalidValue","WithMultipleValues","AllowMultipleTerms","AllowAddingCustomTerms","WithGermanInput","DisplaySelectedEntityWithLongForm","WithDescriptionAndShortForm"];export{h as AllowAddingCustomTerms,S as AllowMultipleTerms,g as DisplaySelectedEntityWithLongForm,p as WithCustomValue,a as WithDefaults,n as WithDefaultsCompact,m as WithDescriptionAndShortForm,u as WithGermanInput,d as WithInvalidValue,y as WithMultipleValues,c as WithValue,W as __namedExportsOrder,f as default};
