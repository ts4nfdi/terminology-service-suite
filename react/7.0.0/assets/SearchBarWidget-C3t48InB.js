"use client";import{r as n,j as c}from"./iframe-UEoou7DV.js";import{u as v}from"./useQuery-CxrK4MQ2.js";import{O as q}from"./OlsSearchApi-C6F1_ylG.js";import{E as O}from"./combo_box-CBuYUEV_.js";function w(i){const{api:u,query:g,selectionChangedEvent:p,...C}=i,d=new q(u),[m,h]=n.useState(),[r,o]=n.useState([]),[s,y]=n.useState(g),f=e=>{o(e)},b=e=>{if(!e.trim().toLowerCase())return;o([{label:e}])},{isLoading:S}=v(["suggestions",s],async()=>{if(s.trim())return d.suggest({query:s},void 0,void 0,i.parameter).then(e=>{if(e.response&&e.response.docs){const a=new Set;h(e.response.docs.map(t=>({label:t.autosuggest,type:{color:"tint1",iconType:""}})).filter(t=>{const l=t.label.trim().toLowerCase();return a.has(l)?!1:(a.add(l),!0)}))}})});return n.useEffect(()=>{p(r.map(e=>({label:e.label})))},[r]),c.jsx("div",{"data-testid":"search-bar",children:c.jsx(O,{id:"suggest",isClearable:!0,"aria-label":"searchBar",fullWidth:!0,async:!0,placeholder:"Search",singleSelection:!0,isLoading:S,options:m,selectedOptions:r,onChange:f,onCreateOption:b,onSearchChange:e=>{y(e)}})})}w.__docgenInfo={description:"",methods:[],displayName:"SearchBarWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},parameter:{required:!1,tsType:{name:"string"},description:""},query:{required:!0,tsType:{name:"string"},description:"The search term to receive suggestions for."},selectionChangedEvent:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  selectedOptions: {
    label: string;
    iri?: string;
    ontology_name?: string;
    type?: string;
  }[],
) => void`,signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  iri?: string;
  ontology_name?: string;
  type?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"iri",value:{name:"string",required:!1}},{key:"ontology_name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}],raw:`{
  label: string;
  iri?: string;
  ontology_name?: string;
  type?: string;
}[]`},name:"selectedOptions"}],return:{name:"void"}}},description:`A method that is called once the set of selection changes
@param selectedOptions  The selected items`}}};export{w as S};
