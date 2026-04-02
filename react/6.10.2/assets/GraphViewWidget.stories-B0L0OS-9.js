import{y as j,z as X,B as Z,C as rr,F as er,c as ar,G as or,H as tr,I as ir,m as sr,i as nr,J as pr}from"./storyArgs-DMzfpVjO.js";import{G as cr}from"./GraphViewWidget-DWfttWWC.js";import{E as a,T as o}from"./globals-BQAFDkgj.js";import"./iframe-C_-ykwQt.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-kRGkSmZd.js";import"./popover-h4HSiNbF.js";import"./focus_trap-Bw9ENvsO.js";import"./screen_reader_only-1zW52zJ7.js";import"./loading_spinner-B-y42WqH.js";import"./portal-R-J6YELJ.js";import"./panel-HGXV2Z_c.js";import"./shadow-BWXAjSqE.js";import"./popover_arrow.styles-wDh-5rDp.js";import"./observer-CYpxzvgU.js";import"./icon-D_F6C2LO.js";import"./text-DC-SEuOL.js";import"./link.styles-BOOaCPcR.js";import"./button_empty-hk47Xf9Z.js";import"./_button_display-DdLB9vik.js";import"./_button-CknOMWaS.js";import"./href_validator-BEEnqz0I.js";import"./button-BN48Nybo.js";const{expect:lr,waitFor:hr,within:mr}=__STORYBOOK_MODULE_TEST__,dr={...nr,...sr,...ir,...tr,...or,...ar,...er,...rr,...Z,...X,...j},gr={api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},e={api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},br={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},yr={...e,api:o,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},ur={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},Cr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},Wr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Ir={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:y=>{var t;let u=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(y))}?includeObsoleteEntities=true`;(t=window.open(u,"_blank"))==null||t.focus()}},Ar={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Gr={...e,api:a,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},fr={api:o,iri:"https://database.factgrid.de/entity/Q692839",ontologyId:"ohdab",rootWalk:!0,hierarchy:!0,targetIri:"",parameter:"lang=de",edgeLabel:"OhdAB-Kategorie"},kr={api:o,iri:"https://database.factgrid.de/entity/Q522817",targetIri:"https://database.factgrid.de/entity/Q522788",ontologyId:"ohdab",rootWalk:!0,hierarchy:!0,parameter:"lang=de",edgeLabel:"OhdAB-Kategorie"},r=async({canvasElement:y})=>{const u=mr(y);await hr(async()=>{const t=u.getByTestId("graph-widget");await lr(t).toBeInTheDocument()},{timeout:3e3})},Mr={title:"Hierarchy and Graph/GraphViewWidget",component:cr,parameters:{layout:"centered",docs:{description:{component:pr}}},argTypes:dr,args:gr},i={args:e,play:r},s={args:br,parameters:{docs:{disable:!0}},play:r},n={args:yr,parameters:{docs:{disable:!0}},play:r},p={args:ur,parameters:{docs:{disable:!0}},play:r},c={args:Cr,parameters:{docs:{disable:!0}},play:r},l={args:Wr,parameters:{docs:{disable:!0}},play:r},h={args:Ir,parameters:{docs:{disable:!0}},play:r},m={args:Ar,parameters:{docs:{disable:!0}},play:r},d={args:Gr,parameters:{docs:{disable:!0}},play:r},g={args:fr,parameters:{docs:{disable:!0}},play:r},b={args:kr,parameters:{docs:{disable:!0}},play:r};var C,W,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: ChebiIonArgs,
  play: commonGraphViewWidgetPlay
}`,...(I=(W=i.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var A,G,f;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ChebiIonComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(f=(G=s.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var k,w,_;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(_=(w=n.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var H,T,B;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var E,V,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(P=(V=c.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var R,S,O;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(N=h.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var v,x,K;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(K=(x=m.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var Q,U,F;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(F=(U=d.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var q,z,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var M,Y,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: GraphWithGermanLabelWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...($=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const Yr=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison","GraphWithGermanLabel","GraphWithGermanLabelWithComparison"];export{l as ChebiCaffeineHierarchy,m as ChebiCaffeineHierarchyWithComparison,i as ChebiIon,d as ChebiIonAndIonRadicalWithComparison,s as ChebiIonComparison,n as ChebiIonRootWalk,p as ChebiWater,c as ChebiWaterRootWalk,g as GraphWithGermanLabel,b as GraphWithGermanLabelWithComparison,h as WithOnNodeDoubleClickCallback,Yr as __namedExportsOrder,Mr as default};
