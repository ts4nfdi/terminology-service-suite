import{S as K,T as X,U as Z,V as z,W as J,c as Q,X as rr,Y as er,Z as or,u as ar,i as tr,_ as ir}from"./QueryClientProvider-Cv6DMAwY.js";import{E as i,T as y}from"./globals-BQAFDkgj.js";import{c as sr,j as nr}from"./client-hNkKQuBU.js";import{W as pr}from"./GraphViewWidget-D9h0l7TH.js";import"./useQuery-D80UYlTP.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./panel-pG-TvU-E.js";import"./shadow-BRsMk7Ev.js";import"./button-Dca_e4tp.js";import"./_button-DR0DDSYL.js";import"./_button_display-mhn372ul.js";import"./icon-Dbgqo2NT.js";import"./preload-helper-Dp1pzeXC.js";import"./href_validator-RjdtbSlK.js";import"./popover-CJy3jVu9.js";import"./focus_trap-dYxqw4EE.js";import"./screen_reader_only-DI2vJL1y.js";import"./portal-DMzDUsME.js";import"./popover_arrow.styles-CHH0a3nc.js";import"./observer-XTR45IxP.js";import"./text-Dj3fvmL0.js";import"./link.styles-DeXSguuE.js";import"./button_empty-BPGL8DZd.js";const{expect:cr,waitFor:lr,within:dr}=__STORYBOOK_MODULE_TEST__,hr={...tr,...ar,...or,...er,...rr,...Q,...J,...z,...Z,...X,...K},mr={api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},t={api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},gr={...t,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},br={...t,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},yr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},ur={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},Cr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Wr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:r=>{var a;let e=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(r))}?includeObsoleteEntities=true`;(a=window.open(e,"_blank"))==null||a.focus()}},Ir={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},fr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},wr={api:i,iri:"http://purl.obolibrary.org/obo/HP_0003502",ontologyId:"hp",rootWalk:!0,hierarchy:!0,targetIri:"",parameter:"lang=de"},o=async({canvasElement:r})=>{const e=dr(r);await lr(async()=>{const a=e.getByTestId("graph-widget");await cr(a).toBeInTheDocument()},{timeout:3e3})},u=new WeakMap;function Ar(r,e){let a=u.get(e);a||(a=sr.createRoot(e),u.set(e,a)),a.render(nr.jsx(pr,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createGraphView:Ar};let kr=0;function _r(){return kr++}const Xr={title:"Hierarchy and Graph/GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:ir}}},render:r=>{const e=_r();return`
<div id="graph_view_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createGraphView(
    {
        iri:"${r.iri}",
        ontologyId:"${r.ontologyId}",
        api:"${r.api}",                
        rootWalk: ${r.rootWalk},
        className:${r.className},
        hierarchy: ${r.hierarchy},
        targetIri: "${r.targetIri}",
        onNodeClick: ${r.onNodeClick},
        edgeLabel: ${r.edgeLabel},
        parameter: "${r.parameter}",
    },
    document.querySelector('#graph_view_widget_container_${e}')
)
<\/script>
        `},argTypes:hr,args:mr},s={args:t,play:o},n={args:gr,parameters:{docs:{disable:!0}},play:o},p={args:br,parameters:{docs:{disable:!0}},play:o},c={args:yr,parameters:{docs:{disable:!0}},play:o},l={args:ur,parameters:{docs:{disable:!0}},play:o},d={args:Cr,parameters:{docs:{disable:!0}},play:o},h={args:Wr,parameters:{docs:{disable:!0}},play:o},m={args:Ir,parameters:{docs:{disable:!0}},play:o},g={args:fr,parameters:{docs:{disable:!0}},play:o},b={args:wr,parameters:{docs:{disable:!0}},play:o};var C,W,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: ChebiIonArgs,
  play: commonGraphViewWidgetPlay
}`,...(I=(W=s.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var f,w,A;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: ChebiIonComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(A=(w=n.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var k,_,G;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var T,E,H;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var V,B,R;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var N,P,S;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var $,O,D;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(D=(O=h.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var v,x,L;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(L=(x=m.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var j,U,q;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var M,Y,F;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(F=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};const Zr=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison","GraphWithGermanLable"];export{d as ChebiCaffeineHierarchy,m as ChebiCaffeineHierarchyWithComparison,s as ChebiIon,g as ChebiIonAndIonRadicalWithComparison,n as ChebiIonComparison,p as ChebiIonRootWalk,c as ChebiWater,l as ChebiWaterRootWalk,b as GraphWithGermanLable,h as WithOnNodeDoubleClickCallback,Zr as __namedExportsOrder,Xr as default};
