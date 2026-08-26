import { EuiLink } from "@elastic/eui";

import { MappingDetailCardWidgetProps } from "../../../app";
import MappingDetailCardPresentation from "./MappingDetailCardPresentation";

/**
 * Serialisations the JSKOS server offers for a single mapping
 * via the ?download= query parameter.
 */
const downloadFormats = ["json", "csv", "tsv"];

/**
 * Address mapping feedback is sent to.
 */
const feedbackEmail = "coli-conc@gbv.de";

function MappingDetailCardWidget(props: MappingDetailCardWidgetProps) {
  const { fromScheme, toScheme, identifier, modified, uri, partOf, onClose } =
    props;

  /**
   * The concordance URI ends with its notation, e.g. ".../concordances/nsk-bk".
   */
  const concordanceNotation = partOf?.split("/").pop();

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
      label: "Download:",
      value:
        uri && uri !== "—" ? (
          <span style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {downloadFormats.map((format) => (
              <EuiLink
                key={format}
                href={`${uri}?download=${format}`}
                target="_blank"
                rel="noreferrer"
              >
                .{format}
              </EuiLink>
            ))}
          </span>
        ) : (
          "—"
        ),
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

  return <MappingDetailCardPresentation fields={fields} onClose={onClose} />;
}

export function WrappedMappingDetailCardWidget() {
  return <MappingDetailCardWidget />;
}

export { MappingDetailCardWidget };
export default WrappedMappingDetailCardWidget;
