import { EntityProvider } from '@ts4nfdi/terminology-service-suite/src';
import { EntityProviderWidgetFullProps } from '@ts4nfdi/terminology-service-suite/src/components/widgets/EntityProviderWidget/EntityProviderWidget';
import { getEntityProvider, GetEntityProviderParams, getEntityProviders } from '@ts4nfdi/terminology-service-suite/src/components/widgets/EntityProviderWidget/getEntityProvider';
declare function createEntityProvider(props: EntityProviderWidgetFullProps, container: Element): void;
export { createEntityProvider, getEntityProvider, getEntityProviders };
export type { EntityProvider, GetEntityProviderParams };
