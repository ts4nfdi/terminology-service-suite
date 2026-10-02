import{c as w,a7 as b,a8 as f,a9 as W,aa as P,n as _,a3 as B,ab as C}from"./storyArgs-C8WfEOzb.js";import{I as E}from"./IriWidget-DmavKNA_.js";import"./iframe-WNDVoFw4.js";import"./preload-helper-Dp1pzeXC.js";import"./flex_item-DT92qc2w.js";import"./loading_spinner-CHRmtmFK.js";import"./link-98f8P-dQ.js";import"./href_validator-DBuifkoO.js";import"./screen_reader_only-DjUyw7ri.js";import"./icon-D23FZOM8.js";import"./link.styles-DP7lWECn.js";import"./button_icon-C1OzsP_x.js";import"./_button_display-D33ja7rg.js";import"./useCombinedRefs-V93axkeX.js";import"./_button-ddmjAGPz.js";const{expect:S,waitFor:O,within:N}=__STORYBOOK_MODULE_TEST__,U={...B,..._,...P,...W,...f,...b,...w},h={iri:"",color:"text",iriText:"",urlPrefix:"",externalIcon:!0,className:""},D={iri:"http://purl.obolibrary.org/obo/NCIT_C2985"},v={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1},M={...h,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"},F={iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="},a=async({canvasElement:x})=>{const T=N(x);await O(async()=>{const A=T.getByTestId("iri");await S(A).toBeInTheDocument()},{timeout:3e3})},$={title:"Entity Metadata/IriWidget",component:E,parameters:{layout:"centered",docs:{description:{component:C}}},argTypes:U,args:h},r={args:D,play:a},t={args:v,play:a},o={args:M,play:a},e={args:F,play:a};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
