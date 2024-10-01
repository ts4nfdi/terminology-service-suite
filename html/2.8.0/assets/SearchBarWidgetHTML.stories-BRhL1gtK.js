import"./ModelTypeCheck-CncDrMd5.js";import{E as r,T as a}from"./globals-BR6EHpzJ.js";import{a as i,s as n,c,G as o}from"./storyArgs-C4w3f5_f.js";import{a as s}from"./chunk-WFFRPTHA-DEDbbGN5.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const p={...i,...n,...c,...o};s("selectionChangedEvent");const d={api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},E={args:{api:r,query:"*"}},S={args:{api:a,parameter:"classification=NFDI4CHEM&schema=collection"}},f={args:{api:a,parameter:"classification=DataPLANT&schema=collection"}};let l=0;function g(){return l++}const D={title:"SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=g();return`
<div id="search_bar_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchBar(
    {
      api:"${e.api}",
      query:"${e.query}",
      selectionChangedEvent:${e.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${e.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${t}')
)
<\/script>
        `},argTypes:p,args:d},I=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{E as SearchBarWidgetDefault,f as TibDataPlant,S as TibNFDI4CHEM,I as __namedExportsOrder,D as default};
