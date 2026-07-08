import{j as e}from"./iframe-Cdh1mNhJ.js";import{D}from"./globals-Dneqqh2P.js";import{Y as J,I as u,R as M,J as b}from"./OlsEntityApi-DeSzVYq3.js";import{B as A}from"./OntologyBadge-CXg3ERHy.js";import{E as I}from"./ExpandableOntologyBadgeList-Bocn1E4i.js";import{E as V}from"./icon-BYTnCjHI.js";import{E as X}from"./icon_tip-DDsKagS4.js";function _({text:a}){return e.jsx(X,{css:{maxWidth:"580px",backgroundColor:"rgba(0,0,0,0.8)",font:"menu"},type:"info",color:"subdued",position:"right",content:e.jsx("div",{style:{whiteSpace:"pre-line"},children:a})})}_.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!0,tsType:{name:"string"},description:""}}};function N(){return e.jsx("span",{style:{margin:"0 0.15em"}})}N.__docgenInfo={description:"",methods:[],displayName:"Spacer"};function L({parentEntity:a,linkedEntities:r,iri:t,showBadges:s=D,onNavigates:i}){const o=typeof t=="string"?t:typeof t=="object"&&t!==null&&"value"in t&&typeof t.value=="string"?t.value:"",n=r.getLabelForIri(o)||o.split("/").pop()||o,d=r.get(o),g=a.getOntologyId();if(!o)return e.jsx("span",{children:"Invalid value"});if(a.getType()!=="ontology"&&o===(a==null?void 0:a.getIri()))return e.jsx("span",{className:"highlight",children:a.getLabel()});if(!d)return o.startsWith("http")?e.jsx("a",{className:"clickable",href:o,children:n}):e.jsx("span",{children:n});const y=d.definedBy?d.definedBy.filter(x=>x!==g):[],h=d.type?J(d.type):a.getType();return y.length===1?d.hasLocalDefinition?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"clickable",onClick:()=>{typeof i.onNavigateToEntity=="function"&&i.onNavigateToEntity(g,h,{iri:t,label:n})},children:n}),s?e.jsxs(e.Fragment,{children:[" ",e.jsx(I,{iri:o,label:n,ontolist:y,onNavigateToOntology:i.onNavigateToOntology,entityType:h})]}):e.jsx(e.Fragment,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"clickable",onClick:()=>{typeof i.onNavigateToEntity=="function"&&i.onNavigateToEntity(y[0],h,{iri:t,label:n})},children:n}),s?e.jsxs(e.Fragment,{children:[" ",e.jsx(I,{iri:o,label:n,ontolist:y,onNavigateToOntology:i.onNavigateToOntology,entityType:h})]}):e.jsx(e.Fragment,{})]}):y.length>1?d.hasLocalDefinition?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"clickable",onClick:()=>{typeof i.onNavigateToEntity=="function"&&i.onNavigateToEntity(g,h,{iri:t,label:n})},children:n}),s?e.jsxs(e.Fragment,{children:[" ",e.jsx(I,{iri:o,label:n,ontolist:y,onNavigateToOntology:i.onNavigateToOntology,entityType:h})]}):e.jsx(e.Fragment,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"clickable",href:o,children:n}),s&&e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsxs(A,{onClick:()=>{typeof i.onNavigateToDisambiguate=="function"&&i.onNavigateToDisambiguate(h,{iri:t,label:n})},children:[e.jsx(V,{type:"search",size:"s"})," ",y.length," ","ontologies"]})]})]}):d.hasLocalDefinition?e.jsx(e.Fragment,{children:e.jsx("button",{className:"clickable",onClick:()=>{typeof i.onNavigateToEntity=="function"&&i.onNavigateToEntity(g,h,{iri:t,label:n})},children:n})}):parseInt(d.numAppearsIn)>0?e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"clickable",href:o,children:n}),s&&e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsxs(A,{onClick:()=>{typeof i.onNavigateToDisambiguate=="function"&&i.onNavigateToDisambiguate(h,{iri:t,label:n})},children:[e.jsx(V,{type:"search",size:"s"})," ",d.numAppearsIn," ",parseInt(d.numAppearsIn)>1?"ontologies":"ontology"]})]})]}):e.jsx(e.Fragment,{children:e.jsx("a",{className:"clickable",href:d.url||o,children:n})})}L.__docgenInfo={description:`ONLY USABLE WITH V2-API ENTITIES

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
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}}]},description:""}}};function B({parentEntity:a,reified:r,showBadges:t=D,onNavigates:s}){function i({value:n}){const d=a.getLinkedEntities();function g(y){const h=[];if(d)for(const c of Object.keys(d.linkedEntities))for(let m=y.indexOf(c,0);m!==-1;m=y.indexOf(c,m))h.push({start:m,end:m+c.length,link:e.jsx(L,{parentEntity:a,linkedEntities:d,iri:c,showBadges:t,onNavigates:s})}),m+=c.length;const x=/[A-z]+:\/\/[^\s]+/g;for(let c=x.exec(y);c;c=x.exec(y)){const m=c[0];h.push({start:c.index,end:c.index+m.length,link:e.jsx("span",{children:e.jsx("a",{className:"clickable",href:m,children:m})},u())})}h.sort((c,m)=>c.start-m.start);e:for(let c=0;c<h.length;){for(let m=c+1;m<h.length;++m){const k=h[c],w=h[m];if(k!==w&&k.end>=w.start&&w.end>=k.start){k.end-k.start<w.end-w.start?h.splice(c,1):h.splice(m,1);continue e}}++c}if(h.length===0)return e.jsx(e.Fragment,{children:y});const T=[];let O=0;for(const c of h)T.push(e.jsx("span",{children:y.substring(O,c.start)},u())),T.push(c.link),O=c.end;return T.push(e.jsx("span",{children:y.slice(O)},u())),e.jsx(e.Fragment,{children:T})}if(Object.keys(d.linkedEntities).length==0){if(typeof n=="string")return g(n.toString());if(typeof n=="object"&&n["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]!=null)switch(n["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]){case"http://www.w3.org/2008/05/skos-xl#Label":return e.jsx(e.Fragment,{children:n["http://www.w3.org/2008/05/skos-xl#literalForm"].value});case"http://purl.org/vocab/changeset/schema#ChangeSet":return e.jsxs(e.Fragment,{children:[n["http://purl.org/vocab/changeset/schema#createdDate"].value,":"," ",n["http://purl.org/vocab/changeset/schema#changeReason"].value]});default:return console.error(`Unknown rdf syntax type: ${n["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]}`),e.jsx(e.Fragment,{children:JSON.stringify(n)})}else return console.error(`Unknown entry information format: ${n}`),e.jsx(e.Fragment,{children:JSON.stringify(n)})}else return d.get(n)?e.jsx(L,{parentEntity:a,linkedEntities:d,iri:n,showBadges:t,onNavigates:s}):typeof n!="string"?a.getType()=="ontology"?e.jsx(e.Fragment,{children:JSON.stringify(n)}):e.jsx(p,{parentEntity:a,linkedEntities:d,currentResponsePath:n,showBadges:t,onNavigates:s}):g(n.toString())}function o({axiomsDict:n}){const d=Object.keys(n).map(g=>{const y=a.getLinkedEntities().getLabelForIri(g)||g;return y?"*"+n[g]+" ("+y+")":""}).join(`
`);return e.jsx(_,{text:d})}return e.jsxs(e.Fragment,{children:[e.jsx(i,{value:r.value}),r.hasMetadata()&&e.jsxs(e.Fragment,{children:[" ",e.jsx(o,{axiomsDict:r.getMetadata()})]})]})}B.__docgenInfo={description:`Renders a given Reified
@param parentEntity the entity the Reified exists in
@param reified the Reified
@param showBadges boolean which indicates if badges should be shown
@param onNavigates functions defining the action when clicking clickable items
@param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
@param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
@param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge`,methods:[],displayName:"RenderedReified",props:{parentEntity:{required:!0,tsType:{name:"Thing"},description:""},reified:{required:!0,tsType:{name:"Reified",elements:[{name:"any"}],raw:"Reified<any>"},description:""},showBadges:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onNavigates:{required:!0,tsType:{name:"intersection",raw:`OnNavigateToEntity &
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
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}]}}]},description:""}}};function p({parentEntity:a,linkedEntities:r,currentResponsePath:t,showBadges:s=D,onNavigates:i}){let o=e.jsx(e.Fragment,{});if(r=r.mergeWith(t.linkedEntities),typeof t=="string")o=e.jsx(L,{parentEntity:a,linkedEntities:r,iri:t,showBadges:s,onNavigates:i});else if(typeof t=="object"&&!Array.isArray(t)&&Array.isArray(t.type)&&t.type.indexOf("reification")!==-1)o=e.jsx(B,{parentEntity:a,reified:M.fromJson(t)[0],showBadges:s,onNavigates:i});else{const n=t["http://www.w3.org/2002/07/owl#someValuesFrom"],d=t["http://www.w3.org/2002/07/owl#allValuesFrom"],g=b(t["http://www.w3.org/2002/07/owl#intersectionOf"]),y=b(t["http://www.w3.org/2002/07/owl#unionOf"]),h=t["http://www.w3.org/2002/07/owl#hasValue"],x=t["http://www.w3.org/2002/07/owl#minCardinality"]||t["http://www.w3.org/2002/07/owl#minQualifiedCardinality"],T=t["http://www.w3.org/2002/07/owl#maxCardinality"]||t["http://www.w3.org/2002/07/owl#maxQualifiedCardinality"],O=t["http://www.w3.org/2002/07/owl#cardinality"]||t["http://www.w3.org/2002/07/owl#qualifiedCardinality"],c=t["http://www.w3.org/2002/07/owl#hasSelf"],m=t["http://www.w3.org/2002/07/owl#complementOf"],k=b(t["http://www.w3.org/2002/07/owl#oneOf"]),w=t["http://www.w3.org/2002/07/owl#inverseOf"],j=t["http://www.w3.org/2002/07/owl#onProperty"],F=t["http://www.w3.org/2002/07/owl#onDatatype"];if(F){const l=[];l.push(e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:F,showBadges:s,onNavigates:i}));const f=b(t["http://www.w3.org/2002/07/owl#withRestrictions"]);if(f.length>0){l.push(e.jsx(e.Fragment,{children:"["}));let S=!0;for(const v of f){S?S=!1:l.push(e.jsx(e.Fragment,{children:", "}));const C=v["http://www.w3.org/2001/XMLSchema#minExclusive"],E=v["http://www.w3.org/2001/XMLSchema#minInclusive"],q=v["http://www.w3.org/2001/XMLSchema#maxExclusive"],R=v["http://www.w3.org/2001/XMLSchema#maxInclusive"];C?l.push(e.jsxs(e.Fragment,{children:["> ",C]})):E?l.push(e.jsxs(e.Fragment,{children:["≥ ",E]})):q?l.push(e.jsxs(e.Fragment,{children:["< ",q]})):R&&l.push(e.jsxs(e.Fragment,{children:["≤ ",R]}))}l.push(e.jsx(e.Fragment,{children:"]"}))}o=e.jsx(e.Fragment,{children:l.map(S=>e.jsx(e.Fragment,{children:S}))})}else if(n)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:j,showBadges:s,onNavigates:i}),e.jsx("i",{style:{color:"purple"},children:" some "}),e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:b(n)[0],showBadges:s,onNavigates:i})]});else if(d)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:j,showBadges:s,onNavigates:i}),e.jsx("i",{style:{color:"purple"},children:" only "}),e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:b(d)[0],showBadges:s,onNavigates:i})]});else if(g.length>0){const l=[e.jsx("span",{className:"text-neutral-default",children:"("},u())];for(const f of g)l.length>1&&l.push(e.jsx("i",{children:" and "})),l.push(e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:f,showBadges:s,onNavigates:i}));l.push(e.jsx("span",{className:"text-neutral-default",children:")"})),o=e.jsx("span",{children:l.map(f=>e.jsx(e.Fragment,{children:f}))})}else if(y.length>0){const l=[e.jsx("span",{className:"text-neutral-default",children:"("},u())];for(const f of y)l.length>1&&l.push(e.jsx("i",{children:" or "})),l.push(e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:f,showBadges:s,onNavigates:i}));l.push(e.jsx("span",{className:"text-neutral-default",children:")"})),o=e.jsx("span",{children:l.map(f=>e.jsx("span",{children:f},u()))})}else if(h)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:j,showBadges:s,onNavigates:i}),e.jsx("i",{style:{color:"purple"},children:" value "}),e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:b(h)[0],showBadges:s,onNavigates:i})]});else if(x)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:j,showBadges:s,onNavigates:i}),e.jsx("i",{style:{color:"purple"},children:" min "}),e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:b(x)[0],showBadges:s,onNavigates:i})]});else if(T)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:j,showBadges:s,onNavigates:i}),e.jsx("i",{style:{color:"purple"},children:" max "}),e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:b(T)[0],showBadges:s,onNavigates:i})]});else if(O)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:j,showBadges:s,onNavigates:i}),e.jsx("i",{style:{color:"purple"},children:" exactly "}),e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:b(O)[0],showBadges:s,onNavigates:i})]});else if(c)o=e.jsxs(e.Fragment,{children:[e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:j,showBadges:s,onNavigates:i}),e.jsx("i",{style:{color:"purple"},children:" Self "}),e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:b(c)[0],showBadges:s,onNavigates:i})]});else if(m)o=e.jsxs(e.Fragment,{children:[e.jsx("i",{children:"not "}),e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:b(m)[0],showBadges:s,onNavigates:i})]});else if(k.length>0){const l=[e.jsx("span",{className:"text-neutral-default",children:"{"},u())];for(const f of k)l.length>1&&l.push(e.jsx("span",{className:"text-neutral-default",children:", "},u())),l.push(e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:f,showBadges:s,onNavigates:i}));l.push(e.jsx("span",{className:"text-neutral-default",children:"}"})),o=e.jsx("span",{children:l.map(f=>e.jsx("span",{children:f},u()))})}else w&&(o=e.jsxs(e.Fragment,{children:[e.jsx("i",{style:{color:"purple"},children:"inverse "}),e.jsx("span",{className:"text-neutral-default",children:"("},u()),e.jsx(p,{parentEntity:a,linkedEntities:r,currentResponsePath:w,showBadges:s,onNavigates:i}),e.jsx("span",{className:"text-neutral-default",children:")"},u())]}))}return o}p.__docgenInfo={description:`ONLY USABLE WITH V2-API ENTITIES

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
