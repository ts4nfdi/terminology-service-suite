import"./ModelTypeCheck-DjhzoFkW.js";import{v as o,k as i,y as e,z as n,A as c,B as s}from"./storyArgs-BKWp3Ckm.js";const l={...o,...i,...e,...n,...c,...s},a={iri:"",color:"",iriText:"",urlPrefix:"",copyButton:!1,externalIcon:!0},d={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985"}},x={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1}},I={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:!0}},T={args:{iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="}};let p=0;function u(){return p++}const b={title:"IriWidget",tags:["autodocs"],parameters:{layout:"centered"},render:r=>{const t=u();return`
<div id="iri_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createIri(
    {
        iri:"${r.iri}",
        iriText:"${r.iriText}",
        color:"${r.color}",
        externalIcon: ${r.externalIcon},
        urlPrefix:"${r.urlPrefix}",
        copyButton: ${r.copyButton}
    },
    document.querySelector('#iri_widget_container_${t}')
)
<\/script>
        `},argTypes:l,args:a},f=["IriWidget1","withCopyButton","withoutExternalIcon","withUrlPrefix"];export{d as IriWidget1,f as __namedExportsOrder,b as default,I as withCopyButton,T as withUrlPrefix,x as withoutExternalIcon};
