"use strict";(self.webpackChunk_nfdi4health_semlookp_widgets=self.webpackChunk_nfdi4health_semlookp_widgets||[]).push([[72632],{"./src/components/widgets/SearchResultsListWidget/SearchResultsListWidget.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ErrorSearchResultsList:()=>ErrorSearchResultsList,SearchResultsListNFDI4Health:()=>SearchResultsListNFDI4Health,SearchResultsListSafety:()=>SearchResultsListSafety,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchResultsListWidget_stories});var react=__webpack_require__("./node_modules/react/index.js"),spacer=__webpack_require__("./node_modules/@elastic/eui/es/components/spacer/spacer.js"),flex_group=__webpack_require__("./node_modules/@elastic/eui/es/components/flex/flex_group.js"),flex_item=__webpack_require__("./node_modules/@elastic/eui/es/components/flex/flex_item.js"),panel=__webpack_require__("./node_modules/@elastic/eui/es/components/panel/panel.js"),form_row=__webpack_require__("./node_modules/@elastic/eui/es/components/form/form_row/form_row.js"),selectable=__webpack_require__("./node_modules/@elastic/eui/es/components/selectable/selectable.js"),loading_spinner=__webpack_require__("./node_modules/@elastic/eui/es/components/loading/loading_spinner.js"),button_empty=__webpack_require__("./node_modules/@elastic/eui/es/components/button/button_empty/button_empty.js"),switch_switch=__webpack_require__("./node_modules/@elastic/eui/es/components/form/switch/switch.js"),text_text=__webpack_require__("./node_modules/@elastic/eui/es/components/text/text.js"),horizontal_rule=__webpack_require__("./node_modules/@elastic/eui/es/components/horizontal_rule/horizontal_rule.js"),table_pagination=__webpack_require__("./node_modules/@elastic/eui/es/components/table/table_pagination/table_pagination.js"),es=__webpack_require__("./node_modules/react-query/es/index.js"),OlsApi=__webpack_require__("./src/api/OlsApi.ts"),card=__webpack_require__("./node_modules/@elastic/eui/es/components/card/card.js"),title=__webpack_require__("./node_modules/@elastic/eui/es/components/title/title.js"),MetadataWidget=__webpack_require__("./src/components/widgets/MetadataWidget/index.ts");function switchEntityType(entityType){switch(entityType){case"class":default:return"terms";case"property":return"properties";case"individual":return"individuals"}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MetadataCompact(props){const{api,result,targetLink,...rest}=props;return(0,jsx_runtime.jsx)(card.cq,{textAlign:"left",...rest,href:targetLink?"ontology"!=result.type?targetLink+"ontologies/"+result.ontology_name+"/"+switchEntityType(result.type)+"?iri="+result.iri:targetLink+"ontologies/"+result.ontology_name:void 0,title:(0,jsx_runtime.jsxs)(flex_group.Gv,{children:[(0,jsx_runtime.jsx)(flex_item.J,{grow:!1,children:(0,jsx_runtime.jsx)(title.yR,{children:(0,jsx_runtime.jsx)("h2",{children:result.label})})}),(0,jsx_runtime.jsx)(flex_item.J,{children:"ontology"!=result.type&&(0,jsx_runtime.jsx)(MetadataWidget.bM,{api,iri:result.iri,entityType:result.type,ontologyId:result.ontology_name})})]}),children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["ontology"!=result.type?(0,jsx_runtime.jsx)(MetadataWidget.wt,{iri:result.iri}):void 0,(0,jsx_runtime.jsx)(spacer.F,{size:"s"}),(0,jsx_runtime.jsx)(MetadataWidget.dm,{api,ontologyId:result.ontology_name,iri:result.iri,entityType:result.type})]})})}MetadataCompact.displayName="MetadataCompact",MetadataCompact.__docgenInfo={description:"",methods:[],displayName:"MetadataCompact",props:{api:{required:!0,tsType:{name:"string"},description:""},result:{required:!0,tsType:{name:"any"},description:""},targetLink:{required:!1,tsType:{name:"string"},description:""},parameter:{required:!1,tsType:{name:"string"},description:""}}};var AutocompleteWidget=__webpack_require__("./src/components/widgets/AutocompleteWidget/AutocompleteWidget.tsx");const DEFAULT_INITIAL_ITEMS_PER_PAGE=10,DEFAULT_PAGE_SIZE_OPTIONS=[10,25,50,100];function SearchResultsListWidget(props){const{api,query,parameter,initialItemsPerPage=DEFAULT_INITIAL_ITEMS_PER_PAGE,itemsPerPageOptions=DEFAULT_PAGE_SIZE_OPTIONS,targetLink,...rest}=props,olsApi=new OlsApi.m(api),[searchValue,setSearchValue]=(0,react.useState)(query),[activePage,setActivePage]=(0,react.useState)(0),[pageCount,setPageCount]=(0,react.useState)(0),[itemsPerPage,setItemsPerPage]=(0,react.useState)(initialItemsPerPage),[totalItems,setTotalItems]=(0,react.useState)(0),[exactMatch,setExactMatch]=(0,react.useState)(!1),[showObsoleteTerms,setShowObsoleteTerms]=(0,react.useState)(!1),[filterByTypeOptions,setFilterByTypeOptions]=(0,react.useState)([]),[filterByOntologyOptions,setFilterByOntologyOptions]=(0,react.useState)([]);function updateFilterOptions(currentOptions,optionCounts,setOptions,render){if(0==currentOptions.length)setOptions(optionCounts.reduce(((accumulator,currentValue,currentIndex,array)=>(currentIndex%2==0&&accumulator.push({label:render?render(currentValue):currentValue,key:currentValue,append:"("+array[currentIndex+1]+")",disabled:0==array[currentIndex+1],data:{totalCount:array[currentIndex+1]}}),accumulator)),[]));else{const newOptions=[];for(let i=0;i<currentOptions.length;i++)newOptions.push(Object.assign({},currentOptions[i]));optionCounts.forEach(((currentValue,currentIndex,array)=>{if(currentIndex%2==0){const option=newOptions.find((option=>option.key==currentValue));option&&(option.append="("+array[currentIndex+1],option.data&&array[currentIndex+1]<option.data.totalCount&&(option.append+="/"+option.data.totalCount),option.append+=")")}})),setOptions(newOptions)}}(0,react.useEffect)((()=>{setSearchValue(query)}),[query]);const filterSelectedOptions=option=>"on"===option.checked,{data:searchResults,isLoading,isSuccess,isError,error}=(0,es.useQuery)(["searchResults",api,searchValue,exactMatch,showObsoleteTerms,activePage,itemsPerPage,filterByTypeOptions.filter(filterSelectedOptions).map((option=>option.key)),filterByOntologyOptions.filter(filterSelectedOptions).map((option=>option.key)),parameter],(async _ref=>{let{signal}=_ref;return olsApi.search({query:searchValue,exactMatch,showObsoleteTerms,types:filterByTypeOptions.filter(filterSelectedOptions).map((option=>option.key)).join(","),ontology:filterByOntologyOptions.filter(filterSelectedOptions).map((option=>option.key)).join(","),groupByIri:!0},{page:activePage.toString(),size:itemsPerPage.toString()},void 0,props.parameter,signal).then((response=>{if(response.response&&null!=response.response.docs&&null!=response.response.numFound){response.facet_counts&&response.facet_counts.facet_fields&&(response.facet_counts.facet_fields.type&&updateFilterOptions(filterByTypeOptions,response.facet_counts.facet_fields.type,setFilterByTypeOptions,(currentValue=>`${currentValue[0].toUpperCase()}${currentValue.slice(1)}`)),response.facet_counts.facet_fields.ontology_name&&updateFilterOptions(filterByOntologyOptions,response.facet_counts.facet_fields.ontology_name,setFilterByOntologyOptions,(currentValue=>currentValue.toUpperCase()))),setTotalItems(response.response.numFound);const newPageCount=Math.ceil(response.response.numFound/itemsPerPage);return setPageCount(newPageCount),activePage>=newPageCount&&setActivePage(0),response.response.docs}throw new Error("Unexpected API response")}))}),{keepPreviousData:!0});function clearFilter(currentOptions,setOptions){setOptions([...currentOptions].map((option=>({...option,checked:void 0}))))}return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(AutocompleteWidget.V,{api,selectionChangedEvent:selectedOption=>{!function transform_to_searchValue(selectedOption){setSearchValue(selectedOption[0]?selectedOption[0].label:"")}(selectedOption)},allowCustomTerms:!0,singleSelection:!0,hasShortSelectedLabel:!0,placeholder:"Search"}),(0,jsx_runtime.jsx)(spacer.F,{size:"s"}),(0,jsx_runtime.jsxs)(flex_group.Gv,{children:[(0,jsx_runtime.jsx)(flex_item.J,{grow:3,style:{minWidth:250},children:(0,jsx_runtime.jsxs)(panel.xe,{children:[isSuccess&&(0,jsx_runtime.jsx)(form_row.M,{label:"Filter by type",children:(0,jsx_runtime.jsx)(selectable._,{options:filterByTypeOptions,onChange:setFilterByTypeOptions,listProps:{bordered:!0},children:list=>list})}),isLoading&&(0,jsx_runtime.jsx)(form_row.M,{label:"Filter by type",children:(0,jsx_runtime.jsx)(loading_spinner.p,{size:"s"})}),isError&&(0,jsx_runtime.jsx)(form_row.M,{label:"Filter by type",children:(0,jsx_runtime.jsx)(selectable._,{options:[],onChange:setFilterByTypeOptions,listProps:{bordered:!0},children:list=>list})}),isSuccess&&(0,jsx_runtime.jsx)(form_row.M,{label:"Filter by ontology",children:(0,jsx_runtime.jsx)(selectable._,{options:filterByOntologyOptions,onChange:setFilterByOntologyOptions,listProps:{bordered:!0},searchable:!0,children:(list,search)=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[search,list]})})}),isLoading&&(0,jsx_runtime.jsx)(form_row.M,{label:"Filter by ontology",children:(0,jsx_runtime.jsx)(loading_spinner.p,{size:"s"})}),isError&&(0,jsx_runtime.jsx)(form_row.M,{label:"Filter by ontology",children:(0,jsx_runtime.jsx)(selectable._,{options:[],onChange:setFilterByOntologyOptions,listProps:{bordered:!0},searchable:!0,children:(list,search)=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[search,list]})})}),(0,jsx_runtime.jsx)(button_empty.Xs,{onClick:function clearAllFilters(){clearFilter(filterByTypeOptions,setFilterByTypeOptions),clearFilter(filterByOntologyOptions,setFilterByOntologyOptions)},children:"Clear all filters"})]})}),(0,jsx_runtime.jsx)(flex_item.J,{grow:7,children:(0,jsx_runtime.jsxs)(panel.xe,{color:"transparent",grow:!1,children:[(0,jsx_runtime.jsxs)(flex_group.Gv,{children:[(0,jsx_runtime.jsx)(flex_item.J,{grow:!1,children:(0,jsx_runtime.jsx)(switch_switch.D,{label:"Exact match",checked:exactMatch,onChange:function toggleExactMatch(){setExactMatch(!exactMatch)}})}),(0,jsx_runtime.jsx)(flex_item.J,{children:(0,jsx_runtime.jsx)(switch_switch.D,{label:"Show only obsolete terms",checked:showObsoleteTerms,onChange:function toggleShowObsoleteTerms(){setShowObsoleteTerms(!showObsoleteTerms)}})})]}),(0,jsx_runtime.jsx)(spacer.F,{size:"m"}),(0,jsx_runtime.jsxs)(text_text.a,{size:"xs",style:{padding:"0 8px"},children:["Showing ",Math.min(activePage*itemsPerPage+1,totalItems)," to ",Math.min((activePage+1)*itemsPerPage,totalItems)," of ",totalItems," results"]}),(0,jsx_runtime.jsx)(spacer.F,{size:"s"}),(0,jsx_runtime.jsx)(horizontal_rule.Gt,{margin:"none",style:{height:2}}),(0,jsx_runtime.jsx)(spacer.F,{size:"s"}),(0,jsx_runtime.jsx)(table_pagination.b,{"aria-label":"Search result pagination",pageCount,activePage,onChangePage:setActivePage,itemsPerPage,onChangeItemsPerPage:function onChangeItemsPerPage(newItemsPerPage){setActivePage(Math.floor((activePage*itemsPerPage+1)/newItemsPerPage)),setItemsPerPage(newItemsPerPage)},itemsPerPageOptions}),(0,jsx_runtime.jsx)(spacer.F,{size:"s"}),searchResults&&searchResults.map((result=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(MetadataCompact,{api,result,targetLink}),(0,jsx_runtime.jsx)(spacer.F,{})]},result.id)))]})})]})]})}SearchResultsListWidget.__docgenInfo={description:"",methods:[],displayName:"SearchResultsListWidget",props:{api:{required:!0,tsType:{name:"string"},description:""},query:{required:!0,tsType:{name:"string"},description:""},parameter:{required:!1,tsType:{name:"string"},description:"Additional parameters to pass to the API.\n\nThis parameters can be used to filter the search results. Each parameter can be combined via\nthe special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign\n<i><b>,</b></i>. The following keys could be used:<br/> <br/>\n <table>\n <thead><tr><th>Parameter</th><th>Description</th></tr></thead>\n <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>\n <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>\n <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>\n <tr><td>fieldList</td><td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>\n <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>\n <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>\n <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>\n <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>\n <tr><td>rows</td><td>Set results per page</td></tr>\n <tr><td>start</td><td>Set the results page number</td></tr>\n <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>\n</table>"},initialItemsPerPage:{required:!1,tsType:{name:"number"},description:""},itemsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},targetLink:{required:!1,tsType:{name:"string"},description:""}}};const SearchResultsListWidget_stories={title:"SearchResultsListWidget",component:SearchResultsListWidget,argTypes:{api:{description:"The API instance for the API call.\n- **Official OLS4 API of EMBL-EBI**: [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)\n- **Official SemLookP API (based on OLS3)**: [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)\n- **Improved SemLookP API (beta version)**: [https://semanticlookup.zbmed.de/api/](https://semanticlookup.zbmed.de/api/)",control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/"]},query:{description:"The terms to search. By default the search is performed over term labels, synonyms, descriptions, identifiers and annotation properties."},initialItemsPerPage:{description:"Initial number of items displayed per page.",control:"number"},itemsPerPageOptions:{description:"Possible values for number of items displayed per page.",control:"array"},targetLink:{description:"The link which should be the target of the EuiCard."},parameter:{type:{required:!1}}},args:{parameter:"collection=nfdi4health"}},Template=args=>(0,jsx_runtime.jsx)(SearchResultsListWidget,{...args});Template.displayName="Template";const SearchResultsListSafety=Template.bind({});SearchResultsListSafety.args={api:"https://semanticlookup.zbmed.de/api/",query:"d*",targetLink:"",parameter:"collection=safety"};const SearchResultsListNFDI4Health=Template.bind({});SearchResultsListNFDI4Health.args={api:"https://semanticlookup.zbmed.de/api/",query:"d*",targetLink:"",parameter:"collection=nfdi4health"};const ErrorSearchResultsList=Template.bind({});ErrorSearchResultsList.args={api:"ht3ps://semanticlookup.zbmed.de/api/",query:"d*",targetLink:"",parameter:"collection=nfdi4health"},SearchResultsListSafety.parameters={...SearchResultsListSafety.parameters,docs:{...SearchResultsListSafety.parameters?.docs,source:{originalSource:"(args: SearchResultsListWidgetProps) => <SearchResultsListWidget {...args} />",...SearchResultsListSafety.parameters?.docs?.source}}},SearchResultsListNFDI4Health.parameters={...SearchResultsListNFDI4Health.parameters,docs:{...SearchResultsListNFDI4Health.parameters?.docs,source:{originalSource:"(args: SearchResultsListWidgetProps) => <SearchResultsListWidget {...args} />",...SearchResultsListNFDI4Health.parameters?.docs?.source}}},ErrorSearchResultsList.parameters={...ErrorSearchResultsList.parameters,docs:{...ErrorSearchResultsList.parameters?.docs,source:{originalSource:"(args: SearchResultsListWidgetProps) => <SearchResultsListWidget {...args} />",...ErrorSearchResultsList.parameters?.docs?.source}}};const __namedExportsOrder=["SearchResultsListSafety","SearchResultsListNFDI4Health","ErrorSearchResultsList"]},"./src/components/widgets/AutocompleteWidget/AutocompleteWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>AutocompleteWidget});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_api_OlsApi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/api/OlsApi.ts"),_elastic_eui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@elastic/eui/es/services/color/eui_palettes.js"),_elastic_eui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@elastic/eui/es/components/health/health.js"),_elastic_eui__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@elastic/eui/es/components/highlight/highlight.js"),_elastic_eui__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@elastic/eui/es/components/combo_box/combo_box.js"),react_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-query/es/index.js"),_MetadataWidget__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/widgets/MetadataWidget/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AutocompleteWidget(props){const{api,parameter,hasShortSelectedLabel,...rest}=props,olsApi=new _api_OlsApi__WEBPACK_IMPORTED_MODULE_4__.m(api),visColors=(0,_elastic_eui__WEBPACK_IMPORTED_MODULE_5__.EI)(),visColorsBehindText=(0,_elastic_eui__WEBPACK_IMPORTED_MODULE_5__.VP)(),[searchValue,setSearchValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[options,setOptions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[selectedOptions,setSelectedOptions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),renderOption=(option,searchValue)=>{const{label,value}=option;if(props.allowCustomTerms&&""==value.iri)return label;{let color="";"class"===value.type?color=visColorsBehindText[5]:"individual"===value.type?color=visColorsBehindText[3]:"property"===value.type&&(color=visColorsBehindText[1]);const dotColor=visColors[visColorsBehindText.indexOf(color)];return null!=value.description?"ontology"===value.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__.Q,{title:"type: "+value.type+"\n\nlabel: "+value.label+"\n\nprefix: "+value.ontology_name+"\n\ndescription: "+value.description,color:dotColor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_7__.o,{search:searchValue,children:value.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),value.description]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__.Q,{title:"type: "+value.type+"\n\nlabel: "+value.label+"\n\nprefix > short_form: "+value.ontology_name+" > "+value.short_form+"\n\ndescription: "+value.description,color:dotColor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_7__.o,{search:searchValue,children:value.label}),"     ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_MetadataWidget__WEBPACK_IMPORTED_MODULE_2__.bM,{api,entityType:value.type,ontologyId:value.ontology_name,iri:value.iri,colorFirst:"primary",colorSecond:"success",parameter:value.parameter}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),value.description.substring(0,40)+"..."]})})}):"ontology"===value.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__.Q,{title:"type: "+value.type+"\n\nlabel: "+value.label+"\n\nprefix: "+value.ontology_name,color:dotColor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_7__.o,{search:searchValue,children:value.label})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__.Q,{title:"type: "+value.type+"\n\nlabel: "+value.label+"\n\nprefix > short_form: "+value.ontology_name+" > "+value.short_form,color:dotColor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_7__.o,{search:searchValue,children:value.label}),"     ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_MetadataWidget__WEBPACK_IMPORTED_MODULE_2__.bM,{api,entityType:value.type,ontologyId:value.ontology_name,iri:value.iri,colorFirst:"primary",colorSecond:"success",parameter:value.parameter})]})})}},{isLoading:isLoadingOnMount}=(0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(["onMount",props.selectOption],(async()=>{props.selectOption?.iri&&props.selectOption?.iri.startsWith("http")?olsApi.select({query:props.selectOption?.iri},void 0,void 0,parameter).then((response=>{response.response&&response.response.docs&&response.response.docs.map((selection=>{props.selectOption?.iri===selection.iri&&(setOptions([{label:hasShortSelectedLabel?selection.label:generateDisplayLabel(selection),key:selection.iri,value:{iri:selection.iri,label:selection.label,ontology_name:selection.ontology_name,type:selection.type,short_form:selection.short_form,description:selection.description?.join()}}]),setSelectedOptions([{label:hasShortSelectedLabel?selection.label:generateDisplayLabel(selection),key:selection.iri,value:{iri:selection.iri,label:selection.label,ontology_name:selection.ontology_name,type:selection.type,short_form:selection.short_form,description:selection.description?.join()}}]))}))})):props.selectOption?.label&&props.allowCustomTerms&&(setOptions([{label:props.selectOption?.label,value:{iri:"",label:"",ontology_name:"",type:"",short_form:"",description:""}}]),setSelectedOptions([{label:props.selectOption?.label,value:{iri:"",label:"",ontology_name:"",type:"",short_form:"",description:""}}]))})),{isLoading:isLoadingTerms}=(0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(["onSearchChange",searchValue],(async()=>{if(searchValue.length>0)return olsApi.select({query:searchValue},void 0,void 0,parameter).then((response=>{response.response&&response.response.docs&&setOptions(response.response.docs.map((selection=>({label:hasShortSelectedLabel?selection.label:generateDisplayLabel(selection),key:selection.iri,value:{iri:selection.iri,label:selection.label,ontology_name:selection.ontology_name,type:selection.type,short_form:selection.short_form,description:selection.description?.join()}}))))}))}));function generateDisplayLabel(item){return item.label+" ("+item.ontology_name.toUpperCase()+" "+item.short_form+")"}function onChangeHandler(options){setSelectedOptions(options)}function onCreateOptionHandler(searchValue){const newOption={label:searchValue,value:{iri:"",label:"",ontology_name:"",type:"",short_form:"",description:""}};setOptions([...options,newOption]),setSelectedOptions([...selectedOptions,newOption])}return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{props.selectionChangedEvent(selectedOptions.map((x=>props.allowCustomTerms&&""==x.value.iri?{iri:"",label:x.label,ontology_name:"",type:"",short_form:x.value.short_form,description:x.value.description}:""==x.value.iri?{iri:"",label:"",ontology_name:"",type:"",short_form:"",description:""}:{iri:x.value.iri,label:x.value.label,ontology_name:x.value.ontology_name,type:x.value.type,short_form:x.value.short_form,description:x.value.description})))}),[selectedOptions]),props.singleSelection?props.allowCustomTerms?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_8__.G,{isClearable:!0,"aria-label":"searchBar",fullWidth:!0,...rest,async:!0,isLoading:isLoadingTerms||isLoadingOnMount,singleSelection:{asPlainText:!0},placeholder:props.placeholder?props.placeholder:"Search for a Concept",options,selectedOptions,onSearchChange:setSearchValue,onChange:onChangeHandler,renderOption,onCreateOption:onCreateOptionHandler,rowHeight:50}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_8__.G,{isClearable:!0,"aria-label":"searchBar",fullWidth:!0,...rest,async:!0,isLoading:isLoadingTerms||isLoadingOnMount,singleSelection:{asPlainText:!0},placeholder:props.placeholder?props.placeholder:"Search for a Concept",options,selectedOptions,onSearchChange:setSearchValue,onChange:onChangeHandler,renderOption,rowHeight:50}):props.allowCustomTerms?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_8__.G,{isClearable:!0,"aria-label":"searchBar",fullWidth:!0,...rest,async:!0,isLoading:isLoadingTerms||isLoadingOnMount,placeholder:props.placeholder?props.placeholder:"Search for a Concept",options,selectedOptions,onSearchChange:setSearchValue,onChange:onChangeHandler,renderOption,onCreateOption:onCreateOptionHandler,rowHeight:50}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_elastic_eui__WEBPACK_IMPORTED_MODULE_8__.G,{isClearable:!0,"aria-label":"searchBar",fullWidth:!0,...rest,async:!0,isLoading:isLoadingTerms||isLoadingOnMount,placeholder:props.placeholder?props.placeholder:"Search for a Concept",options,selectedOptions,onSearchChange:setSearchValue,onChange:onChangeHandler,renderOption,rowHeight:50})}AutocompleteWidget.__docgenInfo={description:"A React component to provide Autosuggestion based on SemLookP.",methods:[],displayName:"AutocompleteWidget",props:{api:{required:!0,tsType:{name:"string"},description:"Instance of the OLS API to call."},parameter:{required:!1,tsType:{name:"string"},description:"Additional parameters to pass to the API.\n\nThis parameters can be used to filter the search results. Each parameter can be combined via\nthe special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign\n<i><b>,</b></i>. The following keys could be used:<br/> <br/>\n <table>\n <thead><tr><th>Parameter</th><th>Description</th></tr></thead>\n <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>\n <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>\n <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>\n <tr><td>fieldList</td><td>Specify the fields to return. Pass {fieldList=description,label,iri,ontology_name,type,short_form} to display descriptions in search results.</td></tr>\n <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>\n <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>\n <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>\n <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>\n <tr><td>rows</td><td>Set results per page</td></tr>\n <tr><td>start</td><td>Set the results page number</td></tr>\n <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>\n</table>"},selectionChangedEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedOptions: {\n  label: string;\n  iri?: string;\n  ontology_name?: string;\n  type?: string;\n}[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  iri?: string;\n  ontology_name?: string;\n  type?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"iri",value:{name:"string",required:!1}},{key:"ontology_name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}}]}}],raw:"{\n  label: string;\n  iri?: string;\n  ontology_name?: string;\n  type?: string;\n}[]"},name:"selectedOptions"}],return:{name:"void"}}},description:"A method that is called once the set of selection changes\n@param selectedOptions  The selected items"},selectOption:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label?: string; iri?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"iri",value:{name:"string",required:!1}}]}},description:"Pass a pre select value."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder to show if no user input nor selection is performed."},hasShortSelectedLabel:{required:!1,tsType:{name:"boolean"},description:"If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true."},allowCustomTerms:{required:!0,tsType:{name:"boolean"},description:"If true, custom terms can be added that are not found via API."},singleSelection:{required:!0,tsType:{name:"boolean"},description:"If true, only one concept can be selected at once."}},composes:["EuiComboBoxProps"]}},"./src/components/widgets/MetadataWidget/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bM:()=>_BreadcrumbWidget__WEBPACK_IMPORTED_MODULE_2__.b,dm:()=>_DescriptionWidget__WEBPACK_IMPORTED_MODULE_0__.d,wt:()=>_IriWidget__WEBPACK_IMPORTED_MODULE_1__.w});var _DescriptionWidget__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/widgets/MetadataWidget/DescriptionWidget/index.ts"),_IriWidget__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/widgets/MetadataWidget/IriWidget/index.ts"),_BreadcrumbWidget__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/widgets/MetadataWidget/BreadcrumbWidget/index.ts");__webpack_require__("./src/components/widgets/MetadataWidget/TabWidget/index.ts"),__webpack_require__("./src/components/widgets/MetadataWidget/TitleWidget/index.ts"),__webpack_require__("./src/components/widgets/MetadataWidget/MetadataWidget.tsx")}}]);