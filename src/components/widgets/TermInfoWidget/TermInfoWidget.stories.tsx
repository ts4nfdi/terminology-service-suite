import React from "react";
import { TermInfoWidget, TermInfoWidgetProps } from "./TermInfoWidget";

export default {
  title: "TermInfoWidget",
  component: TermInfoWidget,
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
  },
};

const Template = (args: TermInfoWidgetProps) => (
  <>
    <TermInfoWidget {...args} />
  </>
);

export const TermInfoWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TermInfoWidget1.args = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
};
