"use strict";(self.webpackChunk_ts4nfdi_terminology_service_suite=self.webpackChunk_ts4nfdi_terminology_service_suite||[]).push([[19031],{"./src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidgetOLS.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HierarchyWidgetOLS1:()=>HierarchyWidgetOLS1,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HierarchyWidgetOLS_stories});var HierarchyWidgetOLS=__webpack_require__("./src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidgetOLS.tsx"),globals=__webpack_require__("./src/app/globals.ts"),storyArgs=__webpack_require__("./src/stories/storyArgs.ts"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const HierarchyWidgetOLSStoryArgTypes={...storyArgs.dg,...storyArgs.$M,...storyArgs.j0,...storyArgs.KV,...storyArgs.DD,...storyArgs.bg},HierarchyWidgetOLSStoryArgs={api:"",iri:"",ontologyId:"",entityType:"",onNavigateToEntity:(0,dist.XI)("onNavigateToEntity"),onNavigateToOntology:(0,dist.XI)("onNavigateToOntology")},HierarchyWidgetOLS1={args:{iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:globals.wS,ontologyId:"efo",entityType:"class"}},HierarchyWidgetOLS_stories={title:"HierarchyWidgetOLS",component:HierarchyWidgetOLS.c,parameters:{layout:"centered",docs:{description:{component:"The HierarchyWidgetOLSOLS is a component designed to visualize and interact with hierarchical data structures of ontology hierarchies, specifically tailored for the OLS4 API to retrieve and display hierarchical relationships between terms within a given ontology."}}},argTypes:HierarchyWidgetOLSStoryArgTypes,args:HierarchyWidgetOLSStoryArgs},__namedExportsOrder=["HierarchyWidgetOLS1"]},"./src/app/globals.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$R:()=>TIB_API_ENDPOINT,Fv:()=>ZBMED_OLS_API_ENDPOINT,Kb:()=>GATEWAY_API_ENDPOINT,gA:()=>ZBMED_API_ENDPOINT,o6:()=>FINTO_V1_API_ENDPOINT,wS:()=>EBI_API_ENDPOINT});const EBI_API_ENDPOINT="https://www.ebi.ac.uk/ols4/api/",ZBMED_OLS_API_ENDPOINT="https://semanticlookup.zbmed.de/ols/api/",ZBMED_API_ENDPOINT="https://semanticlookup.zbmed.de/api/",TIB_API_ENDPOINT="https://service.tib.eu/ts4tib/api/",GATEWAY_API_ENDPOINT="https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/",FINTO_V1_API_ENDPOINT="https://api.finto.fi/rest/v1"},"./src/app/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DU:()=>randomString,DW:()=>pluralizeType,LB:()=>getUseLegacy,Mv:()=>deCamelCase,Yz:()=>inferTypeFromTypeArray,ZH:()=>capitalize,_j:()=>asArray,fd:()=>isHexColor,lr:()=>getErrorMessageToDisplay,nY:()=>isRgbColor,ng:()=>getEntityTypeName,o8:()=>singularizeType,s0:()=>deUnderscore,vG:()=>manuallyEmbedOnNavigate,vq:()=>getEntityInOntologySuffix,zv:()=>isEuiLinkColor});var _model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/model/ModelTypeCheck.ts");function asArray(obj){return Array.isArray(obj)?obj:obj?[obj]:[]}const DEFAULT_USE_LEGACY=!0;function getUseLegacy(useLegacy){return void 0!==useLegacy?useLegacy:DEFAULT_USE_LEGACY}function getEntityTypeName(type){return"term"===type?"class":type}function capitalize(str){return str.charAt(0).toUpperCase()+str.slice(1)}function deCamelCase(str){return capitalize(str).split(/(?=[A-Z][a-z])/).join(" ")}function deUnderscore(str){return capitalize(str).replace("_"," ")}function getEntityInOntologySuffix(ontologyId,entityTypeArray,iri,useLegacy){return`ontologies/${ontologyId}/${pluralizeType(asArray(entityTypeArray),useLegacy)}`+(null!=iri?`/${encodeURIComponent(encodeURIComponent(iri))}`:"")}function pluralizeType(typeArray,useLegacy){for(const type of asArray(typeArray))if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.sF)(type)){if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.yU)(type))return getUseLegacy(useLegacy)?"terms":"classes";if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.V$)(type))return"properties";if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.Td)(type))return"individuals";if((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.Ps)(type))return"ontologies"}throw new Error("No thingType found to pluralize in provided typeArray.")}function singularizeType(typeArray,useLegacy){for(const type of asArray(typeArray))switch(type){case"terms":case"classes":return getUseLegacy(useLegacy)?"term":"class";case"properties":case"dataProperties":case"objectProperties":case"annotationProperties":return"property";case"individuals":return"individual";case"ontologies":return"ontology"}throw new Error("No thingType found to singularize in provided typeArray.")}function randomString(){return(Math.random()*Math.pow(2,54)).toString(36)}function isHexColor(str){return/^#[0-9A-F]{6}$/i.test(str)}function isRgbColor(str){return/^(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/i.test(str)}function isEuiLinkColor(str){return["primary","subdued","success","accent","danger","warning","text","ghost"].includes(str)}function getErrorMessageToDisplay(error){let messagePlaceholder=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"information";return"Response contains 0 elements"===error.message?"No elements found":`No ${messagePlaceholder} available`}function inferTypeFromTypeArray(types){let res=types.filter((elem=>(0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_0__.sF)(elem)));if(res=res.map((item=>"annotationProperty"===item||"objectProperty"===item||"dataProperty"===item?"property":item)),res=[...new Set(res)],1===res.length)return res[0];throw 0===res.length?Error("Entity type could not be correctly inferred: No suitable type found in array."):Error(`Entity type could not be correctly inferred: Multiple types found in array, no definite choice possible - ${JSON.stringify(res)}`)}function manuallyEmbedOnNavigate(code,storyContext){switch(storyContext.args.onNavigateToEntity){case"Console message":code=code.replace("onNavigateToEntity={() => {}}","onNavigateToEntity={\n    (ontologyId: string, entityType?: string, entity?: { iri: string, label?: string }) => {\n      console.log('Triggered onNavigateToEntity()' + (entityType ? ` for ${entityType || \"entity\"}` : '') + ((entity && entity.label) ? ` \"${entity.label}\"` : '') + ((entity && entity.iri) ? ` (iri=\"${entity.iri}\")` : '') + '.');\n    }\n  }");break;case"Navigate to EBI page":code=code.replace("onNavigateToEntity={() => {}}",'onNavigateToEntity={\n    (ontologyId: string, entityType?: string, entity?: { iri: string, label?: string }) => {\n      if(entity && entity.iri && entityType) {\n        window.open(\'https://www.ebi.ac.uk/ols4/ontologies/\' + ontologyId + \'/\' + new Map([["term","classes"],["class","classes"],["individual","individuals"],["property","properties"],["dataProperty","properties"],["objectProperty","properties"],["annotationProperty","properties"]]).get(entityType) + \'/\' + encodeURIComponent(encodeURIComponent(entity.iri)), "_top");\n      }\n      else {\n        window.open(\'https://www.ebi.ac.uk/ols4/ontologies/\' + ontologyId, "_top");\n      }\n    }\n  }')}switch(storyContext.args.onNavigateToOntology){case"Console message":code=code.replace("onNavigateToOntology={() => {}}","onNavigateToOntology={\n    (ontologyId: string, entityType?: string, entity?: { iri: string, label?: string }) => {\n      console.log('Triggered onNavigateToOntology()' + (entityType ? ` for ${entityType || \"entity\"}` : '') + ((entity && entity.label) ? ` \"${entity.label}\"` : '') + ((entity && entity.iri) ? ` (iri=\"${entity.iri}\")` : '') + ` for ontologyId \"${ontologyId}\".`);\n    }\n  }");break;case"Navigate to EBI page":code=code.replace("onNavigateToOntology={() => {}}",'onNavigateToOntology={\n    (ontologyId: string, entityType?: string, entity?: { iri: string, label?: string }) => {\n      if(entity && entity.iri && entityType) {\n        window.open(\'https://www.ebi.ac.uk/ols4/ontologies/\' + ontologyId + \'/\' + new Map([["term","classes"],["class","classes"],["individual","individuals"],["property","properties"],["dataProperty","properties"],["objectProperty","properties"],["annotationProperty","properties"]]).get(entityType) + \'/\' + encodeURIComponent(encodeURIComponent(entity.iri)), "_top");\n      }\n      else {\n        window.open(\'https://www.ebi.ac.uk/ols4/ontologies/\' + ontologyId, "_top");\n      }\n    }\n  }')}switch(storyContext.args.onNavigateToDisambiguate){case"Console message":code=code.replace("onNavigateToDisambiguate={() => {}}","onNavigateToDisambiguate={\n    (entityType?: string, entity?: { iri: string, label?: string }) => {\n       console.log('Triggered onNavigateToDisambiguate()' + (entityType ? ` for ${entityType || \"entity\"}` : '') + ((entity && entity.label) ? ` \"${entity.label}\"` : '') + ((entity && entity.iri) ? ` (iri=\"${entity.iri}\")` : '') + '.');\n    }\n  }");break;case"Navigate to EBI page":code=code.replace("onNavigateToDisambiguate={() => {}}","onNavigateToDisambiguate={\n    (entityType?: string, entity?: { iri: string, label?: string }) => {\n       window.open('https://www.ebi.ac.uk/ols4/search?q=' + ((entity && entity.label) ? entity.label : \"\") + '&exactMatch=true&lang=en', \"_top\");\n    }\n  }")}return code}}}]);