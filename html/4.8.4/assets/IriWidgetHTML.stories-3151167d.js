import{B as i,m as o,L as e,M as n,N as s,O as c,i as a,P as l}from"./widgetDescriptions-004d52ae.js";/* empty css                                  */import"./iframe-209c1292.js";import"../sb-preview/runtime.js";const p={...i,...o,...e,...n,...s,...c,...a},u={iri:"",color:"",iriText:"",urlPrefix:"",externalIcon:!0,className:""},T={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985"}},f={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1}},b={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"}},_={args:{iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="}};let d=0;function g(){return d++}const h={title:"Entity Metadata/IriWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:l}}},render:r=>{const t=g();return`
<div id="iri_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createIri(
    {
        iri:"${r.iri}",
        iriText:"${r.iriText}",
        color:"${r.color}",
        externalIcon: ${r.externalIcon},
        urlPrefix:"${r.urlPrefix}",
        copyButton: "${r.copyButton}",
        className:${r.className}
    },
    document.querySelector('#iri_widget_container_${t}')
)
<\/script>
        `},argTypes:p,args:u},w=["IriWidget1","withCopyButton","withoutExternalIcon","withUrlPrefix"];export{T as IriWidget1,w as __namedExportsOrder,h as default,b as withCopyButton,_ as withUrlPrefix,f as withoutExternalIcon};
