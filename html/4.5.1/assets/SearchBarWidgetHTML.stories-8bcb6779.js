import{a as r,s as i,c as n,X as c,Y as o}from"./widgetDescriptions-4d80f158.js";import{E as s,T as t}from"./globals-aa5ada23.js";import{a as p}from"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const d={...r,...i,...n,...c};p("selectionChangedEvent");const l={api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},E={args:{api:s,query:"*"}},S={args:{api:t,parameter:"classification=NFDI4CHEM&schema=collection"}},f={args:{api:t,parameter:"classification=DataPLANT&schema=collection"}};let g=0;function m(){return g++}const D={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:o}}},render:e=>{const a=m();return`
<div id="search_bar_widget_container_${a}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createSearchBar(
    {
      api:"${e.api}",
      query:"${e.query}",
      selectionChangedEvent:${e.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${e.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${a}')
)
<\/script>
        `},argTypes:d,args:l},B=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{E as SearchBarWidgetDefault,f as TibDataPlant,S as TibNFDI4CHEM,B as __namedExportsOrder,D as default};
