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
    TitleWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "./TitleWidgetStories";
