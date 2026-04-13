import{v as E,M as P,u as f,i as x,cD as b}from"./QueryClientProvider-tBG0NWM0.js";import{E as c,b as w}from"./globals-Dneqqh2P.js";import{c as L,j as O}from"./client-hNkKQuBU.js";import{W as S}from"./TermDepictionWidget-CiSjGaIG.js";import"./model-viewer-C2wGp_8x.js";import"./useQuery-CJ8-LNvG.js";import"./OlsThingApi-B6xLE3Ry.js";import"./shadow-DrkSvs48.js";import"./screen_reader_only-ByBZZHSH.js";import"./icon-CW9K28UO.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CnLckb93.js";import"./emotion-css.esm-CVeUUQIW.js";import"./portal-cejDdY-l.js";import"./focus_trap-BZEPbe3u.js";import"./text-Bf6klxy0.js";import"./link.styles-CSK3t4GY.js";const{expect:G,waitFor:h,within:C}=__STORYBOOK_MODULE_TEST__,N={...x,...f,...P,...E},B={api:c,iri:"",ontologyId:"",useLegacy:!1},R={api:c,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1},$={api:c,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1},v={api:w,iri:"https://nomenclature.info/nom/5254",ontologyId:"http://bartoc.org/en/node/1232",useLegacy:!0},j={api:w,iri:"https://iconclass.org/25F",ontologyId:"https://test.iconclass.org/",useLegacy:!0},n=async({canvasElement:e})=>{const t=C(e);await h(async()=>{const o=t.getByTestId("term-depiction");await G(o).toBeInTheDocument()},{timeout:3e3})},p=new WeakMap;function M(e,t){let o=p.get(t);o||(o=L.createRoot(t),p.set(t,o)),o.render(O.jsx(S,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createDepiction:M};let U=0;function q(){return U++}const se={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:b}}},render:e=>{const t=q();return`
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
        `},argTypes:N,args:B},i={args:R,play:n},r={args:$,play:n},a={args:v,play:n},s={args:j,play:n};var m,g,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(_=(W=s.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const ne=["TermDepictionWidgetExample","TermDepictionWidget3D","ColiConcAPIGatewayDepiction","IconclassAPIGatewayDepiction"];export{a as ColiConcAPIGatewayDepiction,s as IconclassAPIGatewayDepiction,r as TermDepictionWidget3D,i as TermDepictionWidgetExample,ne as __namedExportsOrder,se as default};
