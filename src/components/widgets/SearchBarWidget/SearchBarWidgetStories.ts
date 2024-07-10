export const SearchBarWidgetStoryArgTypes = {
  api: {
    control: {
      type: "radio"
    },
    options: [
      "https://www.ebi.ac.uk/ols4/api/",
      "https://semanticlookup.zbmed.de/ols/api/",
      "https://semanticlookup.zbmed.de/api/",
      "https://service.tib.eu/ts4tib/api/"
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