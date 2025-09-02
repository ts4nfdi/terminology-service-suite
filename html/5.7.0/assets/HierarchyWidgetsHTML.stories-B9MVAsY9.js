import{V as r,Z as a,a1 as i,a2 as s,a3 as n,a4 as y,a5 as p,a6 as c,a7 as l,a8 as g,a9 as d,j as T,k as h,aa as b,ab as u,ac as I,ad as E}from"./widgetDescriptions-Bq7gOAJM.js";/* empty css                                  */import{E as o,F as O,a as m}from"./globals-CvFyH82M.js";const _={...I,...u,...b,...h,...T,...d,...g,...l,...c,...p,...y,...n,...s,...i,...a},S={apiUrl:{},backendType:{},apiKey:{},onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"",includeObsoleteEntities:r.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:r.PREFERRED_ROOTS,keepExpansionStates:r.KEEP_EXPANSION_STATES,showSiblingsOnInit:r.SHOW_SIBLINGS_ON_INIT,useLegacy:r.USE_LEGACY,hierarchyWrap:r.WRAP,parameter:""},L={args:{apiUrl:o,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"}},N={args:{apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"}},U={args:{apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0}},R={args:{apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0}},w={args:{apiUrl:o,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0}},$={args:{apiUrl:o,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"}},P={args:{apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"}},W={args:{apiUrl:O,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"}},C={args:{apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"}},D={args:{apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""}},G={args:{apiUrl:m,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0}},x={args:{apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/HP_0003502",entityType:"class",ontologyId:"hp",useLegacy:!1,parameter:"lang=de"}},F={args:{apiUrl:"https://agrovoc.fao.org/browse/rest/v1/",backendType:"skosmos",iri:"http://aims.fao.org/aos/agrovoc/c_1731",showSiblingsOnInit:!0,ontologyId:"agrovoc",parameter:"lang=de"}};let k=0;function H(){return k++}const K={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:E}}},render:e=>{const t=H();return`        
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
        parameter:"${e.parameter}",
        hierarchyWrap:${e.hierarchyWrap}
    },
    document.querySelector('#hierarchy_semlookp_container_${t}')
)
<\/script>
        `},argTypes:_,args:S},B=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy","OLSGerman","SkosmosAgrovocGerman"];export{L as ClassHierarchy,R as IncludeObsoleteEntities,N as IndividualHierarchy,$ as IndividualRoots,P as LargeHierarchy,G as OLS3Hierarchy,x as OLSGerman,D as OntoportalHierarchy,U as PreferredRoots,w as PropertyRoots,C as SagePubHierarchy,W as SkosHierarchy,F as SkosmosAgrovocGerman,B as __namedExportsOrder,K as default};
