import{w as o,x as i,y as n,J as r}from"./widgetDescriptions-0c7687ca.js";import{Z as s}from"./globals-1bcd394d.js";const p={...o,...i,...n},a={apiQuery:"",buttonText:"",buttonSize:""},y={args:{apiQuery:s+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"}};let u=0;function c(){return u++}const A={title:"JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:r}}},render:t=>{const e=c();return`
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
        `},argTypes:p,args:a},_=["JsonApiWidgetDefault"];export{y as JsonApiWidgetDefault,_ as __namedExportsOrder,A as default};
