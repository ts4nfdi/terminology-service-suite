import React from "react";
import { TabWidget } from "./TabWidget";

export default {
  title: "TabWidget",
  component: TabWidget
};


export const TabWidget1 = () => (
           <TabWidget   api={"https://semanticlookup.zbmed.de/ols/api/"}
                        iri={"http://purl.obolibrary.org/obo/NCIT_C2985"}
                        linkToSelf={"https://semanticlookup.zbmed.de/ols/api/ontologies/mesh/terms/"}/>
);



