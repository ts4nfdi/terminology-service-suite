import React from "react";
import { HierarchyTabIF, HierarchyTabWidget } from "./HierarchyTabWidget";

export default {
  title: "HierarchyTabWidget",
  component: HierarchyTabWidget,
  argTypes: {
    api: {
      description: "API",
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
        ],
      },
    },
  },
};

const Template = (args: HierarchyTabIF) => <HierarchyTabWidget {...args} />;

export const HierarchyTabWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HierarchyTabWidget1.args = {
  iri: "http://purl.bioontology.org/ontology/MESH/D003704",
  api: "https://semanticlookup.zbmed.de/ols/api/",
  linkToSelf: "https://semanticlookup.zbmed.de/ols/api/ontologies/mesh/terms/",
};
