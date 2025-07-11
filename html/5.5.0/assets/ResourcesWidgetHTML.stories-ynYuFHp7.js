import{u as t,ad as r,p as a,ae as o,af as s,ag as n,ah as p,ai as c,i as g,aj as d}from"./widgetDescriptions-DoY7HRjj.js";import"./index-CleY8y_P.js";import{Z as l}from"./globals-CvFyH82M.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u={...g,...c,...p,...n,...s,...o,...a,...r,...t},m={api:"",useLegacy:!0,initialEntriesPerPage:100,pageSizeOptions:[10,25,50,100],initialSortField:"config.preferredPrefix",initialSortDir:"asc",actions:[],onNavigate:"Console message",parameter:"collection=nfdi4health"},y={args:{api:l,initialEntriesPerPage:100,pageSizeOptions:[10,25,50,100],initialSortField:"config.preferredPrefix",initialSortDir:"asc",onNavigate:"Console message",parameter:"collection=nfdi4health"}};({...y.args});let S=0;function f(){return S++}const $={title:"Ontology Metadata/ResourcesWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:d}}},render:e=>{const i=f();return`
<div id="resources_widget_container_${i}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createResources(
    {
        api:"${e.api}",
        initialEntriesPerPage:${e.initialEntriesPerPage},
        pageSizeOptions:[${e.pageSizeOptions}],
        initialSortField:"${e.initialSortField}",
        initialSortDir:"${e.initialSortDir}",
        onNavigate:${e.onNavigate},
        actions:[${e.actions}],
        parameter:"${e.parameter}",
    },
    document.querySelector('#resources_widget_container_${i}')
)
<\/script>
        `},argTypes:u,args:m},v=["ResourcesWidget1"];export{y as ResourcesWidget1,v as __namedExportsOrder,$ as default};
