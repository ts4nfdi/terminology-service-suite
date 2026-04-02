import{q as Q,o as X,r as oo,u as to,v as eo,w as ro,p as ao,x as io,y as so,z as no,i as po,B as go}from"./QueryClientProvider-DoKhBl31.js";import{Z as f,T as yo,E as i}from"./globals-BQAFDkgj.js";import{c as co,j as mo}from"./client-hNkKQuBU.js";import{W as lo}from"./EntityInfoWidget-DXEoT-mU.js";import"./useQuery-BUxAEVUP.js";import"./ClassExpression-D8XndRvk.js";import"./OntologyBadge-C4-mp1PH.js";import"./badge-qZhq8Gqg.js";import"./href_validator-RjdtbSlK.js";import"./color_utils-BHaxMbo3.js";import"./_button-Dz-XatGf.js";import"./icon-1SMQ27Zb.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-DM3VqPGZ.js";import"./ExpandableOntologyBadgeList-DlR6X2Vj.js";import"./Tooltip-B6BFRu-Q.js";import"./icon_tip-DQPkXEpj.js";import"./tool_tip-BswyLmne.js";import"./shadow-CxIvaG3S.js";import"./panel-C3cvE46E.js";import"./popover_arrow.styles-CAvBaF2y.js";import"./portal-_OCfn0QL.js";import"./resize_observer-DE6M6jJJ.js";import"./observer-XTR45IxP.js";import"./card-Bj4evJ1x.js";import"./title-CFV7nWBF.js";import"./text-D1HJ6Q9S.js";import"./link.styles-YP6iW4HB.js";import"./button-C57y98bM.js";import"./_button_display-CMPPXgXv.js";import"./flex_item-CXPIO8tU.js";const{expect:Io,waitFor:uo,within:fo}=__STORYBOOK_MODULE_TEST__,To={...po,...no,...so,...io,...ao,...ro,...eo,...to,...oo,...X,...Q},t={api:f,iri:"",useLegacy:!0,ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Wo={...t,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0},Eo={...t,iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"},Ao={...t,iri:"https://openenergyplatform.org/ontology/oeo/OEO_00020163",entityType:"individual",ontologyId:"oeo",api:yo},vo={...t,api:i,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"},Po={...t,api:f,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"},No={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89",entityType:"property",ontologyId:"ncit"},bo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029",entityType:"property",ontologyId:"ro"},_o={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",entityType:"individual",ontologyId:"envo"},ho={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603",entityType:"property",ontologyId:"micro"},Oo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page",entityType:"individual",ontologyId:"envo"},Bo={...t,api:f,useLegacy:!0,iri:"http://id.loc.gov/vocabulary/iso639-1/zh"},e=async({canvasElement:o})=>{const r=fo(o);await uo(async()=>{const a=r.getByTestId("entity-info");await Io(a).toBeInTheDocument()},{timeout:3e3})},T=new WeakMap;function wo(o,r){let a=T.get(r);a||(a=co.createRoot(r),T.set(r,a)),a.render(mo.jsx(lo,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createEntityInfo:wo};let So=0;function Lo(){return So++}const yt={title:"Additional Entity Metadata/EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:go}}},render:o=>{const r=Lo();return`        
<div id="entity_info_widget_container_${r}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityInfo(
    {
        api:"${o.api}",
        iri:"${o.iri}",
        ontologyId:"${o.ontologyId}",
        hasTitle:${o.hasTitle},
        entityType:"${o.entityType}",
        parameter:"${o.parameter}",
        useLegacy:${o.useLegacy},
        showBadges:${o.showBadges},
        onNavigateToEntity:${o.onNavigateToEntity},
        onNavigateToOntology:${o.onNavigateToOntology},
        onNavigateToDisambiguate:${o.onNavigateToDisambiguate}
    },
    document.querySelector('#entity_info_widget_container_${r}')
)
<\/script>
        `},argTypes:To,args:t},s={args:Wo,play:e},n={args:Eo,play:e},p={args:Ao,play:e},g={args:vo,play:e},y={args:Po,play:e},c={args:No,play:e},d={args:bo,play:e},m={args:_o,play:e},l={args:ho,play:e},I={args:Oo,play:e},u={args:Bo,play:e};var W,E,A;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: TermInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(A=(E=s.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var v,P,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: PropertyInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(N=(P=n.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var b,_,h;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: IndividualInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(h=(_=p.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var O,B,w;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: InfoWidgetBadgesArgs,
  play: commonEntityInfoWidgetPlay
}`,...(w=(B=g.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var S,L,D;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: OptionalEntityTypeLegacyAPIArgs,
  play: commonEntityInfoWidgetPlay
}`,...(D=(L=y.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var C,$,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: InfoWidgetDomainArgs,
  play: commonEntityInfoWidgetPlay
}`,...(R=($=c.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var x,k,M;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: InfoWidgetRangeArgs,
  play: commonEntityInfoWidgetPlay
}`,...(M=(k=d.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var j,q,z;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: InfoWidgetPropertyAssertionArgs,
  play: commonEntityInfoWidgetPlay
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var U,V,Z;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: InfoWidgetPropertyCharacteristicsArgs,
  play: commonEntityInfoWidgetPlay
}`,...(Z=(V=l.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var F,K,Y;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityInfoWidgetPlay
}`,...(Y=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: SkosmosImportArgs,
  play: commonEntityInfoWidgetPlay
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ct=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","OptionalEntityTypeLegacyAPI","InfoWidgetDomain","InfoWidgetRange","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","NavigateToEBIPage","SkosmosImport"];export{p as IndividualInfoWidget,g as InfoWidgetBadges,c as InfoWidgetDomain,m as InfoWidgetPropertyAssertion,l as InfoWidgetPropertyCharacteristics,d as InfoWidgetRange,I as NavigateToEBIPage,y as OptionalEntityTypeLegacyAPI,n as PropertyInfoWidget,u as SkosmosImport,s as TermInfoWidget,ct as __namedExportsOrder,yt as default};
