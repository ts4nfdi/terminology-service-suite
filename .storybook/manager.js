import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'TS4NFDI',
    brandUrl: 'https://terminology.services.base4nfdi.de/',
    brandImage: '../img/TS4NFDI-small-white.svg',
    brandTarget: '_self',
    colorSecondary: '#45556a',
    colorPrimary: '#45556a',
  }),
});