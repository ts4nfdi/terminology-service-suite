import{a as s,X as i,b as o,Z as c,_ as n,$ as l,u as p,c as g,a0 as u}from"./widgetDescriptions-02a1740f.js";import{Z as t,T as a,E as y}from"./globals-aa5ada23.js";import"./iframe-d333685b.js";import"../sb-preview/runtime.js";const m={...s,...i,...o,...c,...n,...l,...p,...g},d={api:"",useLegacy:!0,query:"",initialItemsPerPage:10,itemsPerPageOptions:[10,25,50,100],preselected:[],targetLink:"",parameter:"collection=nfdi4health"},T={args:{api:t,query:"d*",targetLink:"",parameter:"collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"}},I={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",preselected:[{label:"diabetes"}],useLegacy:!0}},A={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health"}},R={args:{api:a,parameter:"classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"assay",targetLink:""}},D={args:{api:a,parameter:"classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"agriculture",targetLink:""}},b={args:{api:y,query:"*",targetLink:"/",parameter:"",useLegacy:!1}};let L=0;function h(){return L++}const q={title:"Search/SearchResultsListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:u}}},render:e=>{const r=h();return`
<div id="search_results_list_widget_container_${r}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createSearchResultsList(
    {
        api:"${e.api}",
        query:"${e.query}",
        parameter:"${e.parameter}",
        initialItemsPerPage:${e.initialItemsPerPage},
        itemsPerPageOptions:[${e.itemsPerPageOptions}],
        targetLink:"${e.targetLink}",
        useLegacy:"${e.useLegacy}",
    },
    document.querySelector('#search_results_list_widget_container_${r}')
)
<\/script>
        `},argTypes:m,args:d},E=["SearchResultsListSafety","SearchResultsListNFDI4Health","ErrorSearchResultsList","TibNFDI4CHEM","TibDataPlant","SearchResultsListOls4"];export{A as ErrorSearchResultsList,I as SearchResultsListNFDI4Health,b as SearchResultsListOls4,T as SearchResultsListSafety,D as TibDataPlant,R as TibNFDI4CHEM,E as __namedExportsOrder,q as default};
