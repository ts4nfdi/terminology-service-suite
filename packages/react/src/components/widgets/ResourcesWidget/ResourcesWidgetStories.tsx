import { EuiButton, EuiButtonIcon } from "@elastic/eui";
import { Action } from "@elastic/eui/src/components/basic_table/action_types";
import { expect, waitFor, within } from "storybook/test";
import { OlsResource } from "../../../app/";
import * as globals from "../../../app/globals";
import {
  actionsArgType,
  apiArgType,
  initialEntriesPerPageArgType,
  initialSortDirArgType,
  initialSortFieldArgType,
  onNavigateArgType,
  pageSizeOptionsArgType,
  parameterArgType,
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
  pageSizeOptions: [10, 25, 50, 100] as number[],
  initialSortField: "config.preferredPrefix",
  initialSortDir: "asc" as "asc" | "desc",
  actions: [],
  onNavigate: "Console message",
  parameter: "",
};

export const ResourcesWidget1Args = {
  api: globals.ZBMED_OLS4_API,
  initialEntriesPerPage: 100,
  pageSizeOptions: [10, 25, 50, 100] as number[],
  initialSortField: "config.preferredPrefix",
  initialSortDir: "asc" as const,
  onNavigate: "Console message",
};

const actions: Array<Action<OlsResource>> = [
  {
    render: (item: OlsResource) => (
      <EuiButtonIcon href="" iconType="search" aria-label="Search" />
    ),
  },
  {
    render: (item: OlsResource) => (
      <EuiButton href="" size="s">
        Show terms
      </EuiButton>
    ),
  },
  {
    render: (item: OlsResource) => (
      <EuiButton href="" size="s">
        Show properties
      </EuiButton>
    ),
  },
  {
    render: (item: OlsResource) => (
      <EuiButton href="" size="s">
        Show individuals
      </EuiButton>
    ),
  },
];

export const WithActionsArgs = {
  ...ResourcesWidget1Args,
  actions: actions,
};

export const ResourcesWidgetLogosArgs = {
  api: globals.EBI_API_ENDPOINT,
  initialEntriesPerPage: 100,
  pageSizeOptions: [10, 25, 50, 100] as number[],
  initialSortField: "config.preferredPrefix",
  initialSortDir: "asc" as const,
  targetLink: "https://semanticlookup.zbmed.de/dev/",
  parameter: "",
  useLegacy: false,
};

export const FAIRagroCollectionArgs = {
  ...ResourcesWidget1Args,
  api: globals.GATEWAY_API_OLS_ENDPOINT,
  useLegacy: false,
  parameter: "collectionId=ff5491d1-d0a9-481e-ac90-0fad065fa097",
};

export const commonResourcesWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("resources");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
