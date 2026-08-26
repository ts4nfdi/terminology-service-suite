import {
  EuiBasicTableColumn,
  EuiButton,
  EuiButtonIcon,
  EuiCheckbox,
  EuiInMemoryTable,
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiPanel,
  EuiPopover,
  EuiSearchBarProps,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { css } from "@emotion/react";
import {
  memo,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
  type SVGProps,
} from "react";
import { useQuery } from "react-query";
import { JskosMappingApi } from "../../../api/coli-conc/JskosMappingAPI";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { MappingListWidgetProps } from "../../../app";
import { GATEWAY_API_OLS_ENDPOINT } from "../../../app/globals";
import { normalizeSearchText } from "../EntityListWidget/Utils/searchUtils";
import { MappingDetailCardWidget } from "../MappingDetailCardWidget";
import { MetadataWidget } from "../MetadataWidget";

type MappingRow = {
  /**
   * Stable identifier the table uses to keep track of which rows are expanded.
   */
  id: string;
  from: string;
  fromUri: string;
  to: string;
  toUri: string;
  creator: string;
  type: string;
  created: string;
  createdLabel: string;
  targetFromColiConc: string;
  fromScheme: string;
  toScheme: string;
  identifier: string;
  modified: string;
  uri: string;
  partOf: string;
};

/**
 * Width of the trailing "Mapping details" column. Just enough for its header
 * and the expand toggle underneath it, so the rest of the table width is
 * shared between the auto-sized columns.
 */
const MAPPING_DETAILS_COLUMN_WIDTH = "140px";

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

/**
 * Magnifier over two lines of text: "look this target up in its terminology".
 * Drawn by hand like the predicate and filter icons above, because the icons
 * EUI ships are solid shapes and would not match the outline style the rest of
 * this widget uses. Size and colour are left to the button rendering it.
 */
const MetadataIcon = memo(({ style, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="2 2 20 20"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    /**
     * EuiIcon paints `fill: currentColor` through a class, and a class beats a
     * `fill="none"` attribute, which fills the lens in. An inline style wins
     * over that class instead. No shape below carries a `fill` attribute of
     * its own either, so EUI's `*[fill]` overrides match nothing here.
     */
    style={{ ...style, fill: "none" }}
    {...props}
  >
    <circle cx="10" cy="10" r="6" />
    <line x1="7" y1="8.5" x2="13" y2="8.5" />
    <line x1="7" y1="11.5" x2="11" y2="11.5" />
    <path d="M14.5 14.5 20 20" strokeWidth={2.1} />
  </svg>
));

function MappingListWidget(props: MappingListWidgetProps) {
  const { api, source } = props;

  const jskosMappingApi = useMemo(() => new JskosMappingApi(api), [api]);
  const olsApi = useMemo(() => new OlsEntityApi(GATEWAY_API_OLS_ENDPOINT), []);

  const { data, isLoading, isError, error } = useQuery(
    ["mappings", source],
    () => {
      return jskosMappingApi.getMappingsByFrom(source);
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

  /**
   * Maps each source (from) URI to its readable label text, fetched from
   * the OLS gateway API the same way target labels are. Falls back to the
   * raw JSKOS notation whenever no OLS label is found.
   */
  const [fromLabels, setFromLabels] = useState<Record<string, string>>({});

  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false);

  /**
   * Target entity whose metadata popup is currently open. Null while no popup
   * is shown. The gateway only resolves an entity on its ontology route, so
   * the scheme is kept next to the IRI.
   */
  const [metadataTarget, setMetadataTarget] = useState<{
    iri: string;
    ontologyId: string;
  } | null>(null);

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
   * Ids of the rows whose detail card is currently expanded underneath them.
   */
  const [expandedRowIds, setExpandedRowIds] = useState<string[]>([]);

  function toggleRowExpansion(row: MappingRow) {
    setExpandedRowIds((prevState) =>
      prevState.includes(row.id)
        ? prevState.filter((expandedId) => expandedId !== row.id)
        : [...prevState, row.id],
    );
  }
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
      sortable: true,
      /**
       * Target label, followed by a button that opens the metadata of that
       * entity in a popup. Deliberately not the circled "i" of the table help
       * button in the header: this one looks a single entity up rather than
       * explaining the table. The button is only shown once the gateway resolved
       * a label for the target, because those are exactly the entities it can
       * also return metadata for.
       */
      render: (to: string, item: MappingRow) => (
        <span
          style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
        >
          <span title={item.toUri}>{to}</span>

          {labels[item.toUri] && (
            <EuiButtonIcon
              iconType={MetadataIcon}
              color="primary"
              aria-label={`Show metadata of ${to}`}
              title={`Show metadata of ${to}`}
              onClick={() =>
                setMetadataTarget({
                  iri: item.toUri,
                  ontologyId: item.toScheme.toLowerCase(),
                })
              }
            />
          )}
        </span>
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
    {
      name: <strong style={{ fontSize: "14px" }}>Mapping details</strong>,
      align: "center",

      /**
       * Only as wide as its own content needs to be. Because the table uses a
       * fixed layout, giving this column an explicit width lets the browser
       * spread the remaining space across the columns that have none.
       */
      width: MAPPING_DETAILS_COLUMN_WIDTH,

      /**
       * Expand toggle for the mapping details. Clicking it opens the detail
       * card in a row underneath the mapping.
       */
      render: (item: MappingRow) => {
        const isExpanded = expandedRowIds.includes(item.id);

        return (
          <EuiButtonIcon
            iconType={isExpanded ? "arrowUp" : "arrowDown"}
            color="text"
            aria-label={
              isExpanded
                ? `Collapse details of ${item.to}`
                : `Expand details of ${item.to}`
            }
            aria-expanded={isExpanded}
            title={isExpanded ? "Hide mapping details" : "Show mapping details"}
            onClick={() => toggleRowExpansion(item)}
          />
        );
      },
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

  useEffect(() => {
    if (!data) return;

    data.forEach(async (item: any) => {
      const fromUri = item.from?.memberSet?.[0]?.uri;
      const fromScheme = item.fromScheme?.notation?.[0]?.toLowerCase();

      if (!fromScheme || !fromUri || fromLabels[fromUri]) return;

      try {
        const entityResponse = await olsApi.getEntity(
          undefined,
          undefined,
          { ontologyId: fromScheme, termIri: fromUri },
          undefined,
          false,
        );

        const label = entityResponse?.elements?.[0]?.label ?? null;

        if (!label) return;

        setFromLabels((prevState) => ({ ...prevState, [fromUri]: label }));
      } catch {
        /**
         * Keep the fallback notation when the OLS label cannot be loaded.
         */
      }
    });
  }, [data, fromLabels, olsApi]);

  /**
   * Builds table rows from the ColiConc mapping data.
   */
  const rows: MappingRow[] = useMemo(
    () =>
      (data ?? []).map((item: any, index: number) => {
        const toUri = item.to?.memberSet?.[0]?.uri ?? "—";
        const targetFromColiConc =
          item.to?.memberSet?.[0]?.notation?.[0] ?? "—";
        const rowFromUri = item.from?.memberSet?.[0]?.uri ?? "—";
        const sourceFromColiConc =
          item.from?.memberSet?.[0]?.notation?.[0] ?? "—";

        return {
          id: `${index}-${item.uri ?? toUri}`,
          from: fromLabels[rowFromUri] ?? sourceFromColiConc,
          fromUri: rowFromUri,
          to: labels[toUri] ?? targetFromColiConc,
          toUri,
          targetFromColiConc,
          creator: item.creator?.[0]?.prefLabel?.en ?? "—",
          type: item.type?.[0]?.split("#").pop() ?? "—",
          created: item.created ?? "—",
          createdLabel: formatMappingDate(item.created ?? "—"),
          fromScheme: item.fromScheme?.notation?.[0] ?? "—",
          toScheme: item.toScheme?.notation?.[0] ?? "—",
          identifier: item.identifier?.[0] ?? "—",
          modified: formatMappingDate(item.modified ?? "—"),
          uri: item.uri ?? "—",
          partOf: item.partOf?.[0]?.uri ?? "—",
        };
      }),
    [data, labels, fromLabels],
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

  /**
   * Detail card rendered underneath every expanded row. EUI looks the row up
   * by its id, so only rows currently visible in the table need an entry.
   */
  const itemIdToExpandedRowMap = useMemo(() => {
    const expandedRows: Record<string, ReactNode> = {};

    filteredRows.forEach((row) => {
      if (!expandedRowIds.includes(row.id)) return;

      expandedRows[row.id] = (
        <MappingDetailCardWidget
          fromScheme={row.fromScheme}
          toScheme={row.toScheme}
          identifier={row.identifier}
          modified={row.modified}
          uri={row.uri}
          partOf={row.partOf}
          type={row.type}
          from={row.from}
          fromUri={row.fromUri}
          to={row.to}
          toUri={row.toUri}
          creator={row.creator}
          created={row.createdLabel}
          onClose={() => toggleRowExpansion(row)}
        />
      );
    });

    return expandedRows;
  }, [filteredRows, expandedRowIds]);

  const fromUri = data?.[0]?.from?.memberSet?.[0]?.uri ?? "—";
  const sourceFromColiConc =
    data?.[0]?.from?.memberSet?.[0]?.notation?.[0] ?? "—";
  const fromLabel = fromLabels[fromUri] ?? sourceFromColiConc;

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
                  the source to the target
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

      {/**
       * Table, with the mapping details shown in a row expanded underneath
       * the target entity the user clicked.
       */}
      <div>
        <EuiInMemoryTable<MappingRow>
          css={css`
            tbody .euiTableRow:nth-of-type(odd) {
              background-color: #ffffff;
            }
            tbody .euiTableRow:nth-of-type(even) {
              background-color: #fff5fa;
            }
            /**
               * Keep the zebra striping counting mapping rows only, so the
               * detail row of an expanded mapping does not flip the colour of
               * every row below it. Browsers without \`nth-child(... of ...)\`
               * fall back to the plain nth-of-type rules above.
               */
            tbody
              .euiTableRow:nth-child(odd of :not(.euiTableRow-isExpandedRow)) {
              background-color: #ffffff;
            }
            tbody
              .euiTableRow:nth-child(even of :not(.euiTableRow-isExpandedRow)) {
              background-color: #fff5fa;
            }
            tbody .euiTableRow td {
              transition:
                background-color 150ms ease,
                box-shadow 150ms ease;
            }
            /**
               * Blue ring around an expanded row and the detail row that
               * follows it, so both read as one block. Drawn with inset
               * box-shadows instead of a border so no cell shifts when a row
               * gets expanded, and applied per cell because a table row itself
               * does not paint a box-shadow reliably.
               */
            tbody .euiTableRow.mappingRowSelected td,
            tbody .euiTableRow.mappingRowSelected + tr td {
              background-color: #eaf2ff;
            }
            tbody .euiTableRow.mappingRowSelected td {
              box-shadow: inset 0 2px 0 0 #2f6fed;
            }
            tbody .euiTableRow.mappingRowSelected td:first-of-type {
              border-radius: 6px 0 0 0;
              box-shadow:
                inset 2px 0 0 0 #2f6fed,
                inset 0 2px 0 0 #2f6fed;
            }
            tbody .euiTableRow.mappingRowSelected td:last-of-type {
              border-radius: 0 6px 0 0;
              box-shadow:
                inset -2px 0 0 0 #2f6fed,
                inset 0 2px 0 0 #2f6fed;
            }
            tbody .euiTableRow.mappingRowSelected + tr td {
              border-radius: 0 0 6px 6px;
              box-shadow:
                inset 2px 0 0 0 #2f6fed,
                inset -2px 0 0 0 #2f6fed,
                inset 0 -2px 0 0 #2f6fed;
            }
          `}
          tableCaption="Mapping list"
          responsiveBreakpoint={false}
          items={filteredRows}
          itemId="id"
          itemIdToExpandedRowMap={itemIdToExpandedRowMap}
          search={search}
          sorting={{
            sort: {
              field: "to",
              direction: "asc",
            },
          }}
          columns={columns}
          pagination={true}
          /**
           * Highlight the row whose detail card is currently expanded.
           */
          rowProps={(row: MappingRow) => ({
            className: expandedRowIds.includes(row.id)
              ? "mappingRowSelected"
              : undefined,
          })}
        />
      </div>

      {/**
       * Metadata of the target entity the user asked information about. Asks
       * the gateway the same way the target labels are fetched: the v2 route
       * of the ontology the target belongs to, so `useLegacy` has to be off.
       */}
      {metadataTarget && (
        <EuiModal
          onClose={() => setMetadataTarget(null)}
          maxWidth={800}
          outsideClickCloses
        >
          <EuiModalHeader>
            <EuiModalHeaderTitle size="s">Entity metadata</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <MetadataWidget
              api={GATEWAY_API_OLS_ENDPOINT}
              iri={metadataTarget.iri}
              ontologyId={metadataTarget.ontologyId}
              useLegacy={false}
            />
          </EuiModalBody>
        </EuiModal>
      )}
    </EuiPanel>
  );
}

export function WrappedMappingListWidget(props: MappingListWidgetProps) {
  return <MappingListWidget api={props.api} source={props.source} />;
}

export { MappingListWidget };
export default WrappedMappingListWidget;
