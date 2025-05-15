import{p as n,i as r,D as o}from"./widgetDescriptions-erLppZpy.js";import{Z as t}from"./globals-BpbGe8p9.js";const i={...r,...n},s={api:"",parameter:""},m={args:{api:t,parameter:"collection=nfdi4health"}},D={args:{api:t,parameter:"collection=safety"}},l={args:{api:t,parameter:"collection=safety"}};let c=0;function p(){return c++}const y={title:"Terminology Service/DataContentWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:o}}},render:e=>{const a=p();return`
<div id="data_content_widget_container_${a}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDataContent(
    {
        api:"${e.api}",
        parameter:"${e.parameter}",
    },
    document.querySelector('#data_content_widget_container_${a}')
)
<\/script>
        `},argTypes:i,args:s},_=["NFDI4HealthDataContentWidget","SafetyDataContentWidget","ErrorDataContentWidget"];export{l as ErrorDataContentWidget,m as NFDI4HealthDataContentWidget,D as SafetyDataContentWidget,_ as __namedExportsOrder,y as default};
