import{ad as u,ae as d,af as m,l as g,ag as l}from"./provider-BlV9U33F.js";import{Z as y}from"./globals-1uEo64sR.js";import{j as i,c as A}from"./client-DFp2fd_t.js";import{Q as f,a as x}from"./QueryClientProvider-CVZB0IZw.js";import{E as _}from"./button-DWdOfpVV.js";import"./_button-B_KcUgtw.js";import"./_button_display-B8UjPbhb.js";import"./href_validator-B8HQpRtP.js";import"./useCombinedRefs-Crz01-E9.js";import"./icon-CJNnMZMY.js";import"./preload-helper-Dp1pzeXC.js";const{expect:T,waitFor:b,within:S}=__STORYBOOK_MODULE_TEST__,W={...m,...d,...u},w={apiQuery:"",buttonText:"",buttonSize:"m"},J={apiQuery:y+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"},j=async({canvasElement:t})=>{const e=S(t);await b(async()=>{const o=e.getByTestId("json-api");await T(o).toBeInTheDocument()},{timeout:3e3})};function Q(t){const{apiQuery:e,buttonText:o,buttonSize:c}=t;return i.jsx(_,{href:e,target:"_blank",size:c||"m","data-testid":"json-api",children:o})}function z(t){const e=new f;return i.jsx(g,{colorMode:"light",children:i.jsx(x,{client:e,children:i.jsx(Q,{apiQuery:t.apiQuery,buttonText:t.buttonText,buttonSize:t.buttonSize})})})}const r=new WeakMap;function E(t,e){let o=r.get(e);o||(o=A.createRoot(e),r.set(e,o)),o.render(i.jsx(z,{...t}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createJsonApi:E};let h=0;function D(){return h++}const L={title:"API/JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:l}}},render:t=>{const e=D();return`
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const N=["JsonApiWidgetDefault"];export{n as JsonApiWidgetDefault,N as __namedExportsOrder,L as default};
