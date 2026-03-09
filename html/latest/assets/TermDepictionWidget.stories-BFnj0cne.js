import{v as l,Z as u,u as T,i as D,cB as W}from"./QueryClientProvider-D8K9bTbJ.js";import{E as n}from"./globals-BQAFDkgj.js";import{c as _,j as E}from"./client-hNkKQuBU.js";import{W as f}from"./TermDepictionWidget-CrumUA6_.js";import"./model-viewer-C2wGp_8x.js";import"./useQuery-Dc2JQcLb.js";import"./OlsThingApi-BEv4TTSU.js";import"./shadow-DokUYloO.js";import"./screen_reader_only-Cav27bvL.js";import"./icon-D9LuBdn0.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-eK6dSNvJ.js";import"./emotion-css.esm-Cx4fpGYg.js";import"./portal-Y4k7GxLd.js";import"./focus_trap-CURAgSMI.js";import"./text-BIRiCrdX.js";import"./link.styles-juWMymlq.js";const{expect:w,waitFor:x,within:A}=__STORYBOOK_MODULE_TEST__,I={...D,...T,...u,...l},b={api:n,iri:"",ontologyId:"",useLegacy:!1},O={api:n,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1},B={api:n,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1},y=async({canvasElement:e})=>{const t=A(e);await x(async()=>{const o=t.getByTestId("term-depiction");await w(o).toBeInTheDocument()},{timeout:3e3})},a=new WeakMap;function L(e,t){let o=a.get(t);o||(o=_.createRoot(t),a.set(t,o)),o.render(E.jsx(f,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createDepiction:L};let S=0;function R(){return S++}const H={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:e=>{const t=R();return`
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
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const J=["TermDepictionWidgetExample","TermDepictionWidget3D"];export{r as TermDepictionWidget3D,i as TermDepictionWidgetExample,J as __namedExportsOrder,H as default};
