import React from "react";
import {
  OlsResource,
  ResourcesWidget,
  ResourcesWidgetProps,
} from "./ResourcesWidget";
import { ComponentStory } from "@storybook/react";
import { EuiButton, EuiButtonIcon } from "@elastic/eui";

export default {
  title: "ResourcesWidget",
  component: ResourcesWidget,
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
    initialEntriesPerPage: {
      description: "Initial number of entries displayed per page.",
      control: "number",
    },
    pageSizeOptions: {
      description: "Possible values for number of entries displayed per page.",
      control: "array",
    },
    initialSortField: {
      description: "Column the table is sorted by initially.",
      control: {
        type: "radio",
        options: ["config.title", "config.preferredPrefix", "config.loaded"],
      },
    },
    initialSortDir: {
      description: "Initial sorting direction.",
      control: {
        type: "radio",
        options: ["asc", "desc"],
      },
    },
    actions: {},
  },
};

const Template: ComponentStory<typeof ResourcesWidget> = (args) => (
  <ResourcesWidget {...args} />
);

export const ResourcesWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ResourcesWidget1.args = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  initialEntriesPerPage: 10,
  pageSizeOptions: [10, 25, 50, 100],
  initialSortField: "config.preferredPrefix",
  initialSortDir: "asc" as const,
};
export const withActions = Template.bind({});
withActions.args = {
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
