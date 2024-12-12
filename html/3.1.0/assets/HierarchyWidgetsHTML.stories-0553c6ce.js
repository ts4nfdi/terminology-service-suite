import{m as a,n as r,S as s,W as n}from"./widgetDescriptions-085c7c97.js";import{H as o}from"./HierarchyWidget-aed28c73.js";import{E as t,F as l}from"./globals-1bcd394d.js";import"./index-59a18794.js";import"./_commonjsHelpers-725317a4.js";/* empty css                        */const y={apiUrl:{},backendType:{control:{type:"radio"},options:["ols","skosmos","ontoportal"],table:{defaultValue:{summary:"ols"}}},apiKey:{table:{defaultValue:{summary:void 0}}},...a,...r,iri:{table:{defaultValue:{summary:void 0}}},ontologyId:{table:{defaultValue:{summary:void 0}}},entityType:{table:{type:{summary:`${s.join(" | ")}`},defaultValue:{summary:void 0}},control:{type:"radio"},options:["ontology","term","class","property","individual",void 0,"INVALID STRING"]},includeObsoleteEntities:{table:{defaultValue:{summary:o.INCLUDE_OBSOLETE_ENTITIES}}},preferredRoots:{table:{defaultValue:{summary:o.PREFERRED_ROOTS}}},keepExpansionStates:{table:{defaultValue:{summary:o.KEEP_EXPANSION_STATES}}},showSiblingsOnInit:{table:{defaultValue:{summary:o.SHOW_SIBLINGS_ON_INIT}}},useLegacy:{table:{defaultValue:{summary:o.USE_LEGACY}}}},p={apiUrl:{},backendType:{},apiKey:{},onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY},m={args:{apiUrl:t,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"}},O={args:{apiUrl:t,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"}},S={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0}},_={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0}},h={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0}},N={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"}},f={args:{apiUrl:t,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"}},k={args:{apiUrl:l,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"}},v={args:{apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"}},H={args:{apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""}};let c=0;function d(){return c++}const R={title:"HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:n}}},render:e=>{const i=d();return`        
<div id="hierarchy_semlookp_container_${i}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchy(
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
        `},argTypes:y,args:p},L=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy"];export{m as ClassHierarchy,_ as IncludeObsoleteEntities,O as IndividualHierarchy,N as IndividualRoots,f as LargeHierarchy,H as OntoportalHierarchy,S as PreferredRoots,h as PropertyRoots,v as SagePubHierarchy,k as SkosHierarchy,L as __namedExportsOrder,R as default};
