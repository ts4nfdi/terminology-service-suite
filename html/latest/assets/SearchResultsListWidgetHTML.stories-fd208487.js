import{a as s,Z as i,b as o,$ as c,a0 as n,a1 as l,u as p,c as g,a2 as u}from"./widgetDescriptions-085c7c97.js";import{a as t,T as r,E as y}from"./globals-1bcd394d.js";const m={...s,...i,...o,...c,...n,...l,...p,...g},d={api:"",useLegacy:!0,query:"",initialItemsPerPage:10,itemsPerPageOptions:[10,25,50,100],preselected:[],targetLink:"",parameter:"collection=nfdi4health"},f={args:{api:t,query:"d*",targetLink:"",parameter:"collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"}},T={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",preselected:[{label:"diabetes"}],useLegacy:!0}},S={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health"}},I={args:{api:r,parameter:"classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"assay",targetLink:""}},A={args:{api:r,parameter:"classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"agriculture",targetLink:""}},R={args:{api:y,query:"*",targetLink:"/",parameter:"",useLegacy:!1}};let L=0;function h(){return L++}const D={title:"SearchResultsListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:u}}},render:e=>{const a=h();return`
<div id="search_results_list_widget_container_${a}"></div>

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
    document.querySelector('#search_results_list_widget_container_${a}')
)
<\/script>
        `},argTypes:m,args:d},N=["SearchResultsListSafety","SearchResultsListNFDI4Health","ErrorSearchResultsList","TibNFDI4CHEM","TibDataPlant","SearchResultsListOls4"];export{S as ErrorSearchResultsList,T as SearchResultsListNFDI4Health,R as SearchResultsListOls4,f as SearchResultsListSafety,A as TibDataPlant,I as TibNFDI4CHEM,N as __namedExportsOrder,D as default};
