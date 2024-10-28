import"./ModelTypeCheck--mKOexLc.js";import{a as t}from"./globals-BR6EHpzJ.js";import{a as r,c as n}from"./storyArgs-DmctzxIo.js";const o={...r,...n},i={api:"",parameter:""},m={args:{api:t,parameter:"collection=nfdi4health"}},D={args:{api:t,parameter:"collection=safety"}},l={args:{api:t,parameter:"collection=safety"}};let c=0;function s(){return c++}const y={title:"DataContentWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const a=s();return`
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
        `},argTypes:o,args:i},_=["NFDI4HealthDataContentWidget","SafetyDataContentWidget","ErrorDataContentWidget"];export{l as ErrorDataContentWidget,m as NFDI4HealthDataContentWidget,D as SafetyDataContentWidget,_ as __namedExportsOrder,y as default};
