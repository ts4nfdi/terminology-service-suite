import React from "react";
import { TabWidget, TabWidgetProps } from "./TabWidget";

export default {
  title: "TabWidget",
  component: TabWidget,
  parameters: {
    layout: "centered",
  },
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

const Template = (args: TabWidgetProps) => <TabWidget {...args} />;

export const TabWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabWidget1.args = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  linkToSelf: "https://semanticlookup.zbmed.de/ols/api/ontologies/ncit/terms/",
};
