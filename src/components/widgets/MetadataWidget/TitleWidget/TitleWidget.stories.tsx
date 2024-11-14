import {TitleWidget} from "./TitleWidget";
import {TitleWidgetStoryArgs, TitleWidgetStoryArgTypes} from "./TitleWidgetStories";

export default {
    title: "TitleWidget",
    component: TitleWidget,
    parameters: {
        layout: "centered",
    },
    argTypes: TitleWidgetStoryArgTypes,
    args: TitleWidgetStoryArgs
};

export {
    TitleWidgetDefault,
    TitleWidgetWithTitleText,
    IncorrectIriWithDefaultValue,
    IncorrectIriWithoutDefaultValue,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    TitleWidgetWithStyles
} from "./TitleWidgetStories";
