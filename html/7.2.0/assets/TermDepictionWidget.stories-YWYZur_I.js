import{h as E}from"./widgetDescriptions-MmE0nvU9.js";import{G as w,E as c}from"./globals-Dr4u9m4r.js";import{u as P,H as f,t as x,i as G}from"./QueryClientProvider-BWR2RZKW.js";import{c as L,j as O}from"./client-DFp2fd_t.js";import{W as S}from"./TermDepictionWidget-URZ5ol_F.js";import"./model-viewer-BNdxy5m2.js";import"./useQuery-BPvcPTdj.js";import"./OlsThingApi-tCj2605y.js";import"./shadow-BUamHIi1.js";import"./screen_reader_only-Dkx7M2m0.js";import"./icon-baKPdkWm.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-_W8cA1zy.js";import"./emotion-css.esm-BnwPen59.js";import"./useCombinedRefs-CI08p5vq.js";import"./portal-VFnzH7kw.js";import"./focus_trap-EVGRF3JL.js";import"./text-CPqqw-PA.js";import"./link.styles-BloqUXLf.js";const{expect:b,waitFor:h,within:C}=__STORYBOOK_MODULE_TEST__,N={...G,...x,...f,...P},B={api:c,iri:"",ontologyId:"",useLegacy:!1},R={api:c,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1},$={api:c,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1},j={api:w,iri:"https://nomenclature.info/nom/5254",ontologyId:"http://bartoc.org/en/node/1232",useLegacy:!0},v={api:w,iri:"https://iconclass.org/25F",ontologyId:"https://test.iconclass.org/",useLegacy:!0},n=async({canvasElement:e})=>{const t=C(e);await h(async()=>{const o=t.getByTestId("term-depiction");await b(o).toBeInTheDocument()},{timeout:3e3})},p=new WeakMap;function M(e,t){let o=p.get(t);o||(o=L.createRoot(t),p.set(t,o)),o.render(O.jsx(S,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createDepiction:M};let U=0;function q(){return U++}const ce={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:E}}},render:e=>{const t=q();return`
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
        `},argTypes:N,args:B},i={args:R,play:n},r={args:$,play:n},a={args:j,play:n},s={args:v,play:n};var m,g,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: TermDepictionWidgetExampleArgs,
  play: commonTermDepictionWidgetPlay
}`,...(d=(g=i.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var l,y,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: TermDepictionWidget3DArgs,
  play: commonTermDepictionWidgetPlay
}`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var D,T,I;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: ColiConcAPIGatewayDepictionArgs,
  play: commonTermDepictionWidgetPlay
}`,...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var A,W,_;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: IconclassAPIGatewayDepictionArgs,
  play: commonTermDepictionWidgetPlay
}`,...(_=(W=s.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const pe=["TermDepictionWidgetExample","TermDepictionWidget3D","ColiConcAPIGatewayDepiction","IconclassAPIGatewayDepiction"];export{a as ColiConcAPIGatewayDepiction,s as IconclassAPIGatewayDepiction,r as TermDepictionWidget3D,i as TermDepictionWidgetExample,pe as __namedExportsOrder,ce as default};
