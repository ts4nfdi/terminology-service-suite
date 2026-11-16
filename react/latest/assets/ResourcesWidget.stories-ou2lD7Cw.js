"use client";import{aQ as re,k as ie,u as te,aR as se,p as oe,aS as ae,aT as le,aU as de,aV as ue,aW as ce,j as me,aX as ge}from"./storyArgs-CulBm9k1.js";import{r as _,j as e,a as pe}from"./iframe-AxHnzAeN.js";import{u as fe}from"./useQuery-ictQTcCg.js";import{E as ye}from"./screen_reader_only-BQin6Hd6.js";import{E as R}from"./link-Bd-G1uPd.js";import{E as F}from"./button_icon-B2srbGkG.js";import{E as be,a as he}from"./description_list--MNjXiTx.js";import{E as C}from"./spacer-B0HfDere.js";import{E as we}from"./text-L0_7gUOK.js";import{E as ve}from"./selectable-CAvp7pZM.js";import{E}from"./in_memory_table-DW_DeIzq.js";import{b as ke,Z as Oe,E as Te}from"./globals-1uEo64sR.js";import{E as j}from"./button-C-_h-qfe.js";import"./preload-helper-Dp1pzeXC.js";import"./loading_spinner-CIt_srRo.js";import"./href_validator-CXJ6K-2F.js";import"./icon-DELVOWuw.js";import"./link.styles-DbNWETao.js";import"./_button_display-DCMuo913.js";import"./useCombinedRefs-YML7b3Bo.js";import"./_button-CkMzoeyJ.js";import"./title-Bcu90_UE.js";import"./panel-BsLIhasH.js";import"./shadow--DYx0qdx.js";import"./delay_render-CDn-NyTL.js";import"./field_search-CTLNIeQH.js";import"./form_control_layout-DAXkTpkJ.js";import"./basic_table-DGhCph3I.js";import"./tool_tip-BRg_8bXN.js";import"./reposition_on_scroll-D01t13di.js";import"./portal-B0HszpvR.js";import"./popover-CdTTd-6x.js";import"./focus_trap-CTLml3jj.js";import"./button_empty-CRIFHlBd.js";import"./flex_item-CKSdjeGp.js";import"./flex_group-BwevKuiO.js";import"./icon_tip-D0alDytP.js";import"./inner_text-CKRP-6uT.js";import"./auto_sizer-S4bQDTBX.js";import"./index.esm-M_9Xssb_.js";import"./badge-CjjLIJ8I.js";import"./color_utils-DwP1k7Ba.js";import"./emotion-css.esm-CmiD__7U.js";import"./text_truncate-D4ercaa7.js";function X(r){const{resources:l,isLoading:d,isError:g,onNavigate:s,useLegacy:x,actions:I,className:q,...u}=r,[t,P]=_.useState({}),[p,S]=_.useState(""),c=q||"ts4nfdi-resources-style",N=[{name:"Logo",field:"config.logo",render:n=>n?e.jsx("img",{width:"100%",style:{objectFit:"contain"},src:n.startsWith("/images")?re+n:n,alt:"-logo-"}):e.jsx(e.Fragment,{}),width:"7%",sortable:!1},{name:"Resource Name",field:"config.title",width:"15%",sortable:!0},{name:"Short Name",field:"ontologyId",render:n=>e.jsx(R,{href:"#",onClick:i=>{i.preventDefault(),typeof s=="function"&&s(n||"")},children:n}),width:"10%",sortable:!0},{name:"Description",field:"config.description",css:pe`
        display: block;
        max-height: 200px;
        overflow: auto;
      `},{name:"Version",field:"config.version",width:"7%"},{name:"Loaded on",field:"loaded",width:"8%",dataType:"date",sortable:!0},{name:"Terms",field:"numberOfTerms",render:n=>Number.isFinite(n)?e.jsx(e.Fragment,{children:n.toLocaleString()}):e.jsx(e.Fragment,{}),width:"7%",sortable:!0},{name:"Properties",field:"numberOfProperties",render:n=>Number.isFinite(n)?e.jsx(e.Fragment,{children:n.toLocaleString()}):e.jsx(e.Fragment,{}),width:"7%",sortable:!0},{name:"Individuals",field:"numberOfIndividuals",render:n=>Number.isFinite(n)?e.jsx(e.Fragment,{children:n.toLocaleString()}):e.jsx(e.Fragment,{}),width:"7%",sortable:!0},{width:"2%",actions:[...I||[],{render:n=>e.jsx(F,{href:n.config.fileLocation,iconType:"download","aria-label":"Download",isDisabled:!n.config.allowDownload||!n.config.fileLocation||n.config.fileLocation.startsWith("file://")})}]}],ee=n=>{var m,y;const i={...t};if(i[n.ontologyId])delete i[n.ontologyId];else{let o=null,b="",h="";if(n.config.homepage&&(o=n.config.homepage),(y=(m=n==null?void 0:n.config)==null?void 0:m.annotations)!=null&&y.license){const a=n.config.annotations.license;x?a[0]!==""&&(b=`https://${a[0]}`,h=a[0]):(b=a.url?a.url:"",h=a.label?a.label:"")}const A=[];o&&A.push({title:"Homepage",description:e.jsx(R,{href:`${o||"-"}`,children:`${o||"-"}`})}),h!==""&&A.push({title:"License",description:e.jsx(R,{href:`${b!==""?b:null}`,children:`${h}`})}),i[n.ontologyId]=e.jsx(he,{listItems:A})}P(i)},W=[...N,{align:"right",width:"40px",isExpander:!0,name:e.jsx(ye,{children:e.jsx("span",{children:"Expand row"})}),mobileOptions:{header:!1},render:n=>{const i={...t};return e.jsx(F,{onClick:()=>{ee(n)},iconType:i[n.ontologyId]?"arrowDown":"arrowRight","aria-label":i[n.ontologyId]?"Collapse":"Expand"})}}],L={box:{incremental:!0,placeholder:"Search by ontology or resource name"},onChange:({queryText:n})=>{S(n)}},f=l.filter(n=>{var i;if(p==="")return!0;{const m=p.trim().toLowerCase(),y=(n.ontologyId||"").toLowerCase();return(((i=n.config)==null?void 0:i.title)||"").toLowerCase().includes(m)||y.includes(m)}}),ne=!d&&!g;return e.jsxs("div",{className:c,"data-testid":"resources",children:[ne&&e.jsxs(e.Fragment,{children:[e.jsx(be,{title:"Licenses",iconType:"info",color:"warning",children:e.jsx("p",{children:"The use and distribution of the terminologies beyond this service is only permitted in compliance with the license conditions of the respective terminology, also in compliance with the license conditions in the respective countries."})}),e.jsx(C,{size:"m"}),e.jsxs(we,{size:"xs",children:["Showing ",e.jsx("strong",{children:f.length})," ",e.jsx("strong",{children:"Ontologies"})]}),e.jsx(C,{size:"s"}),e.jsx(ve,{margin:"none",style:{height:2}}),e.jsx(E,{columns:W,items:f,pagination:!0,sorting:!0,search:L,itemIdToExpandedRowMap:t,itemId:"ontologyId",...u})]}),d&&e.jsx(E,{columns:W,items:f,pagination:!0,sorting:!0,search:L,loading:!0,...u}),g&&e.jsx(E,{columns:N,items:f,pagination:!0,sorting:!0,search:L,...u})]})}X.__docgenInfo={description:"",methods:[],displayName:"ResourcesPresentation",props:{useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"},resources:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`ForcedOntologyIdObj & {
  loaded: string;
  numberOfTerms: number;
  numberOfProperties: number;
  numberOfIndividuals: number;
  config: {
    logo?: string;
    title: string;
    description: string;
    preferredPrefix: string;
    allowDownload: boolean;
    fileLocation: string;
    version?: string;
    [otherFields: string]: unknown;
  };
  [otherFields: string]: unknown;
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Select a specific ontology by id
   */
  ontologyId: string;
}`,signature:{properties:[{key:"ontologyId",value:{name:"string",required:!0},description:"Select a specific ontology by id"}]}},{name:"signature",type:"object",raw:`{
  loaded: string;
  numberOfTerms: number;
  numberOfProperties: number;
  numberOfIndividuals: number;
  config: {
    logo?: string;
    title: string;
    description: string;
    preferredPrefix: string;
    allowDownload: boolean;
    fileLocation: string;
    version?: string;
    [otherFields: string]: unknown;
  };
  [otherFields: string]: unknown;
}`,signature:{properties:[{key:"loaded",value:{name:"string",required:!0}},{key:"numberOfTerms",value:{name:"number",required:!0}},{key:"numberOfProperties",value:{name:"number",required:!0}},{key:"numberOfIndividuals",value:{name:"number",required:!0}},{key:"config",value:{name:"signature",type:"object",raw:`{
  logo?: string;
  title: string;
  description: string;
  preferredPrefix: string;
  allowDownload: boolean;
  fileLocation: string;
  version?: string;
  [otherFields: string]: unknown;
}`,signature:{properties:[{key:"logo",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"preferredPrefix",value:{name:"string",required:!0}},{key:"allowDownload",value:{name:"boolean",required:!0}},{key:"fileLocation",value:{name:"string",required:!0}},{key:"version",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!0}},{key:{name:"string"},value:{name:"unknown",required:!0}}]}}]}],raw:"OlsResource[]"},description:"The already resolved resources shown in the table."},isLoading:{required:!1,tsType:{name:"boolean"},description:"Shows the table in its loading state."},isError:{required:!1,tsType:{name:"boolean"},description:`True when a lookup performed by the caller failed. The license notice and
the resource count are then hidden.`},initialEntriesPerPage:{required:!1,tsType:{name:"number"},description:"Initial number of entries displayed per page."},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Possible values for number of entries displayed per page."},initialSortField:{required:!1,tsType:{name:"string"},description:"Column the table is sorted by initially."},initialSortDir:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"Initial sorting direction."},actions:{required:!1,tsType:{name:"Array",elements:[{name:"Action",elements:[{name:"intersection",raw:`ForcedOntologyIdObj & {
  loaded: string;
  numberOfTerms: number;
  numberOfProperties: number;
  numberOfIndividuals: number;
  config: {
    logo?: string;
    title: string;
    description: string;
    preferredPrefix: string;
    allowDownload: boolean;
    fileLocation: string;
    version?: string;
    [otherFields: string]: unknown;
  };
  [otherFields: string]: unknown;
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Select a specific ontology by id
   */
  ontologyId: string;
}`,signature:{properties:[{key:"ontologyId",value:{name:"string",required:!0},description:"Select a specific ontology by id"}]}},{name:"signature",type:"object",raw:`{
  loaded: string;
  numberOfTerms: number;
  numberOfProperties: number;
  numberOfIndividuals: number;
  config: {
    logo?: string;
    title: string;
    description: string;
    preferredPrefix: string;
    allowDownload: boolean;
    fileLocation: string;
    version?: string;
    [otherFields: string]: unknown;
  };
  [otherFields: string]: unknown;
}`,signature:{properties:[{key:"loaded",value:{name:"string",required:!0}},{key:"numberOfTerms",value:{name:"number",required:!0}},{key:"numberOfProperties",value:{name:"number",required:!0}},{key:"numberOfIndividuals",value:{name:"number",required:!0}},{key:"config",value:{name:"signature",type:"object",raw:`{
  logo?: string;
  title: string;
  description: string;
  preferredPrefix: string;
  allowDownload: boolean;
  fileLocation: string;
  version?: string;
  [otherFields: string]: unknown;
}`,signature:{properties:[{key:"logo",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"preferredPrefix",value:{name:"string",required:!0}},{key:"allowDownload",value:{name:"boolean",required:!0}},{key:"fileLocation",value:{name:"string",required:!0}},{key:"version",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!0}},{key:{name:"string"},value:{name:"unknown",required:!0}}]}}]}],raw:"Action<OlsResource>"}],raw:"Array<Action<OlsResource>>"},description:"Pass actions to each item in the table."},onNavigate:{required:!1,tsType:{name:"union",raw:"((ontologyId: string) => void) | string",elements:[{name:"unknown"},{name:"string"}]},description:"This function is called every time an ontology link is clicked."}}};const xe=!0;function Ie(r){return{ontologyId:r.getOntologyId(),loaded:r.getLoaded(),numberOfTerms:r.getNumClasses(),numberOfProperties:r.getNumProperties(),numberOfIndividuals:r.getNumIndividuals(),config:{logo:r.getLogoURL(),title:r.getName().trim(),description:r.getDescription(),preferredPrefix:r.getPreferredPrefix(),allowDownload:r.getAllowDownload(),fileLocation:r.getIri(),version:r.getVersion(),iri:r.getIri(),homepage:r.getHomepage(),annotations:{license:r.getLicense()}}}}function J(r){const{api:l,onNavigate:d,parameter:g,useLegacy:s=xe,actions:x,className:I,...q}=r,u=new ie(l),{data:t,isError:P,isLoading:p}=fe(["ontologiesData",l,g,s],async()=>u.getOntologiesData(r.parameter,s)),S=s?(t==null?void 0:t.properties.map(c=>({...c.properties})))||[]:(t==null?void 0:t.properties.map(c=>Ie(c)))||[];return e.jsx(X,{...q,resources:S,isLoading:p,isError:P,onNavigate:d,useLegacy:s,actions:x,className:I})}J.__docgenInfo={description:"",methods:[],displayName:"ResourcesWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},parameter:{required:!1,tsType:{name:"string"},description:""},useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"},initialEntriesPerPage:{required:!1,tsType:{name:"number"},description:"Initial number of entries displayed per page."},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Possible values for number of entries displayed per page."},initialSortField:{required:!1,tsType:{name:"string"},description:"Column the table is sorted by initially."},initialSortDir:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"Initial sorting direction."},actions:{required:!1,tsType:{name:"Array",elements:[{name:"Action",elements:[{name:"intersection",raw:`ForcedOntologyIdObj & {
  loaded: string;
  numberOfTerms: number;
  numberOfProperties: number;
  numberOfIndividuals: number;
  config: {
    logo?: string;
    title: string;
    description: string;
    preferredPrefix: string;
    allowDownload: boolean;
    fileLocation: string;
    version?: string;
    [otherFields: string]: unknown;
  };
  [otherFields: string]: unknown;
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Select a specific ontology by id
   */
  ontologyId: string;
}`,signature:{properties:[{key:"ontologyId",value:{name:"string",required:!0},description:"Select a specific ontology by id"}]}},{name:"signature",type:"object",raw:`{
  loaded: string;
  numberOfTerms: number;
  numberOfProperties: number;
  numberOfIndividuals: number;
  config: {
    logo?: string;
    title: string;
    description: string;
    preferredPrefix: string;
    allowDownload: boolean;
    fileLocation: string;
    version?: string;
    [otherFields: string]: unknown;
  };
  [otherFields: string]: unknown;
}`,signature:{properties:[{key:"loaded",value:{name:"string",required:!0}},{key:"numberOfTerms",value:{name:"number",required:!0}},{key:"numberOfProperties",value:{name:"number",required:!0}},{key:"numberOfIndividuals",value:{name:"number",required:!0}},{key:"config",value:{name:"signature",type:"object",raw:`{
  logo?: string;
  title: string;
  description: string;
  preferredPrefix: string;
  allowDownload: boolean;
  fileLocation: string;
  version?: string;
  [otherFields: string]: unknown;
}`,signature:{properties:[{key:"logo",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"preferredPrefix",value:{name:"string",required:!0}},{key:"allowDownload",value:{name:"boolean",required:!0}},{key:"fileLocation",value:{name:"string",required:!0}},{key:"version",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!0}},{key:{name:"string"},value:{name:"unknown",required:!0}}]}}]}],raw:"Action<OlsResource>"}],raw:"Array<Action<OlsResource>>"},description:"Pass actions to each item in the table."},onNavigate:{required:!1,tsType:{name:"union",raw:"((ontologyId: string) => void) | string",elements:[{name:"unknown"},{name:"string"}]},description:"This function is called every time an ontology link is clicked."}}};const{expect:qe,waitFor:Pe,within:Se}=__STORYBOOK_MODULE_TEST__,Le={...me,...ce,...ue,...de,...le,...ae,...oe,...se,...te},Ae={api:"",useLegacy:!0,initialEntriesPerPage:100,pageSizeOptions:[10,25,50,100],initialSortField:"config.preferredPrefix",initialSortDir:"asc",actions:[],onNavigate:"Console message",parameter:""},D={api:Oe,initialEntriesPerPage:100,pageSizeOptions:[10,25,50,100],initialSortField:"config.preferredPrefix",initialSortDir:"asc",onNavigate:"Console message"},Re=[{render:r=>e.jsx(F,{href:"",iconType:"search","aria-label":"Search"})},{render:r=>e.jsx(j,{href:"",size:"s",children:"Show terms"})},{render:r=>e.jsx(j,{href:"",size:"s",children:"Show properties"})},{render:r=>e.jsx(j,{href:"",size:"s",children:"Show individuals"})}],Ee={...D,actions:Re},je={api:Te,initialEntriesPerPage:100,pageSizeOptions:[10,25,50,100],initialSortField:"config.preferredPrefix",initialSortDir:"asc",targetLink:"https://semanticlookup.zbmed.de/dev/",parameter:"",useLegacy:!1},Fe={...D,api:ke,useLegacy:!1,parameter:"collectionId=ff5491d1-d0a9-481e-ac90-0fad065fa097"},T=async({canvasElement:r})=>{const l=Se(r);await Pe(async()=>{const d=l.getByTestId("resources");await qe(d).toBeInTheDocument()},{timeout:3e3})},qn={title:"Ontology Metadata/ResourcesWidget",component:J,parameters:{layout:"centered",docs:{description:{component:ge}}},argTypes:Le,args:Ae},w={name:"Default",args:D,play:T},v={name:"With Actions",args:Ee,play:T},k={name:"With Logos",args:je,play:T},O={name:"FAIRagro Collection",args:Fe,play:T};var z,B,M;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Default",
  args: ResourcesWidget1Args,
  play: commonResourcesWidgetPlay
}`,...(M=(B=w.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var U,V,$;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "With Actions",
  args: WithActionsArgs,
  play: commonResourcesWidgetPlay
}`,...($=(V=v.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var Q,Y,H;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "With Logos",
  args: ResourcesWidgetLogosArgs,
  play: commonResourcesWidgetPlay
}`,...(H=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var G,Z,K;O.parameters={...O.parameters,docs:{...(G=O.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "FAIRagro Collection",
  args: FAIRagroCollectionArgs,
  play: commonResourcesWidgetPlay
}`,...(K=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};const Pn=["ResourcesWidget1","WithActions","ResourcesWidgetLogos","FAIRagroCollection"];export{O as FAIRagroCollection,w as ResourcesWidget1,k as ResourcesWidgetLogos,v as WithActions,Pn as __namedExportsOrder,qn as default};
