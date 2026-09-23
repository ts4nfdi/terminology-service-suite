import { EuiPanel, EuiProvider, EuiText } from "@elastic/eui";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { JskosMappingApi } from "../../../api/coli-conc/JskosMappingAPI";
import { MappingDetailWidgetProps } from "../../../app";
import MappingDetailPresentation from "./MappingDetailPresentation";
import { toMappingDetail } from "./Utils/mappingUtils";

function MappingDetailWidget(props: MappingDetailWidgetProps) {
  const { api, source, target, MappingDetailBackgroundColor } = props;

  const jskosMappingApi = useMemo(() => new JskosMappingApi(api), [api]);

  const { data, isLoading, isError, error } = useQuery(
    ["mappings", api, source],
    () => {
      return jskosMappingApi.getMappingsByFrom(source);
    },
  );

  /**
   * ColiConc returns every mapping of the source, so the target picks which of
   * them this card is about.
   */
  const mapping = (data ?? []).find((item: any) => {
    return (item.to?.memberSet ?? []).some((member: any) => {
      return member.uri === target;
    });
  });

  if (isLoading) {
    return (
      <EuiPanel paddingSize="m">
        <EuiText>Loading mapping...</EuiText>
      </EuiPanel>
    );
  }

  if (isError) {
    return (
      <EuiPanel paddingSize="m">
        <EuiText color="danger">
          Failed to load mapping:{" "}
          {error instanceof Error ? error.message : String(error)}
        </EuiText>
      </EuiPanel>
    );
  }

  if (!mapping) {
    return (
      <EuiPanel paddingSize="m">
        <EuiText>No mapping found from this source to this target.</EuiText>
      </EuiPanel>
    );
  }

  return (
    <MappingDetailPresentation
      mapping={toMappingDetail(mapping)}
      MappingDetailBackgroundColor={MappingDetailBackgroundColor}
    />
  );
}

/**
 * Brings its own EUI and react-query providers, the way the other widgets do,
 * so the widget also renders and fetches inside a plain host application.
 */
export function WrappedMappingDetailWidget(props: MappingDetailWidgetProps) {
  const queryClient = new QueryClient();

  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <MappingDetailWidget {...props} />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { MappingDetailWidget };
export default WrappedMappingDetailWidget;
