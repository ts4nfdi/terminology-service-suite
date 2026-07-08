import{e as u}from"./widgetDescriptions-MmE0nvU9.js";import{Z as b,E as T}from"./globals-Dneqqh2P.js";import{c as v,v as _,p as N,x as O,y as f,u as I,i as D}from"./QueryClientProvider-zfE1X_HG.js";import"./index-B45wnmso.js";import"./client-DFp2fd_t.js";import"./useQuery-DoT4xdXt.js";/* empty css                               */import"./panel-DAodgXMU.js";import"./shadow-Bzi7kFR6.js";import"./_button-BVzs29vd.js";import"./flex_group-C1ayx00j.js";import"./text-C2i5yQf3.js";import"./link.styles-8Pu_q_PW.js";import"./flex_item-NSSHbUQt.js";const{expect:S,waitFor:W,within:$}=__STORYBOOK_MODULE_TEST__,w={...D,...I,...f,...O,...N,..._,...v},E={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",className:"",parameter:""},P={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:b,entityType:"term",ontologyId:"ncit"},L={api:T,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},h={api:T,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},o=async({canvasElement:e})=>{const t=$(e);await W(async()=>{const A=t.getByTestId("alternative-name");await S(A).toBeInTheDocument()},{timeout:3e3})};let x=0;function B(){return x++}const G={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:u}}},render:e=>{const t=B();return`
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
        `},argTypes:w,args:E},a={args:P,play:o},r={args:L,play:o},i={args:h,play:o};var n,s,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: AlternativeNameTabWidget1Args,
  play: commonAlternativeNameTabWidgetPlay
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,c,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var l,y,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(d=(y=i.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const H=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{a as AlternativeNameTabWidget1,i as DefiningOntologyUnavailable,r as SelectingDefiningOntology,H as __namedExportsOrder,G as default};
