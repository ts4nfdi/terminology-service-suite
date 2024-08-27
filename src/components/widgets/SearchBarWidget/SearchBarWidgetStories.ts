import * as globals from '../../../app/globals';

export const SearchBarWidgetStoryArgTypes = {
  api: {
    control: {
      type: "radio"
    },
    options: [
        globals.EBI_API_ENDPOINT,
        globals.ZBMED_OLS_API_ENDPOINT,
        globals.ZBMED_API_ENDPOINT,
        globals.TIB_API_ENDPOINT
    ]
  },
  query: {},
  onSearchValueChange: {
    action: "onSearchValueChange"
  },
  selectionChangedEvent: {
      action: "selectionChangedEvent",
    },
  parameter: {}
};

export const SearchBarWidgetStoryArgs = {
  parameter: "collection=nfdi4health",
  onSearchValueChange: () => {
    return;
  }
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