import{v as o,w as i,x as n}from"./storyArgs-974907cc.js";import{Z as r}from"./globals-1bcd394d.js";const s={...o,...i,...n},a={apiQuery:"",buttonText:"",buttonSize:""},g={args:{apiQuery:r+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"}};let p=0;function u(){return p++}const y={title:"JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=u();return`
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
        `},argTypes:s,args:a},_=["JsonApiWidgetDefault"];export{g as JsonApiWidgetDefault,_ as __namedExportsOrder,y as default};
