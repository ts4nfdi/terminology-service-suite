import{n as a,q as r,T as s,U as n}from"./widgetDescriptions-5c540635.js";/* empty css                                  */import{H as o}from"./HierarchyWidget-86c9bfb3.js";import{E as t,F as l,a as y}from"./globals-aa5ada23.js";import"./index-59a18794.js";import"./_commonjsHelpers-725317a4.js";/* empty css                  */const p={apiUrl:{},backendType:{control:{type:"radio"},options:["ols","skosmos","ontoportal"],table:{defaultValue:{summary:"ols"}}},apiKey:{table:{defaultValue:{summary:void 0}}},...a,...r,iri:{table:{defaultValue:{summary:void 0}}},ontologyId:{table:{defaultValue:{summary:void 0}}},entityType:{table:{type:{summary:`${s.join(" | ")}`},defaultValue:{summary:void 0}},control:{type:"radio"},options:["ontology","term","class","property","individual",void 0,"INVALID STRING"]},includeObsoleteEntities:{table:{defaultValue:{summary:o.INCLUDE_OBSOLETE_ENTITIES}}},preferredRoots:{table:{defaultValue:{summary:o.PREFERRED_ROOTS}}},keepExpansionStates:{table:{defaultValue:{summary:o.KEEP_EXPANSION_STATES}}},showSiblingsOnInit:{table:{defaultValue:{summary:o.SHOW_SIBLINGS_ON_INIT}}},useLegacy:{table:{defaultValue:{summary:o.USE_LEGACY}}}},c={apiUrl:{},backendType:{},apiKey:{},onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY},_={args:{apiUrl:t,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"}},S={args:{apiUrl:t,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"}},h={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0}},N={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0}},f={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0}},k={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"}},H={args:{apiUrl:t,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"}},v={args:{apiUrl:l,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"}},L={args:{apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"}},R={args:{apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""}},U={args:{apiUrl:y,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0}};let d=0;function u(){return d++}const A={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:n}}},render:e=>{const i=u();return`        
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
        `},argTypes:p,args:c},P=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy"];export{_ as ClassHierarchy,N as IncludeObsoleteEntities,S as IndividualHierarchy,k as IndividualRoots,H as LargeHierarchy,U as OLS3Hierarchy,R as OntoportalHierarchy,h as PreferredRoots,f as PropertyRoots,L as SagePubHierarchy,v as SkosHierarchy,P as __namedExportsOrder,A as default};
