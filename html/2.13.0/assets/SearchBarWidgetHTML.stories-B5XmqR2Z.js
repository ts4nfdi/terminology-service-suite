import{a as r,s as i,c as n,I as c}from"./storyArgs-BTeOS3u2.js";import{E as o,T as t}from"./globals-BR6EHpzJ.js";import{a as s}from"./chunk-WFFRPTHA-DEDbbGN5.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const p={...r,...i,...n,...c};s("selectionChangedEvent");const d={api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},_={args:{api:o,query:"*"}},E={args:{api:t,parameter:"classification=NFDI4CHEM&schema=collection"}},S={args:{api:t,parameter:"classification=DataPLANT&schema=collection"}};let l=0;function g(){return l++}const f={title:"SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const a=g();return`
<div id="search_bar_widget_container_${a}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchBar(
    {
      api:"${e.api}",
      query:"${e.query}",
      selectionChangedEvent:${e.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${e.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${a}')
)
<\/script>
        `},argTypes:p,args:d},I=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{_ as SearchBarWidgetDefault,S as TibDataPlant,E as TibNFDI4CHEM,I as __namedExportsOrder,f as default};
