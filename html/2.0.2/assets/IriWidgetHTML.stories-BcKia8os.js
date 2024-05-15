import"./semlookp_widgets.min-KiVJZQiA.js";const i={color:{table:{type:{summary:"EuiLinkColor | string"}},control:{type:"radio"},options:["primary","subdued","success","accent","danger","warning","ghost","#00FFFF","rgb(255,0,255)"]},iriText:{},iri:{description:"Object IRI that you want to link."}},e={color:"",iriText:"",iri:""},s={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985"}};let o=0;function n(){return o++}const d={title:"IriWidget",tags:["autodocs"],parameters:{layout:"centered"},render:r=>{const t=n();return`
<div id="iri_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createIri(
    {
        iri:"${r.iri}",
        iriText:"${r.iriText}",
        color:"${r.color}"
    },
    document.querySelector('#iri_widget_container_${t}')
)
<\/script>
        `},argTypes:i,args:e},a=["IriWidget1"];export{s as IriWidget1,a as __namedExportsOrder,d as default};
