import{E as r}from"./globals-BQAFDkgj.js";import{o as A,B as T,p as _,F as O,G as E,z as w,r as D,ag as I}from"./storyArgs-CNybPO01.js";import"./index-mQ7NfiG9.js";import"./index-Bl-ZOWkZ.js";import"./useQuery-CidFMm36.js";import"./EntityDefinedByPresentation-FDk2dYoq.js";/* empty css                                    */import"./ExpandableOntologyBadgeList-DuPGoLJ-.js";import"./OntologyBadge-QeaUz3Wa.js";import"./badge-1S-NH-ch.js";import"./href_validator-Cs1fZ0vS.js";import"./color_utils-C32VsIho.js";import"./_button-YkQj8NM0.js";import"./icon-CE3ukyQW.js";import"./preload-helper-Dp1pzeXC.js";import"./inner_text-CwdQ_heh.js";import"./text-CwK6QkCY.js";import"./link.styles-Cwoei_NV.js";/* empty css                  */const{expect:B,waitFor:N,within:v}=__STORYBOOK_MODULE_TEST__,S={...D,...w,...E,...O,..._,...T,...A},$={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},W={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:r,entityType:"term",ontologyId:"efo"},b={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:r,ontologyId:"ons"},L={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:r,entityType:"term",ontologyId:"efo",useLegacy:!0},a=async({canvasElement:e})=>{const t=v(e);await N(async()=>{const f=t.getByTestId("entity-defined-by");await B(f).toBeInTheDocument()},{timeout:3e3})};let P=0;function h(){return P++}const ee={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:I}}},render:e=>{const t=h();return`
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
        `},argTypes:S,args:$},o={args:W,play:a},i={args:b,play:a},n={args:L,play:a};var y,s,p;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: emptyInDefiningOntologyArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,g,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: v2ApiONSArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(m=(g=i.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const te=["emptyInDefiningOntology","v2ApiONS","legacyApi"];export{te as __namedExportsOrder,ee as default,o as emptyInDefiningOntology,n as legacyApi,i as v2ApiONS};
