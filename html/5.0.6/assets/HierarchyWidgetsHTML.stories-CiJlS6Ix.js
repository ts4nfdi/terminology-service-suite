import{T as a,j as r,k as s,U as n}from"./widgetDescriptions-tqVhoc0Z.js";/* empty css                                  */import{H as o}from"./HierarchyWidget-DvbradJF.js";import{E as t,F as l,a as y}from"./globals-BpbGe8p9.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EE_2VD4x.js";/* empty css                  */const p={apiUrl:{},backendType:{control:{type:"radio"},options:["ols","skosmos","ontoportal"],table:{defaultValue:{summary:"ols"}}},apiKey:{table:{defaultValue:{summary:void 0}}},...s,...r,iri:{table:{defaultValue:{summary:void 0}}},ontologyId:{table:{defaultValue:{summary:void 0}}},entityType:{table:{type:{summary:`${a.join(" | ")}`},defaultValue:{summary:void 0}},control:{type:"radio"},options:["ontology","term","class","property","individual",void 0,"INVALID STRING"]},includeObsoleteEntities:{table:{defaultValue:{summary:o.INCLUDE_OBSOLETE_ENTITIES}}},preferredRoots:{table:{defaultValue:{summary:o.PREFERRED_ROOTS}}},keepExpansionStates:{table:{defaultValue:{summary:o.KEEP_EXPANSION_STATES}}},showSiblingsOnInit:{table:{defaultValue:{summary:o.SHOW_SIBLINGS_ON_INIT}}},useLegacy:{table:{defaultValue:{summary:o.USE_LEGACY}}}},c={apiUrl:{},backendType:{},apiKey:{},onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY},S={args:{apiUrl:t,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"}},h={args:{apiUrl:t,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"}},N={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0}},f={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0}},k={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0}},H={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"}},v={args:{apiUrl:t,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"}},L={args:{apiUrl:l,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"}},R={args:{apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"}},U={args:{apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""}},A={args:{apiUrl:y,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0}};let d=0;function u(){return d++}const P={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:n}}},render:e=>{const i=u();return`        
<div id="hierarchy_semlookp_container_${i}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createHierarchy(
    {
        apiUrl:"${e.apiUrl}",
        apiKey:"${e.apiKey}",
        backendType:"${e.backendType}",
        iri:"${e.iri}",
        entityType:"${e.entityType}",
        ontologyId:"${e.ontologyId}",
        includeObsoleteEntities:${e.includeObsoleteEntities},
        useLegacy:${e.useLegacy},
        preferredRoots:${e.preferredRoots},
        keepExpansionStates:${e.keepExpansionStates},
        showSiblingsOnInit:${e.showSiblingsOnInit},
        onNavigateToEntity:${e.onNavigateToEntity},
        onNavigateToOntology:${e.onNavigateToOntology}
    },
    document.querySelector('#hierarchy_semlookp_container_${i}')
)
<\/script>
        `},argTypes:p,args:c},$=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy"];export{S as ClassHierarchy,f as IncludeObsoleteEntities,h as IndividualHierarchy,H as IndividualRoots,v as LargeHierarchy,A as OLS3Hierarchy,U as OntoportalHierarchy,N as PreferredRoots,k as PropertyRoots,R as SagePubHierarchy,L as SkosHierarchy,$ as __namedExportsOrder,P as default};
