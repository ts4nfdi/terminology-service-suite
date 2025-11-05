import{E as s}from"./globals-CvFyH82M.js";import{x as w,B as v,p as L,F as I,G as x,z as N,q as S,aa as f}from"./storyArgs-BpO_jkfi.js";import"./index-DOREerkX.js";import"./index-Bl-ZOWkZ.js";import"./useQuery-HmMT4qun.js";import"./EntityOntoListPresentation-CZok0Pl-.js";import"./text-BEknjekC.js";import"./link.styles-zMVxDbd4.js";/* empty css                  */const{expect:$,waitFor:F,within:W}=__STORYBOOK_MODULE_TEST__,D={...S,...N,...x,...I,...L,...v,...w},P={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},h={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,entityType:"term",ontologyId:"efo"},b={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,ontologyId:"ons"},M={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,entityType:"term",ontologyId:"efo",useLegacy:!0},B={iri:"http://purl.obolibrary.org/obo/HP_0000819",api:s,ontologyId:"hp"},n=async({canvasElement:t})=>{const e=W(t);await F(async()=>{const _=e.getByTestId("entity-onto-list");await $(_).toBeInTheDocument()},{timeout:3e3})};let k=0;function q(){return k++}const J={title:"Additional Entity Metadata/EntityOntoListWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:t=>{const e=q();return`
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
        `},argTypes:D,args:P},o={args:h,play:n},a={args:b,play:n},i={args:M,play:n},r={args:B,play:n};var p,c,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: v2ApiEFOArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(y=(c=o.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var g,m,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: v2ApiONSArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,A;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(A=(u=i.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var O,T,E;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: exceedsMaxDisplayArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(E=(T=r.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const Q=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{Q as __namedExportsOrder,J as default,r as exceedsMaxDisplay,i as legacyApi,o as v2ApiEFO,a as v2ApiONS};
