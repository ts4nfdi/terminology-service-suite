import{p as s,u as i,ah as o,ai as c,aj as n,e as l,af as p,i as g,ak as u}from"./widgetDescriptions-Bq4r40e3.js";import{Z as t,T as r,E as y}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m={...g,...p,...l,...n,...c,...o,...i,...s},d={api:"",useLegacy:!0,query:"",initialItemsPerPage:10,itemsPerPageOptions:[10,25,50,100],preselected:[],targetLink:"",parameter:"collection=nfdi4health"},T={args:{api:t,query:"d*",targetLink:"",parameter:"collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"}},I={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",preselected:[{label:"diabetes"}],useLegacy:!0}},A={args:{api:t,query:"d*",targetLink:"",parameter:"collection=nfdi4health"}},R={args:{api:r,parameter:"classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"assay",targetLink:""}},D={args:{api:r,parameter:"classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",query:"agriculture",targetLink:""}},k={args:{api:y,query:"*",targetLink:"/",parameter:"",useLegacy:!1}};let L=0;function h(){return L++}const q={title:"Search/SearchResultsListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:u}}},render:e=>{const a=h();return`
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
        `},argTypes:m,args:d},E=["SearchResultsListSafety","SearchResultsListNFDI4Health","ErrorSearchResultsList","TibNFDI4CHEM","TibDataPlant","SearchResultsListOls4"];export{A as ErrorSearchResultsList,I as SearchResultsListNFDI4Health,k as SearchResultsListOls4,T as SearchResultsListSafety,D as TibDataPlant,R as TibNFDI4CHEM,E as __namedExportsOrder,q as default};
