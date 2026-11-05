import{r as H,o as J,t as X,w as Z,y as tt,p as ot,u as et,x as rt,z as at,j as it,a3 as st}from"./provider-DhHV66nY.js";import{E as o}from"./globals-1uEo64sR.js";import{c as nt,j as pt}from"./client-DFp2fd_t.js";import{W as gt}from"./EntityRelationsWidget-B94od3-6.js";import"./QueryClientProvider-BiMFCrBx.js";import"./useQuery-tjcomNSo.js";import"./ClassExpression-DskazWaQ.js";import"./OntologyBadge-BNxGJs9M.js";import"./badge-DpG9ODGG.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-9svs92vp.js";import"./_button-BSE-Gefv.js";import"./icon-CQRupbKR.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-Dnj4m-7S.js";import"./ExpandableOntologyBadgeList-Cbq5yPqY.js";import"./Tooltip-DoByHMJy.js";import"./icon_tip-Bbs8sq6M.js";import"./tool_tip-B8oiUMjF.js";import"./reposition_on_scroll-DnVR_CoT.js";import"./shadow-BzKSJvFB.js";import"./panel-B6ojztOC.js";import"./portal-DiAFq_36.js";import"./useCombinedRefs-Crz01-E9.js";import"./card-f1vAeYHd.js";import"./spacer-BdCuJF-n.js";import"./button-BSY0IPzv.js";import"./_button_display-BXraxBWm.js";import"./text-ATQ4pZKH.js";import"./link.styles-D92Rj0Iv.js";import"./title-BwNiWjLn.js";import"./flex_item-DFagJcvy.js";const{expect:lt,waitFor:yt,within:mt}=__STORYBOOK_MODULE_TEST__,ct={...it,...at,...rt,...et,...ot,...tt,...Z,...X,...J,...H},dt={api:"https://semanticlookup.zbmed.de/api/",iri:"",ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ut={api:o,entityType:"term",ontologyId:"agro",iri:"http://purl.obolibrary.org/obo/AGRO_00000002"},Tt={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/BFO_0000004"},Et={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120"},At={api:o,entityType:"term",ontologyId:"go",iri:"http://purl.obolibrary.org/obo/GO_0048021"},bt={api:o,entityType:"term",ontologyId:"bfo",iri:"http://purl.obolibrary.org/obo/BFO_0000001"},It={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0000057"},vt={api:o,entityType:"property",ontologyId:"ro",iri:"http://purl.obolibrary.org/obo/RO_0002170"},ft={api:o,entityType:"term",ontologyId:"iao",iri:"http://purl.obolibrary.org/obo/IAO_0000078"},Ot={api:o,entityType:"term",ontologyId:"aism",iri:"http://purl.obolibrary.org/obo/UBERON_0000006"},Nt={api:o,entityType:"term",ontologyId:"foodon",iri:"http://purl.obolibrary.org/obo/FOODON_00003382"},_t={api:o,entityType:"individual",ontologyId:"bco",iri:"http://purl.obolibrary.org/obo/IAO_0000120",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},e=async({canvasElement:t})=>{const r=mt(t);await yt(async()=>{const a=r.getByTestId("entity-relations");await lt(a).toBeInTheDocument()},{timeout:3e3})},T=new WeakMap;function ht(t,r){let a=T.get(r);a||(a=nt.createRoot(r),T.set(r,a)),a.render(pt.jsx(gt,{...t}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createEntityRelations:ht};let Rt=0;function St(){return Rt++}const no={title:"Additional Entity Metadata/EntityRelationsWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:st}}},render:t=>{const r=St();return`
<div id="autocomplete_widget_container_${r}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityRelations(
    {
        api:"${t.api}",
        entityType:"${t.entityType}",
        ontologyId:"${t.ontologyId}",
        iri:"${t.iri}",
        hasTitle:${t.hasTitle},
        showBadges:${t.showBadges},
        parameter:"${t.parameter}",
        onNavigateToEntity:${t.onNavigateToEntity},
        onNavigateToOntology:${t.onNavigateToOntology},
        onNavigateToDisambiguate:${t.onNavigateToDisambiguate}
    },
    document.querySelector('#autocomplete_widget_container_${r}')
)
<\/script>
        `},argTypes:ct,args:dt},i={args:ut,play:e},s={args:Tt,play:e},n={args:Et,play:e},p={args:At,play:e},g={args:bt,play:e},l={args:It,play:e},y={args:vt,play:e},m={args:ft,play:e},c={args:Ot,play:e},d={args:Nt,play:e},u={args:_t,play:e};var E,A,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=($=y.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var V,j,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: InstancesArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var Q,M,k;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: AxiomsArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(k=(M=c.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var z,G,U;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: QualifiedCardinalityArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(U=(G=d.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var K,L,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityRelationsWidgetPlay
}`,...(Y=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};const po=["SubEntityOf","AllValuesFrom","DifferentFrom","EquivalentTo","SingleValue","InverseOf","PropertyChain","Instances","Axioms","QualifiedCardinality","NavigateToEBIPage"];export{s as AllValuesFrom,c as Axioms,n as DifferentFrom,p as EquivalentTo,m as Instances,l as InverseOf,u as NavigateToEBIPage,y as PropertyChain,d as QualifiedCardinality,g as SingleValue,i as SubEntityOf,po as __namedExportsOrder,no as default};
