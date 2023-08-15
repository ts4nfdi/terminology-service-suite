import React from "react";
import { DataContentWidget } from "./DataContentWidget";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DataContentWidget> = {
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
        "https://www.ebi.ac.uk/ols/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    parameter: {},
  },
  render: (args) => <DataContentWidget {...args} />,
};

export default meta;

type Story = StoryObj<typeof DataContentWidget>;

export const NFDI4HealthDataContentWidget: Story = {
  args: {
    api: "https://semanticlookup.zbmed.de/api/",
    parameter: "collection=nfdi4health",
  }
}

export const SafetyDataContentWidget: Story = {
  args: {
    api: "https://semanticlookup.zbmed.de/api/",
    parameter: "collection=safety",
  }
}
