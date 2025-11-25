if ('true' === 'true'){
  window.STORYBOOK_MATOMO_OPTIONS = {
    urlBase: "https://piwik.cebitec.uni-bielefeld.de/",
    siteId: 36,
  };
} else {
  window.STORYBOOK_MATOMO_OPTIONS = { disable: true };
}

console.log("Matomo enabled: ", import.meta.env.STORYBOOK_ENABLE_MATOMO)