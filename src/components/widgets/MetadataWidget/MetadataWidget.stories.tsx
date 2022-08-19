import React from "react";
import { MetadataWidget } from "./MetadataWidget";

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
          "http://localhost:8080/api/",
          "http://localhost:5000/api/",
        ],
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template = (args) => <MetadataWidget {...args} />;

export const MetadataWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
MetadataWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
};
