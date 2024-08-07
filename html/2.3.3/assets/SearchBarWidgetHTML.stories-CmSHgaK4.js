import"./terminology-service-suite.min-BLNVgPF1.js";const a={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},query:{},onSearchValueChange:{action:"onSearchValueChange"},selectionChangedEvent:{action:"selectionChangedEvent"},parameter:{}},r={parameter:"collection=nfdi4health",onSearchValueChange:()=>{}},o={args:{api:"https://www.ebi.ac.uk/ols4/api/",query:"*"}},s={args:{api:"https://service.tib.eu/ts4tib/api/",parameter:"classification=NFDI4CHEM&schema=collection"}},p={args:{api:"https://service.tib.eu/ts4tib/api/",parameter:"classification=DataPLANT&schema=collection"}};let i=0;function n(){return i++}const l={title:"SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=n();return`
<div id="search_bar_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchBar(
    {
      api:"${e.api}",
      query:"${e.query}",
      onSearchValueChange:${e.onSearchValueChange.toString().replace(/(\r\n|\n|\r)/gm,"")},
      selectionChangedEvent:${e.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${e.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${t}')
)
<\/script>
        `},argTypes:a,args:r},h=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{o as SearchBarWidgetDefault,p as TibDataPlant,s as TibNFDI4CHEM,h as __namedExportsOrder,l as default};
