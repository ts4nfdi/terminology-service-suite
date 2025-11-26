import { addons } from 'storybook/manager-api'

addons.setConfig({
  matomo: {
    baseUrl: "https://piwik.cebitec.uni-bielefeld.de/",
    siteId: 36,
    heartbeat: true,
  },
});