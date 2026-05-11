import { EuiBasicTableColumn } from "@elastic/eui";
import { MappingListDetailWidgetProps } from "../../../app";

type MappingRow = {
  to: string;
  toScheme: string;
  creator: string;
  type: string;
  created: string;
};

const baseColumns: Array<EuiBasicTableColumn<MappingRow>> = [
  { field: "to", name: "to", truncateText: true, sortable: true },
  { field: "toScheme", name: "toScheme", truncateText: true, sortable: true },
  { field: "creator", name: "creator", truncateText: true, sortable: true },
  { field: "type", name: "type", truncateText: true, sortable: true },
  { field: "created", name: "created", truncateText: true, sortable: true },
];

function MappingListDetailWidget(props: MappingListDetailWidgetProps) {
  const { api, iri } = props;
  return <></>;
}

function WrappedMappingListDetailWidget(props: MappingListDetailWidgetProps) {
  return <MappingListDetailWidget api={props.api} iri={props.iri} />;
}

export { MappingListDetailWidget };
export default WrappedMappingListDetailWidget;
