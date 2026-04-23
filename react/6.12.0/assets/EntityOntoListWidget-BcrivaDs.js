"use client";import{j as r}from"./iframe-CfxKY3wJ.js";import{u as E}from"./useQuery-m9xRwLj_.js";import{O,E as w,x as L,b8 as I}from"./storyArgs-Evx-wMLu.js";/* empty css                  */import{E as S}from"./EntityOntoListPresentation-r8H1SROi.js";import{E as v}from"./text-DsVPKzkZ.js";function j(b){const{iri:o,api:m,parameter:l,entityType:i,ontologyId:d,useLegacy:a,className:h}=b,g=new O(m),{data:s,isLoading:f,isSuccess:u,isError:T,error:k}=E(["entityOntoList",m,l,i,o,d,a],async()=>{let n,y,c;if(a){const e=(await g.getEntityResponse(o,i,void 0,l,a))._embedded,p=e[Object.keys(e)[0]].filter(t=>t.is_defining_ontology).map(t=>t.ontology_name);n=e[Object.keys(e)[0]].map(t=>t.ontology_name).filter(t=>!p.includes(t)),y=i||I(Object.keys(e)[0]),c=e[Object.keys(e)[0]][0].label}else{const e=await g.getEntityObject(o,i,d,l,a);n=e.getAppearsIn().filter(p=>!e.getDefinedBy().includes(p)),y=i||e.getType(),c=e.getLabel()||""}return n=n.filter(e=>e!=d).sort(),{ontoList:n,entityType:y,label:c}});return r.jsxs("div",{"data-testid":"entity-onto-list",children:[u&&s&&r.jsx(S,{ontolist:s.ontoList,entityType:s.entityType,label:s.label,iri:o,onNavigateToOntology:b.onNavigateToOntology,className:h}),f&&r.jsx(w,{}),T&&r.jsx(v,{children:L(k,"ontology list")})]})}j.__docgenInfo={description:"",methods:[],displayName:"EntityOntoListWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},entityType:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof entityTypeNames)[number]"},description:"Sets the type of the entity whose information you want to fetch."},ontologyId:{required:!0,tsType:{name:"string"},description:"Select a specific ontology by id"},iri:{required:!0,tsType:{name:"string"},description:"Entity IRI whose information you want to fetch."},parameter:{required:!1,tsType:{name:"string"},description:`Additional parameters to pass to the API.

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
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}}};export{j as E};
