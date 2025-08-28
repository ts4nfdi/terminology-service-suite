import { createResources } from "./ResourcesWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createResources,
};

export { createResources };
