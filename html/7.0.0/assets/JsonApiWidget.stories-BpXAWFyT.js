import{J as u}from"./widgetDescriptions-MmE0nvU9.js";import{Z as d}from"./globals-Dr4u9m4r.js";import{I as m,J as g,K as l,Q as y,k as A,l as x}from"./QueryClientProvider-wfdc44vj.js";import{j as i,c as f}from"./client-DFp2fd_t.js";import{E as _}from"./button-CoB_Y1Qi.js";import"./_button-CNGnRqyT.js";import"./_button_display-zQuHS8zi.js";import"./href_validator-B8HQpRtP.js";import"./useCombinedRefs-CI08p5vq.js";import"./icon-C9-DwYxQ.js";import"./preload-helper-Dp1pzeXC.js";const{expect:T,waitFor:b,within:J}=__STORYBOOK_MODULE_TEST__,S={...l,...g,...m},W={apiQuery:"",buttonText:"",buttonSize:"m"},w={apiQuery:d+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"},j=async({canvasElement:t})=>{const e=J(t);await b(async()=>{const o=e.getByTestId("json-api");await T(o).toBeInTheDocument()},{timeout:3e3})};function Q(t){const{apiQuery:e,buttonText:o,buttonSize:c}=t;return i.jsx(_,{href:e,target:"_blank",size:c||"m","data-testid":"json-api",children:o})}function z(t){const e=new y;return i.jsx(A,{colorMode:"light",children:i.jsx(x,{client:e,children:i.jsx(Q,{apiQuery:t.apiQuery,buttonText:t.buttonText,buttonSize:t.buttonSize})})})}const r=new WeakMap;function E(t,e){let o=r.get(e);o||(o=f.createRoot(e),r.set(e,o)),o.render(i.jsx(z,{...t}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createJsonApi:E};let h=0;function D(){return h++}const K={title:"API/JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:u}}},render:t=>{const e=D();return`
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
        `},argTypes:S,args:W},n={args:w,play:j};var s,a,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: JsonApiWidgetDefaultArgs,
  play: commonJsonApiWidgetPlay
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const L=["JsonApiWidgetDefault"];export{n as JsonApiWidgetDefault,L as __namedExportsOrder,K as default};
