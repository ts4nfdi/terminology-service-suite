import{F as X,G as Z,H as rr,I as er,J as ar,c as or,K as tr,L as ir,M as sr,u as nr,i as pr,N as cr}from"./QueryClientProvider-Bb9dgOo0.js";import{E as i,T as s}from"./globals-Dneqqh2P.js";import{c as lr,j as dr}from"./client-hNkKQuBU.js";import{W as hr}from"./GraphViewWidget-Dd7iK3Fw.js";import"./useQuery-qa6g1_-U.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./popover-BDSniH1a.js";import"./focus_trap-BRGmUgIn.js";import"./screen_reader_only-DIFtlAI0.js";import"./portal-CP3apiJn.js";import"./panel-Biy_ZdnD.js";import"./shadow-Dc9gHgOP.js";import"./popover_arrow.styles-Oq2hUCjK.js";import"./observer-XTR45IxP.js";import"./icon-DnCCTuQY.js";import"./preload-helper-Dp1pzeXC.js";import"./text-DNG6MXRa.js";import"./link.styles-DBsS1rJf.js";import"./button_empty-CpHEQyZW.js";import"./_button_display-DJE185J9.js";import"./_button-DogrUfmp.js";import"./href_validator-RjdtbSlK.js";import"./button-CMaLMnn_.js";const{expect:mr,waitFor:gr,within:br}=__STORYBOOK_MODULE_TEST__,yr={...pr,...nr,...sr,...ir,...tr,...or,...ar,...er,...rr,...Z,...X},ur={api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},t={api:s,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},Cr={...t,api:s,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},Wr={...t,api:s,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},Ir={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},Ar={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},fr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},wr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:r=>{var o;let a=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(r))}?includeObsoleteEntities=true`;(o=window.open(a,"_blank"))==null||o.focus()}},kr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},Gr={...t,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},_r={api:s,iri:"https://database.factgrid.de/entity/Q692839",ontologyId:"ohdab",rootWalk:!0,hierarchy:!0,targetIri:"",parameter:"lang=de",edgeLabel:"OhdAB-Kategorie"},Er={api:s,iri:"https://database.factgrid.de/entity/Q522817",targetIri:"https://database.factgrid.de/entity/Q522788",ontologyId:"ohdab",rootWalk:!0,hierarchy:!0,parameter:"lang=de",edgeLabel:"OhdAB-Kategorie"},e=async({canvasElement:r})=>{const a=br(r);await gr(async()=>{const o=a.getByTestId("graph-widget");await mr(o).toBeInTheDocument()},{timeout:3e3})},C=new WeakMap;function Hr(r,a){let o=C.get(a);o||(o=lr.createRoot(a),C.set(a,o)),o.render(dr.jsx(hr,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createGraphView:Hr};let Tr=0;function Br(){return Tr++}const re={title:"Hierarchy and Graph/GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:cr}}},render:r=>{const a=Br();return`
<div id="graph_view_widget_container_${a}"></div>

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
    document.querySelector('#graph_view_widget_container_${a}')
)
<\/script>
        `},argTypes:yr,args:ur},n={args:t,play:e},p={args:Cr,parameters:{docs:{disable:!0}},play:e},c={args:Wr,parameters:{docs:{disable:!0}},play:e},l={args:Ir,parameters:{docs:{disable:!0}},play:e},d={args:Ar,parameters:{docs:{disable:!0}},play:e},h={args:fr,parameters:{docs:{disable:!0}},play:e},m={args:wr,parameters:{docs:{disable:!0}},play:e},g={args:kr,parameters:{docs:{disable:!0}},play:e},b={args:Gr,parameters:{docs:{disable:!0}},play:e},y={args:_r,parameters:{docs:{disable:!0}},play:e},u={args:Er,parameters:{docs:{disable:!0}},play:e};var W,I,A;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: ChebiIonArgs,
  play: commonGraphViewWidgetPlay
}`,...(A=(I=n.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var f,w,k;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: ChebiIonComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(k=(w=p.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var G,_,E;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var H,T,B;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var V,N,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var L,P,S;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(S=(P=h.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var $,O,D;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var v,x,j;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(j=(x=g.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var F,K,M;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(M=(K=b.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,q;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(q=(U=y.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,Y,z;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: GraphWithGermanLabelWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const ee=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison","GraphWithGermanLabel","GraphWithGermanLabelWithComparison"];export{h as ChebiCaffeineHierarchy,g as ChebiCaffeineHierarchyWithComparison,n as ChebiIon,b as ChebiIonAndIonRadicalWithComparison,p as ChebiIonComparison,c as ChebiIonRootWalk,l as ChebiWater,d as ChebiWaterRootWalk,y as GraphWithGermanLabel,u as GraphWithGermanLabelWithComparison,m as WithOnNodeDoubleClickCallback,ee as __namedExportsOrder,re as default};
