import{G as j}from"./GraphViewWidget-BqKUMYkS.js";import{E as o,T as g}from"./globals-CvFyH82M.js";import{M as q,N as F,P as K,Q,R as Y,a as $,S as z,T as J,U as X,C as Z,j as rr,V as er}from"./widgetDescriptions-Bv-fdvpN.js";import"./iframe-4vt7eyOh.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-BFYeHhfm.js";import"./panel-BMYuMqY-.js";import"./shadow-Cq6SD1hJ.js";import"./loading_spinner-BDnNTy53.js";import"./button-DmsTQBlR.js";import"./_button-C9-hZOfI.js";import"./_button_display-C1VR2ToA.js";import"./icon-qePc5JLU.js";import"./href_validator-5vXTg-cN.js";import"./popover-QhC-yujw.js";import"./focus_trap-7NCi838O.js";import"./screen_reader_only-CngRkF7V.js";import"./portal-CP4xdeBz.js";import"./observer-DlaDbBrI.js";import"./text-C7uI9-P8.js";import"./link.styles-D1gvuRhv.js";import"./button_empty-CBO4gefs.js";const{expect:or,waitFor:ar,within:tr}=__STORYBOOK_MODULE_TEST__,ir={...rr,...Z,...X,...J,...z,...$,...Y,...Q,...K,...F,...q},sr={api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},r={api:g,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},nr={...r,api:g,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},pr={...r,api:g,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},cr={...r,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},lr={...r,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},hr={...r,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},mr={...r,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:d=>{var a;let b=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(d))}?includeObsoleteEntities=true`;(a=window.open(b,"_blank"))==null||a.focus()}},dr={...r,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},br={...r,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},e=async({canvasElement:d})=>{const b=tr(d);await ar(async()=>{const a=b.getByTestId("graph-widget");await or(a).toBeInTheDocument()},{timeout:3e3})},Dr={title:"Hierarchy and Graph/GraphViewWidget",component:j,parameters:{layout:"centered",docs:{description:{component:er}}},argTypes:ir,args:sr},t={args:r,play:e},i={args:nr,parameters:{docs:{disable:!0}},play:e},s={args:pr,parameters:{docs:{disable:!0}},play:e},n={args:cr,parameters:{docs:{disable:!0}},play:e},p={args:lr,parameters:{docs:{disable:!0}},play:e},c={args:hr,parameters:{docs:{disable:!0}},play:e},l={args:mr,parameters:{docs:{disable:!0}},play:e},h={args:dr,parameters:{docs:{disable:!0}},play:e},m={args:br,parameters:{docs:{disable:!0}},play:e};var y,u,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ChebiIonArgs,
  play: commonGraphViewWidgetPlay
}`,...(C=(u=t.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var I,W,A;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: ChebiIonComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(A=(W=i.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var f,k,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(_=(k=s.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var w,T,H;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var E,B,G;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var R,V,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(P=(V=c.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var S,N,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var D,U,v;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(v=(U=h.parameters)==null?void 0:U.docs)==null?void 0:v.source}}};var x,L,M;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const Ur=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison"];export{c as ChebiCaffeineHierarchy,h as ChebiCaffeineHierarchyWithComparison,t as ChebiIon,m as ChebiIonAndIonRadicalWithComparison,i as ChebiIonComparison,s as ChebiIonRootWalk,n as ChebiWater,p as ChebiWaterRootWalk,l as WithOnNodeDoubleClickCallback,Ur as __namedExportsOrder,Dr as default};
