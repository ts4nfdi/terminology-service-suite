import { addons } from 'storybook/manager-api'

const enableMatomo = import.meta.env.STORYBOOK_ENABLE_MATOMO === "true"

if (enableMatomo) {
  addons.setConfig({
    matomo: {
      baseUrl: import.meta.env.STORYBOOK_MATOMO_URL,
      siteId: Number(import.meta.env.STORYBOOK_MATOMO_SITE_ID),
      heartbeat: true,
    },
  });
}

