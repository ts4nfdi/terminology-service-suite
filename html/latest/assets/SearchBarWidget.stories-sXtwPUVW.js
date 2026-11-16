import{cC as T,p as E,i as B,j as D,cD as W}from"./provider-BuXM3p7M.js";import{E as f,T as _}from"./globals-1uEo64sR.js";import{c as w,j as A}from"./client-DFp2fd_t.js";import{W as C}from"./SearchBarWidget-BBTtW1Vw.js";import"./QueryClientProvider-CyIVCpto.js";import"./useQuery-DRxfM8-_.js";import"./OlsSearchApi-Be51lBZd.js";import"./combo_box-DZDvs_2O.js";import"./form.styles-DOGgUlwv.js";import"./_button-BRP_bfbn.js";import"./badge-Mf8vR9-7.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-B4rSnZdJ.js";import"./icon-BUcfkKK7.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-JVgd2FC_.js";import"./screen_reader_only-DRERXpsO.js";import"./form_control_layout-C9_E2o8S.js";import"./text-Dl6baijy.js";import"./link.styles-BfTT6KUx.js";import"./text_truncate-DE6fZBdY.js";import"./popover-Dz5A4JTC.js";import"./useCombinedRefs-Crz01-E9.js";import"./reposition_on_scroll--qEuL3-J.js";import"./portal-DRkmvPCC.js";import"./focus_trap-JmVhx2Sm.js";import"./panel-BDaAW1k1.js";import"./shadow-C2yBvPYV.js";import"./index.esm-BqTvzfyD.js";import"./flex_item-ylCgN4dZ.js";import"./flex_group-BJCwtRUg.js";import"./tool_tip-DoB_Xfgv.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,{expect:P,waitFor:v,within:N}=__STORYBOOK_MODULE_TEST__,O={...D,...B,...E,...T},s={api:"",query:"",selectionChangedEvent:I("selectionChangedEvent"),parameter:""},b={...s,api:"",query:"",selectionChangedEvent:()=>{}},x={...s,api:f,query:"*"},M={...s,api:_,parameter:"classification=NFDI4CHEM&schema=collection"},q={...s,api:_,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:t})=>{const e=N(t);await v(async()=>{const r=e.getByTestId("search-bar");await P(r).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function $(t,e){let r=n.get(e);r||(r=w.createRoot(e),n.set(e,r)),r.render(A.jsx(C,{...t}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:$};let F=0;function j(){return F++}const _e={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:t=>{const e=j();return window[`selectionChangedEvent_${e}`]=t.selectionChangedEvent,`
<div id="search_bar_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createSearchBar(
    {
      api:"${t.api}",
      query:"${t.query}",
      selectionChangedEvent:window['selectionChangedEvent_${e}'],
      parameter:"${t.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${e}')
)
<\/script>
        `},argTypes:O,args:b},a={args:x,play:c},o={args:M,play:c},i={args:q,play:c};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: SearchBarWidgetDefaultArgs,
  play: commonSearchBartWidgetPlay
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: TibNFDI4CHEMArgs,
  play: commonSearchBartWidgetPlay
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,y,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: TibDataPlantArgs,
  play: commonSearchBartWidgetPlay
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const Te=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{a as SearchBarWidgetDefault,i as TibDataPlant,o as TibNFDI4CHEM,Te as __namedExportsOrder,_e as default};
