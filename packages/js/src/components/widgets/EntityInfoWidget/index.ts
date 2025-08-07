import { createEntityInfo } from "./EntityInfoWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createEntityInfo,
};

export { createEntityInfo };
