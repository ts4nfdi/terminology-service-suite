import { addons } from 'storybook/manager-api'

const enableMatomo = process.env.STORYBOOK_ENABLE_MATOMO === "true"

if (enableMatomo) {
  addons.setConfig({
    matomo: {
      baseUrl: process.env.STORYBOOK_MATOMO_URL,
      siteId: process.env.STORYBOOK_MATOMO_SITE_ID,
      heartbeat: true,
    },
  });
}

