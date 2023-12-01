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
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
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

const Template = (args: DataContentWidgetProps) => (
  <DataContentWidget {...args} />
);

export const NFDI4HealthDataContentWidget = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
NFDI4HealthDataContentWidget.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  parameter: "collection=nfdi4health"
};

export const SafetyDataContentWidget = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SafetyDataContentWidget.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  parameter: "collection=safety",
};

export const ErrorDataContentWidget = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ErrorDataContentWidget.args = {
  api: "ht3ps://semanticlookup.zbmed.de/api/",
  parameter: "collection=safety",
};
