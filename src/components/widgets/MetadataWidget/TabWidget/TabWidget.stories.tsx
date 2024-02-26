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
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    ontologyId: {
      description: "Ontology ID from where the term information should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the tab information for.",
    },
    parameter: {
      type: { required: false }
    },
    entityType: {
      description: "Sets the type of the entity whose information you want to fetch. Accepts 'term', 'class', 'property', or 'individual'.",
      control: {
        type: "radio",
      },
      options: [
        "term",
        "class",
        "property",
        "individual",
        "INVALID STRING"
      ],
    },
  }
};

const Template = (args: TabWidgetProps) => <TabWidget {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.storyName = "Default"
// @ts-ignore
Default.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "hp",
  iri: "http://purl.obolibrary.org/obo/HP_0000819",
  useLegacy: true
};
export const TabWidgetOLS3 = Template.bind({});
// @ts-ignore
TabWidgetOLS3.storyName = "OLS3"
// @ts-ignore
TabWidgetOLS3.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "efo",
  iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
  useLegacy: true
};
export const TabWidgetOLS4V1 = Template.bind({});
// @ts-ignore
TabWidgetOLS4V1.storyName = "OLS4 V1"
// @ts-ignore
TabWidgetOLS4V1.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  ontologyId: "efo",
  iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
  useLegacy: true
};
export const TabWidgetOLS4V2 = Template.bind({});
// @ts-ignore
TabWidgetOLS4V2.storyName = "OLS4 V2"
// @ts-ignore
TabWidgetOLS4V2.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  ontologyId: "efo",
  iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
  useLegacy: false
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  entityType: "term",
  parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  entityType: "term",
  parameter: ""
};
