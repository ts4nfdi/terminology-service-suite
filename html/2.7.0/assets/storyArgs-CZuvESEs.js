import{e,t}from"./ModelTypeCheck-CpmdorZG.js";const o={api:{required:!0,control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/","https://service.tib.eu/ts4tib/api/","https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/"],description:"The API instance for the API call.<br> **Official OLS4 API of EMBL-EBI**: [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)<br> **Official SemLookP API (based on OLS3)**: [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)<br> **Improved SemLookP API (beta version)**: [https://semanticlookup.zbmed.de/api/](https://semanticlookup.zbmed.de/api/)<br> **OLS4 API NFDI4Health collection**: [https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/](https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/)<br> **TIB Terminology Service**: [https://service.tib.eu/ts4tib/api/](https://service.tib.eu/ts4tib/api/)<br> **TS4NFDI API Gateway**: [https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/](https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/)<br> ",type:{summary:"string"}}},s={useLegacy:{required:!1,description:"Toggle between OLS3 (legacy) and OLS4 API versions.",table:{defaultValue:{summary:!0}},type:{summary:"boolean"}}},i={iri:{required:!0,description:"Entity IRI whose information you want to fetch.",type:{summary:"string"}}},a={ontologyId:{required:!1,description:"Select a specific ontology by ID.",table:{defaultValue:{summary:void 0}},type:{summary:"string"}}},n={ontologyId:{required:!0,description:"Select a specific ontology by ID.",table:{defaultValue:{summary:void 0}},type:{summary:"string"}}},l={entityType:{required:!1,description:"Sets the type of the entity whose information you want to fetch.",control:{type:"radio"},table:{type:{summary:`${e.join(" | ")}`}},options:["term","class","property","individual","INVALID STRING",""]}},d={selectionChangedEvent:{required:!0,action:"selectionChangedEvent",description:"A method that is called once the set of selection changes.",type:{summary:"(selectedOptions: {        label: string;        iri?: string;        ontology_name?: string;        type?: string;    }[]) => void;"},control:"text"}},p={placeholder:{required:!1,description:"Placeholder to show if no user input nor selection is performed.",type:{summary:"string"}}},c={preselected:{required:!1,description:"Pass pre-selected values.",type:{summary:"{ label?: string; iri?: string }[]"}}},u={parameter:{required:!1,type:{summary:"string"},defaultValue:{summary:void 0},description:`Additional parameters to pass to the API.<br><br>
      This parameters can be used to filter the search results. Each parameter can be combined via the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign <i><b>,</b></i>. The following keys could be used:<br><br>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ontology</td>
            <td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td>
          </tr>
          <tr>
            <td>type</td>
            <td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td>
          </tr>
          <tr>
            <td>slim</td>
            <td>Restrict a search to a particular set of slims by name</td>
          </tr>
          <tr>
            <td>fieldList</td>
            <td>Specify the fields to return. Defaults are <b>iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type</b></td>
          </tr>
          <tr>
            <td>obsoletes</td>
            <td>Set to true to include obsolete terms in the results</td>
          </tr>
          <tr>
            <td>local</td>
            <td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td>
          </tr>
          <tr>
            <td>childrenOf</td>
            <td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td>
          </tr>
          <tr>
            <td>allChildrenOf</td>
            <td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>Set results per page</td>
          </tr>
          <tr>
            <td>start</td>
            <td>Set the results page number</td>
          </tr>
          <tr>
            <td>lang</td>
            <td>Set the language for the response e.g. <b><i>en</i></b>, <b><i>de</i></b>, <b><i>fr</i></b>. The default value is <b><i>en</i></b></td>
          </tr>
          <tr>
            <td>collection</td>
            <td>Restrict a search to a terminology subset e.g. <b><i>collection=nfdi4health</i></b></td>
          </tr>
          <tr>
            <td>database</td>
            <td>Restrict a search via the API Gateway to specific terminology software stacks, choose from <b><i>ols</i></b>, <b><i>ontoportal</i></b>, or <b><i>skosmos</i></b></td>
          </tr>
        </tbody>
      </table>`}},y={hasShortSelectedLabel:{required:!1,description:"If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.",defaultValue:{summary:!1},type:{summary:"boolean"}}},m={allowCustomTerms:{required:!0,description:"If true, custom terms that are not found in any ontology can be added.",defaultValue:{summary:!1},type:{summary:"boolean"}}},g={singleSelection:{required:!0,description:"If true, only one concept can be selected at once.",defaultValue:{summary:!1},type:{summary:"boolean"}}},h={singleSelection:{required:!1,description:"Display options in a compact format without descriptions - when this mode is activated, not all information is shown in order to save space.",type:{summary:"boolean"}}},f={singleSelection:{required:!1,description:"Use the TS4NFDI Gateway API",defaultValue:{summary:!1},type:{summary:"boolean"}}},b={hasTitle:{required:!1,description:"Show title.",table:{defaultValue:{summary:!0}},type:{summary:"boolean"}}},T={showBadges:{required:!1,description:"If true, badges linking to defining ontologies are shown.",table:{defaultValue:{summary:!0}},type:{summary:"boolean"}}},A={apiQuery:{required:!0,description:"The API query whose response JSON should be displayed on click.",type:{summary:"string"}}},w={buttonText:{required:!0,description:"The text displayed on the button.",type:{summary:"string"}}},I={buttonSize:{required:!1,description:"Size of the button.",defaultValue:{summary:"m"},table:{type:{summary:"s | m"}},control:{type:"radio"},options:["s","m"]}},v={initialEntriesPerPage:{required:!1,description:"Initial number of entries displayed per page.",type:{summary:"number"},defaultValue:{summary:10},control:"number"}},S={pageSizeOptions:{required:!1,description:"Possible values for number of entries displayed per page.",type:{summary:"number[]"},defaultValue:{summary:[10,25,50,100]},control:"array"}},q={initialSortField:{required:!1,description:"Column the table is sorted by initially.",type:{summary:"string"},defaultValue:{summary:"config.preferredPrefix"},control:{type:"radio"},options:["config.title","config.preferredPrefix","config.loaded"]}},k={initialSortDir:{required:!1,description:"Initial sorting direction.",type:{summary:"string"},defaultValue:{summary:"asc"},table:{type:{summary:"asc | desc"}},control:{type:"radio"},options:["ascending","descending"]}},x={targetLink:{required:!1,description:"Possible hyperlink to a corresponding terminology in a Resource Name cell. Set this if you want a hyperlink to the terminology overview of your terminology service. Leave it blank if your application isn't a terminology service.",type:{summary:"string"},control:"text"}},P={actions:{required:!1,description:"Pass actions to each item in the table.",type:{summary:"Array<Action<OlsResource>>"}}},V={query:{required:!0,description:"The search query.",type:{summary:"string"}}},L={initialItemsPerPage:{required:!1,description:"Initial number of items displayed per page.",type:{summary:"number"},defaultValue:{summary:10},control:"number"}},O={itemsPerPageOptions:{required:!1,description:"Possible values for number of items displayed per page.",type:{summary:"number[]"},defaultValue:{summary:[10,25,50,100]},control:"array"}},F={colorFirst:{required:!1,description:"Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or a hex / rgb value",table:{type:{summary:"EuiLinkColor | string"}},control:{type:"radio"},options:["primary","accent","success","warning","danger","ghost","text","subdued","#00FFFF"]}},N={colorSecond:{required:!1,description:"Color of the second badge, can be primary, accent, success, warning, danger, ghost, text, subdued or a hex / rgb value",table:{type:{summary:"EuiLinkColor | string"}},control:{type:"radio"},options:["primary","accent","success","warning","danger","ghost","text","subdued","#00FFFF"]}},z={color:{required:!1,description:"Color of the text, names, hex or rgb",table:{type:{summary:"EuiLinkColor | string"}},control:{type:"radio"},options:["default","subdued","success","accent","danger","warning","ghost","#00FFFF","rgb(255,0,255)"]}},E={descText:{required:!1,description:"Set your own text manually that overwrites the text fetched from the API.",type:{summary:"string"}}},C={thingType:{description:"Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",table:{type:{summary:`${t.join(" | ")}`}},control:{type:"radio"},options:["ontology","term","class","property","individual","","INVALID STRING"]}},R={iriText:{required:!1,description:"Set your own text manually, which will show as a clickable link instead of the IRI.",type:{summary:"string"}}},D={externalIcon:{required:!1,options:[!0,!1],defaultValue:!0,description:"Indicates that the target is external and needs an icon.",type:{summary:"boolean"}}},B={urlPrefix:{required:!1,type:{summary:"string"},description:"The iri should get appended to the urlPrefix or not. When provided, the iri gets encoded and appended to the urlPrefix."}},G={copyButton:{required:!1,options:[!0,!1],defaultValue:!1,type:{summary:"boolean"},description:"If true, a copy button is shown next to the link."}},_={titleText:{required:!1,description:"Set your own text manually that overwrites the text fetched from the API.",type:{summary:"string"}}},j={defaultValue:{required:!1,description:"Set the default text shown if the API fails to retrieve one.",control:"text",type:{summary:"string"}}},Q={defaultValue:{required:!1,description:"CSS class for styling.",control:"text",type:{summary:"string"}}},H={onNavigateToEntity:{required:!1,type:{summary:"(ontologyId: string, entityType: string, iri: string) => void"},action:"onNavigateToEntityArgType",description:"This function is called every time an entity link is clicked.",control:"text"}},J={onNavigateToOntology:{required:!1,type:{summary:"(ontologyId: string, entityType: string, iri: string) => void"},action:"onNavigateToOntologyArgType",description:"This function is called every time a badge linking to an entity in its defining ontology is clicked.",control:"text"}};export{B as A,G as B,J as C,H as D,n as E,V as F,L as G,O as H,x as I,_ as J,j as K,Q as L,v as M,S as N,q as O,k as P,P as Q,o as a,c as b,u as c,m as d,g as e,h as f,b as g,y as h,l as i,T as j,i as k,A as l,I as m,w as n,a as o,p,F as q,N as r,d as s,f as t,s as u,z as v,E as w,C as x,R as y,D as z};
