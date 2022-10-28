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
        ],
      },
    },
    onto: {
      description: "Ontology ID from where the term label should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the term label for.",
    },
    termText: {
      description: "Text that replaces the fetched text.",
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
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
  onto: "ncit",
};
