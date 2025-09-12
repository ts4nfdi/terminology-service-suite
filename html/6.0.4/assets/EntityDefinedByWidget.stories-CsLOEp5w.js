import{E as a}from"./globals-CvFyH82M.js";import{x as A,B as T,p as _,F as O,G as E,z as w,q as D,a9 as I}from"./storyArgs-AFjXh7XW.js";import"./index-CQOka8X0.js";import"./index-ZCdkkhYt.js";import"./useQuery-BSQecOR7.js";import"./EntityDefinedByPresentation-CdAmfHlO.js";import"./text-dCu-lByA.js";import"./link.styles-CJzvf_6u.js";/* empty css                  */const{expect:B,waitFor:N,within:v}=__STORYBOOK_MODULE_TEST__,S={...D,...w,...E,...O,..._,...T,...A},$={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},W={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:a,entityType:"term",ontologyId:"efo"},b={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:a,ontologyId:"ons"},L={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:a,entityType:"term",ontologyId:"efo",useLegacy:!0},r=async({canvasElement:e})=>{const t=v(e);await N(async()=>{const f=t.getByTestId("entity-defined-by");await B(f).toBeInTheDocument()},{timeout:3e3})};let P=0;function h(){return P++}const K={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:I}}},render:e=>{const t=h();return`
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
        `},argTypes:S,args:$},o={args:W,play:r},n={args:b,play:r},i={args:L,play:r};var y,s,p;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: emptyInDefiningOntologyArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,g,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: v2ApiONSArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var m,l,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const R=["emptyInDefiningOntology","v2ApiONS","legacyApi"];export{R as __namedExportsOrder,K as default,o as emptyInDefiningOntology,i as legacyApi,n as v2ApiONS};
