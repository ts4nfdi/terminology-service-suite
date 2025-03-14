import{a as n,c as r,D as o}from"./widgetDescriptions-ae56023b.js";import{Z as t}from"./globals-aa5ada23.js";const i={...n,...r},c={api:"",parameter:""},m={args:{api:t,parameter:"collection=nfdi4health"}},D={args:{api:t,parameter:"collection=safety"}},l={args:{api:t,parameter:"collection=safety"}};let s=0;function d(){return s++}const y={title:"Terminology Service/DataContentWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:o}}},render:e=>{const a=d();return`
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
        `},argTypes:i,args:c},_=["NFDI4HealthDataContentWidget","SafetyDataContentWidget","ErrorDataContentWidget"];export{l as ErrorDataContentWidget,m as NFDI4HealthDataContentWidget,D as SafetyDataContentWidget,_ as __namedExportsOrder,y as default};
