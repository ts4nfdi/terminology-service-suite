import * as globals from "../../../app/globals";

import { apiArgType, parameterArgType } from "../../../stories/storyArgs";

export const DataContentWidgetStoryArgTypes = {
  ...apiArgType,
  ...parameterArgType,
};

export const DataContentWidgetStoryArgs = {
  api: "",
  parameter: "",
};

export const NFDI4HealthDataContentWidget = {
  args: {
    api: globals.ZBMED_API_ENDPOINT,
    parameter: "collection=nfdi4health",
  },
};

export const SafetyDataContentWidget = {
  args: {
    api: globals.ZBMED_API_ENDPOINT,
    parameter: "collection=safety",
  },
};

export const ErrorDataContentWidget = {
  args: {
    api: globals.ZBMED_API_ENDPOINT,
    parameter: "collection=safety",
  },
};
