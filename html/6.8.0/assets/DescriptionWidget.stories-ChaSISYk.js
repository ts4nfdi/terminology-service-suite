import{c as f,a6 as O,p as I,v as S,u as W,y as E,a7 as $,a8 as b,i as v,a9 as w}from"./QueryClientProvider-Cv6DMAwY.js";import{Z as x,E as s}from"./globals-BQAFDkgj.js";import"./index-xUWEfGvJ.js";import"./client-hNkKQuBU.js";import"./DescriptionWidget-BsG61Bk-.js";import"./useQuery-D80UYlTP.js";import"./OlsThingApi-CBuqiEEB.js";/* empty css                                */import"./text-Dj3fvmL0.js";import"./link.styles-DeXSguuE.js";const{expect:N,waitFor:P,within:L}=__STORYBOOK_MODULE_TEST__,B={...v,...b,...$,...E,...W,...S,...I,...O,...f},F={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",className:"",parameter:"collection=nfdi4health"},U={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:x,ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"},M={api:s,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},C={api:s,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},Q={api:s,iri:"http://identifiers.org/uniprot/Q9VA",thingType:"term",parameter:""},n=async({canvasElement:e})=>{const t=L(e);await P(async()=>{const _=t.getByTestId("description");await N(_).toBeInTheDocument()},{timeout:3e3})};let V=0;function Z(){return V++}const X={title:"Entity Metadata/DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:w}}},render:e=>{const t=Z();return`
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
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,m,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonDescriptionWidgetPlay
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var d,u,D;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonDescriptionWidgetPlay
}`,...(D=(u=i.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var T,A,h;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: ErrorFetchingDataArgs,
  play: commonDescriptionWidgetPlay
}`,...(h=(A=a.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const ee=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorFetchingData"];export{i as DefiningOntologyUnavailable,r as DescriptionWidget1,a as ErrorFetchingData,o as SelectingDefiningOntology,ee as __namedExportsOrder,X as default};
