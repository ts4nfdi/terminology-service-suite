import"./ModelTypeCheck-CncDrMd5.js";import{a as t,T as r,E as s}from"./globals-BR6EHpzJ.js";import{a as i,G as o,b as c,H as l,I as n,J as p,u as g,c as u}from"./storyArgs-C4w3f5_f.js";const y={...i,...o,...c,...l,...n,...p,...g,...u},m={api:"",useLegacy:!0,query:"",initialItemsPerPage:10,itemsPerPageOptions:[10,25,50,100],preselected:[],targetLink:"",parameter:"collection=nfdi4health"},f={args:{api:t,query:"d*",targetLink:"",parameter:"collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"}},T={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",preselected:[{label:"diabetes"}],useLegacy:!0}},I={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health"}},S={args:{api:r,parameter:"classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"assay",targetLink:""}},A={args:{api:r,parameter:"classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"agriculture",targetLink:""}},N={args:{api:s,query:"*",targetLink:"/",parameter:"",useLegacy:!1}};let d=0;function L(){return d++}const R={title:"SearchResultsListWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const a=L();return`
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
        `},argTypes:y,args:m},D=["SearchResultsListSafety","SearchResultsListNFDI4Health","ErrorSearchResultsList","TibNFDI4CHEM","TibDataPlant","SearchResultsListOls4"];export{I as ErrorSearchResultsList,T as SearchResultsListNFDI4Health,N as SearchResultsListOls4,f as SearchResultsListSafety,A as TibDataPlant,S as TibNFDI4CHEM,D as __namedExportsOrder,R as default};
