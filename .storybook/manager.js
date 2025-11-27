import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const enableMatomo = process.env.STORYBOOK_ENABLE_MATOMO === "true"

if (enableMatomo) {
  addons.setConfig({
    matomo: {
      baseUrl: process.env.STORYBOOK_MATOMO_URL,
      siteId: Number(process.env.STORYBOOK_MATOMO_SITE_ID),
      heartbeat: true,
    },
  });
}

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'TS4NFDI',
    brandUrl: 'https://terminology.services.base4nfdi.de/',
    brandImage: '../img/TS4NFDI-small-grey.svg',
    brandTarget: '_self',
    colorSecondary: '#45556a',
    colorPrimary: '#45556a',
  }),
});