try{
(()=>{var O={};O.env.STORYBOOK_ENABLE_MATOMO==="true"?window.STORYBOOK_MATOMO_OPTIONS={urlBase:O.env.STORYBOOK_MATOMO_URL,siteId:O.env.STORYBOOK_MATOMO_SITE_ID}:window.STORYBOOK_MATOMO_OPTIONS={disable:!0};})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
