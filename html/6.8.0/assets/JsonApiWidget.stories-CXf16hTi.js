import{$ as u,a0 as d,a1 as m,Q as g,k as l,l as y,a2 as A}from"./QueryClientProvider-Cv6DMAwY.js";import{Z as x}from"./globals-BQAFDkgj.js";import{j as i,c as _}from"./client-hNkKQuBU.js";import{E as f}from"./button-Dca_e4tp.js";import"./_button-DR0DDSYL.js";import"./_button_display-mhn372ul.js";import"./icon-Dbgqo2NT.js";import"./preload-helper-Dp1pzeXC.js";import"./href_validator-RjdtbSlK.js";const{expect:T,waitFor:b,within:S}=__STORYBOOK_MODULE_TEST__,W={...m,...d,...u},w={apiQuery:"",buttonText:"",buttonSize:"m"},J={apiQuery:x+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"},j=async({canvasElement:t})=>{const e=S(t);await b(async()=>{const o=e.getByTestId("json-api");await T(o).toBeInTheDocument()},{timeout:3e3})};function Q(t){const{apiQuery:e,buttonText:o,buttonSize:c}=t;return i.jsx(f,{href:e,target:"_blank",size:c||"m","data-testid":"json-api",children:o})}function z(t){const e=new g;return i.jsx(l,{colorMode:"light",children:i.jsx(y,{client:e,children:i.jsx(Q,{apiQuery:t.apiQuery,buttonText:t.buttonText,buttonSize:t.buttonSize})})})}const r=new WeakMap;function E(t,e){let o=r.get(e);o||(o=_.createRoot(e),r.set(e,o)),o.render(i.jsx(z,{...t}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createJsonApi:E};let h=0;function D(){return h++}const R={title:"API/JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:A}}},render:t=>{const e=D();return`
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const q=["JsonApiWidgetDefault"];export{n as JsonApiWidgetDefault,q as __namedExportsOrder,R as default};
