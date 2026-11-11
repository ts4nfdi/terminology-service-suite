import{K as f}from"./provider-BlV9U33F.js";import{E as w,a as A,d as S,e as E,n as _,o as h}from"./index-BWfz-Hni.js";import"./client-DFp2fd_t.js";import"./globals-1uEo64sR.js";import"./description_list-BeNadjk7.js";import"./button_icon-1SpCw8U2.js";import"./_button_display-B8UjPbhb.js";import"./href_validator-B8HQpRtP.js";import"./useCombinedRefs-Crz01-E9.js";import"./_button-B_KcUgtw.js";import"./icon-CJNnMZMY.js";import"./preload-helper-Dp1pzeXC.js";import"./title-IA6qqDOn.js";import"./text-DHoFFw_8.js";import"./link.styles-BGS0RoP2.js";import"./panel-DYRnR8Iv.js";import"./shadow-CEtHDbm9.js";import"./spacer-CGrUwYnj.js";import"./screen_reader_only-B9COXGJN.js";import"./is_within_hooks-Dw6pVT7Z.js";import"./emotion-css.esm-CxlRctii.js";import"./popover-CjzJN_hr.js";import"./reposition_on_scroll-Dqr8OWMC.js";import"./portal-Cl-RhKb3.js";import"./focus_trap-Bznzar4U.js";import"./tool_tip-DZhGT3RW.js";import"./inner_text-7EH-VJdB.js";import"./delay_render-BV5jCfeX.js";import"./overlay_mask-vtqg9f1F.js";import"./index.esm-BF74ISa0.js";import"./auto_sizer-ayOgDDtc.js";import"./flex_group-DRnMcAkk.js";import"./flex_item-B86eDyE4.js";import"./badge-UcGW59xV.js";import"./color_utils-Duay4BcV.js";import"./link-C2WqTBYr.js";import"./accordion-B65lchLv.js";let $=0;function b(){return $++}const mr={title:"API Gateway/EntityProviderHook",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:r=>{const s=b();return`
<pre id="entity_provider_widget_container_${s}" data-testid="entity-provider" data-loading="true"></pre>

<script type="text/javascript">
(function () {
    const container = document.querySelector('#entity_provider_widget_container_${s}');
    const params = {
        api:"${r.api}",
        iri:"${r.iri}",
        ontologyId:"${r.ontologyId}",
        parameter:"${r.parameter}"
    };

    const idle = {
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: undefined,
        provider: undefined,
        providers: []
    };

    function show(state) {
        container.textContent = JSON.stringify(state, null, 2);
        container.setAttribute('data-loading', String(state.isLoading));
    }

    if (!${r.enabled} || (!params.iri && !params.ontologyId)) {
        show(idle);
        return;
    }

    show({ ...idle, isLoading: true });

    Promise.all([
        window['ts4nfdiWidgets'].getEntityProvider(params),
        window['ts4nfdiWidgets'].getEntityProviders(params)
    ])
        .then(([provider, providers]) => show({ ...idle, isSuccess: true, provider, providers }))
        .catch((error) => show({ ...idle, isError: true, error: error.message }));
})();
<\/script>
        `},argTypes:A,args:w},o={args:E},t={args:h},e={args:_},i={args:S};var a,n,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: entityProviderArgs
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: ontologyProviderArgs
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,u,l;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: notFoundArgs
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var y,v,P;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: disabledArgs
}`,...(P=(v=i.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const cr=["entityProvider","ontologyProvider","notFound","disabled"];export{cr as __namedExportsOrder,mr as default,i as disabled,o as entityProvider,e as notFound,t as ontologyProvider};
