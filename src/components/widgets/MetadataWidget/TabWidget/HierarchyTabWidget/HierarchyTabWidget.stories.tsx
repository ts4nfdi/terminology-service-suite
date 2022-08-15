import React from "react";
import {
  HierarchyTabWidget,
  HierarchyTabWidgetProps,
} from "./HierarchyTabWidget";

export default {
  title: "/Widgets/HierarchyTabWidget",
  component: HierarchyTabWidget,
  argTypes: {
    api: {
      description: "API",
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
          "http://localhost:8080/api/",
          "http://localhost:5000/api/",
        ],
      },
    },
  },
};

const Template = (args: HierarchyTabWidgetProps) => (
  <HierarchyTabWidget {...args} />
);

export const HierarchyTabWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HierarchyTabWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
};
