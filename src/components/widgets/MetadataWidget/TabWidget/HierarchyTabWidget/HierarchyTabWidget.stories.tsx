import React from "react";

import { HierarchyTabWidget } from "./HierarchyTabWidget";

export default {
  title: "HierarchyTabWidget",
  component: HierarchyTabWidget,
};

export const HierarchyTabWidget1 = () => (
      <HierarchyTabWidget
        iri={"http://purl.bioontology.org/ontology/MESH/D003704"}
        linkToSelf={
          "https://semanticlookup.zbmed.de/ols/api/ontologies/mesh/terms/"
        }
      />
);
