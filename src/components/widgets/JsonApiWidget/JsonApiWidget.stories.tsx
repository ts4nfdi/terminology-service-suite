import React from "react";
import { JsonApiWidget, JsonApiWidgetProps } from "./JsonApiWidget";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "JsonApiWidget",
  component: JsonApiWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    apiQuery: {
      description: "The API query whose response JSON should be displayed on click.",
    },
    buttonText: {
      description: "The text displayed on the button.",
    },
    buttonSize: {
      description:
        "Size of the button",
      control: {
        type: "radio",
      },
      options: [
        "s",
        "m",
      ],
    },
  },
};

const Template = (args: JsonApiWidgetProps) => (
  <EuiPanel>
    <JsonApiWidget {...args} />
  </EuiPanel>
);

export const JsonApiWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
JsonApiWidget1.args = {
  apiQuery: "https://semanticlookup.zbmed.de/ols/api/ontologies/atc",
  buttonText: "show JSON",
  buttonSize: "m",
};
