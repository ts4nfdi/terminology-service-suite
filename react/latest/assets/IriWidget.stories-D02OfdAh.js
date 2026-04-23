import{c as w,_ as W,$ as b,a0 as f,a1 as _,m as P,W as B,a2 as C}from"./storyArgs-BLji0fG_.js";import{I as E}from"./IriWidget-CEx3nTSK.js";import"./iframe-Be5Gc5K7.js";import"./preload-helper-Dp1pzeXC.js";import"./flex_item-Cserjoes.js";import"./link-GCPBLWHF.js";import"./href_validator-DC90fTdA.js";import"./icon-C5RoQ9is.js";import"./screen_reader_only-C4zQauMA.js";import"./loading_spinner-C2IIhdcY.js";import"./link.styles-Bi9Df_97.js";import"./button_icon-C3wQkJ1v.js";import"./_button-DGHPJ_n6.js";import"./_button_display-CoZ_lYX9.js";const{expect:S,waitFor:O,within:N}=__STORYBOOK_MODULE_TEST__,U={...B,...P,..._,...f,...b,...W,...w},h={iri:"",color:"text",iriText:"",urlPrefix:"",externalIcon:!0,className:""},D={iri:"http://purl.obolibrary.org/obo/NCIT_C2985"},v={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1},M={...h,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"},F={iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="},i=async({canvasElement:x})=>{const T=N(x);await O(async()=>{const A=T.getByTestId("iri");await S(A).toBeInTheDocument()},{timeout:3e3})},X={title:"Entity Metadata/IriWidget",component:E,parameters:{layout:"centered",docs:{description:{component:C}}},argTypes:U,args:h},r={args:D,play:i},t={args:v,play:i},o={args:M,play:i},e={args:F,play:i};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(I=(u=e.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};const Z=["IriWidget1","withoutExternalIcon","withCopyButton","withUrlPrefix"];export{r as IriWidget1,Z as __namedExportsOrder,X as default,o as withCopyButton,e as withUrlPrefix,t as withoutExternalIcon};
