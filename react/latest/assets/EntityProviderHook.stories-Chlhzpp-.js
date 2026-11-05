import{j as i}from"./iframe-CKGUncwj.js";import{F as b}from"./storyArgs-DfYfoIrb.js";import{E as j,a as k,d as H,e as h,n as D,o as O,u as T}from"./useEntityProvider-DhTwU_v9.js";import"./preload-helper-Dp1pzeXC.js";import"./globals-1uEo64sR.js";function _(E){const{provider:S,providers:f,isLoading:a,isSuccess:x,isError:F,error:t}=T(E);return i.jsx("div",{"data-testid":"entity-provider","data-loading":String(a),children:i.jsx("pre",{style:{margin:0},children:JSON.stringify({isLoading:a,isSuccess:x,isError:F,error:t==null?void 0:t.message,provider:S,providers:f},null,2)})})}const N={title:"API Gateway/EntityProviderHook",component:_,parameters:{layout:"centered",docs:{description:{component:b}}},argTypes:k,args:j},r={args:h},o={args:O},e={args:D},s={args:H};var n,d,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: entityProviderArgs
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,g,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: ontologyProviderArgs
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,y,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: notFoundArgs
}`,...(l=(y=e.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};var v,P,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: disabledArgs
}`,...(A=(P=s.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const R=["entityProvider","ontologyProvider","notFound","disabled"];export{R as __namedExportsOrder,N as default,s as disabled,r as entityProvider,e as notFound,o as ontologyProvider};
