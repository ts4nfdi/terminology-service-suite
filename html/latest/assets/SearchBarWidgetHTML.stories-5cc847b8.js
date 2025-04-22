import{a as r,s as i,c as n,X as c,Y as o}from"./widgetDescriptions-02a1740f.js";import{E as s,T as a}from"./globals-aa5ada23.js";import{a as p}from"./chunk-WFFRPTHA-a68c42c5.js";import"./iframe-d333685b.js";import"../sb-preview/runtime.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const d={...r,...i,...n,...c};p("selectionChangedEvent");const l={api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},f={args:{api:s,query:"*"}},D={args:{api:a,parameter:"classification=NFDI4CHEM&schema=collection"}},B={args:{api:a,parameter:"classification=DataPLANT&schema=collection"}};let g=0;function m(){return g++}const I={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:o}}},render:e=>{const t=m();return`
<div id="search_bar_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createSearchBar(
    {
      api:"${e.api}",
      query:"${e.query}",
      selectionChangedEvent:${e.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${e.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${t}')
)
<\/script>
        `},argTypes:d,args:l},v=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{f as SearchBarWidgetDefault,B as TibDataPlant,D as TibNFDI4CHEM,v as __namedExportsOrder,I as default};
