import"./semlookp_widgets.min-CNyORsB-.js";const i={color:{table:{type:{summary:"EuiLinkColor | string"}},control:{type:"radio"},options:["primary","subdued","success","accent","danger","warning","ghost","#00FFFF","rgb(255,0,255)"]},iriText:{},iri:{description:"Object IRI that you want to link."},parameter:{}},e={parameter:"collection=nfdi4health",color:"",iriText:"",iri:""},c={args:{iri:"http://purl.obolibrary.org/obo/NCIT_C2985"}};let o=0;function n(){return o++}const s={title:"IriWidget",tags:["autodocs"],parameters:{layout:"centered"},render:r=>{const t=n();return`
<div id="iri_widget_container_${t}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createIri(
    {
        iri:"${r.iri}",
        iriText:"${r.iriText}",
        color:"${r.color}",
        parameter:"${r.parameter}",
    },
    document.querySelector('#iri_widget_container_${t}')
)
<\/script>
        `},argTypes:i,args:e},d=["IriWidget1"];export{c as IriWidget1,d as __namedExportsOrder,s as default};
