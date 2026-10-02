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
  useMemo,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  type SVGProps,
} from "react";
import { GATEWAY_API_OLS_ENDPOINT } from "../../../app/globals";
import MappingDetailPresentation from "../MappingDetailWidget/MappingDetailPresentation";
import { MetadataWidget } from "../MetadataWidget";

export type MappingRow = {
  /** Stable id the table uses to track which rows are expanded. */
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

/** Relative, so the column shrinks on small screens and its header wraps. */
const MAPPING_DETAILS_COLUMN_WIDTH = "12%";

/** Inner SVG shapes of each mapping type's icon. */
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

/** Outline "i" icon, drawn by hand because EUI's own icons are solid. */
const MetadataIcon = memo(({ style, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ ...style, fill: "none" }}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="10.5" x2="12" y2="16" />
    <circle cx="12" cy="7.8" r="0.75" fill="currentColor" stroke="none" />
  </svg>
));

type MetadataTarget = { iri: string; ontologyId: string } | null;

/** Everything the list shows or changes, passed down by MappingListWidget. */
type MappingListPresentationProps = {
  fromLabel: string;
  rowColor: string;
  MappingDetailBackgroundColor?: string;
  labels: Record<string, string>;
  filteredRows: MappingRow[];
  search: EuiSearchBarProps;
  expandedRowIds: string[];
  toggleRowExpansion: (row: MappingRow) => void;
  metadataTarget: MetadataTarget;
  setMetadataTarget: Dispatch<SetStateAction<MetadataTarget>>;
  isTypeFilterOpen: boolean;
  setIsTypeFilterOpen: Dispatch<SetStateAction<boolean>>;
  selectedTypeFilters: string[];
  setSelectedTypeFilters: Dispatch<SetStateAction<string[]>>;
  setAppliedTypeFilters: Dispatch<SetStateAction<string[]>>;
  toggleTypeFilter: (type: string) => void;
  isPopoverOpen: boolean;
  onButtonClick: () => void;
  closePopover: () => void;
};

/** UI of the mapping list; all state and data come from MappingListWidget. */
export default function MappingListPresentation(
  props: MappingListPresentationProps,
) {
  const {
    fromLabel,
    rowColor,
    MappingDetailBackgroundColor,
    labels,
    filteredRows,
    search,
    expandedRowIds,
    toggleRowExpansion,
    metadataTarget,
    setMetadataTarget,
    isTypeFilterOpen,
    setIsTypeFilterOpen,
    selectedTypeFilters,
    setSelectedTypeFilters,
    setAppliedTypeFilters,
    toggleTypeFilter,
    isPopoverOpen,
    onButtonClick,
    closePopover,
  } = props;

  /** Keeps a click on the filter icon from also sorting the column. */
  function stopHeaderSort(event: React.MouseEvent | React.KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  function stopPopoverSort(event: React.MouseEvent | React.KeyboardEvent) {
    event.stopPropagation();
  }

  /** Filter button in the Type header; toggles the type filter popover. */
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

  /** Popover with one checkbox per mapping type. */
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
      sortable: true,

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

      /** Sort by notation, not label: labels arrive later and reorder rows. */
      sortable: (row: MappingRow) => row.targetFromColiConc,

      /** Label plus a metadata button, only for targets OLS could resolve. */
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
      sortable: true,
    },
    {
      field: "created",
      name: <strong style={{ fontSize: "14px" }}>Created</strong>,
      sortable: true,
      render: (_created: string, item: MappingRow) => item.createdLabel,
    },
    {
      name: <strong style={{ fontSize: "14px" }}>Mapping details</strong>,
      align: "center",

      width: MAPPING_DETAILS_COLUMN_WIDTH,

      /** Opens or closes the detail card under the row. */
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

  /** Detail card of each expanded row, keyed by row id for EUI. */
  const itemIdToExpandedRowMap = useMemo(() => {
    const expandedRows: Record<string, ReactNode> = {};

    filteredRows.forEach((row) => {
      if (!expandedRowIds.includes(row.id)) return;

      expandedRows[row.id] = (
        <MappingDetailPresentation
          mapping={{ ...row, created: row.createdLabel }}
          MappingDetailBackgroundColor={MappingDetailBackgroundColor}
          onClose={() => toggleRowExpansion(row)}
        />
      );
    });

    return expandedRows;
  }, [filteredRows, expandedRowIds, MappingDetailBackgroundColor]);

  /** Question-mark button that opens the help popover. */
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
        <path d="M9.4 9.3a2.7 2.7 0 0 1 5.25 0.9c0 1.8-2.7 2.7-2.7 2.7" />
        <circle cx="12" cy="16.2" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    </button>
  );

  return (
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

              {/* Source -> Type -> Target diagram */}
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

      <div>
        <EuiInMemoryTable<MappingRow>
          css={css`
            thead .euiTableHeaderCell .eui-textTruncate {
              white-space: normal !important;
              overflow-wrap: anywhere;
            }

            tbody .euiTableRow:nth-of-type(odd) {
              background-color: #ffffff;
            }

            tbody .euiTableRow:nth-of-type(even) {
              background-color: ${rowColor};
            }

            tbody
              .euiTableRow:nth-child(odd of :not(.euiTableRow-isExpandedRow)) {
              background-color: #ffffff;
            }

            tbody
              .euiTableRow:nth-child(even of :not(.euiTableRow-isExpandedRow)) {
              background-color: ${rowColor};
            }

            tbody .euiTableRow td {
              transition:
                background-color 150ms ease,
                box-shadow 150ms ease;
            }

            tbody .euiTableRow.mappingRowSelected + tr td {
              background-color: #ffffff;
            }

            tbody .euiTableRow.mappingRowSelected td {
              box-shadow: inset 0 2px 0 0 #ceced3;
            }

            tbody .euiTableRow.mappingRowSelected td:first-of-type {
              border-radius: 6px 0 0 0;
              box-shadow:
                inset 2px 0 0 0 #ceced3,
                inset 0 2px 0 0 #ceced3;
            }

            tbody .euiTableRow.mappingRowSelected td:last-of-type {
              border-radius: 0 6px 0 0;
              box-shadow:
                inset -2px 0 0 0 #ceced3,
                inset 0 2px 0 0 #ceced3;
            }

            tbody .euiTableRow.mappingRowSelected + tr td {
              border-radius: 0 0 6px 6px;
              box-shadow:
                inset 2px 0 0 0 #ceced3,
                inset -2px 0 0 0 #ceced3,
                inset 0 -2px 0 0 #ceced3;
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
          /** Highlight the row whose detail card is open. */
          rowProps={(row: MappingRow) => ({
            className: expandedRowIds.includes(row.id)
              ? "mappingRowSelected"
              : undefined,
          })}
        />
      </div>

      {/* Metadata popup (the gateway serves v2 only, so useLegacy is off). */}
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
