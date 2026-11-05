import{K as f}from"./provider-DhHV66nY.js";import{E as w,a as A,d as S,e as E,n as _,o as h}from"./index-COLgdL2_.js";import"./client-DFp2fd_t.js";import"./globals-1uEo64sR.js";import"./description_list-BjWch6hS.js";import"./button_icon-_yosOSG-.js";import"./_button_display-BXraxBWm.js";import"./href_validator-B8HQpRtP.js";import"./useCombinedRefs-Crz01-E9.js";import"./_button-BSE-Gefv.js";import"./icon-CQRupbKR.js";import"./preload-helper-Dp1pzeXC.js";import"./title-BwNiWjLn.js";import"./text-ATQ4pZKH.js";import"./link.styles-D92Rj0Iv.js";import"./panel-B6ojztOC.js";import"./shadow-BzKSJvFB.js";import"./spacer-BdCuJF-n.js";import"./screen_reader_only-CJHC7Tyx.js";import"./is_within_hooks-ZAJdxzQF.js";import"./emotion-css.esm-CtgQPJjC.js";import"./popover-CUAHLhzx.js";import"./reposition_on_scroll-DnVR_CoT.js";import"./portal-DiAFq_36.js";import"./focus_trap-qu0duNoA.js";import"./tool_tip-B8oiUMjF.js";import"./inner_text-Dnj4m-7S.js";import"./delay_render-B6la2GtU.js";import"./overlay_mask-Cd8sGqAM.js";import"./index.esm-B7Hj6a0T.js";import"./auto_sizer-Cz7QQ7I5.js";import"./flex_group-CD5HcYk5.js";import"./flex_item-DFagJcvy.js";import"./badge-DpG9ODGG.js";import"./color_utils-9svs92vp.js";import"./link-Iq6HyYUW.js";import"./accordion-CjYCruaq.js";let $=0;function b(){return $++}const mr={title:"API Gateway/EntityProviderHook",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:r=>{const s=b();return`
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
