import{c as u,v as b,p as v,x as _,y as N,u as O,i as f,al as I}from"./QueryClientProvider-CF5rkF5q.js";import{Z as D,E as T}from"./globals-Dneqqh2P.js";import"./index-BWxfa0Q7.js";import"./client-DFp2fd_t.js";import"./useQuery-DgfFOhgk.js";/* empty css                               */import"./panel-CEST4cjP.js";import"./shadow-DoZX0Z6P.js";import"./_button-BbAKCsGY.js";import"./flex_group-D7KdzxVe.js";import"./text-CqhZXRY4.js";import"./link.styles-B52HwVam.js";import"./flex_item-BUUDphw2.js";const{expect:S,waitFor:W,within:$}=__STORYBOOK_MODULE_TEST__,w={...f,...O,...N,..._,...v,...b,...u},E={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",className:"",parameter:""},P={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:D,entityType:"term",ontologyId:"ncit"},L={api:T,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},h={api:T,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},n=async({canvasElement:e})=>{const t=$(e);await W(async()=>{const A=t.getByTestId("alternative-name");await S(A).toBeInTheDocument()},{timeout:3e3})};let x=0;function B(){return x++}const z={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:I}}},render:e=>{const t=B();return`
<div id="alternative_name_tab_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createAlternativeNameTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:"${e.useLegacy}",
        className:"${e.className}"
    },
    document.querySelector('#alternative_name_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:w,args:E},a={args:P,play:n},r={args:L,play:n},i={args:h,play:n};var o,s,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: AlternativeNameTabWidget1Args,
  play: commonAlternativeNameTabWidgetPlay
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,m,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var l,y,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(d=(y=i.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const G=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{a as AlternativeNameTabWidget1,i as DefiningOntologyUnavailable,r as SelectingDefiningOntology,G as __namedExportsOrder,z as default};
