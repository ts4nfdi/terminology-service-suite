"use client";import{r as t,b as o}from"./iframe-4vt7eyOh.js";import{u as b}from"./useQuery-BFYeHhfm.js";import{O as S,E as v}from"./OlsSearchApi-TzhNAtRw.js";function q(s){const{api:l,query:c,selectionChangedEvent:u,...O}=s,g=new S(l),[p,d]=t.useState(),[n,i]=t.useState([]),[r,m]=t.useState(c),y=e=>{i(e)},h=e=>{if(!e.trim().toLowerCase())return;i([{label:e}])},{isLoading:f}=b(["suggestions",r],async()=>{if(r.trim())return g.suggest({query:r},void 0,void 0,s.parameter).then(e=>{e.response&&e.response.docs&&d(e.response.docs.map(a=>({label:a.autosuggest,type:{color:"tint1",iconType:""}})))})});return t.useEffect(()=>{u(n.map(e=>({label:e.label})))},[n]),o.jsx("div",{"data-testid":"search-bar",children:o.jsx(v,{id:"suggest",isClearable:!0,"aria-label":"searchBar",fullWidth:!0,async:!0,placeholder:"Search",singleSelection:!0,isLoading:f,options:p,selectedOptions:n,onChange:y,onCreateOption:h,onSearchChange:e=>{m(e)}})})}q.__docgenInfo={description:"",methods:[],displayName:"SearchBarWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},parameter:{required:!1,tsType:{name:"string"},description:""},query:{required:!0,tsType:{name:"string"},description:"The search term to receive suggestions for."},selectionChangedEvent:{required:!0,tsType:{name:"signature",type:"function",raw:`(
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
@param selectedOptions  The selected items`}}};export{q as S};
