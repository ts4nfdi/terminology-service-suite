import { apiQueryArgType, buttonSizeArgType, buttonTextArgType } from "../../../stories/storyArgs";

export const JsonApiWidgetStoryArgTypes = {
    ...apiQueryArgType,
    ...buttonSizeArgType,
    ...buttonTextArgType
}

export const JsonApiWidgetStoryArgs = {
    apiQuery: "",
    buttonText: "",
    buttonSize: ""
}

export const JsonApiWidgetDefault = {
    args: {
        apiQuery: "https://semanticlookup.zbmed.de/ols/api/ontologies/atc",
        buttonText: "show JSON",
        buttonSize: "m",
    }
};
