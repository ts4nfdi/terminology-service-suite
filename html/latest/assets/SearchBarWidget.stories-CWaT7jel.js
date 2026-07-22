import{S as _}from"./widgetDescriptions-MmE0nvU9.js";import{E as B,T}from"./globals-Dneqqh2P.js";import{c3 as E,p as D,g as W,i as f}from"./QueryClientProvider-CtwX41Lz.js";import{c as A,j as I}from"./client-DFp2fd_t.js";import{W as w}from"./SearchBarWidget-CGPG1ZSU.js";import"./useQuery-B-NHskGH.js";import"./OlsSearchApi-CnVJtw1k.js";import"./form.styles-VD043QrN.js";import"./_button-PWlvcPYJ.js";import"./badge-8WVhgBVL.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-DjHAbZRu.js";import"./icon-C0mmS-ft.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-C8Kaes5k.js";import"./screen_reader_only-BWwEC0_5.js";import"./form_control_layout-CQ6BXcSg.js";import"./text-Cn8NwKpQ.js";import"./link.styles-C820-Rkj.js";import"./text_truncate-CPygb5_H.js";import"./popover-CNlAcxCK.js";import"./useCombinedRefs-CI08p5vq.js";import"./reposition_on_scroll-CEs5f304.js";import"./portal-_jewDgXP.js";import"./focus_trap-UBDuSKor.js";import"./panel-CpW21Fhm.js";import"./shadow-DCgm-VgE.js";import"./flex_item-CGAZaKWG.js";import"./flex_group-myYfN1-V.js";import"./tool_tip-DIq-z1SX.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,{expect:C,waitFor:N,within:O}=__STORYBOOK_MODULE_TEST__,b={...f,...W,...D,...E},s={api:"",query:"",selectionChangedEvent:P("selectionChangedEvent"),parameter:""},v={...s,api:"",query:"",selectionChangedEvent:()=>{}},x={...s,api:B,query:"*"},M={...s,api:T,parameter:"classification=NFDI4CHEM&schema=collection"},q={...s,api:T,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:r})=>{const e=O(r);await N(async()=>{const t=e.getByTestId("search-bar");await C(t).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function F(r,e){let t=n.get(e);t||(t=A.createRoot(e),n.set(e,t)),t.render(I.jsx(w,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:F};let $=0;function H(){return $++}const hr={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:_}}},render:r=>{const e=H();return`
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
