import{c as f}from"./widgetDescriptions-MmE0nvU9.js";import{E as T,Z as u}from"./globals-Dr4u9m4r.js";import{o as A,u as _,p as D,w as I,x as E,t as B,i as N}from"./QueryClientProvider-BWR2RZKW.js";import"./index-yoANXlvt.js";import"./client-DFp2fd_t.js";import"./useQuery-BPvcPTdj.js";/* empty css                  */import"./EntityDefinedByPresentation-cS_NNk-f.js";/* empty css                                    */import"./ExpandableOntologyBadgeList-CgbwAIUG.js";import"./OntologyBadge-DSjYdqyJ.js";import"./badge-B111yAZU.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-D_ZqHfV2.js";import"./_button-Z79RMxwL.js";import"./icon-baKPdkWm.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-_W8cA1zy.js";import"./text-CPqqw-PA.js";import"./link.styles-BloqUXLf.js";const{expect:b,waitFor:v,within:$}=__STORYBOOK_MODULE_TEST__,w={...N,...B,...E,...I,...D,..._,...A},L={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},S={iri:"http://purl.obolibrary.org/obo/MONDO_0005015",api:T,entityType:"term",ontologyId:"efo",useLegacy:!0},W={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:u,ontologyId:"foodon",useLegacy:!1},x={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:u,entityType:"term",ontologyId:"foodon",useLegacy:!0},n=async({canvasElement:e})=>{const t=$(e);await v(async()=>{const O=t.getByTestId("entity-defined-by");await b(O).toBeInTheDocument()},{timeout:3e3})};let P=0;function h(){return P++}const oe={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:e=>{const t=h();return`
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
        `},argTypes:w,args:L},o={args:S,play:n},i={args:W,play:n},r={args:x,play:n};var a,y,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: emptyInDefiningOntologyArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(p=(y=o.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var s,c,g;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: v2ApiFOODONArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const ie=["emptyInDefiningOntology","v2ApiFOODON","legacyApi"];export{ie as __namedExportsOrder,oe as default,o as emptyInDefiningOntology,r as legacyApi,i as v2ApiFOODON};
