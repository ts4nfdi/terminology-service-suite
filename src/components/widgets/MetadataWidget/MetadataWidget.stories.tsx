import React from "react";
import { MetadataWidget, MetadataWidgetProps } from "./MetadataWidget";

export default {
  title: "MetadataWidget",
  component: MetadataWidget,
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

const Template = (args: MetadataWidgetProps) => <MetadataWidget {...args} />;

export const MetadataWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
MetadataWidget1.args = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  linkToSelf: "https://semanticlookup.zbmed.de/ols/api/ontologies/ncit/terms/",
};
