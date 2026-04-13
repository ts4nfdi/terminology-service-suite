import{q as H,o as J,r as X,w as Z,y as oo,p as to,u as eo,x as ro,z as ao,i as io,C as so}from"./QueryClientProvider-tBG0NWM0.js";import{E as t}from"./globals-Dneqqh2P.js";import{c as no,j as po}from"./client-hNkKQuBU.js";import{W as go}from"./EntityRelationsWidget-BiOIo5BH.js";import"./useQuery-CJ8-LNvG.js";import"./ClassExpression-BDCCBtXX.js";import"./OntologyBadge-D74mBx0r.js";import"./badge-1LAF02M_.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-BGkdMWmt.js";import"./_button-DlbInGvA.js";import"./icon-CW9K28UO.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CnLckb93.js";import"./ExpandableOntologyBadgeList-B7vitSpn.js";import"./Tooltip-DWDBDu7v.js";import"./icon_tip-BQUujVP3.js";import"./tool_tip-TDjIL_x9.js";import"./shadow-DrkSvs48.js";import"./panel-CmjUMykD.js";import"./popover_arrow.styles-C9XUL52R.js";import"./portal-cejDdY-l.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./card-3hfvfJNY.js";import"./title-XQGlUu7n.js";import"./text-Bf6klxy0.js";import"./link.styles-CSK3t4GY.js";import"./button-DNxJpH64.js";import"./_button_display-BPcL1Fhb.js";import"./flex_item-D1cL8VWd.js";const{expect:lo,waitFor:yo,within:mo}=__STORYBOOK_MODULE_TEST__,co={...io,...ao,...ro,...eo,...to,...oo,...Z,...X,...J,...H},uo={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},To={api:t,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"},Eo={api:t,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"},Ao={api:t,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"},bo={api:t,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"},Io={api:t,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"},vo={api:t,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"},fo={api:t,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"},Oo={api:t,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"},No={api:t,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"},_o={api:t,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"},ho={api:t,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},e=async({canvasElement:o})=>{const r=mo(o);await yo(async()=>{const a=r.getByTestId("entity-relations");await lo(a).toBeInTheDocument()},{timeout:3e3})},T=new WeakMap;function Ro(o,r){let a=T.get(r);a||(a=no.createRoot(r),T.set(r,a)),a.render(po.jsx(go,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createEntityRelations:Ro};let So=0;function Po(){return So++}const nt={title:"Additional Entity Metadata/EntityRelationsWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:so}}},render:o=>{const r=Po();return`
<div id="autocomplete_widget_container_${r}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityRelations(
    {
        api:"${o.api}",
        entityType:"${o.entityType}",
        ontologyId:"${o.ontologyId}",
        iri:"${o.iri}",
        hasTitle:${o.hasTitle},
        showBadges:${o.showBadges},
        parameter:"${o.parameter}",
        onNavigateToEntity:${o.onNavigateToEntity},
        onNavigateToOntology:${o.onNavigateToOntology},
        onNavigateToDisambiguate:${o.onNavigateToDisambiguate}
    },
    document.querySelector('#autocomplete_widget_container_${r}')
)
<\/script>
        `},argTypes:co,args:uo},i={args:To,play:e},s={args:Eo,play:e},n={args:Ao,play:e},p={args:bo,play:e},g={args:Io,play:e},l={args:vo,play:e},y={args:fo,play:e},m={args:Oo,play:e},c={args:No,play:e},d={args:_o,play:e},u={args:ho,play:e};var E,A,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: SubEntityOfArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(b=(A=i.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var I,v,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: AllValuesFromArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var O,N,_;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: DifferentFromArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(_=(N=n.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var h,R,S;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: EquivalentToArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(S=(R=p.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var P,W,w;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: SingleValueArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(w=(W=g.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var B,D,x;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: InverseOfArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(x=(D=l.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var C,F,$;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: PropertyChainArgs,
  play: commonEntityRelationsWidgetPlay
}`,...($=(F=y.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var V,q,j;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: InstancesArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(j=(q=m.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var Q,M,k;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: AxiomsArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(k=(M=c.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var z,G,U;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: QualifiedCardinalityArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(U=(G=d.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var K,L,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(Y=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};const pt=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{s as AllValuesFrom,c as Axioms,n as DifferentFrom,p as EquivalentTo,m as Instances,l as InverseOf,u as NavigateToEBIPage,y as PropertyChain,d as QualifiedCardinality,g as SingleValue,i as SubEntityOf,pt as __namedExportsOrder,nt as default};
