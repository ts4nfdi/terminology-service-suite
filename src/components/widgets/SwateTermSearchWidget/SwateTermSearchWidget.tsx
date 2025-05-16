import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import ReactDOM from "react-dom";
import TermSearch from "@nfdi4plants/swate-components";


function SwateTermSearchWidget() {
  return (
    <TermSearch />
  )
}



function createSwateTermSearch(
  props: any,
  container: Element,
  callback?: () => void
) {
  ReactDOM.render(WrappedSwateWidget(), container, callback);
}


function WrappedSwateWidget() {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <SwateTermSearchWidget />
      </QueryClientProvider>
    </EuiProvider>
  )
}

export { SwateTermSearchWidget, createSwateTermSearch }


