import{E as n}from"./globals-CvFyH82M.js";import{B as l,Y as u,z as T,q as D,cs as W}from"./storyArgs-AFjXh7XW.js";import{c as _,j as E}from"./index-ZCdkkhYt.js";import{W as f}from"./TermDepictionWidget-CyGDOw6g.js";import"./useQuery-BSQecOR7.js";import"./model-viewer-D-tw6fs6.js";import"./OlsThingApi-D88Wvf0r.js";import"./shadow-DBsugtKM.js";import"./screen_reader_only-B9DY1sFH.js";import"./icon-RvlT3YZ5.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-DNMRkBuz.js";import"./portal-DiJ1n8WN.js";import"./focus_trap-BP_Hws0S.js";import"./text-dCu-lByA.js";import"./link.styles-CJzvf_6u.js";const{expect:w,waitFor:x,within:A}=__STORYBOOK_MODULE_TEST__,I={...D,...T,...u,...l},b={api:n,iri:"",ontologyId:"",useLegacy:!1},O={api:n,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1},B={api:n,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1},y=async({canvasElement:e})=>{const t=A(e);await x(async()=>{const o=t.getByTestId("term-depiction");await w(o).toBeInTheDocument()},{timeout:3e3})},a=new WeakMap;function L(e,t){let o=a.get(t);o||(o=_.createRoot(t),a.set(t,o)),o.render(E.jsx(f,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createDepiction:L};let S=0;function R(){return S++}const H={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:e=>{const t=R();return`
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
        `},argTypes:I,args:b},i={args:O,play:y},r={args:B,play:y};var s,p,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: TermDepictionWidgetExampleArgs,
  play: commonTermDepictionWidgetPlay
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: TermDepictionWidget3DArgs,
  play: commonTermDepictionWidgetPlay
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const J=["TermDepictionWidgetExample","TermDepictionWidget3D"];export{r as TermDepictionWidget3D,i as TermDepictionWidgetExample,J as __namedExportsOrder,H as default};
