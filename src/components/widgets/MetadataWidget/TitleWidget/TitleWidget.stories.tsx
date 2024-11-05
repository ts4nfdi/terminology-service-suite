import {TitleWidget} from "./TitleWidget";
import {TitleWidgetStoryArgs, TitleWidgetStoryArgTypes} from "./TitleWidgetStories";
import {TitleDescription} from "../../../../app/widgetDescriptions";

export default {
    title: "TitleWidget",
    component: TitleWidget,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: TitleDescription
            }
        }
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
