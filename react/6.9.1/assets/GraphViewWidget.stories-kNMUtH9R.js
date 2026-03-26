import{y as M,z as Y,B as $,C as j,F as Q,c as X,G as Z,H as rr,I as er,m as or,i as ar,J as tr}from"./storyArgs-UiifW3BQ.js";import{G as ir}from"./GraphViewWidget-BadNQJOx.js";import{E as o,T as y}from"./globals-BQAFDkgj.js";import"./iframe-BQkE0QAh.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-Bjlu8Ns9.js";import"./popover-D-8K4ufS.js";import"./focus_trap-B7UGj_7h.js";import"./screen_reader_only-Dtnj6aa7.js";import"./loading_spinner-BgndJehD.js";import"./portal-Drme9NEY.js";import"./panel-C0G1uqKa.js";import"./shadow-D7lrNPIB.js";import"./popover_arrow.styles-D56had0M.js";import"./observer-CgR_zX1t.js";import"./icon-CxYndrtV.js";import"./text-D-klRNBy.js";import"./link.styles-C73-nN9_.js";import"./button_empty-DHxY1nJw.js";import"./_button_display-C-e5x0rp.js";import"./_button-2FCySdwu.js";import"./href_validator-np6VPYwD.js";import"./button-knqQ_Ib1.js";const{expect:sr,waitFor:nr,within:pr}=__STORYBOOK_MODULE_TEST__,cr={...ar,...or,...er,...rr,...Z,...X,...Q,...j,...$,...Y,...M},lr={api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},e={api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},mr={...e,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},hr={...e,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},dr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},br={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},gr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},yr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:b=>{var a;let g=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(b))}?includeObsoleteEntities=true`;(a=window.open(g,"_blank"))==null||a.focus()}},ur={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Cr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Ir={api:o,iri:"http://purl.obolibrary.org/obo/HP_0003502",ontologyId:"hp",rootWalk:!0,hierarchy:!0,targetIri:"",parameter:"lang=de"},r=async({canvasElement:b})=>{const g=pr(b);await nr(async()=>{const a=g.getByTestId("graph-widget");await sr(a).toBeInTheDocument()},{timeout:3e3})},qr={title:"Hierarchy and Graph/GraphViewWidget",component:ir,parameters:{layout:"centered",docs:{description:{component:tr}}},argTypes:cr,args:lr},t={args:e,play:r},i={args:mr,parameters:{docs:{disable:!0}},play:r},s={args:hr,parameters:{docs:{disable:!0}},play:r},n={args:dr,parameters:{docs:{disable:!0}},play:r},p={args:br,parameters:{docs:{disable:!0}},play:r},c={args:gr,parameters:{docs:{disable:!0}},play:r},l={args:yr,parameters:{docs:{disable:!0}},play:r},m={args:ur,parameters:{docs:{disable:!0}},play:r},h={args:Cr,parameters:{docs:{disable:!0}},play:r},d={args:Ir,parameters:{docs:{disable:!0}},play:r};var u,C,I;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(A=i.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var k,G,_;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(_=(G=s.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var w,H,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(T=(H=n.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var E,B,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(O=l.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var L,v,x;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var U,F,q;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(q=(F=h.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var z,J,K;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const zr=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison","GraphWithGermanLabel"];export{c as ChebiCaffeineHierarchy,m as ChebiCaffeineHierarchyWithComparison,t as ChebiIon,h as ChebiIonAndIonRadicalWithComparison,i as ChebiIonComparison,s as ChebiIonRootWalk,n as ChebiWater,p as ChebiWaterRootWalk,d as GraphWithGermanLabel,l as WithOnNodeDoubleClickCallback,zr as __namedExportsOrder,qr as default};
