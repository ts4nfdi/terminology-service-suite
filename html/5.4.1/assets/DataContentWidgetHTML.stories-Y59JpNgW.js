import{p as r,i as n,D as o}from"./widgetDescriptions-BMWeeRAp.js";import{Z as t}from"./globals-CvFyH82M.js";import"./index-B8jAVDKA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={...n,...r},s={api:"",parameter:""},l={args:{api:t,parameter:"collection=nfdi4health"}},y={args:{api:t,parameter:"collection=safety"}},_={args:{api:t,parameter:"collection=safety"}};let c=0;function p(){return c++}const C={title:"Terminology Service/DataContentWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:o}}},render:e=>{const a=p();return`
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
        `},argTypes:i,args:s},u=["NFDI4HealthDataContentWidget","SafetyDataContentWidget","ErrorDataContentWidget"];export{_ as ErrorDataContentWidget,l as NFDI4HealthDataContentWidget,y as SafetyDataContentWidget,u as __namedExportsOrder,C as default};
