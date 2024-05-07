import"./semlookp_widgets.min-BLUfpFpL.js";const r={api:{description:"Instance of the OLS API to call.",control:{type:"radio"},options:["https://www.ebi.ac.uk/ols4/api/","https://semanticlookup.zbmed.de/ols/api/","https://semanticlookup.zbmed.de/api/","https://service.tib.eu/ts4tib/api/"]},ontologyId:{description:"Ontology ID from where the term hierarchy should be taken."},iri:{description:"Iri of the term you want to fetch the term hierarchy for."},parameter:{collection:"nfdi4health"}},o={iri:"",ontologyId:""},d={args:{iri:"http://purl.bioontology.org/ontology/MESH/D003704",api:"https://semanticlookup.zbmed.de/api/",ontologyId:"mesh",parameter:"nfdi4health"}};let i=0;function a(){return i++}const n={title:"HierarchyWidgetDeprecated",tags:["autodocs"],parameters:{layout:"centered"},render:e=>{const t=a();return`
<div id="hierarchy_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchyDeprecated(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
    },
    document.querySelector('#hierarchy_widget_container_${t}')
)
<\/script>
        `},argTypes:r,args:o},p=["HierarchyWidgetDeprecated1"];export{d as HierarchyWidgetDeprecated1,p as __namedExportsOrder,n as default};
