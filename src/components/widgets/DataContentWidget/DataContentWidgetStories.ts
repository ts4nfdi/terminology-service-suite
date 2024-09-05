import { apiArgType, parameterArgType } from "../../../stories/storyArgs";

export const DataContentWidgetStoryArgTypes = {
  ...apiArgType,
  ...parameterArgType
};

export const DataContentWidgetStoryArgs = {
  api: "",
  parameter: ""
};

export const NFDI4HealthDataContentWidget = {
  args: {
    api: "https://semanticlookup.zbmed.de/api/",
    parameter: "collection=nfdi4health"
  }
};

export const SafetyDataContentWidget = {
  args: {
    api: "https://semanticlookup.zbmed.de/api/",
    parameter: "collection=safety"
  }
};

export const ErrorDataContentWidget = {
  args: {
    api: "ht3ps://semanticlookup.zbmed.de/api/",
    parameter: "collection=safety"
  }
};
