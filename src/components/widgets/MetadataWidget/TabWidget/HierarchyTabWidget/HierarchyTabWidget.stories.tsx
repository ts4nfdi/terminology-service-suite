import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import HierarchyTabWidget from "./HierarchyTabWidget";

export default {
  title: "/Widgets/HierarchyTabWidget",
  component: HierarchyTabWidget,
};

const queryClient = new QueryClient();

export const Template = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <HierarchyTabWidget
        iri={"http://purl.bioontology.org/ontology/MESH/D003704"}
        linkToSelf={
          "https://semanticlookup.zbmed.de/ols/api/ontologies/mesh/terms/"
        }
      />
    </QueryClientProvider>
  </>
);
