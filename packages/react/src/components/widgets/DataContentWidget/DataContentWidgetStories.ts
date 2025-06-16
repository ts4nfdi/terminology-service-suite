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

export const NFDI4HealthDataContentWidgetArgs = {
    api: globals.ZBMED_OLS4_API,
    parameter: "collection=nfdi4health",
};

export const SafetyDataContentWidgetArgs = {
    api: globals.ZBMED_OLS4_API,
    parameter: "collection=safety",
};

export const ErrorDataContentWidgetArgs = {
    api: globals.ZBMED_OLS4_API,
    parameter: "collection=safety",
};
