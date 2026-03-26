import{F as J,G as Y,H as z,I as Q,J as X,c as Z,K as rr,L as er,M as or,u as ar,i as tr,N as ir}from"./QueryClientProvider-CPt-q_PP.js";import{E as i,T as y}from"./globals-BQAFDkgj.js";import{c as sr,j as nr}from"./client-hNkKQuBU.js";import{W as pr}from"./GraphViewWidget-ssl4KJKp.js";import"./useQuery-zCszzi3z.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./popover-BN34iXip.js";import"./focus_trap-DVrlscCP.js";import"./screen_reader_only-CqfKrB6u.js";import"./portal-8653UqE0.js";import"./panel-DDfF7mxD.js";import"./shadow-DFJWDPLo.js";import"./popover_arrow.styles-B8JI4L5w.js";import"./observer-XTR45IxP.js";import"./icon-CdMdMJ2_.js";import"./preload-helper-Dp1pzeXC.js";import"./text-Bx4ixop4.js";import"./link.styles-Dyy2Pwtk.js";import"./button_empty-CFo8pT3K.js";import"./_button_display-B_kUF9Du.js";import"./_button-DJSF0-jH.js";import"./href_validator-RjdtbSlK.js";import"./button-DXpxv5pB.js";const{expect:cr,waitFor:lr,within:dr}=__STORYBOOK_MODULE_TEST__,hr={...tr,...ar,...or,...er,...rr,...Z,...X,...Q,...z,...Y,...J},mr={api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},t={api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},gr={...t,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},br={...t,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},yr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},ur={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},Cr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Wr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:r=>{var a;let e=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(r))}?includeObsoleteEntities=true`;(a=window.open(e,"_blank"))==null||a.focus()}},Ir={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},fr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},wr={api:i,iri:"http://purl.obolibrary.org/obo/HP_0003502",ontologyId:"hp",rootWalk:!0,hierarchy:!0,targetIri:"",parameter:"lang=de"},o=async({canvasElement:r})=>{const e=dr(r);await lr(async()=>{const a=e.getByTestId("graph-widget");await cr(a).toBeInTheDocument()},{timeout:3e3})},u=new WeakMap;function Ar(r,e){let a=u.get(e);a||(a=sr.createRoot(e),u.set(e,a)),a.render(nr.jsx(pr,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createGraphView:Ar};let kr=0;function _r(){return kr++}const Yr={title:"Hierarchy and Graph/GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:ir}}},render:r=>{const e=_r();return`
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
        hideLegend: ${r.hideLegend},
        stopFullWidth: ${r.stopFullWidth}
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
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var H,E,T;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var B,N,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var V,P,S;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var $,O,L;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(L=(O=h.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var D,v,x;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,F,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(M=(F=g.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var U,q,K;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(K=(q=b.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const zr=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison","GraphWithGermanLable"];export{d as ChebiCaffeineHierarchy,m as ChebiCaffeineHierarchyWithComparison,s as ChebiIon,g as ChebiIonAndIonRadicalWithComparison,n as ChebiIonComparison,p as ChebiIonRootWalk,c as ChebiWater,l as ChebiWaterRootWalk,b as GraphWithGermanLable,h as WithOnNodeDoubleClickCallback,zr as __namedExportsOrder,Yr as default};
