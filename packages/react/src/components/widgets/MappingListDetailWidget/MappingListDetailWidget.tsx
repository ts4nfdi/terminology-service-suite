import {
  EuiBasicTableColumn,
  EuiButton,
  EuiCheckbox,
  EuiInMemoryTable,
  EuiPanel,
  EuiPopover,
  EuiSearchBarProps,
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
import { normalizeSearchText } from "../EntityListWidget/Utils/searchUtils";

type MappingRow = {
  to: string;
  toUri: string;
  creator: string;
  type: string;
  created: string;
  createdLabel: string;
  targetFromColiConc: string;
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
  relatedMatch: <path d="M 4 13 Q 8 7 12 13 T 20 13" />,
  mappingRelation: (
    <>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="15 7 20 12 15 17" />
    </>
  ),
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
  const { api, source } = props;

  const coliConcApi = useMemo(() => new ColiConcApi(api), [api]);
  const olsApi = useMemo(() => new OlsEntityApi(GATEWAY_API_OLS_ENDPOINT), []);

  const { data, isLoading, isError, error } = useQuery(
    ["mappings", source],
    () => {
      return coliConcApi.getMappingsByFrom(source);
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
   * Stores what the user searched in the search bar.
   */
  const [searchedQuery, setSearchedQuery] = useState("");

  /**
   * includes types: exactMatch, closeMatch, broadMatch, narrowMatch, relatedMatch and mappingRelation
   */
  const [selectedTypeFilters, setSelectedTypeFilters] = useState<string[]>([]);
  const [appliedTypeFilters, setAppliedTypeFilters] = useState<string[]>([]);

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

  function stopPopoverSort(event: React.MouseEvent | React.KeyboardEvent) {
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
      <div
        style={{ width: "180px" }}
        onClick={stopPopoverSort}
        onMouseDown={stopPopoverSort}
        onKeyDown={stopPopoverSort}
        className="custom-filter-wrapper"
      >
        <style>{`
        .custom-filter-wrapper .euiCheckbox__square {
          transform: scale(1.1);
          transform-origin: center;
        }
        .custom-filter-wrapper .euiCheckbox__label {
          padding-left: 12px;
        }
      `}</style>
        <EuiCheckbox
          id="exactMatch"
          label={
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span>exactMatch</span>
              <PredicateIcon type="exactMatch" />
            </span>
          }
          checked={selectedTypeFilters.includes("exactMatch")}
          onChange={() => toggleTypeFilter("exactMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="closeMatch"
          label={
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span>closeMatch</span>
              <PredicateIcon type="closeMatch" />
            </span>
          }
          checked={selectedTypeFilters.includes("closeMatch")}
          onChange={() => toggleTypeFilter("closeMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="broadMatch"
          label={
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span>broadMatch</span>
              <PredicateIcon type="broadMatch" />
            </span>
          }
          checked={selectedTypeFilters.includes("broadMatch")}
          onChange={() => toggleTypeFilter("broadMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="narrowMatch"
          label={
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span>narrowMatch</span>
              <PredicateIcon type="narrowMatch" />
            </span>
          }
          checked={selectedTypeFilters.includes("narrowMatch")}
          onChange={() => toggleTypeFilter("narrowMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="relatedMatch"
          label={
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span>relatedMatch</span>
              <PredicateIcon type="relatedMatch" />
            </span>
          }
          checked={selectedTypeFilters.includes("relatedMatch")}
          onChange={() => toggleTypeFilter("relatedMatch")}
        />

        <EuiSpacer size="s" />

        <EuiCheckbox
          id="mappingRelation"
          label={
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span>mappingRelation</span>
              <PredicateIcon type="mappingRelation" />
            </span>
          }
          checked={selectedTypeFilters.includes("mappingRelation")}
          onChange={() => toggleTypeFilter("mappingRelation")}
        />

        <EuiSpacer size="l" />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <EuiButton
            size="s"
            color="accent"
            style={{ minWidth: "72px" }}
            onClick={() => {
              setSelectedTypeFilters([]);
              setAppliedTypeFilters([]);
              setIsTypeFilterOpen(false);
            }}
          >
            Clear
          </EuiButton>

          <EuiButton
            size="s"
            color="success"
            style={{ minWidth: "72px" }}
            onClick={() => {
              setAppliedTypeFilters(selectedTypeFilters);
              setIsTypeFilterOpen(false);
            }}
          >
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

  /**
   * Builds table rows from the ColiConc mapping data.
   */
  const rows: MappingRow[] = useMemo(
    () =>
      (data ?? []).map((item: any) => {
        const toUri = item.to?.memberSet?.[0]?.uri ?? "—";
        const targetFromColiConc =
          item.to?.memberSet?.[0]?.notation?.[0] ?? "—";

        return {
          to: labels[toUri] ?? targetFromColiConc,
          toUri,
          targetFromColiConc,
          creator: item.creator?.[0]?.prefLabel?.en ?? "—",
          type: item.type?.[0]?.split("#").pop() ?? "—",
          created: item.created ?? "—",
          createdLabel: formatMappingDate(item.created ?? "—"),
        };
      }),
    [data, labels],
  );

  /**
   * Configures the EUI search bar for filtering ColiConc target and creator.
   */
  const search: EuiSearchBarProps = {
    onChange: ({ query }) => {
      const normalizedQuery = normalizeSearchText(query?.text ?? "");

      setSearchedQuery(normalizedQuery);
    },
    box: {
      incremental: true,
      placeholder: "Search Target or Creator",
    },
  };

  /**
   * Apply both the type-filter and the search-filter to the table rows
   */
  const filteredRows: MappingRow[] = useMemo(() => {
    const normalizedSearchQuery = searchedQuery.toLowerCase();

    return rows.filter((row) => {
      const matchesTypeFilter =
        appliedTypeFilters.length === 0 ||
        appliedTypeFilters.includes(row.type);

      const matchesSearch =
        normalizedSearchQuery === "" ||
        row.targetFromColiConc.toLowerCase().includes(normalizedSearchQuery) ||
        row.creator.toLowerCase().includes(normalizedSearchQuery);

      return matchesTypeFilter && matchesSearch;
    });
  }, [rows, appliedTypeFilters, searchedQuery]);

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
    <button
      type="button"
      aria-label="Help"
      onClick={onButtonClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        padding: 0,
        color: "#0645ad",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="10.5" x2="12" y2="16" />
        <circle cx="12" cy="7.8" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    </button>
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
        search={search}
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
  return <MappingListDetailWidget api={props.api} source={props.source} />;
}

export { MappingListDetailWidget };
export default WrappedMappingListDetailWidget;
