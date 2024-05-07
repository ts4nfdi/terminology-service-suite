import"./semlookp_widgets.min-BLUfpFpL.js";const o={apiQuery:{},buttonText:{},buttonSize:{table:{type:{summary:"s | m"}},control:{type:"radio"},options:["s","m"]}},i={},p={args:{apiQuery:"https://semanticlookup.zbmed.de/ols/api/ontologies/atc",buttonText:"show JSON",buttonSize:"m"}};let n=0;function s(){return n++}const a={title:"JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=s();return`
<div id="json_api_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createJsonApi(
    {
        apiQuery:"${t.apiQuery}",
        buttonText:"${t.buttonText}",
        buttonSize:"${t.buttonSize}",
    },
    document.querySelector('#json_api_widget_container_${e}')
)
<\/script>
        `},argTypes:o,args:i},u=["JsonApiWidget1"];export{p as JsonApiWidget1,u as __namedExportsOrder,a as default};
