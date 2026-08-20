import { EuiLink } from "@elastic/eui";

import { MappingDetailCardWidgetProps } from "../../../app";
import MappingDetailCardPresentation from "./MappingDetailCardPresentation";

function MappingDetailCardWidget(props: MappingDetailCardWidgetProps) {
  const { target, source, onClose } = props;

  const fields = [
    {
      label: "API",
      value: target || "—",
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

  return <MappingDetailCardPresentation fields={fields} onClose={onClose} />;
}

export function WrappedMappingDetailCardWidget() {
  return <MappingDetailCardWidget target={""} source={""} />;
}

export { MappingDetailCardWidget };
export default WrappedMappingDetailCardWidget;
