import{ah as w,l as B,ai as E}from"./provider-BlV9U33F.js";import{j as e,r as W,c as k}from"./client-DFp2fd_t.js";import{Q as S,a as v}from"./QueryClientProvider-CVZB0IZw.js";import{u as C}from"./useQuery-BL03lWkx.js";import{J as R,M as b,t as A}from"./mappingUtils-sqd_OioH.js";import{E as n}from"./panel-DYRnR8Iv.js";import{E as p}from"./text-DHoFFw_8.js";import"./link-C2WqTBYr.js";import"./href_validator-B8HQpRtP.js";import"./icon-CJNnMZMY.js";import"./preload-helper-Dp1pzeXC.js";import"./screen_reader_only-B9COXGJN.js";import"./link.styles-BGS0RoP2.js";import"./button_icon-1SpCw8U2.js";import"./_button_display-B8UjPbhb.js";import"./useCombinedRefs-Crz01-E9.js";import"./_button-B_KcUgtw.js";import"./shadow-CEtHDbm9.js";const $={...w},u={api:"https://coli-conc.gbv.de/api/",source:"http://uri.gbv.de/terminology/nsk/Rec%20B%202000",target:"http://uri.gbv.de/terminology/bk/86.26",MappingDetailBackgroundColor:"#ebedef"};function P(i){const{api:t,source:r,target:f,MappingDetailBackgroundColor:M}=i,_=W.useMemo(()=>new R(t),[t]),{data:x,isLoading:D,isError:y,error:a}=C(["mappings",t,r],()=>_.getMappingsByFrom(r)),s=(x??[]).find(h=>{var g;return(((g=h.to)==null?void 0:g.memberSet)??[]).some(j=>j.uri===f)});return D?e.jsx(n,{paddingSize:"m",children:e.jsx(p,{children:"Loading mapping..."})}):y?e.jsx(n,{paddingSize:"m",children:e.jsxs(p,{color:"danger",children:["Failed to load mapping:"," ",a instanceof Error?a.message:String(a)]})}):s?e.jsx(b,{mapping:A(s),MappingDetailBackgroundColor:M}):e.jsx(n,{paddingSize:"m",children:e.jsx(p,{children:"No mapping found from this source to this target."})})}function Q(i){const t=new S;return e.jsx(B,{colorMode:"light",children:e.jsx(v,{client:t,children:e.jsx(P,{...i})})})}const c=new WeakMap;function T(i,t){let r=c.get(t);r||(r=k.createRoot(t),c.set(t,r)),r.render(e.jsx(Q,{...i}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createMappingDetail:T};let z=0;function q(){return z++}const ot={title:"Mapping/MappingDetailWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:E}}},render:i=>{const t=q();return`
<div id="mapping_detail_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMappingDetail(
    {
        api:"${i.api}",
        source:"${i.source}",
        target:"${i.target}",
        MappingDetailBackgroundColor:"${i.MappingDetailBackgroundColor}"
    },
    document.querySelector('#mapping_detail_widget_container_${t}')
)
<\/script>
        `},argTypes:$,args:u},o={args:u};var d,m,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: MappingDetailWidgetStoryArgs_Rec_B_2000
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const at=["Rec_B_2000"];export{o as Rec_B_2000,at as __namedExportsOrder,ot as default};
