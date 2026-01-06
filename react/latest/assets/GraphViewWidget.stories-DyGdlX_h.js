import{G as Q}from"./GraphViewWidget-DBDpclV6.js";import{E as a,T as y}from"./globals-BQAFDkgj.js";import{N as Y,P as $,Q as z,R as J,S as X,a as Z,T as rr,U as er,V as ar,C as or,j as tr,W as ir}from"./widgetDescriptions-D-baph22.js";import"./iframe-YnD9Auhi.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-CCQGsteZ.js";import"./button-nt4-OZz3.js";import"./_button-BtwWFEXu.js";import"./_button_display-BKoHyUFi.js";import"./loading_spinner-BVNnrKN2.js";import"./icon-B0KE5QCF.js";import"./href_validator-DdiueOfy.js";import"./popover-DZiOggTr.js";import"./focus_trap-CTY3esuS.js";import"./screen_reader_only-YxFuOLl8.js";import"./portal-DAy9L_me.js";import"./panel-B3lBZLDB.js";import"./shadow-Bm-oQzQh.js";import"./observer-5i9BUrBX.js";import"./text-C7w47Js1.js";import"./link.styles-BL-nBnb2.js";import"./button_empty-DmDyGrAL.js";const{expect:sr,waitFor:nr,within:pr}=__STORYBOOK_MODULE_TEST__,cr={...tr,...or,...ar,...er,...rr,...Z,...X,...J,...z,...$,...Y},lr={api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},e={api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},hr={...e,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},mr={...e,api:y,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},dr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},br={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},gr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},yr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:b=>{var o;let g=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(b))}?includeObsoleteEntities=true`;(o=window.open(g,"_blank"))==null||o.focus()}},ur={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Cr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Ir={api:a,iri:"http://purl.obolibrary.org/obo/HP_0003502",ontologyId:"hp",rootWalk:!0,hierarchy:!0,targetIri:"",parameter:"lang=de"},r=async({canvasElement:b})=>{const g=pr(b);await nr(async()=>{const o=g.getByTestId("graph-widget");await sr(o).toBeInTheDocument()},{timeout:3e3})},jr={title:"Hierarchy and Graph/GraphViewWidget",component:Q,parameters:{layout:"centered",docs:{description:{component:ir}}},argTypes:cr,args:lr},t={args:e,play:r},i={args:hr,parameters:{docs:{disable:!0}},play:r},s={args:mr,parameters:{docs:{disable:!0}},play:r},n={args:dr,parameters:{docs:{disable:!0}},play:r},p={args:br,parameters:{docs:{disable:!0}},play:r},c={args:gr,parameters:{docs:{disable:!0}},play:r},l={args:yr,parameters:{docs:{disable:!0}},play:r},h={args:ur,parameters:{docs:{disable:!0}},play:r},m={args:Cr,parameters:{docs:{disable:!0}},play:r},d={args:Ir,parameters:{docs:{disable:!0}},play:r};var u,C,I;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(U=h.parameters)==null?void 0:U.docs)==null?void 0:v.source}}};var x,j,q;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,K,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const qr=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison","GraphWithGermanLabel"];export{c as ChebiCaffeineHierarchy,h as ChebiCaffeineHierarchyWithComparison,t as ChebiIon,m as ChebiIonAndIonRadicalWithComparison,i as ChebiIonComparison,s as ChebiIonRootWalk,n as ChebiWater,p as ChebiWaterRootWalk,d as GraphWithGermanLabel,l as WithOnNodeDoubleClickCallback,qr as __namedExportsOrder,jr as default};
