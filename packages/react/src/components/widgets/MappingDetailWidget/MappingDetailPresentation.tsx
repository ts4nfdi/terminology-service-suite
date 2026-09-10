import {
  EuiButtonIcon,
  EuiIcon,
  EuiLink,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import type { ReactNode } from "react";

/**
 * Formats the card writes itself, and the column separator each one uses.
 */
const separators: Record<string, string> = { csv: ",", tsv: "\t" };

/**
 * Address mapping feedback is sent to.
 */
const feedbackEmail = "coli-conc@gbv.de";

/**
 * One mapping, flattened to the strings the card shows and downloads.
 * MappingDetailWidget builds it from what it fetches, MappingListWidget from
 * the row the user expanded.
 */
export type MappingDetail = {
  type?: string;
  from?: string;
  fromUri?: string;
  fromScheme?: string;
  to?: string;
  toUri?: string;
  toScheme?: string;
  creator?: string;
  created?: string;
  modified?: string;
  identifier?: string;
  partOf?: string;
  uri?: string;
};

type MappingDetailField = {
  label: string;
  value: ReactNode;
};

type MappingDetailPresentationProps = {
  mapping: MappingDetail;
  MappingDetailBackgroundColor?: string;
  /**
   * Puts a close button in the corner instead of the info icon.
   * MappingListWidget uses it to collapse the row again.
   */
  onClose?: () => void;
};

/**
 * The card itself: its fields, downloads and layout. It renders the mapping it
 * is handed and fetches nothing, so both mapping widgets can show it.
 */
export default function MappingDetailPresentation(
  props: MappingDetailPresentationProps,
) {
  const { mapping, MappingDetailBackgroundColor = "#fff5fa", onClose } = props;

  const { fromScheme, toScheme, modified, identifier, partOf, uri } = mapping;

  /**
   * The concordance URI ends with its notation, e.g. ".../concordances/nsk-bk".
   */
  const concordanceNotation = partOf?.split("/").pop();

  /**
   * The mapping as one row, these keys being the column names. The server's own
   * CSV leaves out the dates, the identifier and the concordance, so CSV and
   * TSV are written here; its JSON is complete and stays a plain link.
   */
  const downloadFields = {
    type: mapping.type,
    from: mapping.from,
    fromUri: mapping.fromUri,
    fromScheme,
    to: mapping.to,
    toUri: mapping.toUri,
    toScheme,
    creator: mapping.creator,
    created: mapping.created,
    modified,
    identifier,
    partOf,
    uri,
  };

  /**
   * Quotes a value the way the JSKOS server does, so a comma or a quote inside
   * a label cannot break the columns apart.
   */
  function quote(value?: string) {
    return `"${(value || "—").replace(/"/g, '""')}"`;
  }

  function download(format: string, separator: string) {
    const content = [
      Object.keys(downloadFields).map(quote).join(separator),
      Object.values(downloadFields).map(quote).join(separator),
    ].join("\n");

    const link = document.createElement("a");
    link.href = URL.createObjectURL(
      new Blob([content], { type: "text/plain;charset=utf-8" }),
    );
    link.download = `mapping_${uri?.split("/").pop()}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  const fields: MappingDetailField[] = [
    {
      label: "Source Scheme:",
      value: fromScheme || "—",
    },
    {
      label: "Target Scheme:",
      value: toScheme || "—",
    },
    {
      label: "Modified:",
      value: modified || "—",
    },
    {
      label: "Identifier:",
      value: identifier || "—",
    },
    {
      label: "Part of:",
      value:
        partOf && partOf !== "—" ? (
          <EuiLink href={partOf} target="_blank" rel="noreferrer">
            {concordanceNotation}
          </EuiLink>
        ) : (
          "—"
        ),
    },
    {
      label: "Download:",
      value:
        uri && uri !== "—" ? (
          <span style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <EuiLink
              href={`${uri}?download=json`}
              target="_blank"
              rel="noreferrer"
            >
              .json
            </EuiLink>

            {Object.entries(separators).map(([format, separator]) => (
              <EuiLink key={format} onClick={() => download(format, separator)}>
                .{format}
              </EuiLink>
            ))}
          </span>
        ) : (
          "—"
        ),
    },
    {
      label: "Feedback:",
      value: (
        <>
          <EuiLink href={`mailto:${feedbackEmail}`}>
            provide feedback via email
          </EuiLink>{" "}
          ({feedbackEmail})
        </>
      ),
    },
  ];

  return (
    <EuiPanel
      hasShadow={false}
      paddingSize="m"
      style={{
        overflow: "hidden",
        border: "none",
        borderRadius: 14,
        background: MappingDetailBackgroundColor,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "8px",
        }}
      >
        {onClose ? (
          <EuiButtonIcon
            iconType="cross"
            aria-label="Close mapping details"
            title="Close"
            color="text"
            onClick={onClose}
          />
        ) : (
          <EuiIcon type="info" size="m" color="primary" />
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "12px",
        }}
      >
        {fields.map((field) => (
          <div
            key={field.label}
            style={{
              borderRadius: 12,
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              padding: "14px 16px",
              minHeight: 84,
            }}
          >
            <EuiText size="xs" color="subdued">
              {field.label}
            </EuiText>
            <div
              style={{
                marginTop: "8px",
                color: "#172237",
                fontSize: "14px",
                lineHeight: 1.5,
                wordBreak: "break-word",
              }}
            >
              {field.value}
            </div>
          </div>
        ))}
      </div>
    </EuiPanel>
  );
}
