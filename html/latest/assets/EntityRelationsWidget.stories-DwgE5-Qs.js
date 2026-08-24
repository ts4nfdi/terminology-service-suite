import{a as H}from"./widgetDescriptions-MmE0nvU9.js";import{E as t}from"./globals-Dr4u9m4r.js";import{q as J,o as X,r as Z,v as oo,x as to,p as eo,t as ro,w as ao,y as io,i as so}from"./QueryClientProvider-BWR2RZKW.js";import{c as no,j as po}from"./client-DFp2fd_t.js";import{W as go}from"./EntityRelationsWidget-CKGGSrKE.js";import"./useQuery-BPvcPTdj.js";import"./ClassExpression-DpW3ofPL.js";import"./OntologyBadge-DSjYdqyJ.js";import"./badge-B111yAZU.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-D_ZqHfV2.js";import"./_button-Z79RMxwL.js";import"./icon-baKPdkWm.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-_W8cA1zy.js";import"./ExpandableOntologyBadgeList-CgbwAIUG.js";import"./Tooltip-Domw9sTA.js";import"./icon_tip-Na4ZyDxK.js";import"./tool_tip-Bq27UR7w.js";import"./reposition_on_scroll-DH_8Ucla.js";import"./shadow-BUamHIi1.js";import"./panel-hUx2yjLe.js";import"./portal-VFnzH7kw.js";import"./useCombinedRefs-CI08p5vq.js";import"./card-yH-LURbY.js";import"./title-PyS5yIIq.js";import"./text-CPqqw-PA.js";import"./link.styles-BloqUXLf.js";import"./button-u8LXtq5J.js";import"./_button_display-DbZrowCo.js";import"./flex_item-ioVQuD1G.js";const{expect:lo,waitFor:yo,within:mo}=__STORYBOOK_MODULE_TEST__,co={...so,...io,...ao,...ro,...eo,...to,...oo,...Z,...X,...J},uo={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},To={api:t,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"},Eo={api:t,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"},Ao={api:t,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"},bo={api:t,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"},Io={api:t,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"},vo={api:t,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"},fo={api:t,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"},Oo={api:t,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"},No={api:t,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"},_o={api:t,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"},ho={api:t,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},e=async({canvasElement:o})=>{const r=mo(o);await yo(async()=>{const a=r.getByTestId("entity-relations");await lo(a).toBeInTheDocument()},{timeout:3e3})},T=new WeakMap;function Ro(o,r){let a=T.get(r);a||(a=no.createRoot(r),T.set(r,a)),a.render(po.jsx(go,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createEntityRelations:Ro};let So=0;function Po(){return So++}const nt={title:"Additional Entity Metadata/EntityRelationsWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:H}}},render:o=>{const r=Po();return`
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
}`,...(x=(D=l.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var F,$,C;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: PropertyChainArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(C=($=y.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var V,q,j;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: InstancesArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(j=(q=m.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var Q,M,k;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: AxiomsArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(k=(M=c.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var G,U,z;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: QualifiedCardinalityArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(z=(U=d.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var K,L,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(Y=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};const pt=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{s as AllValuesFrom,c as Axioms,n as DifferentFrom,p as EquivalentTo,m as Instances,l as InverseOf,u as NavigateToEBIPage,y as PropertyChain,d as QualifiedCardinality,g as SingleValue,i as SubEntityOf,pt as __namedExportsOrder,nt as default};
