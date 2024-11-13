import{A as o,l as i,D as e,E as n,F as c,G as l}from"./storyArgs-BTeOS3u2.js";const s={...o,...i,...e,...n,...c,...l},a={iri:"",color:"",iriText:"",urlPrefix:"",copyButton:!1,externalIcon:!0},y={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985"}},d={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1}},x={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:!0}},I={args:{iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="}};let p=0;function u(){return p++}const T={title:"IriWidget",tags:["autodocs"],parameters:{layout:"centered"},render:r=>{const t=u();return`
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
        `},argTypes:s,args:a},b=["IriWidget1","withCopyButton","withoutExternalIcon","withUrlPrefix"];export{y as IriWidget1,b as __namedExportsOrder,T as default,x as withCopyButton,I as withUrlPrefix,d as withoutExternalIcon};
