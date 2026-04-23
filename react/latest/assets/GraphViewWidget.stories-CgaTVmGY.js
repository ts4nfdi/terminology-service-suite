import{H as z,I as X,J as Z,K as rr,L as er,c as ar,M as or,N as tr,P as ir,m as sr,i as nr,Q as pr}from"./storyArgs-Evx-wMLu.js";import{G as cr}from"./GraphViewWidget-D_odC8P8.js";import{E as a,T as o}from"./globals-Dneqqh2P.js";import"./iframe-CfxKY3wJ.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-m9xRwLj_.js";import"./popover-DiGjDQg9.js";import"./focus_trap-Dhq98KXM.js";import"./screen_reader_only-Be5_RS47.js";import"./portal-C3ovjy1y.js";import"./panel-mjunHdUn.js";import"./shadow-C0Nkui7X.js";import"./popover_arrow.styles-eMozRdpX.js";import"./observer-fdCcL414.js";import"./icon-BIjUEb8V.js";import"./text-DsVPKzkZ.js";import"./link.styles-BHtuDENE.js";import"./button_empty-ZTabcN2j.js";import"./_button_display-CfjOiPtx.js";import"./_button-B6nbxLh3.js";import"./href_validator-8f9eGl2L.js";import"./button-NZV0RNyO.js";const{expect:lr,waitFor:hr,within:mr}=__STORYBOOK_MODULE_TEST__,dr={...nr,...sr,...ir,...tr,...or,...ar,...er,...rr,...Z,...X,...z},gr={api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},e={api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},br={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},yr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},ur={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},Cr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},Wr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Ir={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:y=>{var t;let u=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(y))}?includeObsoleteEntities=true`;(t=window.open(u,"_blank"))==null||t.focus()}},Ar={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},fr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Gr={api:o,iri:"https://database.factgrid.de/entity/Q692839",ontologyId:"ohdab",rootWalk:!0,hierarchy:!0,targetIri:"",parameter:"lang=de",edgeLabel:"OhdAB-Kategorie"},kr={api:o,iri:"https://database.factgrid.de/entity/Q522817",targetIri:"https://database.factgrid.de/entity/Q522788",ontologyId:"ohdab",rootWalk:!0,hierarchy:!0,parameter:"lang=de",edgeLabel:"OhdAB-Kategorie"},r=async({canvasElement:y})=>{const u=mr(y);await hr(async()=>{const t=u.getByTestId("graph-widget");await lr(t).toBeInTheDocument()},{timeout:3e3})},Jr={title:"Hierarchy and Graph/GraphViewWidget",component:cr,parameters:{layout:"centered",docs:{description:{component:pr}}},argTypes:dr,args:gr},i={args:e,play:r},s={args:br,parameters:{docs:{disable:!0}},play:r},n={args:yr,parameters:{docs:{disable:!0}},play:r},p={args:ur,parameters:{docs:{disable:!0}},play:r},c={args:Cr,parameters:{docs:{disable:!0}},play:r},l={args:Wr,parameters:{docs:{disable:!0}},play:r},h={args:Ir,parameters:{docs:{disable:!0}},play:r},m={args:Ar,parameters:{docs:{disable:!0}},play:r},d={args:fr,parameters:{docs:{disable:!0}},play:r},g={args:Gr,parameters:{docs:{disable:!0}},play:r},b={args:kr,parameters:{docs:{disable:!0}},play:r};var C,W,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: ChebiIonArgs,
  play: commonGraphViewWidgetPlay
}`,...(I=(W=i.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var A,f,G;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ChebiIonComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(G=(f=s.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};var k,w,_;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(_=(w=n.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var H,T,E;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(E=(T=p.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var B,P,V;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var R,S,O;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(O=(S=l.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var L,N,D;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(D=(N=h.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var K,Q,v;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(v=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:v.source}}};var x,U,M;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(M=(U=d.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var q,F,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(J=(F=g.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var Y,$,j;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: GraphWithGermanLabelWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(j=($=b.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const Yr=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison","GraphWithGermanLabel","GraphWithGermanLabelWithComparison"];export{l as ChebiCaffeineHierarchy,m as ChebiCaffeineHierarchyWithComparison,i as ChebiIon,d as ChebiIonAndIonRadicalWithComparison,s as ChebiIonComparison,n as ChebiIonRootWalk,p as ChebiWater,c as ChebiWaterRootWalk,g as GraphWithGermanLabel,b as GraphWithGermanLabelWithComparison,h as WithOnNodeDoubleClickCallback,Yr as __namedExportsOrder,Jr as default};
