import{b as f}from"./widgetDescriptions-MmE0nvU9.js";import{E as s,Z as O}from"./globals-Dneqqh2P.js";import{c as S,P as I,p as W,v as E,u as b,y as $,R as v,S as P,i as w}from"./QueryClientProvider-CtwX41Lz.js";import"./index-Dh-UqF6w.js";import"./client-DFp2fd_t.js";import"./DescriptionWidget-Cic3IMyy.js";import"./useQuery-B-NHskGH.js";import"./OlsThingApi-F3rHxo_T.js";/* empty css                                */import"./text-Cn8NwKpQ.js";import"./link.styles-C820-Rkj.js";const{expect:x,waitFor:N,within:L}=__STORYBOOK_MODULE_TEST__,B={...w,...P,...v,...$,...b,...E,...W,...I,...S},F={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",className:"",parameter:""},U={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:O,ontologyId:"ncit",thingType:"term"},M={api:s,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},C={api:s,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},Q={api:s,iri:"http://identifiers.org/uniprot/Q9VA",thingType:"term",parameter:""},n=async({canvasElement:e})=>{const t=L(e);await N(async()=>{const h=t.getByTestId("description");await x(h).toBeInTheDocument()},{timeout:3e3})};let R=0;function V(){return R++}const ee={title:"Entity Metadata/DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:f}}},render:e=>{const t=V();return`
<div id="description_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDescription(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        descText:"${e.descText}",
        thingType:"${e.thingType}",
        parameter:"${e.parameter}",
        color:"${e.color}",
        useLegacy:"${e.useLegacy}",
        className:"${e.className}",
        
    },
    document.querySelector('#description_widget_container_${t}')
)
<\/script>
        `},argTypes:B,args:F},r={args:U,play:n},o={args:M,play:n},i={args:C,play:n},a={args:Q,play:n};var c,p,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: DescriptionWidget1Args,
  play: commonDescriptionWidgetPlay
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,y,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonDescriptionWidgetPlay
}`,...(l=(y=o.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};var d,u,D;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonDescriptionWidgetPlay
}`,...(D=(u=i.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var T,A,_;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: ErrorFetchingDataArgs,
  play: commonDescriptionWidgetPlay
}`,...(_=(A=a.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const te=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorFetchingData"];export{i as DefiningOntologyUnavailable,r as DescriptionWidget1,a as ErrorFetchingData,o as SelectingDefiningOntology,te as __namedExportsOrder,ee as default};
