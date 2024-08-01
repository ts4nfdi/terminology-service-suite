import"./terminology-service-suite.min-CbUPzcr4.js";const r={color:{table:{type:{summary:"EuiLinkColor | string"}},control:{type:"radio"},options:["primary","subdued","success","accent","danger","warning","ghost","#00FFFF","rgb(255,0,255)"]},iriText:{},iri:{description:"Object IRI that you want to link."},externalIcon:{options:[!0,!1],defaultValue:!0,description:"Whether the link should have an external icon in the end or not. Default is true when not given."},urlPrefix:{type:{summary:"string"},description:"Prefix to be added to the IRI before linking. Iri gets encoded before adding the prefix."},copyButton:{options:[!0,!1],defaultValue:!1,description:"Whether to show a copy button next to the link or not. Default is false when not given."}},o={color:"",iriText:"",iri:"",urlPrefix:"",copyButton:!1,externalIcon:!0},l={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985"}},a={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1}},c={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:!0}},u={args:{iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="}};let i=0;function n(){return i++}const d={title:"IriWidget",tags:["autodocs"],parameters:{layout:"centered"},render:t=>{const e=n();return`
<div id="iri_widget_container_${e}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createIri(
    {
        iri:"${t.iri}",
        iriText:"${t.iriText}",
        color:"${t.color}",
        externalIcon: ${t.externalIcon},
        urlPrefix:"${t.urlPrefix}",
        copyButton: ${t.copyButton}
    },
    document.querySelector('#iri_widget_container_${e}')
)
<\/script>
        `},argTypes:r,args:o},p=["IriWidget1","withCopyButton","withoutExternalIcon","withUrlPrefix"];export{l as IriWidget1,p as __namedExportsOrder,d as default,c as withCopyButton,u as withUrlPrefix,a as withoutExternalIcon};
