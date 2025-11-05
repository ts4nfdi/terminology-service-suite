"use client";import{b as e}from"./iframe-Br2QEmbz.js";import{u as w}from"./useQuery-C_VHNibu.js";import{T as I}from"./TabPresentation-B4POqish.js";import{O as S,o as v,aT as E}from"./widgetDescriptions-B8keAX7-.js";import{E as O}from"./loading_spinner-B0eLwUeo.js";import{E as q}from"./text-CHstZrML.js";function L(t){const{iri:n,api:a,ontologyId:i,entityType:d,parameter:l,useLegacy:o,hierarchyTab:h,crossRefTab:c,terminologyInfoTab:y,altNamesTab:b,...p}=t,m=new S(a),{data:s,isLoading:g,isSuccess:f,isError:u,error:T}=w(["tabdata",a,l,d,n,i,o],async()=>m.getEntityObject(n,d,i,l,o));function k(r){return e.jsx("div",{"data-testid":"tab",children:e.jsx(I,{...p,data:r,iri:n,api:a,useLegacy:o,entityType:r.getType(),ontologyId:i||r.getOntologyId(),hierarchyTab:h,crossRefTab:c,terminologyInfoTab:y,altNamesTab:b,onNavigateToEntity:t.onNavigateToEntity,onNavigateToOntology:t.onNavigateToOntology,onNavigateToDisambiguate:t.onNavigateToDisambiguate,hierarchyPreferredRoots:t.hierarchyPreferredRoots,hierarchyKeepExpansionStates:t.hierarchyKeepExpansionStates,hierarchyShowSiblingsOnInit:t.hierarchyShowSiblingsOnInit})})}return e.jsxs(e.Fragment,{children:[g&&e.jsx(O,{}),u&&e.jsx(q,{children:v(T,"description")}),f&&s&&e.jsx(e.Fragment,{children:E(s)?k(s):null})]})}L.__docgenInfo={description:"",methods:[],displayName:"TabWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},entityType:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof entityTypeNames)[number]"},description:"Sets the type of the entity whose information you want to fetch."},ontologyId:{required:!1,tsType:{name:"string"},description:"Select a specific ontology by id"},iri:{required:!0,tsType:{name:"string"},description:"Entity IRI whose information you want to fetch."},parameter:{required:!1,tsType:{name:"string"},description:`Additional parameters to pass to the API.

Each parameter can be combined via
the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
<i><b>,</b></i>. The following keys could be used:<br/> <br/>
 <table>
 <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
 <tr><td>lang</td><td>Set the language for the response e.g. <b><i>en</i></b>, <b><i>de</i></b>, <b><i>fr</i></b>. The default value is <b><i>en</i></b>.</td></tr>
 <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. <b><i>collection=nfdi4health</i></b></td></tr>
 <tr><td>database</td><td>Restrict a search via the API Gateway to specific terminology software stacks, choose from <b><i>ols</i></b>, <b><i>ontoportal</i></b>, or <b><i>skosmos</i></b></td></tr>
</table>`},useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"},altNamesTab:{required:!1,tsType:{name:"boolean"},description:"It is possible to show and hide the Alternative Names tab. **True** shows the tab. **False** hides the tab."},hierarchyTab:{required:!1,tsType:{name:"boolean"},description:"It is possible to show and hide the Hierarchy tab. **True** shows the tab. **False** hides the tab."},crossRefTab:{required:!1,tsType:{name:"boolean"},description:"It is possible to show and hide the Cross-references tab. **True** shows the tab. **False** hides the tab."},terminologyInfoTab:{required:!1,tsType:{name:"boolean"},description:"It is possible to show and hide the About Terminology Info tab. **True** shows the tab. **False** hides the tab."},graphViewTab:{required:!1,tsType:{name:"boolean"},description:"It is possible to show and hide the Graph view tab. **True** shows the tab. **False** hides the tab."},termDepictionTab:{required:!1,tsType:{name:"boolean"},description:"It is possible to show and hide the TermDepiction tab. **True** shows the tab. **False** hides the tab."},onNavigateToEntity:{required:!1,tsType:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}]},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the current ontology
@param entityType obtains the entityType of the clicked entity
@param entity.iri obtains the iri of the clicked entity
@param entity.label obtains the label of the clicked entity
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`},onNavigateToOntology:{required:!1,tsType:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}]},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the clicked badge
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`},onNavigateToDisambiguate:{required:!1,tsType:{name:"union",raw:`| ((entityType: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}]},description:`This function is called every time a disambiguation badge is clicked
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`},hierarchyPreferredRoots:{required:!1,tsType:{name:"boolean"},description:""},hierarchyKeepExpansionStates:{required:!1,tsType:{name:"boolean"},description:""},hierarchyShowSiblingsOnInit:{required:!1,tsType:{name:"boolean"},description:""},hierarchyWrap:{required:!1,tsType:{name:"boolean"},description:""}}};export{L as T};
