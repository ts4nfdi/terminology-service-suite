import{c6 as _,p as B,g as E,i as D,c7 as f}from"./QueryClientProvider-CPt-q_PP.js";import{E as W,T}from"./globals-BQAFDkgj.js";import{c as A,j as I}from"./client-hNkKQuBU.js";import{W as w}from"./SearchBarWidget-BOXjUss2.js";import"./useQuery-zCszzi3z.js";import"./OlsSearchApi-DL0sTDBL.js";import"./form.styles-Do6OT1e7.js";import"./_button-DJSF0-jH.js";import"./badge-Da_yYfKu.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-CyGgYq0e.js";import"./icon-CdMdMJ2_.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-C_LlcIOb.js";import"./screen_reader_only-CqfKrB6u.js";import"./form_control_layout-xv8Z0y5D.js";import"./text-Bx4ixop4.js";import"./link.styles-Dyy2Pwtk.js";import"./portal-8653UqE0.js";import"./flex_item-DWAFqmiO.js";import"./flex_group-CLqlV9tc.js";import"./tool_tip-D_n-sPIU.js";import"./shadow-DFJWDPLo.js";import"./panel-DDfF7mxD.js";import"./popover_arrow.styles-B8JI4L5w.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./popover-BN34iXip.js";import"./focus_trap-DVrlscCP.js";import"./toString-B45dBKVB.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,{expect:C,waitFor:N,within:O}=__STORYBOOK_MODULE_TEST__,b={...D,...E,...B,..._},c={api:"",query:"",selectionChangedEvent:P("selectionChangedEvent"),parameter:"collection=nfdi4health"},v={...c,api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},x={...c,api:W,query:"*"},M={...c,api:T,parameter:"classification=NFDI4CHEM&schema=collection"},q={...c,api:T,parameter:"classification=DataPLANT&schema=collection"},s=async({canvasElement:e})=>{const r=O(e);await N(async()=>{const t=r.getByTestId("search-bar");await C(t).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function F(e,r){let t=n.get(r);t||(t=A.createRoot(r),n.set(r,t)),t.render(I.jsx(w,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:F};let $=0;function H(){return $++}const ye={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:e=>{const r=H();return`
<div id="search_bar_widget_container_${r}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createSearchBar(
    {
      api:"${e.api}",
      query:"${e.query}",
      selectionChangedEvent:${e.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${e.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${r}')
)
<\/script>
        `},argTypes:b,args:v},a={args:x,play:s},o={args:M,play:s},i={args:q,play:s};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: SearchBarWidgetDefaultArgs,
  play: commonSearchBartWidgetPlay
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: TibNFDI4CHEMArgs,
  play: commonSearchBartWidgetPlay
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,y,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: TibDataPlantArgs,
  play: commonSearchBartWidgetPlay
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const Se=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{a as SearchBarWidgetDefault,i as TibDataPlant,o as TibNFDI4CHEM,Se as __namedExportsOrder,ye as default};
