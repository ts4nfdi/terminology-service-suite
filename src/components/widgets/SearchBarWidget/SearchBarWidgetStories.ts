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
    api: "https://www.ebi.ac.uk/ols4/api/",
    query: "*"
  }
};

export const TibNFDI4CHEM = {
  args: {
    api: "https://service.tib.eu/ts4tib/api/",
    parameter: "classification=NFDI4CHEM&schema=collection"
  }
};

export const TibDataPlant = {
  args: {
    api: "https://service.tib.eu/ts4tib/api/",
    parameter: "classification=DataPLANT&schema=collection"
  }
};