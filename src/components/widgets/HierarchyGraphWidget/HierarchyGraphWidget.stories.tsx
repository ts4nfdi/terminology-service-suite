import { HierarchyGraphWidget } from "./HierarchyGraphWidget";
import {HierarchyGraphWidgetStoryArgs, HierarchyGraphWidgetStoryArgTypes} from "./HierarchyGraphWidgetStories";

export default {
    title: "HierarchyGraphWidget",
    component: HierarchyGraphWidget,
    parameters: {
        layout: "centered",
    },
    argTypes: HierarchyGraphWidgetStoryArgTypes,
    args: HierarchyGraphWidgetStoryArgs
};

export {
    OLS4V2Class,
    OLS4V2Ontology
} from "./HierarchyGraphWidgetStories"


