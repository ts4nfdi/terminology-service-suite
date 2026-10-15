import{c as f}from"./widgetDescriptions-MmE0nvU9.js";import{E as T,Z as u}from"./globals-1uEo64sR.js";import{o as A,w as _,p as D,y as I,z as E,v as B,j as N}from"./QueryClientProvider-6hKZIOP_.js";import"./index-C4DeO699.js";import"./client-DFp2fd_t.js";import"./useQuery-PpBP71X6.js";/* empty css                  */import"./EntityDefinedByPresentation-CsJWUEeA.js";/* empty css                                    */import"./ExpandableOntologyBadgeList-DJLsjmWx.js";import"./OntologyBadge-BR04T-Xn.js";import"./badge-DG7v8hsD.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-DyNMilgU.js";import"./_button-Bj85HAIw.js";import"./icon-0ejhv3d-.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-ffLv0PfC.js";import"./text-wLnySTD4.js";import"./link.styles-C3kPFcK_.js";const{expect:v,waitFor:b,within:$}=__STORYBOOK_MODULE_TEST__,w={...N,...B,...E,...I,...D,..._,...A},L={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},S={iri:"http://purl.obolibrary.org/obo/MONDO_0005015",api:T,entityType:"term",ontologyId:"efo",useLegacy:!0},W={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:u,ontologyId:"foodon",useLegacy:!1},P={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:u,entityType:"term",ontologyId:"foodon",useLegacy:!0},n=async({canvasElement:e})=>{const t=$(e);await b(async()=>{const O=t.getByTestId("entity-defined-by");await v(O).toBeInTheDocument()},{timeout:3e3})};let x=0;function h(){return x++}const oe={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:e=>{const t=h();return`
<div id="entity_defined_by_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityDefinedBy(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        onNavigateToOntology:${e.onNavigateToOntology},
        className:${e.className}
    },
    document.querySelector('#entity_defined_by_widget_container_${t}')
)
<\/script>
        `},argTypes:w,args:L},o={args:S,play:n},i={args:W,play:n},r={args:P,play:n};var a,y,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: emptyInDefiningOntologyArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(p=(y=o.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var s,c,g;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: v2ApiFOODONArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const ie=["emptyInDefiningOntology","v2ApiFOODON","legacyApi"];export{ie as __namedExportsOrder,oe as default,o as emptyInDefiningOntology,r as legacyApi,i as v2ApiFOODON};
