import React from "react";
import { TitleWidget, TitleWidgetProps } from "./TitleWidget";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "TitleWidget",
  component: "TitleWidget",
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
    ontologyID: {
      description: "Ontology ID from where the object title/label should be taken.",
    },
    entityType: {
      description: "Sets the type of the object whose title/label you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
      control: {
        type: "radio",
        options: [
          "ontology",
          "term",
          "class",
          "property",
          "individual",
          "INVALID STRING"
        ],
      },
    },
    iri: {
      description: "Object IRI whose label you want to fetch. For ontologies this is ignored, since the 'ontologyID' arg is sufficient.",
    },
    titleText: {
      description:
        "Set your own text manually that overwrites the text fetched from the API",
    },
    parameter: {
      defaultValue: "collection=nfdi4health",
      type: { required: false }
    },
  },
};

const Template = (args: TitleWidgetProps) => (
  <>
    <EuiPanel>
      <TitleWidget {...args} />
    </EuiPanel>
  </>
);

export const TitleWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TitleWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",  api: "https://semanticlookup.zbmed.de/api/",
  ontologyID: "ncit",
  entityType: "term",
};
