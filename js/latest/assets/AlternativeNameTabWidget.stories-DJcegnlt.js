import{Z as u,E as T}from"./globals-CvFyH82M.js";import{g as b,B as v,p as _,F as N,G as O,z as f,q as I,aq as D}from"./storyArgs-AFjXh7XW.js";import"./index-Dmlmg-hv.js";import"./index-ZCdkkhYt.js";import"./useQuery-BSQecOR7.js";/* empty css                               */import"./flex_group-Bf8PzYzu.js";import"./panel-DRTqr2vT.js";import"./shadow-DBsugtKM.js";import"./text-dCu-lByA.js";import"./link.styles-CJzvf_6u.js";import"./flex_item-DZLNRa3p.js";const{expect:S,waitFor:W,within:$}=__STORYBOOK_MODULE_TEST__,w={...I,...f,...O,...N,..._,...v,...b},E={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",className:"",parameter:"collection=nfdi4health"},h={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:u,entityType:"term",ontologyId:"ncit"},P={api:T,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},B={api:T,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},n=async({canvasElement:e})=>{const t=$(e);await W(async()=>{const A=t.getByTestId("alternative-name");await S(A).toBeInTheDocument()},{timeout:3e3})};let L=0;function U(){return L++}const V={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:D}}},render:e=>{const t=U();return`
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
        `},argTypes:w,args:E},a={args:h,play:n},r={args:P,play:n},i={args:B,play:n};var o,s,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: AlternativeNameTabWidget1Args,
  play: commonAlternativeNameTabWidgetPlay
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,m,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var l,y,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(d=(y=i.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const Y=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{a as AlternativeNameTabWidget1,i as DefiningOntologyUnavailable,r as SelectingDefiningOntology,Y as __namedExportsOrder,V as default};
