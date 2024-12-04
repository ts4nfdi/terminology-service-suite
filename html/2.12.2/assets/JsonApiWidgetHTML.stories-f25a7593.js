import"./ModelTypeCheck-dd77ad34.js";import{Z as o}from"./globals-1bcd394d.js";import{v as i,w as n,x as r}from"./storyArgs-fba56807.js";const s={...i,...n,...r},p={apiQuery:"",buttonText:"",buttonSize:""},y={args:{apiQuery:o+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"}};let a=0;function u(){return a++}const _={title:"JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=u();return`
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
        `},argTypes:s,args:p},A=["JsonApiWidgetDefault"];export{y as JsonApiWidgetDefault,A as __namedExportsOrder,_ as default};
