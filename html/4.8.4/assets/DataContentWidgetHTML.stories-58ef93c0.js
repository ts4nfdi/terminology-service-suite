import{a as r,c as n,D as o}from"./widgetDescriptions-004d52ae.js";import{Z as t}from"./globals-aa5ada23.js";import"./iframe-209c1292.js";import"../sb-preview/runtime.js";const i={...r,...n},c={api:"",parameter:""},l={args:{api:t,parameter:"collection=nfdi4health"}},y={args:{api:t,parameter:"collection=safety"}},_={args:{api:t,parameter:"collection=safety"}};let s=0;function p(){return s++}const C={title:"Terminology Service/DataContentWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:o}}},render:e=>{const a=p();return`
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
        `},argTypes:i,args:c},u=["NFDI4HealthDataContentWidget","SafetyDataContentWidget","ErrorDataContentWidget"];export{_ as ErrorDataContentWidget,l as NFDI4HealthDataContentWidget,y as SafetyDataContentWidget,u as __namedExportsOrder,C as default};
