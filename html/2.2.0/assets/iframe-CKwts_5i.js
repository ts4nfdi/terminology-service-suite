const __vite__fileDeps=["./AutocompleteWidgetHTML.stories-DVIhMavo.js","./terminology-service-suite.min-BCx-WkVK.js","./DataContentWidgetHTML.stories-B48xmAST.js","./EntityInfoWidgetHTML.stories-GEM7HeeS.js","./ModelTypeCheck-Cd-4DVPN.js","./EntityRelationsWidgetHTML.stories-DWvh3ROd.js","./JsonApiWidgetHTML.stories-ZrRz1VXl.js","./BreadcrumbWidgetHTML.stories-tUqFVB__.js","./DescriptionWidgetHTML.stories-rMbH5yRj.js","./IriWidgetHTML.stories-CdI5G-Hr.js","./MetadataWidgetHTML.stories-DWa2salv.js","./terminology-service-suite-BVK3H-17.css","./AlternativeNameTabWidgetHTML.stories-D_r63Y5M.js","./CrossRefTabWidgetHTML.stories-RRr444J4.js","./HierarchyWidgetHTML.stories-DyWJ9WmF.js","./HierarchyWidgetDeprecatedHTML.stories-ClvOcR7v.js","./TabWidgetHTML.stories-ZmLZ4HR2.js","./TitleWidgetHTML.stories-CaDihLJu.js","./OntologyInfoWidgetHTML.stories-qKGqNvSp.js","./ResourcesWidgetHTML.stories-Cbh6kS5p.js","./index-nBWS8Qgq.js","./_commonjsHelpers-Cpj98o6Y.js","./isObjectLike-Cc7SBlKr.js","./SearchBarWidgetHTML.stories-TGBTDLu0.js","./SearchResultsListWidgetHTML.stories-QXdGE_mr.js","./entry-preview-D5Ui7gv5.js","./index-DrFu-skq.js","./entry-preview-docs-Bqcptxqf.js","./index-MVJ892rD.js","./preview-TCN6m6T-.js","./index-DXimoRZY.js","./preview-BEBQg86I.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js","./preview-Dvd3WgtJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g="modulepreload",T=function(_,n){return new URL(_,n).href},E={},t=function(n,a,d){let e=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),p=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.all(a.map(o=>{if(o=T(o,d),o in E)return;E[o]=!0;const c=o.endsWith(".css"),O=c?'[rel="stylesheet"]':"";if(!!d)for(let m=r.length-1;m>=0;m--){const u=r[m];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${O}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":g,c||(s.as="script",s.crossOrigin=""),s.href=o,p&&s.setAttribute("nonce",p),document.head.appendChild(s),c)return new Promise((m,u)=>{s.addEventListener("load",m),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>n()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,l=R({page:"preview"});L.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const W={"./src/components/widgets/AutocompleteWidget/AutocompleteWidgetHTML.stories.ts":async()=>t(()=>import("./AutocompleteWidgetHTML.stories-DVIhMavo.js"),__vite__mapDeps([0,1]),import.meta.url),"./src/components/widgets/DataContentWidget/DataContentWidgetHTML.stories.ts":async()=>t(()=>import("./DataContentWidgetHTML.stories-B48xmAST.js"),__vite__mapDeps([2,1]),import.meta.url),"./src/components/widgets/EntityInfoWidget/EntityInfoWidgetHTML.stories.ts":async()=>t(()=>import("./EntityInfoWidgetHTML.stories-GEM7HeeS.js"),__vite__mapDeps([3,1,4]),import.meta.url),"./src/components/widgets/EntityRelationsWidget/EntityRelationsWidgetHTML.stories.ts":async()=>t(()=>import("./EntityRelationsWidgetHTML.stories-DWvh3ROd.js"),__vite__mapDeps([5,1,4]),import.meta.url),"./src/components/widgets/JsonApiWidget/JsonApiWidgetHTML.stories.ts":async()=>t(()=>import("./JsonApiWidgetHTML.stories-ZrRz1VXl.js"),__vite__mapDeps([6,1]),import.meta.url),"./src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidgetHTML.stories.ts":async()=>t(()=>import("./BreadcrumbWidgetHTML.stories-tUqFVB__.js"),__vite__mapDeps([7,1,4]),import.meta.url),"./src/components/widgets/MetadataWidget/DescriptionWidget/DescriptionWidgetHTML.stories.ts":async()=>t(()=>import("./DescriptionWidgetHTML.stories-rMbH5yRj.js"),__vite__mapDeps([8,1,4]),import.meta.url),"./src/components/widgets/MetadataWidget/IriWidget/IriWidgetHTML.stories.ts":async()=>t(()=>import("./IriWidgetHTML.stories-CdI5G-Hr.js"),__vite__mapDeps([9,1]),import.meta.url),"./src/components/widgets/MetadataWidget/MetadataWidgetHTML.stories.ts":async()=>t(()=>import("./MetadataWidgetHTML.stories-DWa2salv.js"),__vite__mapDeps([10,1,4,11]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidgetHTML.stories.ts":async()=>t(()=>import("./AlternativeNameTabWidgetHTML.stories-D_r63Y5M.js"),__vite__mapDeps([12,1,4]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/CrossRefWidget/CrossRefTabWidgetHTML.stories.ts":async()=>t(()=>import("./CrossRefTabWidgetHTML.stories-RRr444J4.js"),__vite__mapDeps([13,1,4]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidgetHTML.stories.ts":async()=>t(()=>import("./HierarchyWidgetHTML.stories-DyWJ9WmF.js"),__vite__mapDeps([14,1,4,11]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/HierarchyWidgetDeprecated/HierarchyWidgetDeprecatedHTML.stories.ts":async()=>t(()=>import("./HierarchyWidgetDeprecatedHTML.stories-ClvOcR7v.js"),__vite__mapDeps([15,1]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/TabWidgetHTML.stories.ts":async()=>t(()=>import("./TabWidgetHTML.stories-ZmLZ4HR2.js"),__vite__mapDeps([16,1,4,11]),import.meta.url),"./src/components/widgets/MetadataWidget/TitleWidget/TitleWidgetHTML.stories.ts":async()=>t(()=>import("./TitleWidgetHTML.stories-CaDihLJu.js"),__vite__mapDeps([17,1,4]),import.meta.url),"./src/components/widgets/OntologyInfoWidget/OntologyInfoWidgetHTML.stories.ts":async()=>t(()=>import("./OntologyInfoWidgetHTML.stories-qKGqNvSp.js"),__vite__mapDeps([18,1]),import.meta.url),"./src/components/widgets/ResourcesWidget/ResourcesWidgetHTML.stories.ts":async()=>t(()=>import("./ResourcesWidgetHTML.stories-Cbh6kS5p.js"),__vite__mapDeps([19,1,20,21,22]),import.meta.url),"./src/components/widgets/SearchBarWidget/SearchBarWidgetHTML.stories.ts":async()=>t(()=>import("./SearchBarWidgetHTML.stories-TGBTDLu0.js"),__vite__mapDeps([23,1]),import.meta.url),"./src/components/widgets/SearchResultsListWidget/SearchResultsListWidgetHTML.stories.ts":async()=>t(()=>import("./SearchResultsListWidgetHTML.stories-QXdGE_mr.js"),__vite__mapDeps([24,1]),import.meta.url)};async function w(_){return W[_]()}const{composeConfigs:P,PreviewWeb:f,ClientApi:y}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([t(()=>import("./entry-preview-D5Ui7gv5.js"),__vite__mapDeps([25,26]),import.meta.url),t(()=>import("./entry-preview-docs-Bqcptxqf.js"),__vite__mapDeps([27,28,22,21]),import.meta.url),t(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([29,30]),import.meta.url),t(()=>import("./preview-BEBQg86I.js"),__vite__mapDeps([31,26]),import.meta.url),t(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([32,26]),import.meta.url),t(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([33,26]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),t(()=>import("./preview-Dvd3WgtJ.js"),__vite__mapDeps([34,21]),import.meta.url),t(()=>import("./preview-MUH6TVe-.js"),[],import.meta.url),t(()=>import("./preview-49u6_pt2.js"),[],import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new f;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new y({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:I});export{t as _};