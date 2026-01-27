import{M as Y,N as $,P as j,Q as z,R as J,c as X,S as Z,T as rr,U as er,B as or,i as ar,V as tr}from"./storyArgs-CTFaJiud.js";import{G as ir}from"./GraphViewWidget-Fj1Y0STl.js";import{E as o,T as y}from"./globals-BQAFDkgj.js";import"./iframe-B_2J4XoL.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-BZZAPEe4.js";import"./panel-DSi6Dr3L.js";import"./shadow-HiNQoXJH.js";import"./loading_spinner-DEoZcQfU.js";import"./button-8d3FZpJF.js";import"./_button-Dlv-Iyuo.js";import"./_button_display-BTULDgp_.js";import"./icon-DHi7ZvDN.js";import"./href_validator-rv-c-leQ.js";import"./popover-CzFun4oE.js";import"./focus_trap-BEgwumxW.js";import"./screen_reader_only-D45EnqRj.js";import"./portal-gH7fUhWM.js";import"./popover_arrow.styles-ZAT8qfbY.js";import"./observer-Bx3flaxS.js";import"./text-CrNs-PM8.js";import"./link.styles-DMpsV4OU.js";import"./button_empty-B6QC6Rjq.js";const{expect:sr,waitFor:nr,within:pr}=__STORYBOOK_MODULE_TEST__,cr={...ar,...or,...er,...rr,...Z,...X,...J,...z,...j,...$,...Y},lr={api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},e={api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},hr={...e,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},mr={...e,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},dr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},br={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},gr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},yr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:b=>{var a;let g=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(b))}?includeObsoleteEntities=true`;(a=window.open(g,"_blank"))==null||a.focus()}},ur={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Cr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Ir={api:o,iri:"http://purl.obolibrary.org/obo/HP_0003502",ontologyId:"hp",rootWalk:!0,hierarchy:!0,targetIri:"",parameter:"lang=de"},r=async({canvasElement:b})=>{const g=pr(b);await nr(async()=>{const a=g.getByTestId("graph-widget");await sr(a).toBeInTheDocument()},{timeout:3e3})},qr={title:"Hierarchy and Graph/GraphViewWidget",component:ir,parameters:{layout:"centered",docs:{description:{component:tr}}},argTypes:cr,args:lr},t={args:e,play:r},i={args:hr,parameters:{docs:{disable:!0}},play:r},s={args:mr,parameters:{docs:{disable:!0}},play:r},n={args:dr,parameters:{docs:{disable:!0}},play:r},p={args:br,parameters:{docs:{disable:!0}},play:r},c={args:gr,parameters:{docs:{disable:!0}},play:r},l={args:yr,parameters:{docs:{disable:!0}},play:r},h={args:ur,parameters:{docs:{disable:!0}},play:r},m={args:Cr,parameters:{docs:{disable:!0}},play:r},d={args:Ir,parameters:{docs:{disable:!0}},play:r};var u,C,I;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: ChebiIonArgs,
  play: commonGraphViewWidgetPlay
}`,...(I=(C=t.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var W,A,f;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: ChebiIonComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(f=(A=i.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var k,_,w;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(w=(_=s.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var G,T,H;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var E,B,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var R,V,S;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var N,O,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(D=(O=l.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var L,U,v;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(v=(U=h.parameters)==null?void 0:U.docs)==null?void 0:v.source}}};var x,M,q;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var F,K,Q;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Fr=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison","GraphWithGermanLabel"];export{c as ChebiCaffeineHierarchy,h as ChebiCaffeineHierarchyWithComparison,t as ChebiIon,m as ChebiIonAndIonRadicalWithComparison,i as ChebiIonComparison,s as ChebiIonRootWalk,n as ChebiWater,p as ChebiWaterRootWalk,d as GraphWithGermanLabel,l as WithOnNodeDoubleClickCallback,Fr as __namedExportsOrder,qr as default};
