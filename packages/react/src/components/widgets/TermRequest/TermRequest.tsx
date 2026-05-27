"use client";

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";
import { TermRequestProps } from "../../../app";

function TermRequest({ ontologyId }: TermRequestProps) {
  return (
    <div>
      <h1>TermRequest</h1>
      {ontologyId}
    </div>
  );
}

function WrappedTermRequest(props: TermRequestProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <TermRequest {...props} />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { TermRequest, WrappedTermRequest };
