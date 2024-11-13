import{a as r,c as n}from"./storyArgs-BTeOS3u2.js";import{a as t}from"./globals-BR6EHpzJ.js";const o={...r,...n},i={api:"",parameter:""},g={args:{api:t,parameter:"collection=nfdi4health"}},m={args:{api:t,parameter:"collection=safety"}},D={args:{api:t,parameter:"collection=safety"}};let c=0;function s(){return c++}const l={title:"DataContentWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const a=s();return`
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
        `},argTypes:o,args:i},y=["NFDI4HealthDataContentWidget","SafetyDataContentWidget","ErrorDataContentWidget"];export{D as ErrorDataContentWidget,g as NFDI4HealthDataContentWidget,m as SafetyDataContentWidget,y as __namedExportsOrder,l as default};
