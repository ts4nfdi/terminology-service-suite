import"./semlookp_widgets.min-CNyORsB-.js";const o={argTypes:{api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/"]},selectionChangedEvent:{action:"selectionChangedEvent"},placeholder:{},preselected:{},parameter:{},hasShortSelectedLabel:{required:!1},allowCustomTerms:{required:!1},singleSelection:{required:!1}}},l={args:{api:"https://semanticlookup.zbmed.de/ols/api/",parameter:"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",hasShortSelectedLabel:!0,allowCustomTerms:!1,singleSelection:!0,placeholder:"Search for a Concept",preselected:[],selectionChangedEvent:()=>{}}},a={args:{}},n={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"}]}},c={args:{allowCustomTerms:!0,preselected:[{label:"freetext"}]}},p={args:{preselected:[{iri:"ht3stp://purl.bioontology.org/ontology/MESH/D000086382"}]}},d={args:{api:"https://semanticlookup.zbmed.de/api/",parameter:"collection=nfdi4health&lang=de&type=class"}},m={args:{api:"https://semanticlookup.zbmed.de/api/",parameter:"fieldList=description,label,iri,ontology_name,type,short_form"}},u={args:{hasShortSelectedLabel:!1}},h={args:{allowCustomTerms:!0}},g={args:{singleSelection:!1}},S={args:{preselected:[{iri:"http://purl.bioontology.org/ontology/MESH/D000086382"},{iri:"http://purl.bioontology.org/ontology/MESH/D003920"}],singleSelection:!1}};let r=0;function i(){return r++}const y={title:"AutocompleteWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=i();return`
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
    },
    document.querySelector('#autocomplete_widget_container_${t}')
)
<\/script>
        `},...o,...l},f=["WithDefaults","WithValue","WithCustomValue","WithInvalidValue","WithMultipleValues","AllowMultipleTerms","AllowAddingCustomTerms","WithGermanInput","DisplaySelectedEntityWithLongForm","WithDescriptionAndShortForm"];export{h as AllowAddingCustomTerms,g as AllowMultipleTerms,u as DisplaySelectedEntityWithLongForm,c as WithCustomValue,a as WithDefaults,m as WithDescriptionAndShortForm,d as WithGermanInput,p as WithInvalidValue,S as WithMultipleValues,n as WithValue,f as __namedExportsOrder,y as default};
