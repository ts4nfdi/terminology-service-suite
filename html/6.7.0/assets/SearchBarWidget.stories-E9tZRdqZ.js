import{c4 as _,p as B,g as E,i as D,c5 as f}from"./QueryClientProvider-Cv6DMAwY.js";import{E as W,T}from"./globals-BQAFDkgj.js";import{c as A,j as I}from"./client-hNkKQuBU.js";import{W as w}from"./SearchBarWidget-DluHAnKi.js";import"./useQuery-D80UYlTP.js";import"./OlsSearchApi-BvRqDqbb.js";import"./form.styles-rsC0Kl_Y.js";import"./_button-DR0DDSYL.js";import"./badge-2Dv_I7s6.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-CxG7mbtu.js";import"./icon-Dbgqo2NT.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-Ooo0Ljl4.js";import"./screen_reader_only-DI2vJL1y.js";import"./text-Dj3fvmL0.js";import"./link.styles-DeXSguuE.js";import"./portal-DMzDUsME.js";import"./flex_item-DWpVg6bz.js";import"./flex_group-O0zAkBzd.js";import"./tool_tip-4Qko17uz.js";import"./shadow-BRsMk7Ev.js";import"./panel-pG-TvU-E.js";import"./popover_arrow.styles-CHH0a3nc.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./popover-CJy3jVu9.js";import"./focus_trap-dYxqw4EE.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,{expect:C,waitFor:N,within:O}=__STORYBOOK_MODULE_TEST__,b={...D,...E,...B,..._},c={api:"",query:"",selectionChangedEvent:P("selectionChangedEvent"),parameter:"collection=nfdi4health"},v={...c,api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},x={...c,api:W,query:"*"},M={...c,api:T,parameter:"classification=NFDI4CHEM&schema=collection"},q={...c,api:T,parameter:"classification=DataPLANT&schema=collection"},s=async({canvasElement:e})=>{const r=O(e);await N(async()=>{const t=r.getByTestId("search-bar");await C(t).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function F(e,r){let t=n.get(r);t||(t=A.createRoot(r),n.set(r,t)),t.render(I.jsx(w,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:F};let $=0;function H(){return $++}const ue={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:e=>{const r=H();return`
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
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const he=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{a as SearchBarWidgetDefault,i as TibDataPlant,o as TibNFDI4CHEM,he as __namedExportsOrder,ue as default};
