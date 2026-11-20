import{K as f}from"./provider-BuXM3p7M.js";import{E as w,a as A,d as S,e as E,n as _,o as h}from"./index-ID2vHVSC.js";import"./client-DFp2fd_t.js";import"./globals-p90pkwp0.js";import"./description_list-eP3oVLQt.js";import"./button_icon-Bkr8Xnlu.js";import"./_button_display-BFH-u2Y_.js";import"./href_validator-B8HQpRtP.js";import"./useCombinedRefs-Crz01-E9.js";import"./_button-BRP_bfbn.js";import"./icon-BUcfkKK7.js";import"./preload-helper-Dp1pzeXC.js";import"./title-Ccw7R9oF.js";import"./text-Dl6baijy.js";import"./link.styles-BfTT6KUx.js";import"./panel-BDaAW1k1.js";import"./shadow-C2yBvPYV.js";import"./spacer-BQEThFvw.js";import"./screen_reader_only-DRERXpsO.js";import"./is_within_hooks-Dv1hDbAE.js";import"./emotion-css.esm-BESFG5u2.js";import"./popover-Dz5A4JTC.js";import"./reposition_on_scroll--qEuL3-J.js";import"./portal-DRkmvPCC.js";import"./focus_trap-JmVhx2Sm.js";import"./tool_tip-DoB_Xfgv.js";import"./inner_text-JVgd2FC_.js";import"./delay_render-Fk3zPF81.js";import"./overlay_mask-GooGEDK7.js";import"./index.esm-BqTvzfyD.js";import"./auto_sizer-Btwi6e8d.js";import"./flex_group-BJCwtRUg.js";import"./flex_item-ylCgN4dZ.js";import"./badge-Mf8vR9-7.js";import"./color_utils-B4rSnZdJ.js";import"./link-CxoVCRWD.js";import"./accordion-B4VgIgb_.js";let $=0;function b(){return $++}const mr={title:"API Gateway/EntityProviderHook",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:r=>{const s=b();return`
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
