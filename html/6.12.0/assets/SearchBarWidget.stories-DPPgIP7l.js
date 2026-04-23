import{c6 as _,p as B,g as E,i as D,c7 as W}from"./QueryClientProvider-Bb9dgOo0.js";import{E as f,T}from"./globals-Dneqqh2P.js";import{c as A,j as I}from"./client-hNkKQuBU.js";import{W as w}from"./SearchBarWidget-BfOZaHb4.js";import"./useQuery-qa6g1_-U.js";import"./OlsSearchApi-BDWA-aCH.js";import"./form.styles-Cv-U5_Xx.js";import"./_button-DogrUfmp.js";import"./badge-DpvzdqHp.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-Ct7ZxPbP.js";import"./icon-DnCCTuQY.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-DsONEXZF.js";import"./screen_reader_only-DIFtlAI0.js";import"./form_control_layout-BfA5AbG_.js";import"./text-DNG6MXRa.js";import"./link.styles-DBsS1rJf.js";import"./portal-CP3apiJn.js";import"./flex_item-K2Ds7wwH.js";import"./flex_group-BfbFrHRT.js";import"./tool_tip-23-Muz78.js";import"./shadow-Dc9gHgOP.js";import"./panel-Biy_ZdnD.js";import"./popover_arrow.styles-Oq2hUCjK.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./popover-BDSniH1a.js";import"./focus_trap-BRGmUgIn.js";import"./toString-CZ0i4O18.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,{expect:C,waitFor:N,within:O}=__STORYBOOK_MODULE_TEST__,b={...D,...E,...B,..._},s={api:"",query:"",selectionChangedEvent:P("selectionChangedEvent"),parameter:""},v={...s,api:"",query:"",selectionChangedEvent:()=>{}},x={...s,api:f,query:"*"},M={...s,api:T,parameter:"classification=NFDI4CHEM&schema=collection"},q={...s,api:T,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:r})=>{const e=O(r);await N(async()=>{const t=e.getByTestId("search-bar");await C(t).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function F(r,e){let t=n.get(e);t||(t=A.createRoot(e),n.set(e,t)),t.render(I.jsx(w,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:F};let $=0;function H(){return $++}const hr={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:r=>{const e=H();return`
<div id="search_bar_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createSearchBar(
    {
      api:"${r.api}",
      query:"${r.query}",
      selectionChangedEvent:${r.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${r.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${e}')
)
<\/script>
        `},argTypes:b,args:v},a={args:x,play:c},o={args:M,play:c},i={args:q,play:c};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: SearchBarWidgetDefaultArgs,
  play: commonSearchBartWidgetPlay
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: TibNFDI4CHEMArgs,
  play: commonSearchBartWidgetPlay
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var y,h,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: TibDataPlantArgs,
  play: commonSearchBartWidgetPlay
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const Sr=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{a as SearchBarWidgetDefault,i as TibDataPlant,o as TibNFDI4CHEM,Sr as __namedExportsOrder,hr as default};
