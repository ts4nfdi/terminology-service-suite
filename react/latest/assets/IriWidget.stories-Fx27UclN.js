import{I as w}from"./OlsEntityApi-BETKMLOd.js";import{I as f}from"./IriWidget-BeiN7KBQ.js";import{c as b,K as W,L as P,M as _,N as B,l as C,J as E}from"./storyArgs-C5yU1EQS.js";import"./iframe-JxYAoN7P.js";import"./preload-helper-Dp1pzeXC.js";import"./flex_item-pQ4biPeJ.js";import"./link-DMDtJpll.js";import"./href_validator-D7EDHidy.js";import"./screen_reader_only-DAKj_sQB.js";import"./icon-CJ8eDxpK.js";import"./link.styles-DrzZg_if.js";import"./button_icon-D-Rn0szV.js";import"./_button_display-CuVcpHyZ.js";import"./useCombinedRefs-Dp0vLSiw.js";import"./_button-YrGQjm8I.js";const{expect:S,waitFor:N,within:O}=__STORYBOOK_MODULE_TEST__,U={...E,...C,...B,..._,...P,...W,...b},h={iri:"",color:"text",iriText:"",urlPrefix:"",externalIcon:!0,className:""},D={iri:"http://purl.obolibrary.org/obo/NCIT_C2985"},M={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1},v={...h,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"},K={iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="},i=async({canvasElement:x})=>{const T=O(x);await N(async()=>{const A=T.getByTestId("iri");await S(A).toBeInTheDocument()},{timeout:3e3})},$={title:"Entity Metadata/IriWidget",component:f,parameters:{layout:"centered",docs:{description:{component:w}}},argTypes:U,args:h},r={args:D,play:i},t={args:M,play:i},o={args:v,play:i},e={args:K,play:i};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: IriWidget1Args,
  play: commonIriWidgetPlay
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: withoutExternalIconArgs,
  play: commonIriWidgetPlay
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,l,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: withCopyButtonArgs,
  play: commonIriWidgetPlay
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var d,u,I;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: withUrlPrefixArgs,
  play: commonIriWidgetPlay
}`,...(I=(u=e.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};const rr=["IriWidget1","withoutExternalIcon","withCopyButton","withUrlPrefix"];export{r as IriWidget1,rr as __namedExportsOrder,$ as default,o as withCopyButton,e as withUrlPrefix,t as withoutExternalIcon};
