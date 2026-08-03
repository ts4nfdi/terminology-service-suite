import{E as ro}from"./widgetDescriptions-MmE0nvU9.js";import{T as eo,Z as T,E as i}from"./globals-Dr4u9m4r.js";import{q as ao,o as io,r as so,t as no,u as po,v as go,p as yo,w as mo,x as co,y as lo,i as Io}from"./QueryClientProvider-wfdc44vj.js";import{c as uo,j as fo}from"./client-DFp2fd_t.js";import{W as To}from"./EntityInfoWidget-BoIFcToS.js";import"./useQuery-B6JW7uaM.js";import"./ClassExpression-SHY7uGGf.js";import"./OntologyBadge-BQYgfFLY.js";import"./badge-D7gjDvFE.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-BM5ucB2c.js";import"./_button-CNGnRqyT.js";import"./icon-C9-DwYxQ.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-DyrLOj6C.js";import"./ExpandableOntologyBadgeList-Bjv_ivaM.js";import"./Tooltip-BKAQ0Biq.js";import"./icon_tip-CZUwUeus.js";import"./tool_tip-BWZt8ZEC.js";import"./reposition_on_scroll-3UAIXJHW.js";import"./shadow-B8JELVCP.js";import"./panel-DyspM-jY.js";import"./portal-DPy-z_V4.js";import"./useCombinedRefs-CI08p5vq.js";/* empty css                               *//* empty css                                *//* empty css                  *//* empty css                                    *//* empty css                                   *//* empty css                        */import"./MathFormulaWidget-BSSJgDIb.js";import"./purify.es-D6gMnemd.js";import"./text-BCa_u-0I.js";import"./link.styles-BVnRgrxN.js";/* empty css                        *//* empty css                               *//* empty css                             */import"./ts4nfdiGraphStyle-DEBK50Pl.js";/* empty css                                 */import"./model-viewer-BNdxy5m2.js";/* empty css                          */import"./card-CcbtLDM2.js";import"./title-CLzcVaIZ.js";import"./button-CoB_Y1Qi.js";import"./_button_display-zQuHS8zi.js";import"./basic_table-B9T5hUBC.js";import"./form.styles-BbJq18g2.js";import"./table_pagination-CEjw2cLI.js";import"./button_empty-B5_GAIWA.js";import"./popover-GZ2_dunY.js";import"./screen_reader_only-yPc5lzva.js";import"./focus_trap-CiTk6QuG.js";import"./flex_group-j6iQt6Pg.js";import"./flex_item-Xc8KziH2.js";import"./button_icon-SGll5Y8c.js";const{expect:Wo,waitFor:Eo,within:Ao}=__STORYBOOK_MODULE_TEST__,vo={...Io,...lo,...co,...mo,...yo,...go,...po,...no,...so,...io,...ao},t={api:T,iri:"",useLegacy:!0,ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Po={...t,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0},ho={...t,iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"},bo={...t,iri:"https://openenergyplatform.org/ontology/oeo/OEO_00020163",entityType:"individual",ontologyId:"oeo",api:eo},No={...t,api:i,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"},_o={...t,api:T,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"},Oo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89",entityType:"property",ontologyId:"ncit"},wo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029",entityType:"property",ontologyId:"ro"},Bo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",entityType:"individual",ontologyId:"envo"},So={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603",entityType:"property",ontologyId:"micro"},Lo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page",entityType:"individual",ontologyId:"envo"},Do={...t,api:T,useLegacy:!0,iri:"http://id.loc.gov/vocabulary/iso639-1/zh"},Ro={...t,api:eo,useLegacy:!1,iri:"https://portal.mardi4nfdi.de/entity/Q6674140",ontologyId:"mathmoddb"},e=async({canvasElement:o})=>{const r=Ao(o);await Eo(async()=>{const a=r.getByTestId("entity-info");await Wo(a).toBeInTheDocument()},{timeout:3e3})},W=new WeakMap;function Co(o,r){let a=W.get(r);a||(a=uo.createRoot(r),W.set(r,a)),a.render(fo.jsx(To,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createEntityInfo:Co};let $o=0;function xo(){return $o++}const kt={title:"Additional Entity Metadata/EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:ro}}},render:o=>{const r=xo();return`        
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
        `},argTypes:vo,args:t},s={args:Po,play:e},n={args:ho,play:e},p={args:bo,play:e},g={args:No,play:e},y={args:_o,play:e},m={args:Oo,play:e},c={args:wo,play:e},d={args:Bo,play:e},l={args:So,play:e},I={args:Lo,play:e},u={args:Do,play:e},f={args:Ro,play:e};var E,A,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: TermInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(v=(A=s.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var P,h,b;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PropertyInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var N,_,O;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: IndividualInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var w,B,S;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: InfoWidgetBadgesArgs,
  play: commonEntityInfoWidgetPlay
}`,...(S=(B=g.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var L,D,R;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: OptionalEntityTypeLegacyAPIArgs,
  play: commonEntityInfoWidgetPlay
}`,...(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var C,$,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: InfoWidgetDomainArgs,
  play: commonEntityInfoWidgetPlay
}`,...(x=($=m.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var M,k,F;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: InfoWidgetRangeArgs,
  play: commonEntityInfoWidgetPlay
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var j,q,U;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: InfoWidgetPropertyAssertionArgs,
  play: commonEntityInfoWidgetPlay
}`,...(U=(q=d.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var V,Z,z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: InfoWidgetPropertyCharacteristicsArgs,
  play: commonEntityInfoWidgetPlay
}`,...(z=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var K,Q,Y;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityInfoWidgetPlay
}`,...(Y=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: SkosmosImportArgs,
  play: commonEntityInfoWidgetPlay
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var X,oo,to;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: MathFormularRepresentationArgs,
  play: commonEntityInfoWidgetPlay
}`,...(to=(oo=f.parameters)==null?void 0:oo.docs)==null?void 0:to.source}}};const Ft=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","OptionalEntityTypeLegacyAPI","InfoWidgetDomain","InfoWidgetRange","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","NavigateToEBIPage","SkosmosImport","MathFormularRepresentation"];export{p as IndividualInfoWidget,g as InfoWidgetBadges,m as InfoWidgetDomain,d as InfoWidgetPropertyAssertion,l as InfoWidgetPropertyCharacteristics,c as InfoWidgetRange,f as MathFormularRepresentation,I as NavigateToEBIPage,y as OptionalEntityTypeLegacyAPI,n as PropertyInfoWidget,u as SkosmosImport,s as TermInfoWidget,Ft as __namedExportsOrder,kt as default};
