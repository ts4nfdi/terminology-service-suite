import { getEntityProvider, getEntityProviders } from "./EntityProviderWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  getEntityProvider,
  getEntityProviders,
};

export type {
  EntityProvider,
  GetEntityProviderParams,
} from "./EntityProviderWidget";
export { getEntityProvider, getEntityProviders };
