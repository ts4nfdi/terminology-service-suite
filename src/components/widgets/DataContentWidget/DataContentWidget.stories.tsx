import React from "react";
import { DataContentWidget, DataContentWidgetProps } from "./DataContentWidget";

export default {
  title: "DataContentWidget",
  component: DataContentWidget,
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
    frontend: {
      defaultValue: "nfdi4health",
    },
  },
};

const Template = (args: DataContentWidgetProps) => (
  <>
    <DataContentWidget {...args} />
  </>
);

export const DataContentWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DataContentWidget1.args = {  api: "https://semanticlookup.zbmed.de/api/",
};
