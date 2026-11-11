import{o as T,v as f,p as A,x as _,y as D,u as I,j as E,aw as B}from"./provider-BlV9U33F.js";import{E as N,Z as u}from"./globals-1uEo64sR.js";import"./index-B-qvuND7.js";import"./client-DFp2fd_t.js";import"./QueryClientProvider-CVZB0IZw.js";import"./useQuery-BL03lWkx.js";/* empty css                  */import"./EntityDefinedByPresentation-CxIdQxVZ.js";/* empty css                                    */import"./ExpandableOntologyBadgeList-BfLgfe3j.js";import"./OntologyBadge-BTM-PS8-.js";import"./badge-UcGW59xV.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-Duay4BcV.js";import"./_button-B_KcUgtw.js";import"./icon-CJNnMZMY.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-7EH-VJdB.js";import"./text-DHoFFw_8.js";import"./link.styles-BGS0RoP2.js";const{expect:v,waitFor:b,within:$}=__STORYBOOK_MODULE_TEST__,w={...E,...I,...D,..._,...A,...f,...T},L={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},S={iri:"http://purl.obolibrary.org/obo/MONDO_0005015",api:N,entityType:"term",ontologyId:"efo",useLegacy:!0},W={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:u,ontologyId:"foodon",useLegacy:!1},x={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:u,entityType:"term",ontologyId:"foodon",useLegacy:!0},n=async({canvasElement:e})=>{const t=$(e);await b(async()=>{const O=t.getByTestId("entity-defined-by");await v(O).toBeInTheDocument()},{timeout:3e3})};let P=0;function h(){return P++}const oe={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:B}}},render:e=>{const t=h();return`
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
