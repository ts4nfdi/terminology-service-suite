import{E as n,T as I}from"./globals-CvFyH82M.js";import{X as E,Y as k,z as x,q as A,Z as V}from"./storyArgs-AFjXh7XW.js";import{c as T,j as f}from"./index-ZCdkkhYt.js";import{W as R}from"./GraphViewWidget-Dv-2vz6W.js";import"./useQuery-BSQecOR7.js";import"./ts4nfdiGraphStyle-pEL6bT6-.js";import"./popover-DSoekXbz.js";import"./_button-jUUP9GKn.js";import"./focus_trap-BP_Hws0S.js";import"./screen_reader_only-B9DY1sFH.js";import"./portal-DiJ1n8WN.js";import"./panel-DRTqr2vT.js";import"./shadow-DBsugtKM.js";import"./observer-y2cdnWU0.js";import"./icon-RvlT3YZ5.js";import"./preload-helper-Dp1pzeXC.js";import"./button-7mVtQWS6.js";import"./_button_display-CiKRspDS.js";import"./href_validator-CCXnw10u.js";import"./button_empty-C2K4yniN.js";import"./text-dCu-lByA.js";import"./link.styles-CJzvf_6u.js";const{expect:C,waitFor:v,within:B}=__STORYBOOK_MODULE_TEST__,O={...A,...x,...k,...E},P={api:n,iri:"",ontologyId:"",rootWalk:!1},S={api:I,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!1},N={api:I,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!0},$={api:n,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1},D={api:n,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0},p=async({canvasElement:r})=>{const e=B(r);await v(async()=>{const o=e.getByTestId("graph-view");await C(o).toBeInTheDocument()},{timeout:3e3})},c=new WeakMap;function j(r,e){let o=c.get(e);o||(o=T.createRoot(e),c.set(e,o)),o.render(f.jsx(R,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createGraphView:j};let q=0;function H(){return q++}const lr={title:"Hierarchy and Graph/GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:V}}},render:r=>{const e=H();return`
<div id="graph_view_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createGraphView(
    {
        iri:"${r.iri}",
        ontologyId:"${r.ontologyId}",
        api:"${r.api}",                
        rootWalk: ${r.rootWalk},
        className:${r.className}
    },
    document.querySelector('#graph_view_widget_container_${e}')
)
<\/script>
        `},argTypes:O,args:P},t={args:S,play:p},a={args:N,parameters:{docs:{disable:!0}},play:p},i={args:$,parameters:{docs:{disable:!0}},play:p},s={args:D,parameters:{docs:{disable:!0}},play:p};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: GraphViewWidgetExampleArgs,
  play: commonGraphViewWidgetPlay
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,W,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: RootWalkGraphExampleArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(h=(W=a.parameters)==null?void 0:W.docs)==null?void 0:h.source}}};var y,u,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(w=(u=i.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var b,_,G;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(G=(_=s.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const dr=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk"];export{i as ChebiWater,s as ChebiWaterRootWalk,t as GraphViewWidgetExample,a as RootWalkGraphExample,dr as __namedExportsOrder,lr as default};
