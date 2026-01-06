import{E as n}from"./globals-BQAFDkgj.js";import{B as l,a3 as u,z as T,r as D,cx as W}from"./storyArgs-CNybPO01.js";import{c as _,j as E}from"./index-Bl-ZOWkZ.js";import{W as f}from"./TermDepictionWidget-oW83NFts.js";import"./useQuery-CidFMm36.js";import"./model-viewer-C2wGp_8x.js";import"./OlsThingApi-C8tVE3H-.js";import"./shadow-hpW_Gm8d.js";import"./screen_reader_only-E1t5Dz4g.js";import"./icon-CE3ukyQW.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CwdQ_heh.js";import"./emotion-css.esm-Be2XztkC.js";import"./portal-2EC9qipk.js";import"./focus_trap-Ck4UtKVR.js";import"./text-CwK6QkCY.js";import"./link.styles-Cwoei_NV.js";const{expect:w,waitFor:x,within:A}=__STORYBOOK_MODULE_TEST__,I={...D,...T,...u,...l},b={api:n,iri:"",ontologyId:"",useLegacy:!1},O={api:n,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1},B={api:n,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1},y=async({canvasElement:e})=>{const t=A(e);await x(async()=>{const o=t.getByTestId("term-depiction");await w(o).toBeInTheDocument()},{timeout:3e3})},a=new WeakMap;function L(e,t){let o=a.get(t);o||(o=_.createRoot(t),a.set(t,o)),o.render(E.jsx(f,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createDepiction:L};let S=0;function R(){return S++}const J={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:e=>{const t=R();return`
<div id="term_depiction_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDepiction(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",                
        useLegacy:${e.useLegacy},
    },
    document.querySelector('#term_depiction_widget_container_${t}')
)
<\/script>
        `},argTypes:I,args:b},i={args:O,play:y},r={args:B,play:y};var p,s,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: TermDepictionWidgetExampleArgs,
  play: commonTermDepictionWidgetPlay
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: TermDepictionWidget3DArgs,
  play: commonTermDepictionWidgetPlay
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const Q=["TermDepictionWidgetExample","TermDepictionWidget3D"];export{r as TermDepictionWidget3D,i as TermDepictionWidgetExample,Q as __namedExportsOrder,J as default};
