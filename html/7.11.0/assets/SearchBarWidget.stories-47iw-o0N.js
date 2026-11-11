import{cC as T,p as E,i as B,j as D,cD as W}from"./provider-BlV9U33F.js";import{E as f,T as _}from"./globals-1uEo64sR.js";import{c as w,j as A}from"./client-DFp2fd_t.js";import{W as C}from"./SearchBarWidget-O7iGoBQE.js";import"./QueryClientProvider-CVZB0IZw.js";import"./useQuery-BL03lWkx.js";import"./OlsSearchApi-Qw5Sx94n.js";import"./combo_box-C5eBRtPK.js";import"./form.styles-Cnzl9tXQ.js";import"./_button-B_KcUgtw.js";import"./badge-UcGW59xV.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-Duay4BcV.js";import"./icon-CJNnMZMY.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-7EH-VJdB.js";import"./screen_reader_only-B9COXGJN.js";import"./form_control_layout-D0Jeo-WS.js";import"./text-DHoFFw_8.js";import"./link.styles-BGS0RoP2.js";import"./text_truncate-CfUGY0y6.js";import"./popover-CjzJN_hr.js";import"./useCombinedRefs-Crz01-E9.js";import"./reposition_on_scroll-Dqr8OWMC.js";import"./portal-Cl-RhKb3.js";import"./focus_trap-Bznzar4U.js";import"./panel-DYRnR8Iv.js";import"./shadow-CEtHDbm9.js";import"./index.esm-BF74ISa0.js";import"./flex_item-B86eDyE4.js";import"./flex_group-DRnMcAkk.js";import"./tool_tip-DZhGT3RW.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,{expect:P,waitFor:v,within:N}=__STORYBOOK_MODULE_TEST__,O={...D,...B,...E,...T},s={api:"",query:"",selectionChangedEvent:I("selectionChangedEvent"),parameter:""},b={...s,api:"",query:"",selectionChangedEvent:()=>{}},x={...s,api:f,query:"*"},M={...s,api:_,parameter:"classification=NFDI4CHEM&schema=collection"},q={...s,api:_,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:t})=>{const e=N(t);await v(async()=>{const r=e.getByTestId("search-bar");await P(r).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function $(t,e){let r=n.get(e);r||(r=w.createRoot(e),n.set(e,r)),r.render(A.jsx(C,{...t}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:$};let F=0;function j(){return F++}const _e={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:t=>{const e=j();return window[`selectionChangedEvent_${e}`]=t.selectionChangedEvent,`
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
