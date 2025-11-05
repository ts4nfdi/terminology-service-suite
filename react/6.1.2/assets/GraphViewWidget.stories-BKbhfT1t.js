import{G as O}from"./GraphViewWidget-DjyPBmJw.js";import{E as e,T}from"./globals-CvFyH82M.js";import{M as P,N as R,C as x,j as B,P as N}from"./widgetDescriptions-B8keAX7-.js";import"./iframe-Br2QEmbz.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-C_VHNibu.js";import"./panel-CaoY5siy.js";import"./shadow-TUd__aC_.js";import"./loading_spinner-B0eLwUeo.js";import"./button-BVvCnTpI.js";import"./_button-t2izjvgZ.js";import"./_button_display-CsG3ZOe3.js";import"./icon-CwEIxLdj.js";import"./href_validator-BHUa5urh.js";import"./popover-CIVmvl8R.js";import"./focus_trap-BFnXwTUM.js";import"./screen_reader_only-BT-neSIv.js";import"./portal-CCYC8D0w.js";import"./observer-BjyJwpSA.js";import"./button_empty-UrMMx_ZD.js";import"./text-CHstZrML.js";import"./link.styles-BOUSP1AK.js";const{expect:S,waitFor:D,within:H}=__STORYBOOK_MODULE_TEST__,v={...B,...x,...R,...P},U={api:e,iri:"",ontologyId:"",rootWalk:!1},M={api:T,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!1},j={api:T,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!0},q={api:e,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1},F={api:e,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0},K={api:e,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},L={api:e,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:c=>{var o;let l=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(c))}?includeObsoleteEntities=true`;(o=window.open(l,"_blank"))==null||o.focus()}},r=async({canvasElement:c})=>{const l=H(c);await D(async()=>{const o=l.getByTestId("graph-view");await S(o).toBeInTheDocument()},{timeout:3e3})},br={title:"Hierarchy and Graph/GraphViewWidget",component:O,parameters:{layout:"centered",docs:{description:{component:N}}},argTypes:v,args:U},a={args:M,play:r},t={args:j,parameters:{docs:{disable:!0}},play:r},s={args:q,parameters:{docs:{disable:!0}},play:r},i={args:F,parameters:{docs:{disable:!0}},play:r},p={args:K,parameters:{docs:{disable:!0}},play:r},n={args:L,parameters:{docs:{disable:!0}},play:r};var m,d,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: GraphViewWidgetExampleArgs,
  play: commonGraphViewWidgetPlay
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,b,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: RootWalkGraphExampleArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,W,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(C=(W=s.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var k,w,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var G,A,E;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var _,f,V;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(V=(f=n.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};const ur=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback"];export{p as ChebiCaffeineHierarchy,s as ChebiWater,i as ChebiWaterRootWalk,a as GraphViewWidgetExample,t as RootWalkGraphExample,n as WithOnNodeDoubleClickCallback,ur as __namedExportsOrder,br as default};
