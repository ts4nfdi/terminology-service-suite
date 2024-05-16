import"./terminology-service-suite.min-DztwrapV.js";const a={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},query:{},onSearchValueChange:{action:"onSearchValueChange"},parameter:{}},r={parameter:"collection=nfdi4health",onSearchValueChange:()=>{}},c={args:{api:"https://semanticlookup.zbmed.de/api/",query:"diab"}};let o=0;function i(){return o++}const p={title:"SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=i();return`
<div id="search_bar_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchBar(
    {
      api:"${e.api}",
      query:"${e.query}",
      onSearchValueChange:${e.onSearchValueChange.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${e.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${t}')
)
<\/script>
        `},argTypes:a,args:r},s=["SearchBarWidget1"];export{c as SearchBarWidget1,s as __namedExportsOrder,p as default};
