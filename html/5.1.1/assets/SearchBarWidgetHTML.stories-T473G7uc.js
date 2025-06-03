import{af as r,p as i,g as n,i as c,ag as o}from"./widgetDescriptions-BJ--BacN.js";import{E as s,T as a}from"./globals-BpbGe8p9.js";import{a as p}from"./chunk-WFFRPTHA-D3Hh4bb5.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./preview-errors-BMTnjymN.js";import"./index-DrFu-skq.js";const d={...c,...n,...i,...r};p("selectionChangedEvent");const g={api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},f={args:{api:s,query:"*"}},D={args:{api:a,parameter:"classification=NFDI4CHEM&schema=collection"}},B={args:{api:a,parameter:"classification=DataPLANT&schema=collection"}};let l=0;function m(){return l++}const I={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:o}}},render:e=>{const t=m();return`
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
        `},argTypes:d,args:g},v=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{f as SearchBarWidgetDefault,B as TibDataPlant,D as TibNFDI4CHEM,v as __namedExportsOrder,I as default};
