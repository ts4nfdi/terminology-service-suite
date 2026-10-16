"use client";

import {
  EuiAccordion,
  EuiBadge,
  EuiButtonIcon,
  EuiCallOut,
  EuiCode,
  EuiCodeBlock,
  EuiCopy,
  EuiDescriptionList,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
  EuiPanel,
  EuiProvider,
  EuiSkeletonText,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { EntityProvider } from "../../../app/types";

export interface EntityProviderPresentationProps {
  /** All providers found for the entity (one per ontology it occurs in). */
  providers: EntityProvider[];
  /** The preferred provider (defining ontology), highlighted in the list. */
  provider?: EntityProvider;
  isLoading?: boolean;
  isError?: boolean;
  error?: Error;
  /** Shows the collapsible raw `provider` block per entry. Default: true. */
  showRaw?: boolean;
  className?: string;
}

function isUrl(value: unknown): value is string {
  return typeof value === "string" && /^https?:\/\//i.test(value);
}

function ProviderCard({
  entry,
  isPreferred,
  showPreferredBadge,
  showRaw,
  index,
}: {
  entry: EntityProvider;
  isPreferred: boolean;
  showPreferredBadge: boolean;
  showRaw: boolean;
  index: number;
}) {
  const listItems = [
    {
      title: "Type",
      description: entry.type ? (
        <EuiBadge color="hollow">{entry.type}</EuiBadge>
      ) : (
        <EuiText size="s" color="subdued">
          Not specified
        </EuiText>
      ),
    },
    {
      title: "API",
      description: entry.api ? (
        <EuiFlexGroup gutterSize="xs" alignItems="center" responsive={false}>
          <EuiFlexItem grow={false} style={{ minWidth: 0 }}>
            {isUrl(entry.api) ? (
              <EuiLink
                href={entry.api}
                target="_blank"
                external
                style={{ wordBreak: "break-all" }}
              >
                {entry.api}
              </EuiLink>
            ) : (
              <EuiCode transparentBackground>{entry.api}</EuiCode>
            )}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiCopy textToCopy={entry.api}>
              {(copy) => (
                <EuiButtonIcon
                  iconType="copyClipboard"
                  size="xs"
                  color="text"
                  onClick={copy}
                  aria-label="Copy API URL"
                />
              )}
            </EuiCopy>
          </EuiFlexItem>
        </EuiFlexGroup>
      ) : (
        <EuiText size="s" color="subdued">
          Not specified
        </EuiText>
      ),
    },
    ...(entry.ontologyId
      ? [
          {
            title: "Ontology",
            description: (
              <EuiBadge color="primary">
                {entry.ontologyId.toUpperCase()}
              </EuiBadge>
            ),
          },
        ]
      : []),
  ];

  return (
    <EuiPanel
      hasBorder
      hasShadow={false}
      paddingSize="m"
      data-testid="entity-provider-card"
    >
      <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false} wrap>
        <EuiFlexItem grow={false}>
          <EuiIcon type="database" size="m" aria-hidden="true" />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiTitle size="xs">
            <h4>{entry.name || "Unnamed provider"}</h4>
          </EuiTitle>
        </EuiFlexItem>
        {/* Activate if feature is available */}
        {/*{showPreferredBadge && isPreferred && (*/}
        {/*  <EuiFlexItem grow={false}>*/}
        {/*    <EuiBadge color="success" iconType="check">*/}
        {/*      Defining ontology*/}
        {/*    </EuiBadge>*/}
        {/*  </EuiFlexItem>*/}
        {/*)}*/}
      </EuiFlexGroup>

      <EuiSpacer size="s" />

      <EuiDescriptionList
        type="column"
        compressed
        listItems={listItems}
        columnWidths={[1, 3]}
      />

      {showRaw && entry.raw && (
        <>
          <EuiSpacer size="s" />
          <EuiAccordion
            id={`entity-provider-raw-${index}`}
            buttonContent="Raw provider data"
            buttonProps={{ style: { fontSize: "0.85rem" } }}
            paddingSize="s"
          >
            <EuiCodeBlock
              language="json"
              fontSize="s"
              paddingSize="s"
              isCopyable
              overflowHeight={240}
            >
              {JSON.stringify(entry.raw, null, 2)}
            </EuiCodeBlock>
          </EuiAccordion>
        </>
      )}
    </EuiPanel>
  );
}

function EntityProviderPresentation(
  props: EntityProviderPresentationProps,
): React.JSX.Element {
  const {
    providers,
    provider,
    isLoading = false,
    isError = false,
    error,
    showRaw = true,
    className,
  } = props;

  let content: React.JSX.Element;

  if (isLoading) {
    content = (
      <EuiPanel hasBorder hasShadow={false} paddingSize="m">
        <EuiSkeletonText lines={3} isLoading aria-label="Loading provider" />
      </EuiPanel>
    );
  } else if (isError) {
    content = (
      <EuiCallOut
        title="Provider information could not be loaded"
        color="danger"
        iconType="warning"
        size="s"
      >
        {error?.message || "An unknown error occurred."}
      </EuiCallOut>
    );
  } else if (!providers || providers.length === 0) {
    content = (
      <EuiCallOut
        title="No provider information available"
        color="primary"
        iconType="iInCircle"
        size="s"
      >
        The entity could not be found, or the API does not report providers.
        Provider information is only available through the TS4NFDI API Gateway.
      </EuiCallOut>
    );
  } else {
    content = (
      <EuiFlexGroup direction="column" gutterSize="s">
        {providers.length > 1 && (
          <EuiFlexItem grow={false}>
            <EuiText size="s" color="subdued">
              This entity is served by {providers.length} providers.
            </EuiText>
          </EuiFlexItem>
        )}
        {providers.map((entry, index) => (
          <EuiFlexItem key={`${entry.ontologyId}-${entry.name}-${index}`}>
            <ProviderCard
              entry={entry}
              index={index}
              isPreferred={entry === provider}
              showPreferredBadge={providers.length > 1}
              showRaw={showRaw}
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>
    );
  }

  return (
    <div
      className={className || "ts4nfdi-entity-provider-style"}
      data-testid="entity-provider-presentation"
      aria-live="polite"
    >
      {content}
    </div>
  );
}

function WrappedEntityProviderPresentation(
  props: EntityProviderPresentationProps,
): React.JSX.Element {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <EntityProviderPresentation {...props} />
    </EuiProvider>
  );
}

export { EntityProviderPresentation, WrappedEntityProviderPresentation };
