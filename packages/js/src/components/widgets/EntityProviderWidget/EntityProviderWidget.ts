import { EntityProvider } from "@ts4nfdi/terminology-service-suite/src";
import {
  getEntityProvider,
  GetEntityProviderParams,
  getEntityProviders,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityProviderWidget/getEntityProvider";

// Unlike the other widgets this one renders nothing, so there is no root to
// create and no container to render into: the plain, promise-returning
// functions of the React package are the whole JavaScript API. The consuming
// application decides what to do with the provider information.

export { getEntityProvider, getEntityProviders };
export type { EntityProvider, GetEntityProviderParams };
