import{S as _}from"./widgetDescriptions-MmE0nvU9.js";import{E as B,T}from"./globals-Dr4u9m4r.js";import{c3 as E,p as D,i as W,j as f}from"./QueryClientProvider-Do8L4puV.js";import{c as A,j as I}from"./client-DFp2fd_t.js";import{W as w}from"./SearchBarWidget-DQL-kVMe.js";import"./useQuery-CIkILH5n.js";import"./OlsSearchApi-DnbJ2kpP.js";import"./form.styles-VscqtPVU.js";import"./_button-DhlYrVXD.js";import"./badge-BaoRKJqd.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-BU9yCWrU.js";import"./icon-Cm1UIAGU.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-MoOv1346.js";import"./screen_reader_only-4MrfQ9dj.js";import"./form_control_layout-B6CrjwK9.js";import"./text-BAeCwnXn.js";import"./link.styles-B0I9gBTI.js";import"./text_truncate-B9VfULi0.js";import"./popover-D40cmsH8.js";import"./useCombinedRefs-CI08p5vq.js";import"./reposition_on_scroll-Ceki3zLD.js";import"./portal-EesfENoO.js";import"./focus_trap-D9vXaW4s.js";import"./panel-D0b7-77x.js";import"./shadow-djjuuZEz.js";import"./flex_item-x_hbH7Bu.js";import"./flex_group-C5WWS10R.js";import"./tool_tip-BzGt3NSt.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,{expect:C,waitFor:N,within:O}=__STORYBOOK_MODULE_TEST__,b={...f,...W,...D,...E},s={api:"",query:"",selectionChangedEvent:P("selectionChangedEvent"),parameter:""},v={...s,api:"",query:"",selectionChangedEvent:()=>{}},x={...s,api:B,query:"*"},M={...s,api:T,parameter:"classification=NFDI4CHEM&schema=collection"},q={...s,api:T,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:r})=>{const e=O(r);await N(async()=>{const t=e.getByTestId("search-bar");await C(t).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function F(r,e){let t=n.get(e);t||(t=A.createRoot(e),n.set(e,t)),t.render(I.jsx(w,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:F};let $=0;function j(){return $++}const hr={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:_}}},render:r=>{const e=j();return`
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
