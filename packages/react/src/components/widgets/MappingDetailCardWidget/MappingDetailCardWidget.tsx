import { EuiLink } from "@elastic/eui";

import { MappingDetailCardWidgetProps } from "../../../app";
import MappingDetailCardPresentation from "./MappingDetailCardPresentation";

/**
 * Formats the card writes itself, and the column separator each one uses.
 */
const separators: Record<string, string> = { csv: ",", tsv: "\t" };

/**
 * Address mapping feedback is sent to.
 */
const feedbackEmail = "coli-conc@gbv.de";

function MappingDetailCardWidget(props: MappingDetailCardWidgetProps) {
  const {
    fromScheme,
    toScheme,
    identifier,
    modified,
    uri,
    partOf,
    type,
    from,
    fromUri,
    to,
    toUri,
    creator,
    created,
    MappingDetailCardBackgroundColor,
    onClose,
  } = props;

  /**
   * The concordance URI ends with its notation, e.g. ".../concordances/nsk-bk".
   */
  const concordanceNotation = partOf?.split("/").pop();

  /**
   * Everything the card knows about the mapping, as one flat row: the column
   * names are these key names. The JSKOS server's own CSV keeps just the
   * scheme and notation columns, so the CSV and TSV downloads are written
   * here rather than linked to. Its JSON is complete, so that one stays a
   * plain link.
   */
  const downloadFields = {
    type,
    from,
    fromUri,
    fromScheme,
    to,
    toUri,
    toScheme,
    creator,
    created,
    modified,
    identifier,
    partOf,
    uri,
  };

  /**
   * Wraps a value in quotes the way the JSKOS server does, so that a comma or
   * a quote inside a label cannot break the columns apart.
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

  const fields = [
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
    <MappingDetailCardPresentation
      fields={fields}
      MappingDetailCardBackgroundColor={MappingDetailCardBackgroundColor}
      onClose={onClose}
    />
  );
}

export function WrappedMappingDetailCardWidget() {
  return <MappingDetailCardWidget />;
}

export { MappingDetailCardWidget };
export default WrappedMappingDetailCardWidget;
