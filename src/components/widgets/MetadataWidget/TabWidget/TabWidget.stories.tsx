import React from "react";
import { TabWidget } from "./TabWidget";
import {TabWidgetProps} from "../../../../utils/types";
import {entityTypeNames} from "../../../../model/ModelTypeCheck";

export default {
  title: "TabWidget",
  component: TabWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
        "https://service.tib.eu/ts4tib/api/"
      ],
    },
    ontologyId: {},
    iri: {
      description: "Iri of the term you want to fetch the tab information for.",
    },
    parameter: {
      type: { required: false }
    },
    entityType: {
      type: { required: false },
      table: {
        type: { summary: `${entityTypeNames.join(" | ")}` },
      },
      control: {
        type: "radio",
      },
      options: [
        "term",
        "class",
        "property",
        "individual",
        undefined,
        "INVALID STRING"
      ],
    },
  },
  args: {
    parameter: "collection=nfdi4health",
    useLegacy: true,
  }
};

const Template = (args: TabWidgetProps) => <TabWidget {...args} />;

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Default.storyName = "Default"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Default.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "hp",
  iri: "http://purl.obolibrary.org/obo/HP_0000819",
  useLegacy: true
};
export const TabWidgetOLS3 = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabWidgetOLS3.storyName = "OLS3"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabWidgetOLS3.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "efo",
  iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
  useLegacy: true
};
export const TabWidgetOLS4V1 = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabWidgetOLS4V1.storyName = "OLS4 V1"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabWidgetOLS4V1.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  ontologyId: "efo",
  iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
  useLegacy: true
};
export const TabWidgetOLS4V2 = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabWidgetOLS4V2.storyName = "OLS4 V2"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabWidgetOLS4V2.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  ontologyId: "efo",
  iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
  useLegacy: false,
  parameter: ""
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  entityType: "term",
  parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  entityType: "term",
  parameter: ""
};
