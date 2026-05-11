import { MappingListDetailWidgetProps } from "../../../app";

function MappingListDetailWidget(props: MappingListDetailWidgetProps) {
  const { api, iri } = props;
  return <></>;
}

function WrappedMappingListDetailWidget(props: MappingListDetailWidgetProps) {
  return <MappingListDetailWidget api={props.api} iri={props.iri} />;
}

export { MappingListDetailWidget };
export default WrappedMappingListDetailWidget;
