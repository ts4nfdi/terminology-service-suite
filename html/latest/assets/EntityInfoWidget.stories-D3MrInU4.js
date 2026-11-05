import{r as ro,o as ao,t as io,u as so,v as no,w as po,p as go,x as mo,y as yo,z as co,j as lo,B as Io}from"./provider-DhHV66nY.js";import{T as eo,Z as T,E as i}from"./globals-1uEo64sR.js";import{c as uo,j as fo}from"./client-DFp2fd_t.js";import{W as To}from"./EntityInfoWidget-BLcuJJxh.js";import"./QueryClientProvider-BiMFCrBx.js";import"./useQuery-tjcomNSo.js";import"./ClassExpression-DskazWaQ.js";import"./OntologyBadge-BNxGJs9M.js";import"./badge-DpG9ODGG.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-9svs92vp.js";import"./_button-BSE-Gefv.js";import"./icon-CQRupbKR.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-Dnj4m-7S.js";import"./ExpandableOntologyBadgeList-Cbq5yPqY.js";import"./Tooltip-DoByHMJy.js";import"./icon_tip-Bbs8sq6M.js";import"./tool_tip-B8oiUMjF.js";import"./reposition_on_scroll-DnVR_CoT.js";import"./shadow-BzKSJvFB.js";import"./panel-B6ojztOC.js";import"./portal-DiAFq_36.js";import"./useCombinedRefs-Crz01-E9.js";/* empty css                               *//* empty css                                *//* empty css                                    *//* empty css                  *//* empty css                                   *//* empty css                        */import"./MathFormulaWidget-BVATrNbB.js";import"./purify.es-5AjVNlXF.js";import"./text-ATQ4pZKH.js";import"./link.styles-D92Rj0Iv.js";/* empty css                        *//* empty css                               *//* empty css                             */import"./ts4nfdiGraphStyle-DEBK50Pl.js";/* empty css                                 */import"./model-viewer-BNdxy5m2.js";/* empty css                          */import"./card-f1vAeYHd.js";import"./spacer-BdCuJF-n.js";import"./button-BSY0IPzv.js";import"./_button_display-BXraxBWm.js";import"./title-BwNiWjLn.js";import"./basic_table-ByYwVgFr.js";import"./form.styles-C1X7_6nV.js";import"./table_pagination-B8m1-nBp.js";import"./button_empty-BLkbRN6C.js";import"./popover-CUAHLhzx.js";import"./screen_reader_only-CJHC7Tyx.js";import"./focus_trap-qu0duNoA.js";import"./flex_group-CD5HcYk5.js";import"./flex_item-DFagJcvy.js";import"./button_icon-_yosOSG-.js";import"./is_within_hooks-ZAJdxzQF.js";import"./delay_render-B6la2GtU.js";const{expect:Wo,waitFor:Eo,within:Ao}=__STORYBOOK_MODULE_TEST__,vo={...lo,...co,...yo,...mo,...go,...po,...no,...so,...io,...ao,...ro},t={api:T,iri:"",useLegacy:!0,ontologyId:"",entityType:"term",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},Po={...t,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",entityType:"term",ontologyId:"ncit",hasTitle:!0},ho={...t,iri:"http://www.w3.org/2004/02/skos/core#altLabel",entityType:"property",ontologyId:"mesh"},bo={...t,iri:"https://openenergyplatform.org/ontology/oeo/OEO_00020163",entityType:"individual",ontologyId:"oeo",api:eo},No={...t,api:i,useLegacy:!1,entityType:"class",iri:"http://purl.obolibrary.org/obo/UBERON_0000006",ontologyId:"uberon"},_o={...t,api:T,iri:"http://purl.obolibrary.org/obo/NCIT_C88403"},Oo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/NCIT_R89",entityType:"property",ontologyId:"ncit"},Bo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/RO_0002029",entityType:"property",ontologyId:"ro"},wo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",entityType:"individual",ontologyId:"envo"},So={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/MICRO_0001603",entityType:"property",ontologyId:"micro"},Lo={...t,api:i,useLegacy:!1,iri:"http://purl.obolibrary.org/obo/ENVO_01001569",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page",entityType:"individual",ontologyId:"envo"},Do={...t,api:T,useLegacy:!0,iri:"http://id.loc.gov/vocabulary/iso639-1/zh"},Ro={...t,api:eo,useLegacy:!1,iri:"https://portal.mardi4nfdi.de/entity/Q6674140",ontologyId:"mathmoddb"},e=async({canvasElement:o})=>{const r=Ao(o);await Eo(async()=>{const a=r.getByTestId("entity-info");await Wo(a).toBeInTheDocument()},{timeout:3e3})},W=new WeakMap;function Co(o,r){let a=W.get(r);a||(a=uo.createRoot(r),W.set(r,a)),a.render(fo.jsx(To,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createEntityInfo:Co};let $o=0;function xo(){return $o++}const zt={title:"Additional Entity Metadata/EntityInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:Io}}},render:o=>{const r=xo();return`        
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
        `},argTypes:vo,args:t},s={args:Po,play:e},n={args:ho,play:e},p={args:bo,play:e},g={args:No,play:e},m={args:_o,play:e},y={args:Oo,play:e},c={args:Bo,play:e},d={args:wo,play:e},l={args:So,play:e},I={args:Lo,play:e},u={args:Do,play:e},f={args:Ro,play:e};var E,A,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: TermInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(v=(A=s.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var P,h,b;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PropertyInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var N,_,O;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: IndividualInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var B,w,S;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: InfoWidgetBadgesArgs,
  play: commonEntityInfoWidgetPlay
}`,...(S=(w=g.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var L,D,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: OptionalEntityTypeLegacyAPIArgs,
  play: commonEntityInfoWidgetPlay
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var C,$,x;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: InfoWidgetDomainArgs,
  play: commonEntityInfoWidgetPlay
}`,...(x=($=y.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var M,k,j;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: InfoWidgetRangeArgs,
  play: commonEntityInfoWidgetPlay
}`,...(j=(k=c.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var F,z,U;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: InfoWidgetPropertyAssertionArgs,
  play: commonEntityInfoWidgetPlay
}`,...(U=(z=d.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var V,Z,q;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: InfoWidgetPropertyCharacteristicsArgs,
  play: commonEntityInfoWidgetPlay
}`,...(q=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var K,Q,Y;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonEntityInfoWidgetPlay
}`,...(Y=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: SkosmosImportArgs,
  play: commonEntityInfoWidgetPlay
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var X,oo,to;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: MathFormularRepresentationArgs,
  play: commonEntityInfoWidgetPlay
}`,...(to=(oo=f.parameters)==null?void 0:oo.docs)==null?void 0:to.source}}};const Ut=["TermInfoWidget","PropertyInfoWidget","IndividualInfoWidget","InfoWidgetBadges","OptionalEntityTypeLegacyAPI","InfoWidgetDomain","InfoWidgetRange","InfoWidgetPropertyAssertion","InfoWidgetPropertyCharacteristics","NavigateToEBIPage","SkosmosImport","MathFormularRepresentation"];export{p as IndividualInfoWidget,g as InfoWidgetBadges,y as InfoWidgetDomain,d as InfoWidgetPropertyAssertion,l as InfoWidgetPropertyCharacteristics,c as InfoWidgetRange,f as MathFormularRepresentation,I as NavigateToEBIPage,m as OptionalEntityTypeLegacyAPI,n as PropertyInfoWidget,u as SkosmosImport,s as TermInfoWidget,Ut as __namedExportsOrder,zt as default};
