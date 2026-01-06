import{E as i,T as y}from"./globals-BQAFDkgj.js";import{Y as F,Z as K,_ as Z,$ as J,a0 as Q,g as X,a1 as rr,a2 as er,a3 as or,z as ar,r as tr,a4 as ir}from"./storyArgs-CNybPO01.js";import{c as sr,j as nr}from"./index-Bl-ZOWkZ.js";import{W as pr}from"./GraphViewWidget-Bqft2Sfd.js";import"./useQuery-CidFMm36.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./button-Bc5sVomR.js";import"./_button-YkQj8NM0.js";import"./_button_display-DDARembv.js";import"./icon-CE3ukyQW.js";import"./preload-helper-Dp1pzeXC.js";import"./href_validator-Cs1fZ0vS.js";import"./popover-Df51L6yb.js";import"./focus_trap-Ck4UtKVR.js";import"./screen_reader_only-E1t5Dz4g.js";import"./portal-2EC9qipk.js";import"./panel-DxNbXEZo.js";import"./shadow-hpW_Gm8d.js";import"./observer-BN-lkF8-.js";import"./text-CwK6QkCY.js";import"./link.styles-Cwoei_NV.js";import"./button_empty-BCDH6Gc9.js";const{expect:cr,waitFor:lr,within:dr}=__STORYBOOK_MODULE_TEST__,hr={...tr,...ar,...or,...er,...rr,...X,...Q,...J,...Z,...K,...F},mr={api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},t={api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},gr={...t,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},br={...t,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},yr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},ur={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},Cr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Wr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:r=>{var a;let e=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(r))}?includeObsoleteEntities=true`;(a=window.open(e,"_blank"))==null||a.focus()}},Ir={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},fr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},wr={api:i,iri:"http://purl.obolibrary.org/obo/HP_0003502",ontologyId:"hp",rootWalk:!0,hierarchy:!0,targetIri:"",parameter:"lang=de"},o=async({canvasElement:r})=>{const e=dr(r);await lr(async()=>{const a=e.getByTestId("graph-widget");await cr(a).toBeInTheDocument()},{timeout:3e3})},u=new WeakMap;function Ar(r,e){let a=u.get(e);a||(a=sr.createRoot(e),u.set(e,a)),a.render(nr.jsx(pr,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createGraphView:Ar};let kr=0;function _r(){return kr++}const Fr={title:"Hierarchy and Graph/GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:ir}}},render:r=>{const e=_r();return`
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
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var E,H,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(T=(H=c.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var B,R,V;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var N,P,S;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var M,Y,z;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const Kr=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison","GraphWithGermanLable"];export{d as ChebiCaffeineHierarchy,m as ChebiCaffeineHierarchyWithComparison,s as ChebiIon,g as ChebiIonAndIonRadicalWithComparison,n as ChebiIonComparison,p as ChebiIonRootWalk,c as ChebiWater,l as ChebiWaterRootWalk,b as GraphWithGermanLable,h as WithOnNodeDoubleClickCallback,Kr as __namedExportsOrder,Fr as default};
