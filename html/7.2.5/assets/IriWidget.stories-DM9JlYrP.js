import{I as _}from"./widgetDescriptions-MmE0nvU9.js";import{c as f,S as A,T as P,U as b,V as W,t as B,R as C}from"./QueryClientProvider-gEbidX2u.js";import"./index-BFNYCbMT.js";import"./client-DFp2fd_t.js";import"./IriWidget-CI7tadqR.js";/* empty css                        */import"./flex_item-B6Jx2XQU.js";import"./link-BiSrVecI.js";import"./href_validator-B8HQpRtP.js";import"./icon-CUQXjhdI.js";import"./preload-helper-Dp1pzeXC.js";import"./screen_reader_only-DlHELPzm.js";import"./link.styles-BOROqduV.js";import"./button_icon-CwGrBGLg.js";import"./_button_display-zi0zBCTG.js";import"./useCombinedRefs-CI08p5vq.js";import"./_button-QYLrXIiF.js";const{expect:S,waitFor:$,within:E}=__STORYBOOK_MODULE_TEST__,N={...C,...B,...W,...b,...P,...A,...f},h={iri:"",color:"text",iriText:"",urlPrefix:"",externalIcon:!0,className:""},O={iri:"http://purl.obolibrary.org/obo/NCIT_C2985"},U={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1},v={...h,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"},D={iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="},s=async({canvasElement:r})=>{const t=E(r);await $(async()=>{const w=t.getByTestId("iri");await S(w).toBeInTheDocument()},{timeout:3e3})};let M=0;function R(){return M++}const or={title:"Entity Metadata/IriWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:_}}},render:r=>{const t=R();return`
<div id="iri_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createIri(
    {
        iri:"${r.iri}",
        iriText:"${r.iriText}",
        color:"${r.color}",
        externalIcon: ${r.externalIcon},
        urlPrefix:"${r.urlPrefix}",
        copyButton:"${r.copyButton}",
        className:"${r.className}",
    },
    document.querySelector('#iri_widget_container_${t}')
)
<\/script>
        `},argTypes:N,args:h},o={args:O,play:s},e={args:U,play:s},i={args:v,play:s},a={args:D,play:s};var n,c,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: IriWidget1Args,
  play: commonIriWidgetPlay
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: withoutExternalIconArgs,
  play: commonIriWidgetPlay
}`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,d,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: withCopyButtonArgs,
  play: commonIriWidgetPlay
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var I,x,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: withUrlPrefixArgs,
  play: commonIriWidgetPlay
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const er=["IriWidget1","withoutExternalIcon","withCopyButton","withUrlPrefix"];export{o as IriWidget1,er as __namedExportsOrder,or as default,i as withCopyButton,a as withUrlPrefix,e as withoutExternalIcon};
