import{p as s,u as i,am as o,an as c,ao as n,e as l,ak as p,i as g,ap as u}from"./widgetDescriptions-DoY7HRjj.js";import{Z as t,T as r,E as y}from"./globals-CvFyH82M.js";const d={...g,...p,...l,...n,...c,...o,...i,...s},m={api:"",useLegacy:!0,query:"",initialItemsPerPage:10,itemsPerPageOptions:[10,25,50,100],preselected:[],targetLink:"",parameter:"collection=nfdi4health"},f={args:{api:t,query:"d*",targetLink:"",parameter:"collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"}},S={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",preselected:[{label:"diabetes"}],useLegacy:!0}},T={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health"}},I={args:{api:r,parameter:"classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"assay",targetLink:""}},A={args:{api:r,parameter:"classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"agriculture",targetLink:""}},R={args:{api:y,query:"*",targetLink:"/",parameter:"",useLegacy:!1}};let L=0;function h(){return L++}const D={title:"Search/SearchResultsListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:u}}},render:e=>{const a=h();return`
<div id="search_results_list_widget_container_${a}"></div>

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
    document.querySelector('#search_results_list_widget_container_${a}')
)
<\/script>
        `},argTypes:d,args:m},k=["SearchResultsListSafety","SearchResultsListNFDI4Health","ErrorSearchResultsList","TibNFDI4CHEM","TibDataPlant","SearchResultsListOls4"];export{T as ErrorSearchResultsList,S as SearchResultsListNFDI4Health,R as SearchResultsListOls4,f as SearchResultsListSafety,A as TibDataPlant,I as TibNFDI4CHEM,k as __namedExportsOrder,D as default};
