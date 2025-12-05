"use client";import{b as r}from"./iframe-PNlz-VpA.js";import{u as k}from"./useQuery-DJNlENI_.js";import{O as E,o as w,aY as O}from"./widgetDescriptions-wzeR7e9S.js";import{E as I}from"./EntityDefinedByPresentation-VRzCqvn1.js";/* empty css                  */import{E as S}from"./loading_spinner-BcLTIyBp.js";import{E as v}from"./text-x82zVtmH.js";function L(c){const{iri:o,api:p,parameter:l,entityType:t,ontologyId:b,useLegacy:a,className:g}=c,m=new E(p),{data:s,isLoading:h,isSuccess:f,isError:u,error:T}=k(["entityDefinedBy",p,l,t,o,b,a],async()=>{let i,d,y;if(a){const e=(await m.getEntityResponse(o,t,void 0,l,a))._embedded;i=e[Object.keys(e)[0]].filter(n=>n.is_defining_ontology).map(n=>n.ontology_name),d=t||O(Object.keys(e)[0]),y=e[Object.keys(e)[0]][0].label}else{const e=await m.getEntityObject(o,t,b,l,a);i=e.getDefinedBy().filter(n=>n!=e.getOntologyId()),d=t||e.getType(),y=e.getLabel()||""}return i=i.sort(),{ontoList:i,entityType:d,label:y}});return r.jsxs("div",{"data-testid":"entity-defined-by",children:[f&&s&&r.jsx(I,{ontolist:s.ontoList,entityType:s.entityType,label:s.label,iri:o,onNavigateToOntology:c.onNavigateToOntology,className:g}),h&&r.jsx(S,{}),u&&r.jsx(v,{children:w(T,"ontology list")})]})}L.__docgenInfo={description:"",methods:[],displayName:"EntityDefinedByWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},entityType:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof entityTypeNames)[number]"},description:"Sets the type of the entity whose information you want to fetch."},ontologyId:{required:!0,tsType:{name:"string"},description:"Select a specific ontology by id"},iri:{required:!0,tsType:{name:"string"},description:"Entity IRI whose information you want to fetch."},parameter:{required:!1,tsType:{name:"string"},description:`Additional parameters to pass to the API.

Each parameter can be combined via
the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
<i><b>,</b></i>. The following keys could be used:<br/> <br/>
 <table>
 <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
 <tr><td>lang</td><td>Set the language for the response e.g. <b><i>en</i></b>, <b><i>de</i></b>, <b><i>fr</i></b>. The default value is <b><i>en</i></b>.</td></tr>
 <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. <b><i>collection=nfdi4health</i></b></td></tr>
 <tr><td>database</td><td>Restrict a search via the API Gateway to specific terminology software stacks, choose from <b><i>ols</i></b>, <b><i>ontoportal</i></b>, or <b><i>skosmos</i></b></td></tr>
</table>`},useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"},onNavigateToOntology:{required:!1,tsType:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}]},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the clicked badge
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}}};export{L as E};
