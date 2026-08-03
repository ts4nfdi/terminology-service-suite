import{C as T}from"./widgetDescriptions-MmE0nvU9.js";import{E as i}from"./globals-Dr4u9m4r.js";import{u as _,p as b,w as A,x as O,t as R,i as C}from"./QueryClientProvider-wfdc44vj.js";import"./index-BQlediJF.js";import"./client-DFp2fd_t.js";import"./useQuery-B6JW7uaM.js";/* empty css                             */import"./panel-DyspM-jY.js";import"./shadow-B8JELVCP.js";import"./_button-CNGnRqyT.js";import"./flex_group-j6iQt6Pg.js";import"./text-BCa_u-0I.js";import"./link.styles-BVnRgrxN.js";import"./flex_item-Xc8KziH2.js";const{expect:D,waitFor:I,within:S}=__STORYBOOK_MODULE_TEST__,W={...C,...R,...O,...A,...b,..._},w={api:"",iri:"",useLegacy:!0,ontologyId:"",entityType:"term",parameter:""},$={iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:i,entityType:"term",ontologyId:"rxno",parameter:""},v={api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},E={api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},s=async({canvasElement:e})=>{const t=S(e);await I(async()=>{const u=t.getByTestId("cross-ref");await D(u).toBeInTheDocument()},{timeout:3e3})};let x=0;function N(){return x++}const k={title:"Additional Entity Metadata/CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:T}}},render:e=>{const t=N();return`
<div id="cross_ref_tab_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createCrossRefTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:"${e.useLegacy}",
        className:"${e.className}"
    },
    document.querySelector('#cross_ref_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:W,args:w},r={args:$,play:s},o={args:v,play:s},a={args:E,play:s};var n,p,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: CrossRefTabWidget1Args,
  play: commonCrossRefWidgetPlay
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,y,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonCrossRefWidgetPlay
}`,...(m=(y=o.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var l,d,f;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonCrossRefWidgetPlay
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const z=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{r as CrossRefTabWidget1,a as DefiningOntologyUnavailable,o as SelectingDefiningOntology,z as __namedExportsOrder,k as default};
