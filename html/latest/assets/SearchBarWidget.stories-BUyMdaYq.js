import{E as _,T}from"./globals-CvFyH82M.js";import{bT as B,p as E,o as D,q as f,bU as W}from"./storyArgs-AFjXh7XW.js";import{c as A,j as I}from"./index-ZCdkkhYt.js";import{W as b}from"./SearchBarWidget-DWwISceJ.js";import"./useQuery-BSQecOR7.js";import"./combo_box-_74Ql6BG.js";import"./popover-DSoekXbz.js";import"./_button-jUUP9GKn.js";import"./focus_trap-BP_Hws0S.js";import"./screen_reader_only-B9DY1sFH.js";import"./portal-DiJ1n8WN.js";import"./panel-DRTqr2vT.js";import"./shadow-DBsugtKM.js";import"./observer-y2cdnWU0.js";import"./icon-RvlT3YZ5.js";import"./preload-helper-Dp1pzeXC.js";import"./badge-WsMI9jLf.js";import"./href_validator-CCXnw10u.js";import"./color_utils-cNYMWQjX.js";import"./inner_text-DNMRkBuz.js";import"./text-dCu-lByA.js";import"./link.styles-CJzvf_6u.js";import"./flex_item-DZLNRa3p.js";import"./flex_group-Bf8PzYzu.js";import"./tool_tip-Dt8i4P_D.js";import"./toString-CFkQP3UW.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,{expect:P,waitFor:C,within:N}=__STORYBOOK_MODULE_TEST__,O={...f,...D,...E,...B},s={api:"",query:"",selectionChangedEvent:w("selectionChangedEvent"),parameter:"collection=nfdi4health"},v={...s,api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},q={...s,api:_,query:"*"},x={...s,api:T,parameter:"classification=NFDI4CHEM&schema=collection"},M={...s,api:T,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:e})=>{const r=N(e);await C(async()=>{const t=r.getByTestId("search-bar");await P(t).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function F(e,r){let t=n.get(r);t||(t=A.createRoot(r),n.set(r,t)),t.render(I.jsx(b,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:F};let $=0;function H(){return $++}const ge={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:e=>{const r=H();return`
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
