import{m as a,n as r,H as s}from"./storyArgs-974907cc.js";import{H as o}from"./HierarchyWidget-aed28c73.js";import{E as t,F as n}from"./globals-1bcd394d.js";import"./index-59a18794.js";import"./_commonjsHelpers-725317a4.js";/* empty css                        */const l={apiUrl:{},backendType:{control:{type:"radio"},options:["ols","skosmos","ontoportal"],table:{defaultValue:{summary:"ols"}}},apiKey:{table:{defaultValue:{summary:void 0}}},...a,...r,iri:{table:{defaultValue:{summary:void 0}}},ontologyId:{table:{defaultValue:{summary:void 0}}},entityType:{table:{type:{summary:`${s.join(" | ")}`},defaultValue:{summary:void 0}},control:{type:"radio"},options:["ontology","term","class","property","individual",void 0,"INVALID STRING"]},includeObsoleteEntities:{table:{defaultValue:{summary:o.INCLUDE_OBSOLETE_ENTITIES}}},preferredRoots:{table:{defaultValue:{summary:o.PREFERRED_ROOTS}}},keepExpansionStates:{table:{defaultValue:{summary:o.KEEP_EXPANSION_STATES}}},showSiblingsOnInit:{table:{defaultValue:{summary:o.SHOW_SIBLINGS_ON_INIT}}},useLegacy:{table:{defaultValue:{summary:o.USE_LEGACY}}}},y={apiUrl:{},backendType:{},apiKey:{},onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"",includeObsoleteEntities:o.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:o.PREFERRED_ROOTS,keepExpansionStates:o.KEEP_EXPANSION_STATES,showSiblingsOnInit:o.SHOW_SIBLINGS_ON_INIT,useLegacy:o.USE_LEGACY},E={args:{apiUrl:t,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"}},m={args:{apiUrl:t,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"}},O={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0}},_={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0}},S={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0}},h={args:{apiUrl:t,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"}},N={args:{apiUrl:t,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"}},f={args:{apiUrl:n,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"}},k={args:{apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"}},v={args:{apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""}};let p=0;function c(){return p++}const H={title:"HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const i=c();return`        
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
        `},argTypes:l,args:y},R=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy"];export{E as ClassHierarchy,_ as IncludeObsoleteEntities,m as IndividualHierarchy,h as IndividualRoots,N as LargeHierarchy,v as OntoportalHierarchy,O as PreferredRoots,S as PropertyRoots,k as SagePubHierarchy,f as SkosHierarchy,R as __namedExportsOrder,H as default};
