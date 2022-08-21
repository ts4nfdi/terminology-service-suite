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
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
        ],
      },
    },
    iri: {
      description: "Iri of the term you want to fetch the metadata for.",
    },
    linkToSelf: {
      description: "Link to the source of the ontology terms",
    },
  },
};

const Template = (args: MetadataWidgetProps) => (
  <>
    <EuiPanel>
      <MetadataWidget {...args} />
    </EuiPanel>
  </>
);

export const MetadataWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
MetadataWidget1.args = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  linkToSelf: "https://semanticlookup.zbmed.de/ols/api/ontologies/ncit/terms/",
};
