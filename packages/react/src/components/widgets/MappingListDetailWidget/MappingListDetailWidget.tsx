import {
  EuiBasicTableColumn,
  EuiButton,
  EuiButtonIcon,
  EuiCheckbox,
  EuiInMemoryTable,
  EuiPanel,
  EuiPopover,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { css } from "@emotion/react";
import { memo, useEffect, useMemo, useState, type ReactNode } from "react";
import { useQuery } from "react-query";
import { ColiConcApi } from "../../../api/coli-conc/ColiConcAPI";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { MappingListDetailWidgetProps } from "../../../app";
import { GATEWAY_API_OLS_ENDPOINT } from "../../../app/globals";

type MappingRow = {
  to: string;
  toUri: string;
  creator: string;
  type: string;
  created: string;
  createdLabel: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
});

const formatMappingDate = (created: string) => {
  if (created === "—") return "—";

  const date = new Date(created);

  if (isNaN(date.getTime())) return "—";

  return `${dateFormatter.format(date)}, ${timeFormatter.format(date)}`;
};

/**
 * Dictionary mapping each type to its inner SVG elements.
 */
const predicateIcons: Record<string, ReactNode> = {
  exactMatch: (
    <>
      <line x1="5" y1="9" x2="19" y2="9" />
      <line x1="5" y1="15" x2="19" y2="15" />
    </>
  ),
  closeMatch: (
    <>
      <path d="M 4 9 Q 8 5 12 9 T 20 9" />
      <path d="M 4 15 Q 8 11 12 15 T 20 15" />
    </>
  ),
  broadMatch: <polyline points="8 6 16 12 8 18" />,
  narrowMatch: <polyline points="16 6 8 12 16 18" />,
  relatedMatch: (
    <>
      <line x1="3" y1="12" x2="21" y2="12" />
      <polyline points="7 8 3 12 7 16" />
      <polyline points="17 8 21 12 17 16" />
    </>
  ),
  mappingRelation: <path d="M 4 12 Q 8 8 12 12 T 20 12" />,
};

const PredicateIcon = memo(({ type }: { type: string }) => {
  const iconContent = predicateIcons[type];

  /**
   * Return nothing if the type doesn't exist in our dictionary
   */
  if (!iconContent) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconContent}
    </svg>
  );
});

function MappingListDetailWidget(props: MappingListDetailWidgetProps) {
  const { api, iri } = props;

  const coliConcApi = useMemo(() => new ColiConcApi(api), [api]);
  const olsApi = useMemo(() => new OlsEntityApi(GATEWAY_API_OLS_ENDPOINT), []);

  const { data, isLoading, isError, error } = useQuery(
    ["mappings", iri],
    () => {
      return coliConcApi.getMappingsByFrom(iri);
    },
  );

  /**
   * Maps each URI to its readable label text.
   * Example:
   * {
   *   "http://uri.gbv.de/terminology/bk/86.69": "Agricultural law. Water law. Hunting law"
   * }
   */
  const [labels, setLabels] = useState<Record<string, string>>({});

  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false);

  /**
   * includes types: exactMatch, closeMatch, broadMatch, narrowMatch, relatedMatch and mappingRelation
   */
  const [selectedTypeFilters, setSelectedTypeFilters] = useState<string[]>([]);

  const toggleTypeFilter = (type: string) => {
    if (selectedTypeFilters.includes(type)) {
      setSelectedTypeFilters(
        selectedTypeFilters.filter((selectedType) => {
          return selectedType !== type;
        }),
      );
    } else {
      setSelectedTypeFilters((prevState) => [...prevState, type]);
    }
  };

  /**
   * Prevent clicks on the filter icon from triggering the column sort.
   */
  function stopHeaderSort(event: React.MouseEvent | React.KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Renders the filter icon button for the Type column.
   * Clicking it stops the column sort event and toggles the type filter popover.
   */
  const targetFilterTypeColumnButton = (
    <span
      role="button"
      tabIndex={0}
      aria-label="Filter Type Column"
      onClick={(event) => {
        stopHeaderSort(event);
        setIsTypeFilterOpen((isOpen) => !isOpen);
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        border: "1px solid #98a2b3",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M 4 6 H 20 L 14 13 V 19 L 10 17 V 13 Z" />
      </svg>
    </span>
  );

  /**
   * Shows the type filter options inside a popover when the user clicks
   * the filter button next to the Type column.
   */
  const typeFilterCheckboxList = (
    <EuiPopover
      button={targetFilterTypeColumnButton}
      isOpen={isTypeFilterOpen}
      closePopover={() => setIsTypeFilterOpen(false)}
      anchorPosition="downLeft"
      panelPaddingSize="s"
    >
      <div style={{ width: "220px" }}>
        <EuiCheckbox
          id="exactMatch"
          label="exactMatch"
          checked={selectedTypeFilters.includes("exactMatch")}
          onChange={() => toggleTypeFilter("exactMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="closeMatch"
          label="closeMatch"
          checked={selectedTypeFilters.includes("closeMatch")}
          onChange={() => toggleTypeFilter("closeMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="broadMatch"
          label="broadMatch"
          checked={selectedTypeFilters.includes("broadMatch")}
          onChange={() => toggleTypeFilter("broadMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="narrowMatch"
          label="narrowMatch"
          checked={selectedTypeFilters.includes("narrowMatch")}
          onChange={() => toggleTypeFilter("narrowMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="relatedMatch"
          label="relatedMatch"
          checked={selectedTypeFilters.includes("relatedMatch")}
          onChange={() => toggleTypeFilter("relatedMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="mappingRelation"
          label="mappingRelation"
          checked={selectedTypeFilters.includes("mappingRelation")}
          onChange={() => toggleTypeFilter("mappingRelation")}
        />

        <EuiSpacer size="m" />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <EuiButton size="s" onClick={() => setIsTypeFilterOpen(false)}>
            Apply
          </EuiButton>
        </div>
      </div>
    </EuiPopover>
  );

  const typeColumnHeader = (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      {typeFilterCheckboxList}
      <span>Type</span>
    </span>
  );

  const columns: Array<EuiBasicTableColumn<MappingRow>> = [
    {
      field: "type",
      name: <strong style={{ fontSize: "14px" }}>{typeColumnHeader}</strong>,
      truncateText: true,
      sortable: true,

      /**
       * Render both the custom SVG icon and the text side-by-side
       */
      render: (type: string) => (
        <span
          style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
        >
          <PredicateIcon type={type} />
          <span>{type}</span>
        </span>
      ),
    },
    {
      field: "to",
      name: <strong style={{ fontSize: "14px" }}>Target</strong>,
      truncateText: true,
      sortable: true,
      render: (to: string, item: MappingRow) => (
        <span title={item.toUri}>{to}</span>
      ),
    },
    {
      field: "creator",
      name: <strong style={{ fontSize: "14px" }}>Creator</strong>,
      truncateText: true,
      sortable: true,
    },
    {
      field: "created",
      name: <strong style={{ fontSize: "14px" }}>Created</strong>,
      truncateText: true,
      sortable: true,
      render: (_created: string, item: MappingRow) => item.createdLabel,
    },
  ];

  useEffect(() => {
    if (!data) return;

    data.forEach(async (item: any) => {
      const toUri = item.to?.memberSet?.[0]?.uri;
      const toScheme = item.toScheme?.notation?.[0]?.toLowerCase();

      if (!toScheme || !toUri || labels[toUri]) return;

      try {
        const entityResponse = await olsApi.getEntity(
          undefined,
          undefined,
          { ontologyId: toScheme, termIri: toUri },
          undefined,
          false,
        );

        const label = entityResponse?.elements?.[0]?.label ?? null;

        if (!label) return;

        setLabels((prevState) => ({ ...prevState, [toUri]: label }));
      } catch {
        /**
         * Keep the fallback notation when the OLS label cannot be loaded.
         */
      }
    });
  }, [data, labels, olsApi]);

  const rows: MappingRow[] = useMemo(
    () =>
      (data ?? []).map((item: any) => ({
        to:
          labels[item.to?.memberSet?.[0]?.uri] ??
          item.to?.memberSet?.[0]?.notation?.[0] ??
          "—",
        toUri: item.to?.memberSet?.[0]?.uri ?? "—",
        creator: item.creator?.[0]?.prefLabel?.en ?? "—",
        type: item.type?.[0]?.split("#").pop() ?? "—",
        created: item.created ?? "—",
        createdLabel: formatMappingDate(item.created ?? "—"),
      })),
    [data, labels],
  );

  const filteredRows: MappingRow[] = useMemo(() => {
    if (selectedTypeFilters.length === 0) {
      return rows;
    }

    const filteredItems = rows.filter((row) => {
      const rowType = row.type;
      const isSelected = selectedTypeFilters.includes(rowType);

      return isSelected;
    });

    return filteredItems;
  }, [rows, selectedTypeFilters]);

  const fromLabel = data?.[0]?.from?.memberSet?.[0]?.notation?.[0] ?? "—";

  /**
   * State and handlers for the contextual help popover.
   */
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const onButtonClick = () => setIsPopoverOpen((isOpen) => !isOpen);
  const closePopover = () => setIsPopoverOpen(false);

  /**
   * Custom help button trigger with adjusted stroke width
   */
  const helpButton = (
    <EuiButtonIcon
      iconType="iInCircle"
      color="primary"
      aria-label="Help"
      onClick={onButtonClick}
      css={css`
        svg {
          stroke: currentColor;
          stroke-width: 0.5px;
          color: #0645ad;
        }
      `}
    />
  );

  return isLoading ? (
    <EuiPanel paddingSize="m">
      <EuiText>Loading mappings...</EuiText>
    </EuiPanel>
  ) : isError ? (
    <EuiPanel paddingSize="m">
      <EuiText color="danger">
        Failed to load mappings:{" "}
        {error instanceof Error ? error.message : String(error)}
      </EuiText>
    </EuiPanel>
  ) : (
    <EuiPanel paddingSize="m">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <EuiTitle size="s">
          <h2>
            <strong>Source:</strong>
            <span style={{ fontWeight: "normal" }}>&nbsp;{fromLabel}</span>
          </h2>
        </EuiTitle>

        <EuiPopover
          button={helpButton}
          isOpen={isPopoverOpen}
          closePopover={closePopover}
          anchorPosition="downRight"
        >
          <div style={{ width: "320px", padding: "8px" }}>
            <EuiText size="s">
              <EuiSpacer size="s" />
              <ul>
                <li>
                  <strong>Source:</strong> The main entity being described
                </li>
                <br />
                <li>
                  <strong>Type:</strong> The relationship or attribute linking
                  the source to the object
                </li>
                <br />
                <li>
                  <strong>Target:</strong> The piece of information the source
                  is linked to.
                </li>
              </ul>
              <EuiSpacer size="m" />

              {/**
               * Visual representation of a source-type-target relationship.
               */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  backgroundColor: "#f5f7fa",
                  padding: "16px 8px",
                  borderRadius: "4px",
                }}
              >
                <span>Source</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      marginBottom: "4px",
                      color: "#333",
                    }}
                  >
                    Type
                  </span>
                  <svg width="100" height="10" viewBox="0 0 100 10">
                    <line
                      x1="0"
                      y1="5"
                      x2="95"
                      y2="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <polyline
                      points="88,1 95,5 88,9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span>Target</span>
              </div>
            </EuiText>
          </div>
        </EuiPopover>
      </div>

      <EuiSpacer size="xl" />

      <EuiInMemoryTable<MappingRow>
        css={css`
          tbody .euiTableRow:nth-of-type(odd) {
            background-color: #ffffff;
          }
          tbody .euiTableRow:nth-of-type(even) {
            background-color: #fff5fa;
          }
        `}
        tableCaption="Mapping list"
        responsiveBreakpoint={false}
        items={filteredRows}
        sorting={{
          sort: {
            field: "to",
            direction: "asc",
          },
        }}
        columns={columns}
        pagination={true}
      />
    </EuiPanel>
  );
}

export function WrappedMappingListDetailWidget(
  props: MappingListDetailWidgetProps,
) {
  return <MappingListDetailWidget api={props.api} iri={props.iri} />;
}

export { MappingListDetailWidget };
export default WrappedMappingListDetailWidget;
