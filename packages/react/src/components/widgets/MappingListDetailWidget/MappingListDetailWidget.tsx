import {
  EuiBasicTableColumn,
  EuiInMemoryTable,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { ColiConcApi } from "../../../api/coli-conc/ColiConcAPI";
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

function MappingListDetailWidget(props: MappingListDetailWidgetProps) {
  const { api, iri } = props;

  const [items, setItems] = useState<MappingRow[]>([]);

  async function fetchMappings() {
    try {
      if (!api || !iri) return;
      const mappingApi = new ColiConcApi(api);
      const response = await mappingApi.getMappingsByFrom(iri);
      // the notation is :
      // console.log(response[0]["from"]["memberSet"][0]["notation"][0]);
      // console.log(response[0].to?.memberSet[0]?.notation[0]);

      const rows = response.map((item: any) => ({
        to: item.to?.memberSet?.[0]?.notation?.[0] ?? "—",
        toScheme: item.toScheme?.notation?.[0] ?? "—",
        creator: item.creator?.[0]?.prefLabel?.en ?? "—",
        type: item.type?.[0]?.split("#").pop() ?? "—",
        created: item.created ?? "—",
      }));

      setItems(rows);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchMappings();
  }, [api, iri]);

  return (
    <EuiPanel paddingSize="m">
      <EuiTitle size="s">
        <h2>From: </h2>
      </EuiTitle>

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
        items={items}
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
