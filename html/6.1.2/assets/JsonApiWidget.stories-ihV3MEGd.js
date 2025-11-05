import{Z as u}from"./globals-CvFyH82M.js";import{_ as d,$ as m,a0 as g,Q as y,d as l,f as A,a1 as x}from"./storyArgs-BpO_jkfi.js";import{j as i,c as _}from"./index-Bl-ZOWkZ.js";import{E as f}from"./button-CK2bQL7Z.js";import"./_button-BJbNTClo.js";import"./_button_display-CPgbWuJt.js";import"./icon-u-uytd4V.js";import"./preload-helper-Dp1pzeXC.js";import"./href_validator-Cs1fZ0vS.js";const{expect:T,waitFor:b,within:S}=__STORYBOOK_MODULE_TEST__,W={...g,...m,...d},w={apiQuery:"",buttonText:"",buttonSize:"m"},J={apiQuery:u+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"},j=async({canvasElement:t})=>{const e=S(t);await b(async()=>{const o=e.getByTestId("json-api");await T(o).toBeInTheDocument()},{timeout:3e3})};function Q(t){const{apiQuery:e,buttonText:o,buttonSize:c}=t;return i.jsx(f,{href:e,target:"_blank",size:c||"m","data-testid":"json-api",children:o})}function z(t){const e=new y;return i.jsx(l,{colorMode:"light",children:i.jsx(A,{client:e,children:i.jsx(Q,{apiQuery:t.apiQuery,buttonText:t.buttonText,buttonSize:t.buttonSize})})})}const r=new WeakMap;function E(t,e){let o=r.get(e);o||(o=_.createRoot(e),r.set(e,o)),o.render(i.jsx(z,{...t}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createJsonApi:E};let h=0;function D(){return h++}const k={title:"API/JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:x}}},render:t=>{const e=D();return`
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
        `},argTypes:W,args:w},n={args:J,play:j};var s,a,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: JsonApiWidgetDefaultArgs,
  play: commonJsonApiWidgetPlay
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const q=["JsonApiWidgetDefault"];export{n as JsonApiWidgetDefault,q as __namedExportsOrder,k as default};
