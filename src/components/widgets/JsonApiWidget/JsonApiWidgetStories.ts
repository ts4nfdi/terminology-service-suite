import * as globals from "../../../app/globals";

import {
  apiQueryArgType,
  buttonSizeArgType,
  buttonTextArgType,
} from "../../../stories/storyArgs";

export const JsonApiWidgetStoryArgTypes = {
  ...apiQueryArgType,
  ...buttonSizeArgType,
  ...buttonTextArgType,
};

export const JsonApiWidgetStoryArgs = {
  apiQuery: "",
  buttonText: "",
  buttonSize: "",
};

export const JsonApiWidgetDefault = {
  args: {
    apiQuery: globals.ZBMED_OLS4_API + "ontologies/atc",
    buttonText: "show JSON",
    buttonSize: "m",
  },
};
