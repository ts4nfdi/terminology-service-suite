if (import.meta.env.STORYBOOK_ENABLE_MATOMO === 'true'){
  window.STORYBOOK_MATOMO_OPTIONS = {
    urlBase: import.meta.env.STORYBOOK_MATOMO_URL,
    siteId: import.meta.env.STORYBOOK_MATOMO_SITE_ID,
  };
} else {
  window.STORYBOOK_MATOMO_OPTIONS = { disable: true };
}