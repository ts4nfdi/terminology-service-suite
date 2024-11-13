import{a as s,I as i,b as o,J as c,K as l,L as n,u as p,c as g}from"./storyArgs-BTeOS3u2.js";import{a as t,T as r,E as u}from"./globals-BR6EHpzJ.js";const y={...s,...i,...o,...c,...l,...n,...p,...g},m={api:"",useLegacy:!0,query:"",initialItemsPerPage:10,itemsPerPageOptions:[10,25,50,100],preselected:[],targetLink:"",parameter:"collection=nfdi4health"},P={args:{api:t,query:"d*",targetLink:"",parameter:"collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"}},f={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",preselected:[{label:"diabetes"}],useLegacy:!0}},T={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health"}},I={args:{api:r,parameter:"classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"assay",targetLink:""}},S={args:{api:r,parameter:"classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"agriculture",targetLink:""}},A={args:{api:u,query:"*",targetLink:"/",parameter:"",useLegacy:!1}};let L=0;function d(){return L++}const N={title:"SearchResultsListWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const a=d();return`
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
        `},argTypes:y,args:m},R=["SearchResultsListSafety","SearchResultsListNFDI4Health","ErrorSearchResultsList","TibNFDI4CHEM","TibDataPlant","SearchResultsListOls4"];export{T as ErrorSearchResultsList,f as SearchResultsListNFDI4Health,A as SearchResultsListOls4,P as SearchResultsListSafety,S as TibDataPlant,I as TibNFDI4CHEM,R as __namedExportsOrder,N as default};
