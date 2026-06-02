import {
  EuiBasicTableColumn,
  EuiButtonIcon,
  EuiInMemoryTable,
  EuiPanel,
  EuiPopover,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { css } from "@emotion/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { ColiConcApi } from "../../../api/coli-conc/ColiConcAPI";
import { MappingListDetailWidgetProps } from "../../../app";

type MappingRow = {
  to: string;
  toUri: string;
  creator: string;
  type: string;
  created: string;
};

/**
 * Dictionary mapping each predicate type to its inner SVG elements.
 */
const predicateIcons: Record<string, React.ReactNode> = {
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
  broadMatch: <path d="M6 6h8a6 6 0 0 1 0 12H6" />,
  narrowMatch: <path d="M18 6H10a6 6 0 0 0 0 12h8" />,
  relatedMatch: (
    <>
      <line x1="3" y1="12" x2="21" y2="12" />
      <polyline points="7 8 3 12 7 16" />
      <polyline points="17 8 21 12 17 16" />
    </>
  ),
  mappingRelation: <path d="M 4 12 Q 8 8 12 12 T 20 12" />,
};

const PredicateIcon = ({ type }: { type: string }) => {
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
};

const columns: Array<EuiBasicTableColumn<MappingRow>> = [
  {
    field: "type",
    name: <strong style={{ fontSize: "14px" }}>Predicate</strong>,
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
    name: <strong style={{ fontSize: "14px" }}>Object</strong>,
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
    render: (created: string) => {
      if (created === "—") return "—";

      const date = new Date(created);

      if (isNaN(date.getTime())) return "—";

      const formattedDate = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(date);

      const formattedTime = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);

      return `${formattedDate}, ${formattedTime}`;
    },
  },
];

function MappingListDetailWidget(props: MappingListDetailWidgetProps) {
  const { api, iri } = props;

  const coliConcApi = new ColiConcApi(api);

  const { data, isLoading, isError, error } = useQuery(
    ["mappings", iri],
    () => {
      return coliConcApi.getMappingsByFrom(iri);
    },
  );

  const rows: MappingRow[] = (data ?? []).map((item: any) => ({
    to: item.to?.memberSet?.[0]?.notation?.[0] ?? "—",
    toUri: item.to?.memberSet?.[0]?.uri ?? "—",
    creator: item.creator?.[0]?.prefLabel?.en ?? "—",
    type: item.type?.[0]?.split("#").pop() ?? "—",
    created: item.created ?? "—",
  }));

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
      <EuiText color="danger">Failed to load mappings: {String(error)}</EuiText>
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
            <strong>Subject:</strong>
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
                  <strong>Subject:</strong> The main entity being described
                </li>
                <br />
                <li>
                  <strong>Predicate:</strong> The relationship or attribute
                  linking the subject to the object
                </li>
                <br />
                <li>
                  <strong>Object:</strong> The piece of information the subject
                  is linked to.
                </li>
              </ul>
              <EuiSpacer size="m" />

              {/**
               * Visual representation of an RDF Triple.
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
                <span>subject</span>
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
                    predicate
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
                <span>Object</span>
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
        items={rows}
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
