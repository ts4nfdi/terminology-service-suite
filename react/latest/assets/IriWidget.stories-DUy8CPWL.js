import{I as w}from"./IriWidget-DTo5POB8.js";import{a as b,a9 as f,aa as W,ab as P,ac as _,C,a5 as B,ad as E}from"./widgetDescriptions-wzeR7e9S.js";import"./iframe-PNlz-VpA.js";import"./preload-helper-Dp1pzeXC.js";import"./link-CRcq-5-J.js";import"./href_validator-BrIMIKMP.js";import"./icon-BvZXFxCz.js";import"./screen_reader_only--T4pTje4.js";import"./loading_spinner-BcLTIyBp.js";import"./link.styles-CG81dKAP.js";import"./button_icon-Cy1k0izK.js";import"./_button-Bq6rb-mg.js";import"./_button_display-xdnljVY1.js";import"./flex_item-BrmJMUMv.js";const{expect:S,waitFor:O,within:N}=__STORYBOOK_MODULE_TEST__,U={...B,...C,..._,...P,...W,...f,...b},h={iri:"",color:"text",iriText:"",urlPrefix:"",externalIcon:!0,className:""},D={iri:"http://purl.obolibrary.org/obo/NCIT_C2985"},v={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1},M={...h,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"},F={iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="},a=async({canvasElement:x})=>{const T=N(x);await O(async()=>{const A=T.getByTestId("iri");await S(A).toBeInTheDocument()},{timeout:3e3})},Z={title:"Entity Metadata/IriWidget",component:w,parameters:{layout:"centered",docs:{description:{component:E}}},argTypes:U,args:h},r={args:D,play:a},t={args:v,play:a},o={args:M,play:a},e={args:F,play:a};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(I=(u=e.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};const $=["IriWidget1","withoutExternalIcon","withCopyButton","withUrlPrefix"];export{r as IriWidget1,$ as __namedExportsOrder,Z as default,o as withCopyButton,e as withUrlPrefix,t as withoutExternalIcon};
