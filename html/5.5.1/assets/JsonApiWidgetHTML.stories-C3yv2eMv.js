import{x as o,y as i,z as n,J as r}from"./widgetDescriptions-B7pb6xKo.js";import{Z as s}from"./globals-CvFyH82M.js";const p={...n,...i,...o},a={apiQuery:"",buttonText:"",buttonSize:""},y={args:{apiQuery:s+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"}};let u=0;function c(){return u++}const A={title:"API/JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:r}}},render:t=>{const e=c();return`
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
        `},argTypes:p,args:a},_=["JsonApiWidgetDefault"];export{y as JsonApiWidgetDefault,_ as __namedExportsOrder,A as default};
