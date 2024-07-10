import"./terminology-service-suite.min-BCx-WkVK.js";const i={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},query:{},initialItemsPerPage:{control:"number"},itemsPerPageOptions:{control:"array"},targetLink:{},parameter:{type:{required:!1}},useLegacy:{type:{required:!1}}},a={parameter:"collection=nfdi4health",initialItemsPerPage:10,itemsPerPageOptions:[10,25,50,100]},l={args:{api:"https://semanticlookup.zbmed.de/api/",query:"d*",targetLink:"",parameter:"collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"}},c={args:{api:"https://semanticlookup.zbmed.de/api/",query:"d*",targetLink:"",parameter:"collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",preselected:[{label:"diabetes"}],useLegacy:!0}},n={args:{api:"ht3ps://semanticlookup.zbmed.de/api/",query:"d*",targetLink:"",parameter:"collection=nfdi4health"}},p={args:{api:"https://service.tib.eu/ts4tib/api/",parameter:"classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"assay",targetLink:""}},u={args:{api:"https://service.tib.eu/ts4tib/api/",parameter:"classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"agriculture",targetLink:""}},d={args:{api:"https://www.ebi.ac.uk/ols4/api/",query:"*",targetLink:"/",parameter:"",useLegacy:!1}};let s=0;function r(){return s++}const m={title:"SearchResultsListWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=r();return`
<div id="search_results_list_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchResultsList(
    {
        api:"${e.api}",
        query:"${e.query}",
        parameter:"${e.parameter}",
        initialItemsPerPage:${e.initialItemsPerPage},
        itemsPerPageOptions:[${e.itemsPerPageOptions}],
        targetLink:"${e.targetLink}",
        useLegacy:"${e.useLegacy}",
    },
    document.querySelector('#search_results_list_widget_container_${t}')
)
<\/script>
        `},argTypes:i,args:a},g=["SearchResultsListSafety","SearchResultsListNFDI4Health","ErrorSearchResultsList","TibNFDI4CHEM","TibDataPlant","SearchResultsListOls4"];export{n as ErrorSearchResultsList,c as SearchResultsListNFDI4Health,d as SearchResultsListOls4,l as SearchResultsListSafety,u as TibDataPlant,p as TibNFDI4CHEM,g as __namedExportsOrder,m as default};
