import { EuiLink } from "@elastic/eui";

import { MappingDetailCardWidgetProps } from "../../../app";
import MappingDetailCardPresentation from "./MappingDetailCardPresentation";

function MappingDetailCardWidget(props: MappingDetailCardWidgetProps) {
  const { api, source } = props;

  const fields = [
    {
      label: "API",
      value: api || "—",
    },
    {
      label: "Source",
      value: source ? (
        <EuiLink href={source} target="_blank" rel="noreferrer">
          {source}
        </EuiLink>
      ) : (
        "—"
      ),
    },
    {
      label: "Identifier",
      value: "This is an Identifier",
    },
    {
      label: "Status",
      value: "This is a simple version of the card.",
    },
  ];

  return <MappingDetailCardPresentation fields={fields} />;
}

export function WrappedMappingDetailCardWidget() {
  return <MappingDetailCardWidget api={""} source={""} />;
}

export { MappingDetailCardWidget };
export default WrappedMappingDetailCardWidget;
