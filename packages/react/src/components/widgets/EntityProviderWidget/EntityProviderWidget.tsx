"use client";

import { EuiProvider } from "@elastic/eui";
import { EntityProviderWidgetProps } from "../../../app/types";
import { EntityProviderPresentation } from "./EntityProviderPresentation";
import { useEntityProvider } from "./useEntityProvider";

export type EntityProviderWidgetFullProps = EntityProviderWidgetProps & {
  /** Shows the collapsible raw `provider` block per entry. Default: true. */
  showRaw?: boolean;
  /** Custom CSS class replacing the default wrapper class. */
  className?: string;
};

/**
 * Fetches the provider information of an entity via {@link useEntityProvider}
 * and displays it with {@link EntityProviderPresentation}.
 *
 * While the widget is disabled (or no IRI is given) nothing is rendered, since
 * "not requested yet" is different from "requested, but nothing found".
 */
function EntityProviderWidget(
  props: EntityProviderWidgetFullProps,
): React.JSX.Element {
  const { showRaw, className, ...hookProps } = props;
  const { providers, provider, isLoading, isSuccess, isError, error } =
    useEntityProvider(hookProps);

  const state = isLoading
    ? "loading"
    : isError
      ? "error"
      : isSuccess
        ? "success"
        : "idle";

  return (
    <div data-testid="entity-provider-widget" data-state={state}>
      {state !== "idle" && (
        <EntityProviderPresentation
          providers={providers}
          provider={provider}
          isLoading={isLoading}
          isError={isError}
          error={error}
          showRaw={showRaw}
          className={className}
        />
      )}
    </div>
  );
}

function WrappedEntityProviderWidget(
  props: EntityProviderWidgetFullProps,
): React.JSX.Element {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <EntityProviderWidget {...props} />
    </EuiProvider>
  );
}

export { EntityProviderWidget, WrappedEntityProviderWidget };
