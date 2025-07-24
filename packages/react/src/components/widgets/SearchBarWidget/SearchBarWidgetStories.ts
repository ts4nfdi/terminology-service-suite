import * as globals from "../../../app/globals";

import {
  apiArgType,
  parameterArgType,
  queryArgType,
  selectionChangedEventArgType,
} from "../../../stories/storyArgs";
import { action } from "@storybook/addon-actions";
import { expect, waitFor, within } from "@storybook/test";

export const SearchBarWidgetStoryArgTypes = {
  ...apiArgType,
  ...selectionChangedEventArgType,
  ...parameterArgType,
  ...queryArgType,
};

export const SearchBarWidgetStoryArgsReact = {
  api: "",
  query: "",
  selectionChangedEvent: action("selectionChangedEvent"),
  parameter: "collection=nfdi4health",
};

export const SearchBarWidgetStoryArgs = {
  api: "",
  query: "",
  selectionChangedEvent: () => {
    return;
  },
  parameter: "collection=nfdi4health",
};

export const SearchBarWidgetDefaultArgs = {
    api: globals.EBI_API_ENDPOINT,
    query: "*",
};

export const TibNFDI4CHEMArgs = {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=NFDI4CHEM&schema=collection",
};

export const TibDataPlantArgs = {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=DataPLANT&schema=collection",
};

export const commonSearchBartWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('search-bar');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};