import{a as n,c as r,D as o}from"./widgetDescriptions-40b8e8cc.js";import{a as t}from"./globals-1bcd394d.js";const i={...n,...r},c={api:"",parameter:""},m={args:{api:t,parameter:"collection=nfdi4health"}},D={args:{api:t,parameter:"collection=safety"}},l={args:{api:t,parameter:"collection=safety"}};let s=0;function p(){return s++}const y={title:"DataContentWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:o}}},render:e=>{const a=p();return`
<div id="data_content_widget_container_${a}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createDataContent(
    {
        api:"${e.api}",
        parameter:"${e.parameter}",
    },
    document.querySelector('#data_content_widget_container_${a}')
)
<\/script>
        `},argTypes:i,args:c},_=["NFDI4HealthDataContentWidget","SafetyDataContentWidget","ErrorDataContentWidget"];export{l as ErrorDataContentWidget,m as NFDI4HealthDataContentWidget,D as SafetyDataContentWidget,_ as __namedExportsOrder,y as default};
