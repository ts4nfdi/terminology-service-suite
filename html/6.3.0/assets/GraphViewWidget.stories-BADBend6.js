import{E as i,T as b}from"./globals-CvFyH82M.js";import{X as U,Y as M,Z as Y,_ as z,$ as F,g as K,a0 as X,a1 as Z,a2 as J,z as Q,q as rr,a3 as er}from"./storyArgs-DZ1xh4Kd.js";import{c as or,j as ar}from"./index-Bl-ZOWkZ.js";import{W as tr}from"./GraphViewWidget-a8fggiqT.js";import"./useQuery-DlyFBCNE.js";import"./ts4nfdiGraphStyle-DEBK50Pl.js";import"./panel-i4gJ-mwa.js";import"./shadow-WGd4ToQx.js";import"./button-Bw_S0xe0.js";import"./_button-MEF3Os-7.js";import"./_button_display-r2OUxT0X.js";import"./icon-BkSAzOGi.js";import"./preload-helper-Dp1pzeXC.js";import"./href_validator-Cs1fZ0vS.js";import"./popover-5VchAQYG.js";import"./focus_trap-CEnj9AEe.js";import"./screen_reader_only-C8ur64yQ.js";import"./portal-syW8LhEE.js";import"./observer-DEqNDDoe.js";import"./text-BVMgtw2S.js";import"./link.styles-_sgCY79g.js";import"./button_empty-Usw9C4Rh.js";const{expect:ir,waitFor:sr,within:nr}=__STORYBOOK_MODULE_TEST__,pr={...rr,...Q,...J,...Z,...X,...K,...F,...z,...Y,...M,...U},cr={api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},a={api:b,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!1,hierarchy:!1,targetIri:""},lr={...a,api:b,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_139544",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},dr={...a,api:b,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},hr={...a,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1,hierarchy:!1},mr={...a,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0,hierarchy:!1},gr={...a,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},br={...a,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",ontologyId:"chebi",rootWalk:!0,hierarchy:!0,onNodeClick:r=>{var o;let e=`https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(r))}?includeObsoleteEntities=true`;(o=window.open(e,"_blank"))==null||o.focus()}},yr={...a,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_27732",targetIri:"http://purl.obolibrary.org/obo/CHEBI_30151",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},ur={...a,api:i,iri:"http://purl.obolibrary.org/obo/CHEBI_24870",targetIri:"http://purl.obolibrary.org/obo/CHEBI_36875",ontologyId:"chebi",rootWalk:!0,hierarchy:!0},t=async({canvasElement:r})=>{const e=nr(r);await sr(async()=>{const o=e.getByTestId("graph-widget");await ir(o).toBeInTheDocument()},{timeout:3e3})},y=new WeakMap;function Cr(r,e){let o=y.get(e);o||(o=or.createRoot(e),y.set(e,o)),o.render(ar.jsx(tr,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createGraphView:Cr};let Ir=0;function Wr(){return Ir++}const qr={title:"Hierarchy and Graph/GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:er}}},render:r=>{const e=Wr();return`
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
        edgeLabel: ${r.edgeLabel}
    },
    document.querySelector('#graph_view_widget_container_${e}')
)
<\/script>
        `},argTypes:pr,args:cr},s={args:a,play:t},n={args:lr,parameters:{docs:{disable:!0}},play:t},p={args:dr,parameters:{docs:{disable:!0}},play:t},c={args:hr,parameters:{docs:{disable:!0}},play:t},l={args:mr,parameters:{docs:{disable:!0}},play:t},d={args:gr,parameters:{docs:{disable:!0}},play:t},h={args:br,parameters:{docs:{disable:!0}},play:t},m={args:yr,parameters:{docs:{disable:!0}},play:t},g={args:ur,parameters:{docs:{disable:!0}},play:t};var u,C,I;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: ChebiIonArgs,
  play: commonGraphViewWidgetPlay
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var W,f,w;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: ChebiIonComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var A,k,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var E,T,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var B,G,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(R=(G=l.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var N,V,P;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(P=(V=d.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var S,$,O;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(O=($=h.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var D,v,x;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,L,q;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true
    }
  },
  play: commonGraphViewWidgetPlay
}`,...(q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const Ur=["ChebiIon","ChebiIonComparison","ChebiIonRootWalk","ChebiWater","ChebiWaterRootWalk","ChebiCaffeineHierarchy","WithOnNodeDoubleClickCallback","ChebiCaffeineHierarchyWithComparison","ChebiIonAndIonRadicalWithComparison"];export{d as ChebiCaffeineHierarchy,m as ChebiCaffeineHierarchyWithComparison,s as ChebiIon,g as ChebiIonAndIonRadicalWithComparison,n as ChebiIonComparison,p as ChebiIonRootWalk,c as ChebiWater,l as ChebiWaterRootWalk,h as WithOnNodeDoubleClickCallback,Ur as __namedExportsOrder,qr as default};
