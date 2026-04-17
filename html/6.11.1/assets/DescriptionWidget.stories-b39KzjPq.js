import{c as O,X as f,p as I,v as S,u as W,y as E,Y as $,Z as b,i as v,_ as w}from"./QueryClientProvider-tBG0NWM0.js";import{Z as x,E as s}from"./globals-Dneqqh2P.js";import"./index-B_mFFmtq.js";import"./client-hNkKQuBU.js";import"./DescriptionWidget-CE1Pu9EX.js";import"./useQuery-CJ8-LNvG.js";import"./OlsThingApi-B6xLE3Ry.js";/* empty css                                */import"./text-Bf6klxy0.js";import"./link.styles-CSK3t4GY.js";const{expect:N,waitFor:P,within:L}=__STORYBOOK_MODULE_TEST__,B={...v,...b,...$,...E,...W,...S,...I,...f,...O},F={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",className:"",parameter:""},U={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:x,ontologyId:"ncit",thingType:"term"},M={api:s,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},Z={api:s,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},C={api:s,iri:"http://identifiers.org/uniprot/Q9VA",thingType:"term",parameter:""},n=async({canvasElement:e})=>{const t=L(e);await P(async()=>{const h=t.getByTestId("description");await N(h).toBeInTheDocument()},{timeout:3e3})};let Q=0;function V(){return Q++}const J={title:"Entity Metadata/DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:w}}},render:e=>{const t=V();return`
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
        `},argTypes:B,args:F},r={args:U,play:n},o={args:M,play:n},i={args:Z,play:n},a={args:C,play:n};var c,p,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(_=(A=a.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const ee=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorFetchingData"];export{i as DefiningOntologyUnavailable,r as DescriptionWidget1,a as ErrorFetchingData,o as SelectingDefiningOntology,ee as __namedExportsOrder,J as default};
