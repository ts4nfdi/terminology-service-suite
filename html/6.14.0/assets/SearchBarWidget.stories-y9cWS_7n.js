import{c9 as _,p as B,g as E,i as D,ca as W}from"./QueryClientProvider-CF5rkF5q.js";import{E as f,T}from"./globals-Dneqqh2P.js";import{c as A,j as I}from"./client-DFp2fd_t.js";import{W as w}from"./SearchBarWidget-C4PoJkyb.js";import"./useQuery-DgfFOhgk.js";import"./OlsSearchApi-B2rPZYbB.js";import"./form.styles-9HKEHgz3.js";import"./_button-BbAKCsGY.js";import"./badge-Ba5Os3US.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-TuW4LsP8.js";import"./icon-C3lGepSg.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-BhZz4Fkb.js";import"./screen_reader_only-DNOIGvJf.js";import"./form_control_layout-BeXieOaP.js";import"./text-CqhZXRY4.js";import"./link.styles-B52HwVam.js";import"./useCombinedRefs-CI08p5vq.js";import"./flex_item-BUUDphw2.js";import"./flex_group-D7KdzxVe.js";import"./tool_tip-BQI96yOY.js";import"./reposition_on_scroll-CGjQKoOn.js";import"./shadow-DoZX0Z6P.js";import"./panel-CEST4cjP.js";import"./portal-BqFME_5f.js";import"./popover-DwGkXDH_.js";import"./focus_trap-D0vFJjuw.js";import"./toString-DgmBLbRF.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,{expect:C,waitFor:N,within:O}=__STORYBOOK_MODULE_TEST__,b={...D,...E,...B,..._},s={api:"",query:"",selectionChangedEvent:P("selectionChangedEvent"),parameter:""},v={...s,api:"",query:"",selectionChangedEvent:()=>{}},x={...s,api:f,query:"*"},M={...s,api:T,parameter:"classification=NFDI4CHEM&schema=collection"},q={...s,api:T,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:r})=>{const e=O(r);await N(async()=>{const t=e.getByTestId("search-bar");await C(t).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function F(r,e){let t=n.get(e);t||(t=A.createRoot(e),n.set(e,t)),t.render(I.jsx(w,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:F};let $=0;function H(){return $++}const yr={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:r=>{const e=H();return`
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
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const hr=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{a as SearchBarWidgetDefault,i as TibDataPlant,o as TibNFDI4CHEM,hr as __namedExportsOrder,yr as default};
