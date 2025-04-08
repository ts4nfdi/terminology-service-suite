import{x as o,y as i,z as n,J as r}from"./widgetDescriptions-004d52ae.js";import{Z as s}from"./globals-aa5ada23.js";import"./iframe-209c1292.js";import"../sb-preview/runtime.js";const p={...o,...i,...n},a={apiQuery:"",buttonText:"",buttonSize:""},m={args:{apiQuery:s+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"}};let u=0;function c(){return u++}const _={title:"API/JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:r}}},render:t=>{const e=c();return`
<div id="json_api_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createJsonApi(
    {
        apiQuery:"${t.apiQuery}",
        buttonText:"${t.buttonText}",
        buttonSize:"${t.buttonSize}",
    },
    document.querySelector('#json_api_widget_container_${e}')
)
<\/script>
        `},argTypes:p,args:a},T=["JsonApiWidgetDefault"];export{m as JsonApiWidgetDefault,T as __namedExportsOrder,_ as default};
