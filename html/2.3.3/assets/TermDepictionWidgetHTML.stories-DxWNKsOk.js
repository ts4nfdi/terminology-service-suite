import"./terminology-service-suite.min-BLNVgPF1.js";const i={api:{control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},iri:{description:"The term IRI to be depicted."},ontologyId:{description:"Ontology ID that the term belongs to."}},o={api:"https://www.ebi.ac.uk/ols4/api/",iri:"",ontologyId:"",useLegacy:!1},s={args:{api:"https://www.ebi.ac.uk/ols4/api/",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1}};let r=0;function p(){return r++}const c={title:"TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=p();return`
<div id="term_depiction_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createDepiction(
    {
        iri:"${t.iri}",
        ontologyId:"${t.ontologyId}",
        api:"${t.api}",                
        useLegacy:${t.useLegacy},
    },
    document.querySelector('#term_depiction_widget_container_${e}')
)
<\/script>
        `},argTypes:i,args:o},a=["TermDepictionWidgetExample"];export{s as TermDepictionWidgetExample,a as __namedExportsOrder,c as default};
