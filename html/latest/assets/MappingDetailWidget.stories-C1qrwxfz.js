import{ah as w,l as B,ai as E}from"./provider-BuXM3p7M.js";import{j as t,r as S,c as W}from"./client-DFp2fd_t.js";import{Q as k,a as v}from"./QueryClientProvider-CyIVCpto.js";import{u as C}from"./useQuery-DRxfM8-_.js";import{J as b,M as R,t as A}from"./mappingUtils-BBKaJard.js";import{E as n}from"./panel-BDaAW1k1.js";import{E as p}from"./text-Dl6baijy.js";import"./link-CxoVCRWD.js";import"./href_validator-B8HQpRtP.js";import"./icon-BUcfkKK7.js";import"./preload-helper-Dp1pzeXC.js";import"./screen_reader_only-DRERXpsO.js";import"./link.styles-BfTT6KUx.js";import"./button_icon-Bkr8Xnlu.js";import"./_button_display-BFH-u2Y_.js";import"./useCombinedRefs-Crz01-E9.js";import"./_button-BRP_bfbn.js";import"./shadow-C2yBvPYV.js";const $={...w},u={api:"https://coli-conc.gbv.de/api/",source:"http://uri.gbv.de/terminology/nsk/Rec%20B%202000",target:"http://uri.gbv.de/terminology/bk/86.26",MappingDetailBackgroundColor:"#ebedef"};function P(i){const{api:e,source:r,target:f,MappingDetailBackgroundColor:M}=i,_=S.useMemo(()=>new b(e),[e]),{data:x,isLoading:y,isError:D,error:a}=C(["mappings",e,r],()=>_.getMappingsByFrom(r)),s=(x??[]).find(h=>{var g;return(((g=h.to)==null?void 0:g.memberSet)??[]).some(j=>j.uri===f)});return y?t.jsx(n,{paddingSize:"m",children:t.jsx(p,{children:"Loading mapping..."})}):D?t.jsx(n,{paddingSize:"m",children:t.jsxs(p,{color:"danger",children:["Failed to load mapping:"," ",a instanceof Error?a.message:String(a)]})}):s?t.jsx(R,{mapping:A(s),MappingDetailBackgroundColor:M}):t.jsx(n,{paddingSize:"m",children:t.jsx(p,{children:"No mapping found from this source to this target."})})}function Q(i){const e=new k;return t.jsx(B,{colorMode:"light",globalStyles:!1,children:t.jsx(v,{client:e,children:t.jsx(P,{...i})})})}const c=new WeakMap;function T(i,e){let r=c.get(e);r||(r=W.createRoot(e),c.set(e,r)),r.render(t.jsx(Q,{...i}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createMappingDetail:T};let z=0;function q(){return z++}const oe={title:"Mapping/MappingDetailWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:E}}},render:i=>{const e=q();return`
<div id="mapping_detail_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMappingDetail(
    {
        api:"${i.api}",
        source:"${i.source}",
        target:"${i.target}",
        MappingDetailBackgroundColor:"${i.MappingDetailBackgroundColor}"
    },
    document.querySelector('#mapping_detail_widget_container_${e}')
)
<\/script>
        `},argTypes:$,args:u},o={args:u};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: MappingDetailWidgetStoryArgs_Rec_B_2000
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const ae=["Rec_B_2000"];export{o as Rec_B_2000,ae as __namedExportsOrder,oe as default};
