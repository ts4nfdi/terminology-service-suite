"use strict";(self.webpackChunk_nfdi4health_semlookp_widgets=self.webpackChunk_nfdi4health_semlookp_widgets||[]).push([[58683],{"./node_modules/@elastic/eui/es/components/loading/loading_spinner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>EuiLoadingSpinner});__webpack_require__("./node_modules/react/index.js");var _templateObject,prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hooks=__webpack_require__("./node_modules/@elastic/eui/es/services/theme/hooks.js"),i18n=__webpack_require__("./node_modules/@elastic/eui/es/components/i18n/i18n.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),animations=__webpack_require__("./node_modules/@elastic/eui/es/global_styling/variables/animations.js");var _loadingSpinner=(0,emotion_react_browser_esm.F4)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(359deg);\n  }\n"]))),spinnerSizes_s="m",spinnerSizes_m="base",spinnerSizes_l="l",spinnerSizes_xl="xl",spinnerSizes_xxl="xxl",spinnerColorsCSS=function spinnerColorsCSS(border,highlight){return"\n    border-color: ".concat(highlight," ").concat(border," ").concat(border," ").concat(border,";\n  ")},_excluded=["size","className","aria-label","color"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var EuiLoadingSpinner=function EuiLoadingSpinner(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,className=_ref.className,ariaLabel=_ref["aria-label"],color=_ref.color,rest=_objectWithoutProperties(_ref,_excluded),styles=function euiLoadingSpinnerStyles(_ref,color){var euiTheme=_ref.euiTheme;return{euiLoadingSpinner:(0,emotion_react_browser_esm.iv)("flex-shrink:0;display:inline-block;border-radius:50%;border:",euiTheme.border.thick,";",spinnerColorsCSS((null==color?void 0:color.border)||euiTheme.colors.lightShade,(null==color?void 0:color.highlight)||euiTheme.colors.primary),";",animations.k0,"{animation:",_loadingSpinner," 0.6s infinite linear;};label:euiLoadingSpinner;"),s:(0,emotion_react_browser_esm.iv)("width:",euiTheme.size[spinnerSizes_s],";height:",euiTheme.size[spinnerSizes_s],";border-width:calc(",euiTheme.border.width.thin," * 1.5);;label:s;"),m:(0,emotion_react_browser_esm.iv)("width:",euiTheme.size[spinnerSizes_m],";height:",euiTheme.size[spinnerSizes_m],";border-width:calc(",euiTheme.border.width.thin," * 1.5);;label:m;"),l:(0,emotion_react_browser_esm.iv)("width:",euiTheme.size[spinnerSizes_l],";height:",euiTheme.size[spinnerSizes_l],";;label:l;"),xl:(0,emotion_react_browser_esm.iv)("width:",euiTheme.size[spinnerSizes_xl],";height:",euiTheme.size[spinnerSizes_xl],";;label:xl;"),xxl:(0,emotion_react_browser_esm.iv)("width:",euiTheme.size[spinnerSizes_xxl],";height:",euiTheme.size[spinnerSizes_xxl],";;label:xxl;")}}((0,hooks.r)(),color),cssStyles=[styles.euiLoadingSpinner,styles[size]],classes=classnames_default()("euiLoadingSpinner",className),defaultLabel=function useLoadingAriaLabel(){return(0,i18n.l)("euiLoadingStrings.ariaLabel","Loading")}();return(0,emotion_react_browser_esm.tZ)("span",_extends({className:classes,css:cssStyles,role:"progressbar","aria-label":ariaLabel||defaultLabel},rest))};EuiLoadingSpinner.propTypes={className:prop_types_default().string,"aria-label":prop_types_default().string,"data-test-subj":prop_types_default().string,size:prop_types_default().any,color:prop_types_default().shape({border:prop_types_default().any,highlight:prop_types_default().any})}},"./src/components/widgets/MetadataWidget/TitleWidget/TitleWidget.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefiningOntologyUnavailable:()=>DefiningOntologyUnavailable,SelectingDefiningOntology:()=>SelectingDefiningOntology,TitleWidget1:()=>TitleWidget1,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _TitleWidget__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/widgets/MetadataWidget/TitleWidget/TitleWidget.tsx"),_elastic_eui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@elastic/eui/es/components/panel/panel.js"),_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/model/ModelTypeCheck.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"TitleWidget",component:_TitleWidget__WEBPACK_IMPORTED_MODULE_1__.R,parameters:{layout:"centered"},argTypes:{api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/"]},ontologyId:{description:"Ontology ID from where the object title/label should be taken."},thingType:{description:"Sets the type of the object whose title/label you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",table:{type:{summary:`${_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_2__.Co.join(" | ")}`}},control:{type:"radio"},options:["ontology","term","class","property","individual",void 0,"INVALID STRING"]},iri:{description:"Object IRI whose label you want to fetch. For ontologies this is ignored, since the 'ontologyId' arg is sufficient."},titleText:{},default_value:{control:"text"},parameter:{type:{required:!1}}},args:{parameter:"collection=nfdi4health",useLegacy:!0}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.xe,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TitleWidget__WEBPACK_IMPORTED_MODULE_1__.R,{...args})});Template.displayName="Template";const TitleWidget1=Template.bind({});TitleWidget1.args={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:"https://semanticlookup.zbmed.de/api/",ontologyId:"ncit",thingType:"term"};const SelectingDefiningOntology=Template.bind({});SelectingDefiningOntology.args={api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""};const DefiningOntologyUnavailable=Template.bind({});DefiningOntologyUnavailable.args={api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},TitleWidget1.parameters={...TitleWidget1.parameters,docs:{...TitleWidget1.parameters?.docs,source:{originalSource:"(args: TitleWidgetProps) => <EuiPanel>\n        <TitleWidget {...args} />\n    </EuiPanel>",...TitleWidget1.parameters?.docs?.source}}},SelectingDefiningOntology.parameters={...SelectingDefiningOntology.parameters,docs:{...SelectingDefiningOntology.parameters?.docs,source:{originalSource:"(args: TitleWidgetProps) => <EuiPanel>\n        <TitleWidget {...args} />\n    </EuiPanel>",...SelectingDefiningOntology.parameters?.docs?.source}}},DefiningOntologyUnavailable.parameters={...DefiningOntologyUnavailable.parameters,docs:{...DefiningOntologyUnavailable.parameters?.docs,source:{originalSource:"(args: TitleWidgetProps) => <EuiPanel>\n        <TitleWidget {...args} />\n    </EuiPanel>",...DefiningOntologyUnavailable.parameters?.docs?.source}}};const __namedExportsOrder=["TitleWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"]},"./src/components/widgets/MetadataWidget/TitleWidget/TitlePresentation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>TitlePresentation});__webpack_require__("./node_modules/react/index.js");var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@elastic/eui/es/components/text/text.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TitlePresentation(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.a,{children:props.titleText||props.title})}TitlePresentation.displayName="TitlePresentation",TitlePresentation.__docgenInfo={description:"",methods:[],displayName:"TitlePresentation",props:{titleText:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/widgets/MetadataWidget/TitleWidget/TitleWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>TitleWidget});__webpack_require__("./node_modules/react/index.js");var react_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-query/es/index.js"),_elastic_eui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@elastic/eui/es/components/loading/loading_spinner.js"),_elastic_eui__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@elastic/eui/es/components/text/text.js"),_api_OlsApi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/api/OlsApi.ts"),_utils_helper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/utils/helper.ts"),_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/model/ModelTypeCheck.ts"),_TitlePresentation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/widgets/MetadataWidget/TitleWidget/TitlePresentation.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NO_TITLE="No title available.";function TitleWidget(props){const{iri,ontologyId,api,titleText,thingType,parameter,useLegacy,default_value}=props,olsApi=new _api_OlsApi__WEBPACK_IMPORTED_MODULE_2__.m(api),{data,isLoading,isSuccess,isError,error}=(0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(["metadata",api,parameter,thingType,iri,ontologyId,useLegacy],(async()=>olsApi.getThingObject(iri,thingType,ontologyId,parameter,useLegacy)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__.p,{size:"s"}),isSuccess&&data&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TitlePresentation__WEBPACK_IMPORTED_MODULE_4__.j,{title:titleText||((0,_model_ModelTypeCheck__WEBPACK_IMPORTED_MODULE_3__.Xn)(data)?data.getName():data.getLabel())||default_value||NO_TITLE}),isError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_7__.a,{children:(0,_utils_helper__WEBPACK_IMPORTED_MODULE_8__.Z)(error,"title")})]})}TitleWidget.__docgenInfo={description:"",methods:[],displayName:"TitleWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call.\n- **Official OLS4 API of EMBL-EBI**: [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)\n- **Official SemLookP API (based on OLS3)**: [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)\n- **Improved SemLookP API (beta version)**: [https://semanticlookup.zbmed.de/api/](https://semanticlookup.zbmed.de/api/)"},thingType:{required:!1,tsType:{name:"thingTypeNames[number]",raw:"typeof thingTypeNames[number]"},description:"Sets the type of the thing whose information you want to fetch."},ontologyId:{required:!1,tsType:{name:"string"},description:"Select a specific ontology by id"},iri:{required:!1,tsType:{name:"string"},description:"Entity IRI whose information you want to fetch."},parameter:{required:!1,tsType:{name:"string"},description:"Additional parameters to pass to the API.\n\nThis parameters can be used to filter the search results. Each parameter can be combined via\nthe special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign\n<i><b>,</b></i>. The following keys could be used:<br/> <br/>\n <table>\n <thead><tr><th>Parameter</th><th>Description</th></tr></thead>\n <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>\n <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>\n <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>\n <tr><td>fieldList</td><td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>\n <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>\n <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>\n <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>\n <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>\n <tr><td>rows</td><td>Set results per page</td></tr>\n <tr><td>start</td><td>Set the results page number</td></tr>\n <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>\n</table>"},useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},titleText:{required:!1,tsType:{name:"string"},description:"Set your own text manually that overwrites the text fetched from the API"},default_value:{required:!1,tsType:{name:"string"},description:"Set the default text shown if the API fails to retrieve one."}}}},"./src/utils/helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getErrorMessageToDisplay(error){let messagePlaceholder=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"information";return"Response contains 0 elements"===error.message?"No elements found":`No ${messagePlaceholder} available`}__webpack_require__.d(__webpack_exports__,{Z:()=>getErrorMessageToDisplay})}}]);