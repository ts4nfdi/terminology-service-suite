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
      description: "Instance of the OLS API to call.",
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
          "https://semanticlookup.zbmed.de/api/",
        ],
      },
    },
    ontologyId: {
      description: "Ontology ID from where the term information should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the tab information for.",
    },
    parameter: {
      defaultValue: "collection=nfdi4health",
      type: { required: false }
    },
    entityType: {
      description: "Sets the type of the entity whose information you want to fetch. Accepts 'term', 'class', 'property', or 'individual'.",
      control: {
        type: "radio",
        options: [
          "term",
          "class",
          "property",
          "individual",
          "INVALID STRING"
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
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  entityType: "term"
};
