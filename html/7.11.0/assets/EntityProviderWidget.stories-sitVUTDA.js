import{L as I}from"./provider-BlV9U33F.js";import{d as x,n as D,e as d,a as R,E as S,o as N}from"./index-BWfz-Hni.js";import"./client-DFp2fd_t.js";import"./globals-1uEo64sR.js";import"./description_list-BeNadjk7.js";import"./button_icon-1SpCw8U2.js";import"./_button_display-B8UjPbhb.js";import"./href_validator-B8HQpRtP.js";import"./useCombinedRefs-Crz01-E9.js";import"./_button-B_KcUgtw.js";import"./icon-CJNnMZMY.js";import"./preload-helper-Dp1pzeXC.js";import"./title-IA6qqDOn.js";import"./text-DHoFFw_8.js";import"./link.styles-BGS0RoP2.js";import"./panel-DYRnR8Iv.js";import"./shadow-CEtHDbm9.js";import"./spacer-CGrUwYnj.js";import"./screen_reader_only-B9COXGJN.js";import"./is_within_hooks-Dw6pVT7Z.js";import"./emotion-css.esm-CxlRctii.js";import"./popover-CjzJN_hr.js";import"./reposition_on_scroll-Dqr8OWMC.js";import"./portal-Cl-RhKb3.js";import"./focus_trap-Bznzar4U.js";import"./tool_tip-DZhGT3RW.js";import"./inner_text-7EH-VJdB.js";import"./delay_render-BV5jCfeX.js";import"./overlay_mask-vtqg9f1F.js";import"./index.esm-BF74ISa0.js";import"./auto_sizer-ayOgDDtc.js";import"./flex_group-DRnMcAkk.js";import"./flex_item-B86eDyE4.js";import"./badge-UcGW59xV.js";import"./color_utils-Duay4BcV.js";import"./link-C2WqTBYr.js";import"./accordion-B65lchLv.js";const{expect:o,waitFor:$,within:W}=__STORYBOOK_MODULE_TEST__;({...R});({...S});({...d});const q={...d,showRaw:!1},O={...D},H={...x};async function p(t,r,E=1e4){const c=W(t);return await $(async()=>{const F=c.getByTestId("entity-provider-widget");await o(r).toContain(F.getAttribute("data-state"))},{timeout:E}),c}const L=async({canvasElement:t})=>{const r=await p(t,["success"]);await o(r.getAllByTestId("entity-provider-card").length).toBeGreaterThan(0),await o(r.queryByText("Raw provider data")).toBeNull()},k=async({canvasElement:t})=>{const r=await p(t,["success"]);await o(r.getByText("No provider information available")).toBeVisible(),await o(r.queryAllByTestId("entity-provider-card")).toHaveLength(0)},G=async({canvasElement:t})=>{const r=await p(t,["idle"],3e3);await o(r.queryByTestId("entity-provider-presentation")).toBeNull(),await o(r.queryAllByTestId("entity-provider-card")).toHaveLength(0)};let j=0;function C(){return j++}const St={title:"API Gateway/EntityProviderWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:I}}},render:t=>{const r=C();return`
<div id="entity_provider_widget_container_${r}" style="width: 520px; max-width: 100%"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityProvider(
    {
        api:"${t.api}",
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        parameter:"${t.parameter}",
        enabled:${t.enabled},
        showRaw:${t.showRaw}
    },
    document.querySelector('#entity_provider_widget_container_${r}')
)
<\/script>
        `},argTypes:R,args:S},e={args:d},a={args:N},i={args:q,play:L},s={args:O,play:k},n={args:H,play:G};var m,l,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: entityProviderArgs
}`,...(y=(l=e.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var u,g,w;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: ontologyProviderArgs
}`,...(w=(g=a.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,P,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: WithoutRawArgs,
  play: fullWithoutRawPlay
}`,...(A=(P=i.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var h,_,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: NotFoundArgs,
  play: fullNotFoundPlay
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var T,b,B;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: DisabledArgs,
  play: fullDisabledPlay
}`,...(B=(b=n.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const Et=["entityProvider","ontologyProvider","withoutRawData","notFound","disabled"];export{Et as __namedExportsOrder,St as default,n as disabled,e as entityProvider,s as notFound,a as ontologyProvider,i as withoutRawData};
