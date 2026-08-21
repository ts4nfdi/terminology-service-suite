import { MappingDetailCardWidgetProps } from "../../../app";
import MappingDetailCardPresentation from "./MappingDetailCardPresentation";

function MappingDetailCardWidget(props: MappingDetailCardWidgetProps) {
  const { target, source, onClose } = props;

  const fields = [
    {
      label: "Source Scheme:",
      value: "",
    },
    {
      label: "Target Scheme:",
      value: "",
    },
    {
      label: "Description:",
      value: "",
    },
    {
      label: "Creator:",
      value: "",
    },
    // {
    //   label: "Contributors:",
    //   value: source ? (
    //     <EuiLink href={source} target="_blank" rel="noreferrer">
    //       {source}
    //     </EuiLink>
    //   ) : (
    //     "—"
    //   ),
    // },
    {
      label: "Created:",
      value: "",
    },
    {
      label: "Modified:",
      value: "",
    },
    {
      label: "Download:",
      value: "",
    },
    {
      label: "Mappings:",
      value: "",
    },
    {
      label: "Identifier:",
      value: "",
    },
    {
      label: "Source:",
      value: "",
    },
  ];

  return <MappingDetailCardPresentation fields={fields} onClose={onClose} />;
}

export function WrappedMappingDetailCardWidget() {
  return <MappingDetailCardWidget target={""} source={""} />;
}

export { MappingDetailCardWidget };
export default WrappedMappingDetailCardWidget;
