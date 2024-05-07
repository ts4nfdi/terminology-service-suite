import"./semlookp_widgets.min-BLUfpFpL.js";const a={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},parameter:{type:{required:!1}}},o={parameter:"collection=nfdi4health"},p={args:{api:"https://semanticlookup.zbmed.de/api/",parameter:"collection=nfdi4health"}},s={args:{api:"https://semanticlookup.zbmed.de/api/",parameter:"collection=safety"}},d={args:{api:"ht3ps://semanticlookup.zbmed.de/api/",parameter:"collection=safety"}};let n=0;function i(){return n++}const c={title:"DataContentWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=i();return`
<div id="data_content_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createDataContent(
    {
        api:"${t.api}",
        parameter:"${t.parameter}",
    },
    document.querySelector('#data_content_widget_container_${e}')
)
<\/script>
        `},argTypes:a,args:o},l=["NFDI4HealthDataContentWidget","SafetyDataContentWidget","ErrorDataContentWidget"];export{d as ErrorDataContentWidget,p as NFDI4HealthDataContentWidget,s as SafetyDataContentWidget,l as __namedExportsOrder,c as default};
