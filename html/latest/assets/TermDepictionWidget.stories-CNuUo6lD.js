import{v as I,M as W,u as _,i as A,cD as E}from"./QueryClientProvider-CPt-q_PP.js";import{E as s,G as f}from"./globals-BQAFDkgj.js";import{c as w,j as O}from"./client-hNkKQuBU.js";import{W as x}from"./TermDepictionWidget-Dso5hLwb.js";import"./model-viewer-C2wGp_8x.js";import"./useQuery-zCszzi3z.js";import"./OlsThingApi-4ESVhCQm.js";import"./shadow-DFJWDPLo.js";import"./screen_reader_only-CqfKrB6u.js";import"./icon-CdMdMJ2_.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-C_LlcIOb.js";import"./emotion-css.esm-9WO_h3jq.js";import"./portal-8653UqE0.js";import"./focus_trap-DVrlscCP.js";import"./text-Bx4ixop4.js";import"./link.styles-Dyy2Pwtk.js";const{expect:b,waitFor:L,within:P}=__STORYBOOK_MODULE_TEST__,S={...A,..._,...W,...I},N={api:s,iri:"",ontologyId:"",useLegacy:!1},h={api:s,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1},B={api:s,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1},R={api:f,iri:"https://nomenclature.info/nom/5254",ontologyId:"http://bartoc.org/en/node/1232",useLegacy:!0},a=async({canvasElement:e})=>{const t=P(e);await L(async()=>{const o=t.getByTestId("term-depiction");await b(o).toBeInTheDocument()},{timeout:3e3})},c=new WeakMap;function $(e,t){let o=c.get(t);o||(o=w.createRoot(t),c.set(t,o)),o.render(O.jsx(x,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createDepiction:$};let v=0;function j(){return v++}const te={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:E}}},render:e=>{const t=j();return`
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
        `},argTypes:S,args:N},r={args:h,play:a},i={args:B,play:a},n={args:R,play:a};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: TermDepictionWidgetExampleArgs,
  play: commonTermDepictionWidgetPlay
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,y,l;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: TermDepictionWidget3DArgs,
  play: commonTermDepictionWidgetPlay
}`,...(l=(y=i.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};var u,T,D;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: OntologyIriAsIdArgs,
  play: commonTermDepictionWidgetPlay
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const oe=["TermDepictionWidgetExample","TermDepictionWidget3D","OntologyIriAsId"];export{n as OntologyIriAsId,i as TermDepictionWidget3D,r as TermDepictionWidgetExample,oe as __namedExportsOrder,te as default};
