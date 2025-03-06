import { OlsResource } from "../../../app/types";
import { EuiButton, EuiButtonIcon } from "@elastic/eui";
import React from "react";
import * as globals from "../../../app/globals";
import {
  actionsArgType,
  apiArgType,
  initialEntriesPerPageArgType,
  initialSortDirArgType,
  initialSortFieldArgType,
  pageSizeOptionsArgType,
  parameterArgType,
  onNavigateArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";

export const ResourcesWidgetStoryArgTypes = {
  ...apiArgType,
  ...initialEntriesPerPageArgType,
  ...pageSizeOptionsArgType,
  ...initialSortFieldArgType,
  ...initialSortDirArgType,
  ...actionsArgType,
  ...parameterArgType,
  ...onNavigateArgType,
  ...useLegacyArgType,
};

export const ResourcesWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  initialEntriesPerPage: 100,
  pageSizeOptions: [10, 25, 50, 100],
  initialSortField: "config.preferredPrefix",
  initialSortDir: "asc",
  actions: [],
  onNavigate: "Console message",
  parameter: "collection=nfdi4health",
};

export const ResourcesWidget1 = {
  args: {
    api: globals.ZBMED_OLS4_GATEWAY_API,
    initialEntriesPerPage: 100,
    pageSizeOptions: [10, 25, 50, 100],
    initialSortField: "config.preferredPrefix",
    initialSortDir: "asc" as const,
    onNavigate: "Console message",
    parameter: "collection=nfdi4health",
  },
};

export const WithActions = {
  args: {
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
  },
};

export const WithActionsAndSafety = {
  args: {
    ...WithActions.args,
    parameter: "collection=safety",
  },
};

export const ResourcesWidgetLogos = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    initialEntriesPerPage: 100,
    pageSizeOptions: [10, 25, 50, 100],
    initialSortField: "config.preferredPrefix",
    initialSortDir: "asc" as const,
    targetLink: "https://semanticlookup.zbmed.de/dev/",
    parameter: "",
    useLegacy: false,
  },
};
