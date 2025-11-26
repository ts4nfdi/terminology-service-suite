import{E as _}from"./EntityOntoListWidget-BUbSgcQ-.js";import{E as r}from"./globals-CvFyH82M.js";import{z as w,E as v,p as S,G as f,H as x,C as I,j as N,a8 as W,L as D}from"./widgetDescriptions-CloO4XcQ.js";import"./iframe-DGIuifbX.js";import"./preload-helper-Dp1pzeXC.js";import"./useQuery-Ib7UZy7f.js";import"./EntityOntoListPresentation-CzzsObZJ.js";import"./text-BEntCvSE.js";import"./loading_spinner-DIkX6Ymb.js";import"./link.styles-BzCEienO.js";/* empty css                  */const{expect:F,waitFor:P,within:b}=__STORYBOOK_MODULE_TEST__,h={...N,...I,...x,...f,...S,...v,...w},M={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},B={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:r,entityType:"term",ontologyId:"efo"},k={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:r,ontologyId:"ons"},C={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:r,entityType:"term",ontologyId:"efo",useLegacy:!0},H={iri:"http://purl.obolibrary.org/obo/HP_0000819",api:r,ontologyId:"hp"},s=async({canvasElement:u})=>{const T=b(u);await P(async()=>{const L=T.getByTestId("entity-onto-list");await F(L).toBeInTheDocument()},{timeout:3e3})},X={title:"Additional Entity Metadata/EntityOntoListWidget",component:_,parameters:{layout:"centered",docs:{source:{transform:D},description:{component:W}}},argTypes:h,args:M},t={args:B,play:s},e={args:k,play:s},o={args:C,play:s},a={args:H,play:s};var i,n,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: v2ApiEFOArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,y,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: v2ApiONSArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var A,O,E;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: exceedsMaxDisplayArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(E=(O=a.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const Z=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{Z as __namedExportsOrder,X as default,a as exceedsMaxDisplay,o as legacyApi,t as v2ApiEFO,e as v2ApiONS};
