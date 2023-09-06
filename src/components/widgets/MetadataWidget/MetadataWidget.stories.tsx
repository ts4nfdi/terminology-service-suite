import React from "react";
import { MetadataWidget, MetadataWidgetProps } from "./MetadataWidget";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "MetadataWidget",
  component: MetadataWidget,
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
        "https://www.ebi.ac.uk/ols/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    ontologyId: {
      description: "Ontology ID from where the term metadata should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the metadata for.",
    },
    entityType: {
      description: "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
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
    parameter: {
      type: { required: false }
    },
  },
  args: {
    parameter: "collection=nfdi4health",
  }
};

const Template = (args: MetadataWidgetProps) => (
  <EuiPanel>
    <MetadataWidget {...args} />
  </EuiPanel>
);

export const MetadataWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
MetadataWidget1.args = {  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  entityType: "term",
  parameter: "collection=nfdi4health"
};
