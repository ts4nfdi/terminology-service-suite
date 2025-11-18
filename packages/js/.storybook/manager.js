if (process.env.STORYBOOK_ENABLE_MATOMO === 'true'){
  window.STORYBOOK_MATOMO_OPTIONS = {
    urlBase: process.env.STORYBOOK_MATOMO_URL,
    siteId: process.env.STORYBOOK_MATOMO_SITE_ID,
  };
} else {
  window.STORYBOOK_MATOMO_OPTIONS = { disable: true };
}