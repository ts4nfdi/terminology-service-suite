import{o as T,v as A,p as f,x as _,y as D,u as I,i as E,$ as B}from"./QueryClientProvider-C4FCUO2w.js";import{E as N,Z as u}from"./globals-Dneqqh2P.js";import"./index-C1LQ69-w.js";import"./client-DFp2fd_t.js";import"./useQuery-NoTDeaJ4.js";/* empty css                  */import"./EntityDefinedByPresentation-DuXXIpFt.js";/* empty css                                    */import"./ExpandableOntologyBadgeList-9sCfDgcL.js";import"./OntologyBadge-8bMFwXBs.js";import"./badge-CZkVOsFo.js";import"./href_validator-B8HQpRtP.js";import"./color_utils-uujAFuP7.js";import"./_button-CpclIc37.js";import"./icon-Bz4NYFmO.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-C8w2C5zv.js";import"./text-DOBIlKdQ.js";import"./link.styles-DEcbRFNs.js";const{expect:v,waitFor:b,within:$}=__STORYBOOK_MODULE_TEST__,S={...E,...I,...D,..._,...f,...A,...T},w={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},W={iri:"http://purl.obolibrary.org/obo/MONDO_0005015",api:N,entityType:"term",ontologyId:"efo"},x={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:u,ontologyId:"foodon"},L={iri:"http://purl.obolibrary.org/obo/NCBITaxon_10090",api:u,entityType:"term",ontologyId:"foodon",useLegacy:!0},n=async({canvasElement:t})=>{const e=$(t);await b(async()=>{const O=e.getByTestId("entity-defined-by");await v(O).toBeInTheDocument()},{timeout:3e3})};let P=0;function h(){return P++}const et={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:B}}},render:t=>{const e=h();return`
<div id="entity_defined_by_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityDefinedBy(
    {
        iri:"${t.iri}",
        api:"${t.api}",
        ontologyId:"${t.ontologyId}",
        entityType:"${t.entityType}",
        parameter:"${t.parameter}",
        useLegacy:${t.useLegacy},
        onNavigateToOntology:${t.onNavigateToOntology},
        className:${t.className}
    },
    document.querySelector('#entity_defined_by_widget_container_${e}')
)
<\/script>
        `},argTypes:S,args:w},o={args:W,play:n},i={args:x,play:n},r={args:L,play:n};var a,y,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: emptyInDefiningOntologyArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(p=(y=o.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var s,c,g;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: v2ApiFOODONArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const ot=["emptyInDefiningOntology","v2ApiFOODON","legacyApi"];export{ot as __namedExportsOrder,et as default,o as emptyInDefiningOntology,r as legacyApi,i as v2ApiFOODON};
