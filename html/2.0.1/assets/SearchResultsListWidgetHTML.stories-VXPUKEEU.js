import"./semlookp_widgets.min-KiVJZQiA.js";const s={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},query:{},initialItemsPerPage:{control:"number"},itemsPerPageOptions:{control:"array"},targetLink:{},parameter:{type:{required:!1}}},r={parameter:"collection=nfdi4health",initialItemsPerPage:10,itemsPerPageOptions:[10,25,50,100]},n={args:{api:"https://semanticlookup.zbmed.de/api/",query:"d*",targetLink:"",parameter:"collection=safety"}},c={args:{api:"https://semanticlookup.zbmed.de/api/",query:"d*",targetLink:"",parameter:"collection=nfdi4health",preselected:[{label:"diabetes"}]}},l={args:{api:"ht3ps://semanticlookup.zbmed.de/api/",query:"d*",targetLink:"",parameter:"collection=nfdi4health"}};let i=0;function a(){return i++}const p={title:"SearchResultsListWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=a();return`
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
    },
    document.querySelector('#search_results_list_widget_container_${t}')
)
<\/script>
        `},argTypes:s,args:r},u=["SearchResultsListSafety","SearchResultsListNFDI4Health","ErrorSearchResultsList"];export{l as ErrorSearchResultsList,c as SearchResultsListNFDI4Health,n as SearchResultsListSafety,u as __namedExportsOrder,p as default};
