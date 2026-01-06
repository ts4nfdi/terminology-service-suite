import{E as _,T}from"./globals-BQAFDkgj.js";import{bY as B,p as E,q as D,r as f,bZ as W}from"./storyArgs-CNybPO01.js";import{c as A,j as I}from"./index-Bl-ZOWkZ.js";import{W as b}from"./SearchBarWidget-BWpBQJaF.js";import"./useQuery-CidFMm36.js";import"./combo_box-Mbc5K5Wj.js";import"./form.styles-XNwAir6y.js";import"./_button-YkQj8NM0.js";import"./badge-1S-NH-ch.js";import"./href_validator-Cs1fZ0vS.js";import"./color_utils-C32VsIho.js";import"./icon-CE3ukyQW.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CwdQ_heh.js";import"./screen_reader_only-E1t5Dz4g.js";import"./text-CwK6QkCY.js";import"./link.styles-Cwoei_NV.js";import"./portal-2EC9qipk.js";import"./flex_item-C3VJF-KW.js";import"./flex_group-BrdRh0Rx.js";import"./tool_tip-Cu82uPao.js";import"./shadow-hpW_Gm8d.js";import"./panel-DxNbXEZo.js";import"./observer-BN-lkF8-.js";import"./popover-Df51L6yb.js";import"./focus_trap-Ck4UtKVR.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,{expect:P,waitFor:C,within:N}=__STORYBOOK_MODULE_TEST__,O={...f,...D,...E,...B},s={api:"",query:"",selectionChangedEvent:w("selectionChangedEvent"),parameter:"collection=nfdi4health"},v={...s,api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},q={...s,api:_,query:"*"},x={...s,api:T,parameter:"classification=NFDI4CHEM&schema=collection"},M={...s,api:T,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:e})=>{const r=N(e);await C(async()=>{const t=r.getByTestId("search-bar");await P(t).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function F(e,r){let t=n.get(r);t||(t=A.createRoot(r),n.set(r,t)),t.render(I.jsx(b,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:F};let $=0;function H(){return $++}const ge={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:e=>{const r=H();return`
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
        `},argTypes:O,args:v},a={args:q,play:c},o={args:x,play:c},i={args:M,play:c};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: SearchBarWidgetDefaultArgs,
  play: commonSearchBartWidgetPlay
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: TibNFDI4CHEMArgs,
  play: commonSearchBartWidgetPlay
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,y,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: TibDataPlantArgs,
  play: commonSearchBartWidgetPlay
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const le=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{a as SearchBarWidgetDefault,i as TibDataPlant,o as TibNFDI4CHEM,le as __namedExportsOrder,ge as default};
