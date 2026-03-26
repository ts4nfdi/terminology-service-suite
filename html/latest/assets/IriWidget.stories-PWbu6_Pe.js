import{c as _,a1 as A,a2 as f,a3 as P,a4 as b,u as W,Z as B,a5 as C}from"./QueryClientProvider-CPt-q_PP.js";import"./index-CoO1hej3.js";import"./client-hNkKQuBU.js";import"./IriWidget-Hw3dTiXh.js";/* empty css                        */import"./flex_item-DWAFqmiO.js";import"./link-Byz80zpL.js";import"./href_validator-RjdtbSlK.js";import"./icon-CdMdMJ2_.js";import"./preload-helper-Dp1pzeXC.js";import"./screen_reader_only-CqfKrB6u.js";import"./link.styles-Dyy2Pwtk.js";import"./button_icon-d4c6NFhO.js";import"./_button-DJSF0-jH.js";import"./_button_display-B_kUF9Du.js";const{expect:S,waitFor:$,within:E}=__STORYBOOK_MODULE_TEST__,N={...B,...W,...b,...P,...f,...A,..._},h={iri:"",color:"text",iriText:"",urlPrefix:"",externalIcon:!0,className:""},O={iri:"http://purl.obolibrary.org/obo/NCIT_C2985"},v={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1},U={...h,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"},D={iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="},s=async({canvasElement:r})=>{const t=E(r);await $(async()=>{const w=t.getByTestId("iri");await S(w).toBeInTheDocument()},{timeout:3e3})};let M=0;function j(){return M++}const rr={title:"Entity Metadata/IriWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:C}}},render:r=>{const t=j();return`
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
        `},argTypes:N,args:h},o={args:O,play:s},e={args:v,play:s},i={args:U,play:s},a={args:D,play:s};var n,c,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: IriWidget1Args,
  play: commonIriWidgetPlay
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: withoutExternalIconArgs,
  play: commonIriWidgetPlay
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,d,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: withCopyButtonArgs,
  play: commonIriWidgetPlay
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var I,x,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: withUrlPrefixArgs,
  play: commonIriWidgetPlay
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const tr=["IriWidget1","withoutExternalIcon","withCopyButton","withUrlPrefix"];export{o as IriWidget1,tr as __namedExportsOrder,rr as default,i as withCopyButton,a as withUrlPrefix,e as withoutExternalIcon};
