import{S as _}from"./widgetDescriptions-MmE0nvU9.js";import{E as B,T}from"./globals-Dneqqh2P.js";import{bT as E,p as D,g as W,i as f}from"./QueryClientProvider-VdYZKCyp.js";import{c as A,j as I}from"./client-DFp2fd_t.js";import{W as w}from"./SearchBarWidget-DbcGSq6r.js";import"./useQuery-DzpYqKke.js";import"./OlsSearchApi-GcaeFbg1.js";import"./form.styles-BCHh8WMG.js";import"./_button-C2CnBAwn.js";import"./badge-DOuZ6QV3.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-6JZMJLrL.js";import"./icon-D6PHx6Ce.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-nYET-hHU.js";import"./screen_reader_only-B9YRbRNY.js";import"./form_control_layout-BwgVyQ56.js";import"./text-CS7fjvhH.js";import"./link.styles-BpuXkH31.js";import"./useCombinedRefs-CI08p5vq.js";import"./flex_item-C_pGVVoL.js";import"./flex_group-BEkvUjNg.js";import"./tool_tip-WIs2AWos.js";import"./reposition_on_scroll-w4xnRMub.js";import"./shadow-XoOGiYmQ.js";import"./panel-DovnUD-R.js";import"./portal-Dss_lYMI.js";import"./popover-m2ETZYlx.js";import"./focus_trap-1YlF8tl-.js";import"./toString-CwYGHclG.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,{expect:b,waitFor:C,within:N}=__STORYBOOK_MODULE_TEST__,O={...f,...W,...D,...E},s={api:"",query:"",selectionChangedEvent:P("selectionChangedEvent"),parameter:""},v={...s,api:"",query:"",selectionChangedEvent:()=>{}},x={...s,api:B,query:"*"},M={...s,api:T,parameter:"classification=NFDI4CHEM&schema=collection"},q={...s,api:T,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:r})=>{const e=N(r);await C(async()=>{const t=e.getByTestId("search-bar");await b(t).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function F(r,e){let t=n.get(e);t||(t=A.createRoot(e),n.set(e,t)),t.render(I.jsx(w,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:F};let $=0;function H(){return $++}const hr={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:_}}},render:r=>{const e=H();return`
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
        `},argTypes:O,args:v},a={args:x,play:c},o={args:M,play:c},i={args:q,play:c};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: SearchBarWidgetDefaultArgs,
  play: commonSearchBartWidgetPlay
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: TibNFDI4CHEMArgs,
  play: commonSearchBartWidgetPlay
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var y,h,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: TibDataPlantArgs,
  play: commonSearchBartWidgetPlay
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const Sr=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{a as SearchBarWidgetDefault,i as TibDataPlant,o as TibNFDI4CHEM,Sr as __namedExportsOrder,hr as default};
