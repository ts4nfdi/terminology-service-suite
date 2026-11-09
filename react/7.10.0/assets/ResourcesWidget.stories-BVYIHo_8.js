"use client";import{aQ as X,k as J,u as ee,aR as ne,p as re,aS as ie,aT as te,aU as se,aV as oe,aW as ae,j as le,aX as de}from"./storyArgs-D5ANxk7j.js";import{r as N,j as e,a as ue}from"./iframe-DXdc-Lnu.js";import{u as ce}from"./useQuery-Brqf68u6.js";import{E as me}from"./horizontal_rule-D5stLn56.js";import{E as ge}from"./screen_reader_only-QQwSCQ5x.js";import{E as L}from"./link-C2dH1FhO.js";import{E as A}from"./button_icon-D2S4whyJ.js";import{E as pe,a as fe}from"./description_list-CVzgsp4P.js";import{E as W}from"./spacer-tI0d392U.js";import{E as ye}from"./text-CYBbEEpx.js";import{E as j}from"./in_memory_table-B_1Oluaa.js";import{Z as be,E as he}from"./globals-1uEo64sR.js";import{E}from"./button-D6CbRd-X.js";import"./preload-helper-Dp1pzeXC.js";import"./loading_spinner-Bov40C5s.js";import"./href_validator-Doy-mZZ6.js";import"./icon-CUyMCZ_R.js";import"./link.styles-D3zuxG2T.js";import"./_button_display-DKhyo5MR.js";import"./useCombinedRefs-D0F3xZWi.js";import"./_button-B5k2T_VU.js";import"./title-C-zhgPOc.js";import"./panel-Cy0Fc-UK.js";import"./shadow-D6ifR6OS.js";import"./delay_render-C-o1OOWi.js";import"./basic_table-D0TGuKCU.js";import"./form_control_layout-Cuk7UBOx.js";import"./tool_tip-Bg5DmZI5.js";import"./reposition_on_scroll-UpEHk3FA.js";import"./portal-B26yOc-I.js";import"./popover-paoqi_n1.js";import"./focus_trap-UfcP4ZoJ.js";import"./button_empty-C53db4pG.js";import"./flex_item-Cfrd9Kwr.js";import"./flex_group-CKM__Vyy.js";import"./icon_tip-DNX6XK-z.js";import"./inner_text-jL60RkSw.js";import"./field_search-BaqA1_Al.js";import"./text_truncate-D2zhjp-N.js";import"./color_utils-D4LkdvqP.js";import"./selectable-lBY2YIR0.js";import"./auto_sizer-CXNbMRRw.js";import"./index.esm-CFkXulM7.js";import"./badge-DFABdSL0.js";import"./emotion-css.esm-BdVx7Xv6.js";function H(r){const{resources:l,isLoading:d,isError:g,onNavigate:s,useLegacy:O,actions:T,className:x,...u}=r,[t,q]=N.useState({}),[p,I]=N.useState(""),c=x||"ts4nfdi-resources-style",F=[{name:"Logo",field:"config.logo",render:n=>n?e.jsx("img",{width:"100%",style:{objectFit:"contain"},src:n.startsWith("/images")?X+n:n,alt:"-logo-"}):e.jsx(e.Fragment,{}),width:"7%",sortable:!1},{name:"Resource Name",field:"config.title",width:"15%",sortable:!0},{name:"Short Name",field:"ontologyId",render:n=>e.jsx(L,{href:"#",onClick:i=>{i.preventDefault(),typeof s=="function"&&s(n||"")},children:n}),width:"10%",sortable:!0},{name:"Description",field:"config.description",css:ue`
        display: block;
        max-height: 200px;
        overflow: auto;
      `},{name:"Version",field:"config.version",width:"7%"},{name:"Loaded on",field:"loaded",width:"8%",dataType:"date",sortable:!0},{name:"Terms",field:"numberOfTerms",render:n=>n?e.jsx(e.Fragment,{children:n.toLocaleString()}):e.jsx(e.Fragment,{}),width:"7%",sortable:!0},{name:"Properties",field:"numberOfProperties",render:n=>n?e.jsx(e.Fragment,{children:n.toLocaleString()}):e.jsx(e.Fragment,{}),width:"7%",sortable:!0},{name:"Individuals",field:"numberOfIndividuals",render:n=>n?e.jsx(e.Fragment,{children:n.toLocaleString()}):e.jsx(e.Fragment,{}),width:"7%",sortable:!0},{width:"2%",actions:[...T||[],{render:n=>e.jsx(A,{href:n.config.fileLocation,iconType:"download","aria-label":"Download",isDisabled:!n.config.allowDownload||!n.config.fileLocation||n.config.fileLocation.startsWith("file://")})}]}],G=n=>{var m,y;const i={...t};if(i[n.ontologyId])delete i[n.ontologyId];else{let o=null,b="",h="";if(n.config.homepage&&(o=n.config.homepage),(y=(m=n==null?void 0:n.config)==null?void 0:m.annotations)!=null&&y.license){const a=n.config.annotations.license;O?a[0]!==""&&(b=`https://${a[0]}`,h=a[0]):(b=a.url?a.url:"",h=a.label?a.label:"")}const S=[];o&&S.push({title:"Homepage",description:e.jsx(L,{href:`${o||"-"}`,children:`${o||"-"}`})}),h!==""&&S.push({title:"License",description:e.jsx(L,{href:`${b!==""?b:null}`,children:`${h}`})}),i[n.ontologyId]=e.jsx(fe,{listItems:S})}q(i)},D=[...F,{align:"right",width:"40px",isExpander:!0,name:e.jsx(ge,{children:e.jsx("span",{children:"Expand row"})}),mobileOptions:{header:!1},render:n=>{const i={...t};return e.jsx(A,{onClick:()=>{G(n)},iconType:i[n.ontologyId]?"arrowDown":"arrowRight","aria-label":i[n.ontologyId]?"Collapse":"Expand"})}}],P={box:{incremental:!0,placeholder:"Search by ontology or resource name"},onChange:({queryText:n})=>{I(n)}},f=l.filter(n=>{var i;if(p==="")return!0;{const m=p.trim().toLowerCase(),y=(n.ontologyId||"").toLowerCase();return(((i=n.config)==null?void 0:i.title)||"").toLowerCase().includes(m)||y.includes(m)}}),K=!d&&!g;return e.jsxs("div",{className:c,"data-testid":"resources",children:[K&&e.jsxs(e.Fragment,{children:[e.jsx(pe,{title:"Licenses",iconType:"info",color:"warning",children:e.jsx("p",{children:"The use and distribution of the terminologies beyond this service is only permitted in compliance with the license conditions of the respective terminology, also in compliance with the license conditions in the respective countries."})}),e.jsx(W,{size:"m"}),e.jsxs(ye,{size:"xs",children:["Showing ",e.jsx("strong",{children:f.length})," ",e.jsx("strong",{children:"Ontologies"})]}),e.jsx(W,{size:"s"}),e.jsx(me,{margin:"none",style:{height:2}}),e.jsx(j,{columns:D,items:f,pagination:!0,sorting:!0,search:P,itemIdToExpandedRowMap:t,itemId:"ontologyId",...u})]}),d&&e.jsx(j,{columns:D,items:f,pagination:!0,sorting:!0,search:P,loading:!0,...u}),g&&e.jsx(j,{columns:F,items:f,pagination:!0,sorting:!0,search:P,...u})]})}H.__docgenInfo={description:"",methods:[],displayName:"ResourcesPresentation",props:{useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"},resources:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`ForcedOntologyIdObj & {
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
}`,signature:{properties:[{key:"logo",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"preferredPrefix",value:{name:"string",required:!0}},{key:"allowDownload",value:{name:"boolean",required:!0}},{key:"fileLocation",value:{name:"string",required:!0}},{key:"version",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!0}},{key:{name:"string"},value:{name:"unknown",required:!0}}]}}]}],raw:"Action<OlsResource>"}],raw:"Array<Action<OlsResource>>"},description:"Pass actions to each item in the table."},onNavigate:{required:!1,tsType:{name:"union",raw:"((ontologyId: string) => void) | string",elements:[{name:"unknown"},{name:"string"}]},description:"This function is called every time an ontology link is clicked."}}};const we=!0;function ve(r){return{ontologyId:r.getOntologyId(),loaded:r.getLoaded(),numberOfTerms:r.getNumClasses(),numberOfProperties:r.getNumProperties(),numberOfIndividuals:r.getNumIndividuals(),config:{logo:r.getLogoURL(),title:r.getName().trim(),description:r.getDescription(),preferredPrefix:r.getPreferredPrefix(),allowDownload:r.getAllowDownload(),fileLocation:r.getIri(),version:r.getVersion(),iri:r.getIri(),homepage:r.getHomepage(),annotations:{license:r.getLicense()}}}}function Y(r){const{api:l,onNavigate:d,parameter:g,useLegacy:s=we,actions:O,className:T,...x}=r,u=new J(l),{data:t,isError:q,isLoading:p}=ce(["ontologiesData",l,g,s],async()=>u.getOntologiesData(r.parameter,s)),I=s?(t==null?void 0:t.properties.map(c=>({...c.properties})))||[]:(t==null?void 0:t.properties.map(c=>ve(c)))||[];return e.jsx(H,{...x,resources:I,isLoading:p,isError:q,onNavigate:d,useLegacy:s,actions:O,className:T})}Y.__docgenInfo={description:"",methods:[],displayName:"ResourcesWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},parameter:{required:!1,tsType:{name:"string"},description:""},useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"},initialEntriesPerPage:{required:!1,tsType:{name:"number"},description:"Initial number of entries displayed per page."},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Possible values for number of entries displayed per page."},initialSortField:{required:!1,tsType:{name:"string"},description:"Column the table is sorted by initially."},initialSortDir:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"Initial sorting direction."},actions:{required:!1,tsType:{name:"Array",elements:[{name:"Action",elements:[{name:"intersection",raw:`ForcedOntologyIdObj & {
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
}`,signature:{properties:[{key:"logo",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"preferredPrefix",value:{name:"string",required:!0}},{key:"allowDownload",value:{name:"boolean",required:!0}},{key:"fileLocation",value:{name:"string",required:!0}},{key:"version",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!0}},{key:{name:"string"},value:{name:"unknown",required:!0}}]}}]}],raw:"Action<OlsResource>"}],raw:"Array<Action<OlsResource>>"},description:"Pass actions to each item in the table."},onNavigate:{required:!1,tsType:{name:"union",raw:"((ontologyId: string) => void) | string",elements:[{name:"unknown"},{name:"string"}]},description:"This function is called every time an ontology link is clicked."}}};const{expect:ke,waitFor:Oe,within:Te}=__STORYBOOK_MODULE_TEST__,xe={...le,...ae,...oe,...se,...te,...ie,...re,...ne,...ee},qe={api:"",useLegacy:!0,initialEntriesPerPage:100,pageSizeOptions:[10,25,50,100],initialSortField:"config.preferredPrefix",initialSortDir:"asc",actions:[],onNavigate:"Console message",parameter:""},Z={api:be,initialEntriesPerPage:100,pageSizeOptions:[10,25,50,100],initialSortField:"config.preferredPrefix",initialSortDir:"asc",onNavigate:"Console message"},Ie=[{render:r=>e.jsx(A,{href:"",iconType:"search","aria-label":"Search"})},{render:r=>e.jsx(E,{href:"",size:"s",children:"Show terms"})},{render:r=>e.jsx(E,{href:"",size:"s",children:"Show properties"})},{render:r=>e.jsx(E,{href:"",size:"s",children:"Show individuals"})}],Pe={...Z,actions:Ie},Se={api:he,initialEntriesPerPage:100,pageSizeOptions:[10,25,50,100],initialSortField:"config.preferredPrefix",initialSortDir:"asc",targetLink:"https://semanticlookup.zbmed.de/dev/",parameter:"",useLegacy:!1},R=async({canvasElement:r})=>{const l=Te(r);await Oe(async()=>{const d=l.getByTestId("resources");await ke(d).toBeInTheDocument()},{timeout:3e3})},kn={title:"Ontology Metadata/ResourcesWidget",component:Y,parameters:{layout:"centered",docs:{description:{component:de}}},argTypes:xe,args:qe},w={args:Z,play:R},v={args:Pe,play:R},k={args:Se,play:R};var _,C,z;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: ResourcesWidget1Args,
  play: commonResourcesWidgetPlay
}`,...(z=(C=w.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var B,M,U;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: WithActionsArgs,
  play: commonResourcesWidgetPlay
}`,...(U=(M=v.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var V,$,Q;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: ResourcesWidgetLogosArgs,
  play: commonResourcesWidgetPlay
}`,...(Q=($=k.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};const On=["ResourcesWidget1","WithActions","ResourcesWidgetLogos"];export{w as ResourcesWidget1,k as ResourcesWidgetLogos,v as WithActions,On as __namedExportsOrder,kn as default};
