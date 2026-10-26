import {
  createEntityProvider,
  getEntityProvider,
  getEntityProviders,
} from "./EntityProviderWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createEntityProvider,
  getEntityProvider,
  getEntityProviders,
};

export type {
  EntityProvider,
  GetEntityProviderParams,
} from "./EntityProviderWidget";
export { createEntityProvider, getEntityProvider, getEntityProviders };
