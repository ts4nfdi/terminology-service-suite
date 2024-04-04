import React from "react";
import {DataContentWidget} from "./DataContentWidget";
import {DataContentWidgetProps} from "../../../utils/types";

export default {
  title: "DataContentWidget",
  component: DataContentWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
        "https://service.tib.eu/ts4tib/api/"
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
  parameter: "collection=nfdi4health",
  useLegacy: true
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
