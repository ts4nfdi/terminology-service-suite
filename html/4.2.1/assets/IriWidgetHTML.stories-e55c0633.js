import{F as o,l as i,N as e,O as n,P as c,Q as s,R as a}from"./widgetDescriptions-5f3d180b.js";const l={...o,...i,...e,...n,...c,...s},p={iri:"",color:"",iriText:"",urlPrefix:"",externalIcon:!0},y={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985"}},x={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1}},I={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"}},T={args:{iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="}};let u=0;function g(){return u++}const b={title:"Entity Metadata/IriWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:a}}},render:r=>{const t=g();return`
<div id="iri_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createIri(
    {
        iri:"${r.iri}",
        iriText:"${r.iriText}",
        color:"${r.color}",
        externalIcon: ${r.externalIcon},
        urlPrefix:"${r.urlPrefix}",
        copyButton: "${r.copyButton}"
    },
    document.querySelector('#iri_widget_container_${t}')
)
<\/script>
        `},argTypes:l,args:p},f=["IriWidget1","withCopyButton","withoutExternalIcon","withUrlPrefix"];export{y as IriWidget1,f as __namedExportsOrder,b as default,I as withCopyButton,T as withUrlPrefix,x as withoutExternalIcon};
