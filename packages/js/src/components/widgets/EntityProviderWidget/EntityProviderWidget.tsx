import { EntityProvider } from "@ts4nfdi/terminology-service-suite/src";
import {
  EntityProviderWidgetFullProps,
  WrappedEntityProviderWidget,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityProviderWidget/EntityProviderWidget";
import {
  getEntityProvider,
  GetEntityProviderParams,
  getEntityProviders,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityProviderWidget/getEntityProvider";
import { createRoot, Root } from "react-dom/client";

const roots = new WeakMap<Element, Root>();
function createEntityProvider(
  props: EntityProviderWidgetFullProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedEntityProviderWidget {...props} />);
}

export { createEntityProvider, getEntityProvider, getEntityProviders };
export type { EntityProvider, GetEntityProviderParams };
