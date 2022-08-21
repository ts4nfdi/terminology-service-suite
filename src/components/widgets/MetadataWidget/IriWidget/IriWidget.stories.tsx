import React from "react";
import { IriWidget, IriWidgetProps } from "./IriWidget";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "IriWidget",
  component: IriWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    iri: {
      description: "Iri of the term that should be displayed.",
    },
    iriText: {
      description: "Alternative text to display.",
    },
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
    color: {
      description: "Color of the link",
      control: {
        type: "radio",
        options: [
          "primary",
          "accent",
          "success",
          "warning",
          "danger",
          "ghost",
          "text",
          "subdued",
        ],
      },
    },
  },
};

const Template = (args: IriWidgetProps) => (
  <>
    <EuiPanel>
      <IriWidget {...args} />
    </EuiPanel>{" "}
  </>
);

export const IriWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
IriWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
};
