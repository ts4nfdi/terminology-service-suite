import{b as e}from"./iframe-YnD9Auhi.js";import{b8 as J,b0 as M,x as b,u}from"./widgetDescriptions-D-baph22.js";import{D}from"./globals-BQAFDkgj.js";import{E as I}from"./ExpandableOntologyBadgeList-6fmAg6jV.js";import{B as A}from"./OntologyBadge-CPgeh0pk.js";import{E as V}from"./icon-B0KE5QCF.js";import{E as X}from"./icon_tip-D2ZEU4yV.js";function N(){return e.jsx("span",{style:{margin:"0 0.15em"}})}N.__docgenInfo={description:"",methods:[],displayName:"Spacer"};function L({parentEntity:i,linkedEntities:r,iri:t,showBadges:s=D,onNavigates:n}){const a=r.getLabelForIri(t)||t.split("/").pop()||t,o=r.get(t),p=i.getOntologyId();if(i.getType()!=="ontology"&&t===(i==null?void 0:i.getIri()))return e.jsx("span",{className:"highlight",children:i.getLabel()});if(!o)return t.startsWith("http")?e.jsx("a",{className:"clickable",href:t,children:a}):e.jsx("span",{children:a});const m=o.definedBy?o.definedBy.filter(g=>g!==p):[],d=o.type?J(o.type):i.getType();return m.length===1?o.hasLocalDefinition?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"clickable",onClick:()=>{typeof n.onNavigateToEntity=="function"&&n.onNavigateToEntity(p,d,{iri:t,label:a})},children:a}),s?e.jsxs(e.Fragment,{children:[" ",e.jsx(I,{iri:t,label:a,ontolist:m,onNavigateToOntology:n.onNavigateToOntology,entityType:d})]}):e.jsx(e.Fragment,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"clickable",onClick:()=>{typeof n.onNavigateToEntity=="function"&&n.onNavigateToEntity(m[0],d,{iri:t,label:a})},children:a}),s?e.jsxs(e.Fragment,{children:[" ",e.jsx(I,{iri:t,label:a,ontolist:m,onNavigateToOntology:n.onNavigateToOntology,entityType:d})]}):e.jsx(e.Fragment,{})]}):m.length>1?o.hasLocalDefinition?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"clickable",onClick:()=>{typeof n.onNavigateToEntity=="function"&&n.onNavigateToEntity(p,d,{iri:t,label:a})},children:a}),s?e.jsxs(e.Fragment,{children:[" ",e.jsx(I,{iri:t,label:a,ontolist:m,onNavigateToOntology:n.onNavigateToOntology,entityType:d})]}):e.jsx(e.Fragment,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"clickable",href:t,children:a}),s&&e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsxs(A,{onClick:()=>{typeof n.onNavigateToDisambiguate=="function"&&n.onNavigateToDisambiguate(d,{iri:t,label:a})},children:[e.jsx(V,{type:"search",size:"s"})," ",m.length," ","ontologies"]})]})]}):o.hasLocalDefinition?e.jsx(e.Fragment,{children:e.jsx("button",{className:"clickable",onClick:()=>{typeof n.onNavigateToEntity=="function"&&n.onNavigateToEntity(p,d,{iri:t,label:a})},children:a})}):parseInt(o.numAppearsIn)>0?e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"clickable",href:t,children:a}),s&&e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsxs(A,{onClick:()=>{typeof n.onNavigateToDisambiguate=="function"&&n.onNavigateToDisambiguate(d,{iri:t,label:a})},children:[e.jsx(V,{type:"search",size:"s"})," ",o.numAppearsIn," ",parseInt(o.numAppearsIn)>1?"ontologies":"ontology"]})]})]}):e.jsx(e.Fragment,{children:e.jsx("a",{className:"clickable",href:o.url||t,children:a})})}L.__docgenInfo={description:`ONLY USABLE WITH V2-API ENTITIES

Returns a labeled entity link as JSX element
@param parentEntity the entity object in which the linked entity exists
@param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
@param iri   the entities' iri
@param showBadges    boolean which indicates if badges should be shown
@param onNavigates functions defining the action when clicking clickable items
@param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
@param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
@param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
@returns ReactElement the entity link JSX`,methods:[],displayName:"EntityLink",props:{parentEntity:{required:!0,tsType:{name:"Thing"},description:""},linkedEntities:{required:!0,tsType:{name:"LinkedEntities"},description:""},iri:{required:!0,tsType:{name:"string"},description:""},showBadges:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onNavigates:{required:!0,tsType:{name:"intersection",raw:"OnNavigateToEntity & OnNavigateToOntology & OnNavigateToDisambiguate",elements:[{name:"signature",type:"object",raw:`{
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
  | ((entityType: string, entity?: EntityData) => void)
  | string;
}`,signature:{properties:[{key:"onNavigateToDisambiguate",value:{name:"union",raw:`| ((entityType: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time a disambiguation badge is clicked
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}}]},description:""}}};function h({parentEntity:i,linkedEntities:r,currentResponsePath:t,showBadges:s=D,onNavigates:n}){let a=e.jsx(e.Fragment,{});if(r=r.mergeWith(t.linkedEntities),typeof t=="string")a=e.jsx(L,{parentEntity:i,linkedEntities:r,iri:t,showBadges:s,onNavigates:n});else if(typeof t=="object"&&!Array.isArray(t)&&Array.isArray(t.type)&&t.type.indexOf("reification")!==-1)a=e.jsx(B,{parentEntity:i,reified:M.fromJson(t)[0],showBadges:s,onNavigates:n});else{const o=t["http://www.w3.org/2002/07/owl#someValuesFrom"],p=t["http://www.w3.org/2002/07/owl#allValuesFrom"],m=b(t["http://www.w3.org/2002/07/owl#intersectionOf"]),d=b(t["http://www.w3.org/2002/07/owl#unionOf"]),g=t["http://www.w3.org/2002/07/owl#hasValue"],O=t["http://www.w3.org/2002/07/owl#minCardinality"]||t["http://www.w3.org/2002/07/owl#minQualifiedCardinality"],x=t["http://www.w3.org/2002/07/owl#maxCardinality"]||t["http://www.w3.org/2002/07/owl#maxQualifiedCardinality"],j=t["http://www.w3.org/2002/07/owl#cardinality"]||t["http://www.w3.org/2002/07/owl#qualifiedCardinality"],c=t["http://www.w3.org/2002/07/owl#hasSelf"],y=t["http://www.w3.org/2002/07/owl#complementOf"],k=b(t["http://www.w3.org/2002/07/owl#oneOf"]),w=t["http://www.w3.org/2002/07/owl#inverseOf"],T=t["http://www.w3.org/2002/07/owl#onProperty"],F=t["http://www.w3.org/2002/07/owl#onDatatype"];if(F){const l=[];l.push(e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:F,showBadges:s,onNavigates:n}));const f=b(t["http://www.w3.org/2002/07/owl#withRestrictions"]);if(f.length>0){l.push(e.jsx(e.Fragment,{children:"["}));let S=!0;for(const v of f){S?S=!1:l.push(e.jsx(e.Fragment,{children:", "}));const C=v["http://www.w3.org/2001/XMLSchema#minExclusive"],E=v["http://www.w3.org/2001/XMLSchema#minInclusive"],q=v["http://www.w3.org/2001/XMLSchema#maxExclusive"],R=v["http://www.w3.org/2001/XMLSchema#maxInclusive"];C?l.push(e.jsxs(e.Fragment,{children:["> ",C]})):E?l.push(e.jsxs(e.Fragment,{children:["≥ ",E]})):q?l.push(e.jsxs(e.Fragment,{children:["< ",q]})):R&&l.push(e.jsxs(e.Fragment,{children:["≤ ",R]}))}l.push(e.jsx(e.Fragment,{children:"]"}))}a=e.jsx(e.Fragment,{children:l.map(S=>e.jsx(e.Fragment,{children:S}))})}else if(o)a=e.jsxs(e.Fragment,{children:[e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:T,showBadges:s,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" some "}),e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:b(o)[0],showBadges:s,onNavigates:n})]});else if(p)a=e.jsxs(e.Fragment,{children:[e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:T,showBadges:s,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" only "}),e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:b(p)[0],showBadges:s,onNavigates:n})]});else if(m.length>0){const l=[e.jsx("span",{className:"text-neutral-default",children:"("},u())];for(const f of m)l.length>1&&l.push(e.jsx("i",{children:" and "})),l.push(e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:f,showBadges:s,onNavigates:n}));l.push(e.jsx("span",{className:"text-neutral-default",children:")"})),a=e.jsx("span",{children:l.map(f=>e.jsx(e.Fragment,{children:f}))})}else if(d.length>0){const l=[e.jsx("span",{className:"text-neutral-default",children:"("},u())];for(const f of d)l.length>1&&l.push(e.jsx("i",{children:" or "})),l.push(e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:f,showBadges:s,onNavigates:n}));l.push(e.jsx("span",{className:"text-neutral-default",children:")"})),a=e.jsx("span",{children:l.map(f=>e.jsx("span",{children:f},u()))})}else if(g)a=e.jsxs(e.Fragment,{children:[e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:T,showBadges:s,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" value "}),e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:b(g)[0],showBadges:s,onNavigates:n})]});else if(O)a=e.jsxs(e.Fragment,{children:[e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:T,showBadges:s,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" min "}),e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:b(O)[0],showBadges:s,onNavigates:n})]});else if(x)a=e.jsxs(e.Fragment,{children:[e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:T,showBadges:s,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" max "}),e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:b(x)[0],showBadges:s,onNavigates:n})]});else if(j)a=e.jsxs(e.Fragment,{children:[e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:T,showBadges:s,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" exactly "}),e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:b(j)[0],showBadges:s,onNavigates:n})]});else if(c)a=e.jsxs(e.Fragment,{children:[e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:T,showBadges:s,onNavigates:n}),e.jsx("i",{style:{color:"purple"},children:" Self "}),e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:b(c)[0],showBadges:s,onNavigates:n})]});else if(y)a=e.jsxs(e.Fragment,{children:[e.jsx("i",{children:"not "}),e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:b(y)[0],showBadges:s,onNavigates:n})]});else if(k.length>0){const l=[e.jsx("span",{className:"text-neutral-default",children:"{"},u())];for(const f of k)l.length>1&&l.push(e.jsx("span",{className:"text-neutral-default",children:", "},u())),l.push(e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:f,showBadges:s,onNavigates:n}));l.push(e.jsx("span",{className:"text-neutral-default",children:"}"})),a=e.jsx("span",{children:l.map(f=>e.jsx("span",{children:f},u()))})}else w&&(a=e.jsxs(e.Fragment,{children:[e.jsx("i",{style:{color:"purple"},children:"inverse "}),e.jsx("span",{className:"text-neutral-default",children:"("},u()),e.jsx(h,{parentEntity:i,linkedEntities:r,currentResponsePath:w,showBadges:s,onNavigates:n}),e.jsx("span",{className:"text-neutral-default",children:")"},u())]}))}return a}h.__docgenInfo={description:`ONLY USABLE WITH V2-API ENTITIES

Builds and returns one element of a sections' list, possibly in a recursive fashion by parsing the response object at the currentResponsePath to show Manchester syntax.
@param parentEntity the entity object possessing the whole response object
@param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
@param currentResponsePath the current sub-object of the parentEntity response object parsed as class expression
@param showBadges boolean which indicates if badges should be shown
@param onNavigates functions defining the action when clicking clickable items
@param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
@param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
@param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
@returns ReactElement the class expression JSX`,methods:[],displayName:"ClassExpression",props:{parentEntity:{required:!0,tsType:{name:"Thing"},description:""},linkedEntities:{required:!0,tsType:{name:"LinkedEntities"},description:""},currentResponsePath:{required:!0,tsType:{name:"any"},description:""},showBadges:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onNavigates:{required:!0,tsType:{name:"intersection",raw:"OnNavigateToEntity & OnNavigateToOntology & OnNavigateToDisambiguate",elements:[{name:"signature",type:"object",raw:`{
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
  | ((entityType: string, entity?: EntityData) => void)
  | string;
}`,signature:{properties:[{key:"onNavigateToDisambiguate",value:{name:"union",raw:`| ((entityType: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time a disambiguation badge is clicked
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}}]},description:""}}};function _({text:i}){return e.jsx(X,{css:{maxWidth:"580px",backgroundColor:"rgba(0,0,0,0.8)",font:"menu"},type:"iInCircle",color:"subdued",position:"right",content:e.jsx("div",{style:{whiteSpace:"pre-line"},children:i})})}_.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!0,tsType:{name:"string"},description:""}}};function B({parentEntity:i,reified:r,showBadges:t=D,onNavigates:s}){function n({value:o}){const p=i.getLinkedEntities();function m(d){const g=[];if(p)for(const c of Object.keys(p.linkedEntities))for(let y=d.indexOf(c,0);y!==-1;y=d.indexOf(c,y))g.push({start:y,end:y+c.length,link:e.jsx(L,{parentEntity:i,linkedEntities:p,iri:c,showBadges:t,onNavigates:s})}),y+=c.length;const O=/[A-z]+:\/\/[^\s]+/g;for(let c=O.exec(d);c;c=O.exec(d)){const y=c[0];g.push({start:c.index,end:c.index+y.length,link:e.jsx("span",{children:e.jsx("a",{className:"clickable",href:y,children:y})},u())})}g.sort((c,y)=>c.start-y.start);e:for(let c=0;c<g.length;){for(let y=c+1;y<g.length;++y){const k=g[c],w=g[y];if(k!==w&&k.end>=w.start&&w.end>=k.start){k.end-k.start<w.end-w.start?g.splice(c,1):g.splice(y,1);continue e}}++c}if(g.length===0)return e.jsx(e.Fragment,{children:d});const x=[];let j=0;for(const c of g)x.push(e.jsx("span",{children:d.substring(j,c.start)},u())),x.push(c.link),j=c.end;return x.push(e.jsx("span",{children:d.slice(j)},u())),e.jsx(e.Fragment,{children:x})}if(Object.keys(p.linkedEntities).length==0){if(typeof o=="string")return m(o.toString());if(typeof o=="object"&&o["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]!=null)switch(o["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]){case"http://www.w3.org/2008/05/skos-xl#Label":return e.jsx(e.Fragment,{children:o["http://www.w3.org/2008/05/skos-xl#literalForm"].value});case"http://purl.org/vocab/changeset/schema#ChangeSet":return e.jsxs(e.Fragment,{children:[o["http://purl.org/vocab/changeset/schema#createdDate"].value,": ",o["http://purl.org/vocab/changeset/schema#changeReason"].value]});default:return console.error(`Unknown rdf syntax type: ${o["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]}`),e.jsx(e.Fragment,{children:JSON.stringify(o)})}else return console.error(`Unknown entry information format: ${o}`),e.jsx(e.Fragment,{children:JSON.stringify(o)})}else return p.get(o)?e.jsx(L,{parentEntity:i,linkedEntities:p,iri:o,showBadges:t,onNavigates:s}):typeof o!="string"?i.getType()=="ontology"?e.jsx(e.Fragment,{children:JSON.stringify(o)}):e.jsx(h,{parentEntity:i,linkedEntities:p,currentResponsePath:o,showBadges:t,onNavigates:s}):m(o.toString())}function a({axiomsDict:o}){const p=Object.keys(o).map(m=>{const d=i.getLinkedEntities().getLabelForIri(m)||m;return d?"*"+o[m]+" ("+d+")":""}).join(`
`);return e.jsx(_,{text:p})}return e.jsxs(e.Fragment,{children:[e.jsx(n,{value:r.value}),r.hasMetadata()&&e.jsxs(e.Fragment,{children:[" ",e.jsx(a,{axiomsDict:r.getMetadata()})]})]})}B.__docgenInfo={description:`Renders a given Reified
@param parentEntity the entity the Reified exists in
@param reified the Reified
@param showBadges boolean which indicates if badges should be shown
@param onNavigates functions defining the action when clicking clickable items
@param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
@param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
@param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge`,methods:[],displayName:"RenderedReified",props:{parentEntity:{required:!0,tsType:{name:"Thing"},description:""},reified:{required:!0,tsType:{name:"Reified",elements:[{name:"any"}],raw:"Reified<any>"},description:""},showBadges:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onNavigates:{required:!0,tsType:{name:"intersection",raw:"OnNavigateToEntity & OnNavigateToOntology & OnNavigateToDisambiguate",elements:[{name:"signature",type:"object",raw:`{
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
  | ((entityType: string, entity?: EntityData) => void)
  | string;
}`,signature:{properties:[{key:"onNavigateToDisambiguate",value:{name:"union",raw:`| ((entityType: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}],required:!1},description:`This function is called every time a disambiguation badge is clicked
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}}]},description:""}}};export{h as C,L as E,B as R,_ as T};
