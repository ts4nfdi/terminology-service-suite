import{j as e}from"./iframe-DXdc-Lnu.js";import{D}from"./globals-1uEo64sR.js";import{bu as J,ba as x,bh as M,bb as w}from"./storyArgs-D5ANxk7j.js";import{B as A}from"./OntologyBadge-BSepaf7q.js";import{E as I}from"./ExpandableOntologyBadgeList-lQL9UDr2.js";import{E as V}from"./icon-CUyMCZ_R.js";import{E as X}from"./icon_tip-DNX6XK-z.js";function _({text:i}){return e.jsx(X,{css:{maxWidth:"580px",backgroundColor:"rgba(0,0,0,0.8)",font:"menu"},type:"info",color:"subdued",position:"right",content:e.jsx("div",{style:{whiteSpace:"pre-line"},children:i})})}_.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!0,tsType:{name:"string"},description:""}}};function N(){return e.jsx("span",{style:{margin:"0 0.15em"}})}N.__docgenInfo={description:"",methods:[],displayName:"Spacer"};function L({parentEntity:i,linkedEntities:s,iri:t,showBadges:r=D,onNavigates:n}){const o=typeof t=="string"?t:typeof t=="object"&&t!==null&&"value"in t&&typeof t.value=="string"?t.value:"",h=s.getLabelForIri(o)||o.split("/").pop()||o,a=s.get(o),m=i.getOntologyId();if(!o)return e.jsx("span",{children:"Invalid value"});if(i.getType()!=="ontology"&&o===(i==null?void 0:i.getIri()))return e.jsx("span",{className:"highlight",children:i.getLabel()});if(!a)return o.startsWith("http")?e.jsx("a",{className:"clickable",href:o,children:h}):e.jsx("span",{children:h});const g=a.definedBy?a.definedBy.filter(f=>f!==m):[],d=a.type?J(a.type):i.getType();return g.length===1?a.hasLocalDefinition?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"clickable",onClick:()=>{typeof n.onNavigateToEntity=="function"&&n.onNavigateToEntity(m,d,{iri:t,label:h})},children:h}),r?e.jsxs(e.Fragment,{children:[" ",e.jsx(I,{iri:o,label:h,ontolist:g,onNavigateToOntology:n.onNavigateToOntology,entityType:d})]}):e.jsx(e.Fragment,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"clickable",onClick:()=>{typeof n.onNavigateToEntity=="function"&&n.onNavigateToEntity(g[0],d,{iri:t,label:h})},children:h}),r?e.jsxs(e.Fragment,{children:[" ",e.jsx(I,{iri:o,label:h,ontolist:g,onNavigateToOntology:n.onNavigateToOntology,entityType:d})]}):e.jsx(e.Fragment,{})]}):g.length>1?a.hasLocalDefinition?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"clickable",onClick:()=>{typeof n.onNavigateToEntity=="function"&&n.onNavigateToEntity(m,d,{iri:t,label:h})},children:h}),r?e.jsxs(e.Fragment,{children:[" ",e.jsx(I,{iri:o,label:h,ontolist:g,onNavigateToOntology:n.onNavigateToOntology,entityType:d})]}):e.jsx(e.Fragment,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"clickable",href:o,children:h}),r&&e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsxs(A,{onClick:()=>{typeof n.onNavigateToDisambiguate=="function"&&n.onNavigateToDisambiguate(d,{iri:t,label:h})},children:[e.jsx(V,{type:"search",size:"s"})," ",g.length," ","ontologies"]})]})]}):a.hasLocalDefinition?e.jsx(e.Fragment,{children:e.jsx("button",{className:"clickable",onClick:()=>{typeof n.onNavigateToEntity=="function"&&n.onNavigateToEntity(m,d,{iri:t,label:h})},children:h})}):parseInt(a.numAppearsIn)>0?e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"clickable",href:o,children:h}),r&&e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsxs(A,{onClick:()=>{typeof n.onNavigateToDisambiguate=="function"&&n.onNavigateToDisambiguate(d,{iri:t,label:h})},children:[e.jsx(V,{type:"search",size:"s"})," ",a.numAppearsIn," ",parseInt(a.numAppearsIn)>1?"ontologies":"ontology"]})]})]}):e.jsx(e.Fragment,{children:e.jsx("a",{className:"clickable",href:a.url||o,children:h})})}L.__docgenInfo={description:`ONLY USABLE WITH V2-API ENTITIES

Returns a labeled entity link as JSX element
@param parentEntity the entity object in which the linked entity exists
@param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
@param iri   the entities' iri
@param showBadges    boolean which indicates if badges should be shown
@param onNavigates functions defining the action when clicking clickable items
@param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
@param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
@param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
@returns ReactElement the entity link JSX`,methods:[],displayName:"EntityLink",props:{parentEntity:{required:!0,tsType:{name:"Thing"},description:""},linkedEntities:{required:!0,tsType:{name:"LinkedEntities"},description:""},iri:{required:!0,tsType:{name:"string"},description:""},showBadges:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onNavigates:{required:!0,tsType:{name:"intersection",raw:`OnNavigateToEntity &
OnNavigateToOntology &
OnNavigateToDisambiguate`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * This function is called every time an entity link is clicked
   * @param ontologyId obtains the ontologyId of the current ontology
   * @param entityType obtains the entityType of the clicked entity
   * @param entity.iri obtains the iri of the clicked entity
   * @param entity.label obtains the label of the clicked entity
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToEntity?:
    | ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
    | string;
}`,signature:{properties:[{key:"onNavigateToEntity",value:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the current ontology
@param entityType obtains the entityType of the clicked entity
@param entity.iri obtains the iri of the clicked entity
@param entity.label obtains the label of the clicked entity
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}},{name:"signature",type:"object",raw:`{
  /**
   * This function is called every time an entity link is clicked
   * @param ontologyId obtains the ontologyId of the clicked badge
   * @param entityType obtains the entityType of the clicked badge
   * @param entity.iri obtains the iri of the clicked badge (can be empty)
   * @param entity.label obtains the label of the clicked badge
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToOntology?:
    | ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
    | string;
}`,signature:{properties:[{key:"onNavigateToOntology",value:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the clicked badge
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}},{name:"signature",type:"object",raw:`{
  /**
   * This function is called every time a disambiguation badge is clicked
   * @param entityType obtains the entityType of the clicked badge
   * @param entity.iri obtains the iri of the clicked badge (can be empty)
   * @param entity.label obtains the label of the clicked badge
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToDisambiguate?:
    ((entityType: string, entity?: EntityData) => void) | string;
}`,signature:{properties:[{key:"onNavigateToDisambiguate",value:{name:"union",raw:"((entityType: string, entity?: EntityData) => void) | string",elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time a disambiguation badge is clicked
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}}]},description:""}}};function B({parentEntity:i,reified:s,showBadges:t=D,showAxiomsTooltip:r=!0,onNavigates:n}){function o({value:a}){const m=i.getLinkedEntities();function g(d){const f=[];if(m)for(const l of Object.keys(m.linkedEntities))for(let y=d.indexOf(l,0);y!==-1;y=d.indexOf(l,y)){const k=y+l.length;if(/^(\w|[._\-/]\w)/.test(d.slice(k,k+2))){y=k;continue}f.push({start:y,end:y+l.length,link:e.jsx(L,{parentEntity:i,linkedEntities:m,iri:l,showBadges:t,onNavigates:n})}),y+=l.length}const O=/[A-z]+:\/\/[^\s]+/g;for(let l=O.exec(d);l;l=O.exec(d)){const y=l[0];f.push({start:l.index,end:l.index+y.length,link:e.jsx("span",{children:e.jsx("a",{className:"clickable",href:y,children:y})},x())})}f.sort((l,y)=>l.start-y.start);e:for(let l=0;l<f.length;){for(let y=l+1;y<f.length;++y){const k=f[l],u=f[y];if(k!==u&&k.end>=u.start&&u.end>=k.start){k.end-k.start<u.end-u.start?f.splice(l,1):f.splice(y,1);continue e}}++l}if(f.length===0)return e.jsx(e.Fragment,{children:d});const T=[];let j=0;for(const l of f)T.push(e.jsx("span",{children:d.substring(j,l.start)},x())),T.push(l.link),j=l.end;return T.push(e.jsx("span",{children:d.slice(j)},x())),e.jsx(e.Fragment,{children:T})}if(Object.keys(m.linkedEntities).length==0){if(typeof a=="string")return g(a.toString());if(typeof a=="object"&&a["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]!=null)switch(a["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]){case"http://www.w3.org/2008/05/skos-xl#Label":return e.jsx(e.Fragment,{children:a["http://www.w3.org/2008/05/skos-xl#literalForm"].value});case"http://purl.org/vocab/changeset/schema#ChangeSet":return e.jsxs(e.Fragment,{children:[a["http://purl.org/vocab/changeset/schema#createdDate"].value,":"," ",a["http://purl.org/vocab/changeset/schema#changeReason"].value]});default:return console.error(`Unknown rdf syntax type: ${a["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]}`),e.jsx(e.Fragment,{children:JSON.stringify(a)})}else return console.error(`Unknown entry information format: ${a}`),e.jsx(e.Fragment,{children:JSON.stringify(a)})}else return m.get(a)?e.jsx(L,{parentEntity:i,linkedEntities:m,iri:a,showBadges:t,onNavigates:n}):typeof a!="string"?i.getType()=="ontology"?e.jsx(e.Fragment,{children:JSON.stringify(a)}):e.jsx(p,{parentEntity:i,linkedEntities:m,currentResponsePath:a,showBadges:t,onNavigates:n}):g(a.toString())}function h({axiomsDict:a}){const m=Object.keys(a).map(g=>{const d=i.getLinkedEntities().getLabelForIri(g)||g;return d?"*"+a[g]+" ("+d+")":""}).join(`
`);return e.jsx(_,{text:m})}return e.jsxs(e.Fragment,{children:[e.jsx(o,{value:s.value}),s.hasMetadata()&&r&&e.jsxs(e.Fragment,{children:[" ",e.jsx(h,{axiomsDict:s.getMetadata()})]})]})}B.__docgenInfo={description:`Renders a given Reified
@param parentEntity the entity the Reified exists in
@param reified the Reified
@param showBadges boolean which indicates if badges should be shown
@param showAxiomsTooltip boolean which indicates if the axioms should be shown in an info tooltip (default true)
@param onNavigates functions defining the action when clicking clickable items
@param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
@param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
@param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge`,methods:[],displayName:"RenderedReified",props:{parentEntity:{required:!0,tsType:{name:"Thing"},description:""},reified:{required:!0,tsType:{name:"Reified",elements:[{name:"any"}],raw:"Reified<any>"},description:""},showBadges:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showAxiomsTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onNavigates:{required:!0,tsType:{name:"intersection",raw:`OnNavigateToEntity &
OnNavigateToOntology &
OnNavigateToDisambiguate`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * This function is called every time an entity link is clicked
   * @param ontologyId obtains the ontologyId of the current ontology
   * @param entityType obtains the entityType of the clicked entity
   * @param entity.iri obtains the iri of the clicked entity
   * @param entity.label obtains the label of the clicked entity
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToEntity?:
    | ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
    | string;
}`,signature:{properties:[{key:"onNavigateToEntity",value:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the current ontology
@param entityType obtains the entityType of the clicked entity
@param entity.iri obtains the iri of the clicked entity
@param entity.label obtains the label of the clicked entity
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}},{name:"signature",type:"object",raw:`{
  /**
   * This function is called every time an entity link is clicked
   * @param ontologyId obtains the ontologyId of the clicked badge
   * @param entityType obtains the entityType of the clicked badge
   * @param entity.iri obtains the iri of the clicked badge (can be empty)
   * @param entity.label obtains the label of the clicked badge
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToOntology?:
    | ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
    | string;
}`,signature:{properties:[{key:"onNavigateToOntology",value:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the clicked badge
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}},{name:"signature",type:"object",raw:`{
  /**
   * This function is called every time a disambiguation badge is clicked
   * @param entityType obtains the entityType of the clicked badge
   * @param entity.iri obtains the iri of the clicked badge (can be empty)
   * @param entity.label obtains the label of the clicked badge
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToDisambiguate?:
    ((entityType: string, entity?: EntityData) => void) | string;
}`,signature:{properties:[{key:"onNavigateToDisambiguate",value:{name:"union",raw:"((entityType: string, entity?: EntityData) => void) | string",elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time a disambiguation badge is clicked
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}}]},description:""}}};function p({parentEntity:i,linkedEntities:s,currentResponsePath:t,showBadges:r=D,onNavigates:n}){let o=e.jsx(e.Fragment,{});if(s=s.mergeWith(t.linkedEntities),typeof t=="string")o=e.jsx(L,{parentEntity:i,linkedEntities:s,iri:t,showBadges:r,onNavigates:n});else if(typeof t=="object"&&!Array.isArray(t)&&Array.isArray(t.type)&&t.type.indexOf("reification")!==-1)o=e.jsx(B,{parentEntity:i,reified:M.fromJson(t)[0],showBadges:r,onNavigates:n});else{const h=t["http://www.w3.org/2002/07/owl#someValuesFrom"],a=t["http://www.w3.org/2002/07/owl#allValuesFrom"],m=w(t["http://www.w3.org/2002/07/owl#intersectionOf"]),g=w(t["http://www.w3.org/2002/07/owl#unionOf"]),d=t["http://www.w3.org/2002/07/owl#hasValue"],f=t["http://www.w3.org/2002/07/owl#minCardinality"]||t["http://www.w3.org/2002/07/owl#minQualifiedCardinality"],O=t["http://www.w3.org/2002/07/owl#maxCardinality"]||t["http://www.w3.org/2002/07/owl#maxQualifiedCardinality"],T=t["http://www.w3.org/2002/07/owl#cardinality"]||t["http://www.w3.org/2002/07/owl#qualifiedCardinality"],j=t["http://www.w3.org/2002/07/owl#hasSelf"],l=t["http://www.w3.org/2002/07/owl#complementOf"],y=w(t["http://www.w3.org/2002/07/owl#oneOf"]),k=t["http://www.w3.org/2002/07/owl#inverseOf"],u=t["http://www.w3.org/2002/07/owl#onProperty"],F=t["http://www.w3.org/2002/07/owl#onDatatype"];if(F){const c=[];c.push(e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:F,showBadges:r,onNavigates:n}));const b=w(t["http://www.w3.org/2002/07/owl#withRestrictions"]);if(b.length>0){c.push(e.jsx(e.Fragment,{children:"["}));let S=!0;for(const v of b){S?S=!1:c.push(e.jsx(e.Fragment,{children:", "}));const C=v["http://www.w3.org/2001/XMLSchema#minExclusive"],E=v["http://www.w3.org/2001/XMLSchema#minInclusive"],q=v["http://www.w3.org/2001/XMLSchema#maxExclusive"],R=v["http://www.w3.org/2001/XMLSchema#maxInclusive"];C?c.push(e.jsxs(e.Fragment,{children:["> ",C]})):E?c.push(e.jsxs(e.Fragment,{children:["≥ ",E]})):q?c.push(e.jsxs(e.Fragment,{children:["< ",q]})):R&&c.push(e.jsxs(e.Fragment,{children:["≤ ",R]}))}c.push(e.jsx(e.Fragment,{children:"]"}))}o=e.jsx(e.Fragment,{children:c.map(S=>e.jsx(e.Fragment,{children:S}))})}else if(h)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:u,showBadges:r,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" some "}),e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:w(h)[0],showBadges:r,onNavigates:n})]});else if(a)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:u,showBadges:r,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" only "}),e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:w(a)[0],showBadges:r,onNavigates:n})]});else if(m.length>0){const c=[e.jsx("span",{className:"text-neutral-default",children:"("},x())];for(const b of m)c.length>1&&c.push(e.jsx("i",{children:" and "})),c.push(e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:b,showBadges:r,onNavigates:n}));c.push(e.jsx("span",{className:"text-neutral-default",children:")"})),o=e.jsx("span",{children:c.map(b=>e.jsx(e.Fragment,{children:b}))})}else if(g.length>0){const c=[e.jsx("span",{className:"text-neutral-default",children:"("},x())];for(const b of g)c.length>1&&c.push(e.jsx("i",{children:" or "})),c.push(e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:b,showBadges:r,onNavigates:n}));c.push(e.jsx("span",{className:"text-neutral-default",children:")"})),o=e.jsx("span",{children:c.map(b=>e.jsx("span",{children:b},x()))})}else if(d)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:u,showBadges:r,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" value "}),e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:w(d)[0],showBadges:r,onNavigates:n})]});else if(f)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:u,showBadges:r,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" min "}),e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:w(f)[0],showBadges:r,onNavigates:n})]});else if(O)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:u,showBadges:r,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" max "}),e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:w(O)[0],showBadges:r,onNavigates:n})]});else if(T)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:u,showBadges:r,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" exactly "}),e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:w(T)[0],showBadges:r,onNavigates:n})]});else if(j)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:u,showBadges:r,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" Self "}),e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:w(j)[0],showBadges:r,onNavigates:n})]});else if(l)o=e.jsxs(e.Fragment,{children:[e.jsx("i",{children:"not "}),e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:w(l)[0],showBadges:r,onNavigates:n})]});else if(y.length>0){const c=[e.jsx("span",{className:"text-neutral-default",children:"{"},x())];for(const b of y)c.length>1&&c.push(e.jsx("span",{className:"text-neutral-default",children:", "},x())),c.push(e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:b,showBadges:r,onNavigates:n}));c.push(e.jsx("span",{className:"text-neutral-default",children:"}"})),o=e.jsx("span",{children:c.map(b=>e.jsx("span",{children:b},x()))})}else k&&(o=e.jsxs(e.Fragment,{children:[e.jsx("i",{style:{color:"purple"},children:"inverse "}),e.jsx("span",{className:"text-neutral-default",children:"("},x()),e.jsx(p,{parentEntity:i,linkedEntities:s,currentResponsePath:k,showBadges:r,onNavigates:n}),e.jsx("span",{className:"text-neutral-default",children:")"},x())]}))}return o}p.__docgenInfo={description:`ONLY USABLE WITH V2-API ENTITIES

Builds and returns one element of a sections' list, possibly in a recursive fashion by parsing the response object at the currentResponsePath to show Manchester syntax.
@param parentEntity the entity object possessing the whole response object
@param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
@param currentResponsePath the current sub-object of the parentEntity response object parsed as class expression
@param showBadges boolean which indicates if badges should be shown
@param onNavigates functions defining the action when clicking clickable items
@param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
@param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
@param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
@returns ReactElement the class expression JSX`,methods:[],displayName:"ClassExpression",props:{parentEntity:{required:!0,tsType:{name:"Thing"},description:""},linkedEntities:{required:!0,tsType:{name:"LinkedEntities"},description:""},currentResponsePath:{required:!0,tsType:{name:"any"},description:""},showBadges:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onNavigates:{required:!0,tsType:{name:"intersection",raw:`OnNavigateToEntity &
OnNavigateToOntology &
OnNavigateToDisambiguate`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * This function is called every time an entity link is clicked
   * @param ontologyId obtains the ontologyId of the current ontology
   * @param entityType obtains the entityType of the clicked entity
   * @param entity.iri obtains the iri of the clicked entity
   * @param entity.label obtains the label of the clicked entity
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToEntity?:
    | ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
    | string;
}`,signature:{properties:[{key:"onNavigateToEntity",value:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the current ontology
@param entityType obtains the entityType of the clicked entity
@param entity.iri obtains the iri of the clicked entity
@param entity.label obtains the label of the clicked entity
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}},{name:"signature",type:"object",raw:`{
  /**
   * This function is called every time an entity link is clicked
   * @param ontologyId obtains the ontologyId of the clicked badge
   * @param entityType obtains the entityType of the clicked badge
   * @param entity.iri obtains the iri of the clicked badge (can be empty)
   * @param entity.label obtains the label of the clicked badge
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToOntology?:
    | ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
    | string;
}`,signature:{properties:[{key:"onNavigateToOntology",value:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the clicked badge
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}},{name:"signature",type:"object",raw:`{
  /**
   * This function is called every time a disambiguation badge is clicked
   * @param entityType obtains the entityType of the clicked badge
   * @param entity.iri obtains the iri of the clicked badge (can be empty)
   * @param entity.label obtains the label of the clicked badge
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToDisambiguate?:
    ((entityType: string, entity?: EntityData) => void) | string;
}`,signature:{properties:[{key:"onNavigateToDisambiguate",value:{name:"union",raw:"((entityType: string, entity?: EntityData) => void) | string",elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time a disambiguation badge is clicked
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}}]},description:""}}};export{p as C,L as E,B as R,_ as T};
