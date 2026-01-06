"use client";import{b as t}from"./iframe-YnD9Auhi.js";import{O as c,B as d}from"./OntologyBadge-CPgeh0pk.js";import{E as y}from"./icon-B0KE5QCF.js";function g(e){var i,o,r,a;const s=e.className||"ts4nfdi-breadcrumb-style",l=((o=(i=e.entity)==null?void 0:i.properties)==null?void 0:o.ontologyId)||e.ontologyId,n=((a=(r=e.entity)==null?void 0:r.properties)==null?void 0:a.shortForm)||e.shortForm;return t.jsx(t.Fragment,{children:t.jsxs("span",{className:s,children:[t.jsx(c,{ontologyId:l,onNavigateToOntology:e.onNavigateToOntology,color:e.colorFirst||"primary"}),t.jsx("span",{style:{margin:"0 0.1em"}}),t.jsx(y,{type:"arrowRight",color:"black"}),t.jsx("span",{style:{margin:"0 0.1em"}}),t.jsx(d,{color:e.colorSecond||"success",children:n?n.toUpperCase():"No short form available"})]})})}g.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPresentation",props:{ontologyId:{required:!1,tsType:{name:"string"},description:"Select a specific ontology by id"},colorFirst:{required:!1,tsType:{name:"union",raw:"EuiLinkColor | string",elements:[{name:"EuiLinkColor"},{name:"string"}]},description:"Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or a hex / rgb value"},colorSecond:{required:!1,tsType:{name:"union",raw:"EuiLinkColor | string",elements:[{name:"EuiLinkColor"},{name:"string"}]},description:"Color of the second badge, can be primary, accent, success, warning, danger, ghost, text, subdued or a hex / rgb value"},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"},onNavigateToOntology:{required:!1,tsType:{name:"union",raw:`| ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
| string`,elements:[{name:"unknown"},{name:"string"}]},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the clicked badge
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`},shortForm:{required:!1,tsType:{name:"string"},description:""},entity:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  properties: {
    ontologyId: string;
    shortForm: string;
    [key: string]: any;
  };
}`,signature:{properties:[{key:"properties",value:{name:"signature",type:"object",raw:`{
  ontologyId: string;
  shortForm: string;
  [key: string]: any;
}`,signature:{properties:[{key:"ontologyId",value:{name:"string",required:!0}},{key:"shortForm",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]},required:!0}}]}},description:""}}};export{g as B};
