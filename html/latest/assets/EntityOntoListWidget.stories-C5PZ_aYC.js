import{E as s}from"./globals-BQAFDkgj.js";import{o as w,B as v,p as L,F as I,G as N,z as S,r as x,ah as f}from"./storyArgs-CNybPO01.js";import"./index-BXaKpWHe.js";import"./index-Bl-ZOWkZ.js";import"./useQuery-CidFMm36.js";import"./EntityOntoListPresentation-D7fwcukH.js";/* empty css                                   */import"./ExpandableOntologyBadgeList-DuPGoLJ-.js";import"./OntologyBadge-QeaUz3Wa.js";import"./badge-1S-NH-ch.js";import"./href_validator-Cs1fZ0vS.js";import"./color_utils-C32VsIho.js";import"./_button-YkQj8NM0.js";import"./icon-CE3ukyQW.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CwdQ_heh.js";import"./text-CwK6QkCY.js";import"./link.styles-Cwoei_NV.js";/* empty css                  */const{expect:$,waitFor:F,within:W}=__STORYBOOK_MODULE_TEST__,h={...x,...S,...N,...I,...L,...v,...w},D={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},P={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,entityType:"term",ontologyId:"efo"},b={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,ontologyId:"ons"},M={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,entityType:"term",ontologyId:"efo",useLegacy:!0},B={iri:"http://purl.obolibrary.org/obo/HP_0000819",api:s,ontologyId:"hp"},n=async({canvasElement:t})=>{const e=W(t);await F(async()=>{const _=e.getByTestId("entity-onto-list");await $(_).toBeInTheDocument()},{timeout:3e3})};let k=0;function j(){return k++}const at={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:t=>{const e=j();return`
<div id="entity_onto_list_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityOntoList(
    {
        iri:"${t.iri}",
        api:"${t.api}",
        ontologyId:"${t.ontologyId}",
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:"${t.useLegacy}",
        onNavigateToOntology:${t.onNavigateToOntology},
        className:"${t.className}"
    },
    document.querySelector('#entity_onto_list_widget_container_${e}')
)
<\/script>
        `},argTypes:h,args:D},o={args:P,play:n},i={args:b,play:n},r={args:M,play:n},a={args:B,play:n};var p,c,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: v2ApiEFOArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(y=(c=o.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var m,g,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: v2ApiONSArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(d=(g=i.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var l,u,A;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(A=(u=r.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var O,T,E;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: exceedsMaxDisplayArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(E=(T=a.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const st=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{st as __namedExportsOrder,at as default,a as exceedsMaxDisplay,r as legacyApi,o as v2ApiEFO,i as v2ApiONS};
