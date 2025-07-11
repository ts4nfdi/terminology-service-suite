import{ak as r,p as i,g as n,i as c,al as o}from"./widgetDescriptions-DoY7HRjj.js";import{E as s,T as t}from"./globals-CvFyH82M.js";import{a as p}from"./chunk-WFFRPTHA-D3Hh4bb5.js";import"./preview-errors-BMTnjymN.js";import"./index-DrFu-skq.js";const d={...c,...n,...i,...r};p("selectionChangedEvent");const g={api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},E={args:{api:s,query:"*"}},S={args:{api:t,parameter:"classification=NFDI4CHEM&schema=collection"}},f={args:{api:t,parameter:"classification=DataPLANT&schema=collection"}};let l=0;function m(){return l++}const D={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:o}}},render:e=>{const a=m();return`
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
        `},argTypes:d,args:g},B=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{E as SearchBarWidgetDefault,f as TibDataPlant,S as TibNFDI4CHEM,B as __namedExportsOrder,D as default};
