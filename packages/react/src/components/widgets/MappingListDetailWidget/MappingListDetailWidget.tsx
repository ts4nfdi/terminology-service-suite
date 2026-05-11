import { EuiBasicTableColumn, EuiInMemoryTable, EuiPanel } from "@elastic/eui";
import { css } from "@emotion/react";
import { MappingListDetailWidgetProps } from "../../../app";

type MappingRow = {
  to: string;
  toScheme: string;
  creator: string;
  type: string;
  created: string;
};

const columns: Array<EuiBasicTableColumn<MappingRow>> = [
  { field: "to", name: "to", truncateText: true, sortable: true },
  { field: "toScheme", name: "toScheme", truncateText: true, sortable: true },
  { field: "creator", name: "creator", truncateText: true, sortable: true },
  { field: "type", name: "type", truncateText: true, sortable: true },
  { field: "created", name: "created", truncateText: true, sortable: true },
];

const items: MappingRow[] = [];

function MappingListDetailWidget(props: MappingListDetailWidgetProps) {
  const { api, iri } = props;

  return (
    <EuiPanel paddingSize="m">
      <EuiInMemoryTable<MappingRow>
        css={css`
          tbody .euiTableRow:nth-of-type(odd) {
            background-color: #ffffff;
          }
          tbody .euiTableRow:nth-of-type(even) {
            background-color: #fce4ea;
          }
        `}
        tableCaption="Mapping list"
        responsiveBreakpoint={false}
        items={items}
        columns={columns}
        pagination={true}
      />
    </EuiPanel>
  );
}

function WrappedMappingListDetailWidget(props: MappingListDetailWidgetProps) {
  return <MappingListDetailWidget api={props.api} iri={props.iri} />;
}

export { MappingListDetailWidget };
export default WrappedMappingListDetailWidget;
