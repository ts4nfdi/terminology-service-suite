import React from "react";
import {ResourcesWidget} from "./ResourcesWidget";
import {ResourcesWidgetProps, OlsResource} from "../../../utils/types";
import { EuiButton, EuiButtonIcon } from "@elastic/eui";

export default {
  title: "ResourcesWidget",
  component: ResourcesWidget,
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
      ],
    },
    initialEntriesPerPage: {
      control: "number",
    },
    pageSizeOptions: {
      control: "array",
    },
    initialSortField: {
      control: {
        type: "radio",
      },
      options: ["config.title", "config.preferredPrefix", "config.loaded"],
    },
    initialSortDir: {
      table: {
        type: { summary: `asc | desc` },
      },
      control: {
        type: "radio",
      },
      options: ["asc", "desc"],
    },
    targetLink: {
      control: "text",
    },
    actions: {},
    parameter: {
      type: { required: false }
    },
  },
  args: {
    parameter: "collection=nfdi4health",
  }
};

const Template = (args : ResourcesWidgetProps) => (
  <ResourcesWidget {...args} />
);

export const ResourcesWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ResourcesWidget1.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  initialEntriesPerPage: 10,
  pageSizeOptions: [10, 25, 50, 100],
  initialSortField: "config.preferredPrefix",
  initialSortDir: "asc" as const,
  targetLink: "https://semanticlookup.zbmed.de/dev/",
  parameter: "collection=nfdi4health"
};
export const WithActions = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithActions.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ...ResourcesWidget1.args,
  actions: [
    // TODO Allow usage of react-router links
    {
      render: (item: OlsResource) => (
        <EuiButtonIcon
          href="" // TODO Add working link
          iconType="search"
          aria-label="Search"
        />
      ),
    },
    {
      render: (item: OlsResource) => (
        <EuiButton href="" size="s">
          Show terms
        </EuiButton> // TODO Add working link
      ),
    },
    {
      render: (item: OlsResource) => (
        <EuiButton href="" size="s">
          Show properties
        </EuiButton> // TODO Add working link
      ),
    },
    {
      render: (item: OlsResource) => (
        <EuiButton href="" size="s">
          Show individuals
        </EuiButton> // TODO Add working link
      ),
    },
  ],
};

export const WithActionsAndSafety = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithActionsAndSafety.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ...WithActions.args,
  targetLink: "https://semanticlookup.zbmed.de/safety/",
  parameter: "collection=safety",
};
