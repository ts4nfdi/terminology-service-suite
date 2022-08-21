import React from "react";
import { TermWidget, TermWidgetProps } from "./TermWidget";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "TermWidget",
  component: "TermWidget",
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
      description: "Iri of the term you want to fetch the term name for.",
    },
    termText: {
      description: "Text that replaces the fetched text.",
    },
  },
};

const Template = (args: TermWidgetProps) => (
  <>
    <EuiPanel>
      <TermWidget {...args} />
    </EuiPanel>
  </>
);

export const TermWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TermWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
};
