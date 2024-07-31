import"./terminology-service-suite.min-Eh64CQcQ.js";import{b as y}from"./index-L2N5pzd4.js";import"./_commonjsHelpers-Cpj98o6Y.js";function l(t){Promise.resolve().then(t).catch(function(o){return setTimeout(function(){throw o})})}var p=function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(i){i()},this.batchNotifyFn=function(i){i()}}var o=t.prototype;return o.batch=function(e){var n;this.transactions++;try{n=e()}finally{this.transactions--,this.transactions||this.flush()}return n},o.schedule=function(e){var n=this;this.transactions?this.queue.push(e):l(function(){n.notifyFn(e)})},o.batchCalls=function(e){var n=this;return function(){for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];n.schedule(function(){e.apply(void 0,c)})}},o.flush=function(){var e=this,n=this.queue;this.queue=[],n.length&&l(function(){e.batchNotifyFn(function(){n.forEach(function(a){e.notifyFn(a)})})})},o.setNotifyFunction=function(e){this.notifyFn=e},o.setBatchNotifyFunction=function(e){this.batchNotifyFn=e},t}(),u=new p,d=y.unstable_batchedUpdates;u.setBatchNotifyFunction(d);const r={INCLUDE_OBSOLETE_ENTITIES:!1,PREFERRED_ROOTS:!1,KEEP_EXPANSION_STATES:!1,SHOW_SIBLINGS_ON_INIT:!1,USE_LEGACY:!1},h={apiUrl:{},backend_type:{control:{type:"radio"},options:["ols","skosmos","ontoportal"]},apikey:{},onNavigateToEntity:{control:{disabled:!0}},onNavigateToOntology:{control:{disabled:!0}},iri:{},ontologyId:{},entityType:{},includeObsoleteEntities:{},preferredRoots:{},keepExpansionStates:{},showSiblingsOnInit:{},useLegacy:{}},f={apiUrl:{},backend_type:{},apikey:{},onNavigateToEntity:t=>{console.log(`Triggered onNavigateToEntity() for entity "${t.label}" (iri="${t.iri}").`)},onNavigateToOntology:(t,o)=>{console.log(`Trigerred onNavigateToOntology() for entity "${o.label}" (iri="${o.iri}") and ontologyId "${t}".`)},iri:"",ontologyId:"",entityType:"",includeObsoleteEntities:r.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:r.PREFERRED_ROOTS,keepExpansionStates:r.KEEP_EXPANSION_STATES,showSiblingsOnInit:r.SHOW_SIBLINGS_ON_INIT,useLegacy:r.USE_LEGACY},T={args:{apiUrl:"https://www.ebi.ac.uk/ols4/api",backend_type:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"}},O={args:{apiUrl:"https://www.ebi.ac.uk/ols4/api",backend_type:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"}},w={args:{apiUrl:"https://www.ebi.ac.uk/ols4/api",backend_type:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0}},N={args:{apiUrl:"https://www.ebi.ac.uk/ols4/api",backend_type:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0}},S={args:{apiUrl:"https://www.ebi.ac.uk/ols4/api",backend_type:"ols",iri:"",entityType:"property",ontologyId:"bco"}},k={args:{apiUrl:"https://www.ebi.ac.uk/ols4/api",backend_type:"ols",iri:"",entityType:"individual",ontologyId:"bco"}},v={args:{apiUrl:"https://www.ebi.ac.uk/ols4/api",backend_type:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"}},R={args:{apiUrl:"https://api.finto.fi/rest/v1",backend_type:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"}},U={args:{apiUrl:"https://data.biodivportal.gfbio.org",backend_type:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apikey:""}};let g=0;function b(){return g++}const m={title:"HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const o=b();return`        
<div id="hierarchy_semlookp_container_${o}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchy(
    {
        apiUrl:"${t.apiUrl}",
        apikey:"${t.apikey}",
        backend_type:"${t.backend_type}",
        iri:"${t.iri}",
        entityType:"${t.entityType}",
        ontologyId:"${t.ontologyId}",
        includeObsoleteEntities:${t.includeObsoleteEntities},
        useLegacy:${t.useLegacy},
        preferredRoots:${t.preferredRoots},
        keepExpansionStates:${t.keepExpansionStates},
        showSiblingsOnInit:${t.showSiblingsOnInit},
        onNavigateToEntity:${t.onNavigateToEntity},
        onNavigateToOntology:${t.onNavigateToOntology}
    },
    document.querySelector('#hierarchy_semlookp_container_${o}')
)
<\/script>
        `},argTypes:h,args:f},H=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","OntoportalHierarchy"];export{T as ClassHierarchy,N as IncludeObsoleteEntities,O as IndividualHierarchy,k as IndividualRoots,v as LargeHierarchy,U as OntoportalHierarchy,w as PreferredRoots,S as PropertyRoots,R as SkosHierarchy,H as __namedExportsOrder,m as default};
