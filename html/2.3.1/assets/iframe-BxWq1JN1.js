const __vite__fileDeps=["./AutocompleteWidgetHTML.stories-0eBJ26W8.js","./terminology-service-suite.min-Eh64CQcQ.js","./DataContentWidgetHTML.stories-DBKhhf2F.js","./EntityInfoWidgetHTML.stories-DvgthmAS.js","./ModelTypeCheck-Cd-4DVPN.js","./EntityRelationsWidgetHTML.stories-B1ffx4ZY.js","./JsonApiWidgetHTML.stories-CleGtvX0.js","./BreadcrumbWidgetHTML.stories-BGEtAWud.js","./DescriptionWidgetHTML.stories-t1zYZryk.js","./IriWidgetHTML.stories-DEI67N3L.js","./MetadataWidgetHTML.stories-DQOFIMX1.js","./terminology-service-suite-43DZ8z0Z.css","./AlternativeNameTabWidgetHTML.stories-BhoZYKXI.js","./CrossRefTabWidgetHTML.stories-DvDpesab.js","./HierarchyWidgetOLSHTML.stories-CF0ZCCDH.js","./HierarchyWidgetDeprecatedHTML.stories-ph1dlHQq.js","./HierarchyWidgetsHTML.stories-D-jtVwRX.js","./index-L2N5pzd4.js","./_commonjsHelpers-Cpj98o6Y.js","./HierarchyWidgetsHTML-B8V6ccqG.css","./TabWidgetHTML.stories-C9KCMuAk.js","./TitleWidgetHTML.stories-CxYmUEDV.js","./OntologyInfoWidgetHTML.stories-BapPoeyI.js","./ResourcesWidgetHTML.stories-w8wPsHLc.js","./emotion-use-insertion-effect-with-fallbacks.browser.esm-DnYWIHW4.js","./isObjectLike-Cc7SBlKr.js","./SearchBarWidgetHTML.stories-C62bjS4a.js","./SearchResultsListWidgetHTML.stories-B0bZODhE.js","./entry-preview-D5Ui7gv5.js","./index-DrFu-skq.js","./entry-preview-docs-Bqcptxqf.js","./index-MVJ892rD.js","./preview-TCN6m6T-.js","./index-DXimoRZY.js","./preview-BEBQg86I.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js","./preview-Dvd3WgtJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const O="modulepreload",T=function(_,n){return new URL(_,n).href},E={},t=function(n,a,d){let e=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),p=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.all(a.map(o=>{if(o=T(o,d),o in E)return;E[o]=!0;const c=o.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(!!d)for(let m=r.length-1;m>=0;m--){const u=r[m];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${g}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":O,c||(s.as="script",s.crossOrigin=""),s.href=o,p&&s.setAttribute("nonce",p),document.head.appendChild(s),c)return new Promise((m,u)=>{s.addEventListener("load",m),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>n()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,l=L({page:"preview"});R.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const W={"./src/components/widgets/AutocompleteWidget/AutocompleteWidgetHTML.stories.ts":async()=>t(()=>import("./AutocompleteWidgetHTML.stories-0eBJ26W8.js"),__vite__mapDeps([0,1]),import.meta.url),"./src/components/widgets/DataContentWidget/DataContentWidgetHTML.stories.ts":async()=>t(()=>import("./DataContentWidgetHTML.stories-DBKhhf2F.js"),__vite__mapDeps([2,1]),import.meta.url),"./src/components/widgets/EntityInfoWidget/EntityInfoWidgetHTML.stories.ts":async()=>t(()=>import("./EntityInfoWidgetHTML.stories-DvgthmAS.js"),__vite__mapDeps([3,1,4]),import.meta.url),"./src/components/widgets/EntityRelationsWidget/EntityRelationsWidgetHTML.stories.ts":async()=>t(()=>import("./EntityRelationsWidgetHTML.stories-B1ffx4ZY.js"),__vite__mapDeps([5,1,4]),import.meta.url),"./src/components/widgets/JsonApiWidget/JsonApiWidgetHTML.stories.ts":async()=>t(()=>import("./JsonApiWidgetHTML.stories-CleGtvX0.js"),__vite__mapDeps([6,1]),import.meta.url),"./src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidgetHTML.stories.ts":async()=>t(()=>import("./BreadcrumbWidgetHTML.stories-BGEtAWud.js"),__vite__mapDeps([7,1,4]),import.meta.url),"./src/components/widgets/MetadataWidget/DescriptionWidget/DescriptionWidgetHTML.stories.ts":async()=>t(()=>import("./DescriptionWidgetHTML.stories-t1zYZryk.js"),__vite__mapDeps([8,1,4]),import.meta.url),"./src/components/widgets/MetadataWidget/IriWidget/IriWidgetHTML.stories.ts":async()=>t(()=>import("./IriWidgetHTML.stories-DEI67N3L.js"),__vite__mapDeps([9,1]),import.meta.url),"./src/components/widgets/MetadataWidget/MetadataWidgetHTML.stories.ts":async()=>t(()=>import("./MetadataWidgetHTML.stories-DQOFIMX1.js"),__vite__mapDeps([10,1,4,11]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidgetHTML.stories.ts":async()=>t(()=>import("./AlternativeNameTabWidgetHTML.stories-BhoZYKXI.js"),__vite__mapDeps([12,1,4]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/CrossRefWidget/CrossRefTabWidgetHTML.stories.ts":async()=>t(()=>import("./CrossRefTabWidgetHTML.stories-DvDpesab.js"),__vite__mapDeps([13,1,4]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidgetOLSHTML.stories.ts":async()=>t(()=>import("./HierarchyWidgetOLSHTML.stories-CF0ZCCDH.js"),__vite__mapDeps([14,1,4,11]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/HierarchyWidgetDeprecated/HierarchyWidgetDeprecatedHTML.stories.ts":async()=>t(()=>import("./HierarchyWidgetDeprecatedHTML.stories-ph1dlHQq.js"),__vite__mapDeps([15,1]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/HierarchyWidgetSemLookP/HierarchyWidgetsHTML.stories.ts":async()=>t(()=>import("./HierarchyWidgetsHTML.stories-D-jtVwRX.js"),__vite__mapDeps([16,1,17,18,19]),import.meta.url),"./src/components/widgets/MetadataWidget/TabWidget/TabWidgetHTML.stories.ts":async()=>t(()=>import("./TabWidgetHTML.stories-C9KCMuAk.js"),__vite__mapDeps([20,1,4,11]),import.meta.url),"./src/components/widgets/MetadataWidget/TitleWidget/TitleWidgetHTML.stories.ts":async()=>t(()=>import("./TitleWidgetHTML.stories-CxYmUEDV.js"),__vite__mapDeps([21,1,4]),import.meta.url),"./src/components/widgets/OntologyInfoWidget/OntologyInfoWidgetHTML.stories.ts":async()=>t(()=>import("./OntologyInfoWidgetHTML.stories-BapPoeyI.js"),__vite__mapDeps([22,1]),import.meta.url),"./src/components/widgets/ResourcesWidget/ResourcesWidgetHTML.stories.ts":async()=>t(()=>import("./ResourcesWidgetHTML.stories-w8wPsHLc.js"),__vite__mapDeps([23,1,17,18,24,25]),import.meta.url),"./src/components/widgets/SearchBarWidget/SearchBarWidgetHTML.stories.ts":async()=>t(()=>import("./SearchBarWidgetHTML.stories-C62bjS4a.js"),__vite__mapDeps([26,1]),import.meta.url),"./src/components/widgets/SearchResultsListWidget/SearchResultsListWidgetHTML.stories.ts":async()=>t(()=>import("./SearchResultsListWidgetHTML.stories-B0bZODhE.js"),__vite__mapDeps([27,1]),import.meta.url)};async function w(_){return W[_]()}const{composeConfigs:P,PreviewWeb:y,ClientApi:f}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([t(()=>import("./entry-preview-D5Ui7gv5.js"),__vite__mapDeps([28,29]),import.meta.url),t(()=>import("./entry-preview-docs-Bqcptxqf.js"),__vite__mapDeps([30,31,25,18]),import.meta.url),t(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([32,33]),import.meta.url),t(()=>import("./preview-BEBQg86I.js"),__vite__mapDeps([34,29]),import.meta.url),t(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([35,29]),import.meta.url),t(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([36,29]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),t(()=>import("./preview-Dvd3WgtJ.js"),__vite__mapDeps([37,18]),import.meta.url),t(()=>import("./preview-BmiyRHTb.js"),[],import.meta.url),t(()=>import("./preview-49u6_pt2.js"),[],import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new f({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:I});export{t as _};