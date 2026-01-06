import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const enableMatomo = process.env.STORYBOOK_ENABLE_MATOMO === "true";

if (enableMatomo) {
  addons.setConfig({
    matomo: {
      baseUrl: process.env.STORYBOOK_MATOMO_URL,
      siteId: Number(process.env.STORYBOOK_MATOMO_SITE_ID),
      heartbeat: true,
    },
  });
}
console.log("Matomo enabled: ", enableMatomo);

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "TS4NFDI",
    brandUrl: "https://terminology.services.base4nfdi.de/",
    brandImage:
      "https://raw.githubusercontent.com/ts4nfdi/terminology-service-suite/refs/heads/main/img/TS4NFDI-small-grey.svg",
    brandTarget: "_self",
    colorSecondary: "#45556a",
    colorPrimary: "#45556a",
  }),
});
