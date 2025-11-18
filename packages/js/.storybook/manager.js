if (process.env.VITE_STORYBOOK_ENABLE_MATOMO === 'true'){
  window.STORYBOOK_MATOMO_OPTIONS = {
    urlBase: process.env.VITE_STORYBOOK_MATOMO_URL,
    siteId: process.env.VITE_STORYBOOK_MATOMO_SITE_ID,
  };
} else {
  window.STORYBOOK_MATOMO_OPTIONS = { disable: true };
}