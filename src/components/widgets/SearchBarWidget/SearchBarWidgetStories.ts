import * as globals from '../../../app/globals';

import { apiArgType, parameterArgType, queryArgType, selectionChangedEventArgType } from "../../../stories/storyArgs";
import { action } from "@storybook/addon-actions";

export const SearchBarWidgetStoryArgTypes = {
  ...apiArgType,
  ...selectionChangedEventArgType,
  ...parameterArgType,
  ...queryArgType
};

export const SearchBarWidgetStoryArgsReact = {
  api: "",
  query: "",
  selectionChangedEvent: action('selectionChangedEvent'),
  parameter: "collection=nfdi4health",
};

export const SearchBarWidgetStoryArgs = {
  api: "",
  query: "",
  selectionChangedEvent: () => {return;},
  parameter: "collection=nfdi4health",
};

export const SearchBarWidgetDefault = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    query: "*"
  }
};

export const TibNFDI4CHEM = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=NFDI4CHEM&schema=collection"
  }
};

export const TibDataPlant = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=DataPLANT&schema=collection"
  }
};