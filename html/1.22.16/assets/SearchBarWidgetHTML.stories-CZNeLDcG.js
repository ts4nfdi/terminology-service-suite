import"./semlookp_widgets.min-BJPtwCpy.js";const r={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/"]},query:{},onSearchValueChange:{action:"onSearchValueChange"},parameter:{}},t={parameter:"collection=nfdi4health",onSearchValueChange:()=>{}},i={args:{api:"https://semanticlookup.zbmed.de/api/",query:"diab"}};let o=0;function n(){return o++}const p={title:"SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const a=n();return`
<div id="search_bar_widget_container_${a}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchBar(
    {
      api:"${e.api}",
      query:"${e.query}",
      onSearchValueChange:${e.onSearchValueChange.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${e.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${a}')
)
<\/script>
        `},argTypes:r,args:t},s=["SearchBarWidget1"];export{i as SearchBarWidget1,s as __namedExportsOrder,p as default};
