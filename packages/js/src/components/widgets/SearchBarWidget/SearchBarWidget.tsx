import { SearchBarWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchBarWidget";
import { SearchBarWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ReactDOM from "react-dom";
import { EuiProvider } from "@elastic/eui";

function createSearchBar(
  props: SearchBarWidgetProps,
  container: any,
  callback?: () => void,
) {
  ReactDOM.render(WrappedSearchBarWidget(props), container, callback);
}

function WrappedSearchBarWidget(props: SearchBarWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <SearchBarWidget
          api={props.api}
          query={props.query}
          selectionChangedEvent={props.selectionChangedEvent}
          parameter={props.parameter}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createSearchBar };
