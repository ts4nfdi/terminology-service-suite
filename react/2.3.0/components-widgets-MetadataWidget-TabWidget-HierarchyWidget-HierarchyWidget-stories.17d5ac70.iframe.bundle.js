"use strict";(self.webpackChunk_ts4nfdi_terminology_service_suite=self.webpackChunk_ts4nfdi_terminology_service_suite||[]).push([[15957],{"./src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidget.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HierarchyWidget1:()=>HierarchyWidget1,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HierarchyWidget_stories});var HierarchyWidget=__webpack_require__("./src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidget.tsx");const HierarchyWidgetStoryArgTypes={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/","https://service.tib.eu/ts4tib/api/"]},ontologyId:{description:"Ontology ID from where the term hierarchy should be taken."},iri:{description:"Iri of the term you want to fetch the term hierarchy for."},entityType:{table:{type:{summary:`${__webpack_require__("./src/model/ModelTypeCheck.ts").Op.join(" | ")}`}},control:{type:"radio"},options:["property","individual","class","term","","not specified"]}},HierarchyWidget1={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:"https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/",ontologyId:"efo",entityType:"class"}},HierarchyWidget_stories={title:"HierarchyWidget",component:HierarchyWidget.q,parameters:{layout:"centered",docs:{description:{component:"The HierarchyWidget is a component designed to visualize and interact with hierarchical data structures of ontology hierarchies, specifically tailored for the OLS4 API to retrieve and display hierarchical relationships between terms within a given ontology."}}},argTypes:HierarchyWidgetStoryArgTypes,args:{ontologyId:"",entityType:"",iri:""}},__namedExportsOrder=["HierarchyWidget1"]},"./src/app/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DU:()=>randomString,DW:()=>pluralizeType,FQ:()=>getFrontEndApi,LB:()=>getUseLegacy,Mv:()=>deCamelCase,ZH:()=>capitalize,_j:()=>asArray,fd:()=>isHexColor,lr:()=>getErrorMessageToDisplay,nY:()=>isRgbColor,ng:()=>getEntityTypeName,s0:()=>deUnderscore,vq:()=>getEntityInOntologySuffix,zv:()=>isEuiLinkColor});var _model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/model/ModelTypeCheck.ts");function asArray(obj){return Array.isArray(obj)?obj:obj?[obj]:[]}const DEFAULT_USE_LEGACY=!0;function getUseLegacy(useLegacy){return void 0!==useLegacy?useLegacy:DEFAULT_USE_LEGACY}function getEntityTypeName(type){return"term"===type?"class":type}function capitalize(str){return str.charAt(0).toUpperCase()+str.slice(1)}function deCamelCase(str){return capitalize(str).split(/(?=[A-Z][a-z])/).join(" ")}function deUnderscore(str){return capitalize(str).replace("_"," ")}function getFrontEndApi(api){return api.replace(/\/api\/?$/,"/")}function getEntityInOntologySuffix(ontologyId,entityTypeArray,iri,useLegacy){return`ontologies/${ontologyId}/${pluralizeType(asArray(entityTypeArray),useLegacy)}`+(null!=iri?`/${encodeURIComponent(encodeURIComponent(iri))}`:"")}function pluralizeType(typeArray,useLegacy){for(const type of asArray(typeArray))if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.sF)(type)){if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.yU)(type))return getUseLegacy(useLegacy)?"terms":"classes";if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.V$)(type))return"properties";if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.Td)(type))return"individuals";if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.Ps)(type))return"ontologies"}throw new Error("No thingType found to pluralize in provided typeArray.")}function randomString(){return(Math.random()*Math.pow(2,54)).toString(36)}function isHexColor(str){return/^#[0-9A-F]{6}$/i.test(str)}function isRgbColor(str){return/^(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/i.test(str)}function isEuiLinkColor(str){return["primary","subdued","success","accent","danger","warning","text","ghost"].includes(str)}function getErrorMessageToDisplay(error){let messagePlaceholder=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"information";return"Response contains 0 elements"===error.message?"No elements found":`No ${messagePlaceholder} available`}},"./src/model/ModelTypeCheck.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D4:()=>isClass,Op:()=>entityTypeNames,Ps:()=>isOntologyTypeName,Qg:()=>isEntity,Td:()=>isIndividualTypeName,UP:()=>ontologyTypeNames,V$:()=>isPropertyTypeName,Z6:()=>thingTypeNames,h0:()=>classTypeNames,iV:()=>isIndividual,io:()=>isOntology,p2:()=>isEntityTypeName,sF:()=>isThingTypeName,uM:()=>isProperty,yU:()=>isClassTypeName});const classTypeNames=["class","term"],propertyTypeNames=["property"],individualTypeNames=["individual"],ontologyTypeNames=["ontology"],entityTypeNames=[...classTypeNames,...individualTypeNames,...propertyTypeNames],thingTypeNames=[...entityTypeNames,...ontologyTypeNames];function isClassTypeName(type){return classTypeNames.includes(type)}function isPropertyTypeName(type){return propertyTypeNames.includes(type)}function isIndividualTypeName(type){return individualTypeNames.includes(type)}function isOntologyTypeName(type){return ontologyTypeNames.includes(type)}function isEntityTypeName(type){return entityTypeNames.includes(type)}function isThingTypeName(type){return thingTypeNames.includes(type)}function isClass(thing){return isClassTypeName(thing.getType())}function isProperty(thing){return isPropertyTypeName(thing.getType())}function isIndividual(thing){return isIndividualTypeName(thing.getType())}function isEntity(thing){return isEntityTypeName(thing.getType())}function isOntology(thing){return isOntologyTypeName(thing.getType())}}}]);