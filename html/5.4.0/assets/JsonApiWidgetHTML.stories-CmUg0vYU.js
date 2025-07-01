import{x as o,y as i,z as n,J as r}from"./widgetDescriptions-Bq4r40e3.js";import{Z as s}from"./globals-BpbGe8p9.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const p={...n,...i,...o},a={apiQuery:"",buttonText:"",buttonSize:""},m={args:{apiQuery:s+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"}};let u=0;function c(){return u++}const _={title:"API/JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:r}}},render:t=>{const e=c();return`
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
