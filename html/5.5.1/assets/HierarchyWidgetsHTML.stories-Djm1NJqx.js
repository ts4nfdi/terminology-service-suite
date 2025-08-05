import{V as r,Z as a,_ as i,$ as s,a0 as n,a1 as y,a2 as p,a3 as c,a4 as l,a5 as g,j as d,k as T,a6 as b,a7 as u,a8 as h,a9 as I}from"./widgetDescriptions-B7pb6xKo.js";/* empty css                                  */import{E as o,F as E,a as O}from"./globals-CvFyH82M.js";const _={...h,...u,...b,...T,...d,...g,...l,...c,...p,...y,...n,...s,...i,...a},m={apiUrl:{},backendType:{},apiKey:{},onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"",includeObsoleteEntities:r.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:r.PREFERRED_ROOTS,keepExpansionStates:r.KEEP_EXPANSION_STATES,showSiblingsOnInit:r.SHOW_SIBLINGS_ON_INIT,useLegacy:r.USE_LEGACY,parameter:""},f={args:{apiUrl:o,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"}},L={args:{apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"}},N={args:{apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0}},U={args:{apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0}},R={args:{apiUrl:o,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0}},w={args:{apiUrl:o,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"}},$={args:{apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"}},P={args:{apiUrl:E,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"}},C={args:{apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"}},D={args:{apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""}},G={args:{apiUrl:O,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0}},x={args:{apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/HP_0003502",entityType:"class",ontologyId:"hp",useLegacy:!1,parameter:"lang=de"}},W={args:{apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"}};let S=0;function k(){return S++}const F={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:I}}},render:e=>{const t=k();return`        
<div id="hierarchy_semlookp_container_${t}"></div>

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
        onNavigateToOntology:${e.onNavigateToOntology},
        parameter:"${e.parameter}"
    },
    document.querySelector('#hierarchy_semlookp_container_${t}')
)
<\/script>
        `},argTypes:_,args:m},K=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman"];export{f as ClassHierarchy,U as IncludeObsoleteEntities,L as IndividualHierarchy,w as IndividualRoots,$ as LargeHierarchy,G as OLS3Hierarchy,x as OLSGerman,D as OntoportalHierarchy,N as PreferredRoots,R as PropertyRoots,C as SagePubHierarchy,P as SkosHierarchy,W as SkosmosAgrovocGerman,K as __namedExportsOrder,F as default};
