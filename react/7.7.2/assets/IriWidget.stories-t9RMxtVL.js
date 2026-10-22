import{c as w,a8 as b,a9 as f,aa as W,ab as P,q as _,a4 as B,ac as C}from"./storyArgs-DUK7Dmv-.js";import{I as E}from"./IriWidget-DD8voXKx.js";import"./iframe-WPgVEhzH.js";import"./preload-helper-Dp1pzeXC.js";import"./flex_item-BCCizxqD.js";import"./loading_spinner-BJOcsxx2.js";import"./link-29o2gVJ-.js";import"./href_validator-DviA79Mc.js";import"./screen_reader_only-5fGB285D.js";import"./icon-BVzkvaIZ.js";import"./link.styles-Czq83h68.js";import"./button_icon-B8L3XDLC.js";import"./_button_display-D03kr6EW.js";import"./useCombinedRefs-ci-61FQF.js";import"./_button-DBGwAeWx.js";const{expect:S,waitFor:O,within:N}=__STORYBOOK_MODULE_TEST__,U={...B,..._,...P,...W,...f,...b,...w},h={iri:"",color:"text",iriText:"",urlPrefix:"",externalIcon:!0,className:""},D={iri:"http://purl.obolibrary.org/obo/NCIT_C2985"},v={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1},M={...h,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"},q={iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="},a=async({canvasElement:x})=>{const T=N(x);await O(async()=>{const A=T.getByTestId("iri");await S(A).toBeInTheDocument()},{timeout:3e3})},$={title:"Entity Metadata/IriWidget",component:E,parameters:{layout:"centered",docs:{description:{component:C}}},argTypes:U,args:h},r={args:D,play:a},t={args:v,play:a},o={args:M,play:a},e={args:q,play:a};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
