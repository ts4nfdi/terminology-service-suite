import {HierarchyWidget} from "./HierarchyWidget";
import {HierarchyWidgetStoryArgs, HierarchyWidgetStoryArgTypes} from "./HierarchyWidgetStories";

export default {
    title: "HierarchyWidget",
    component: HierarchyWidget,
    parameters: {
        layout: "centered",
    },
    argTypes: HierarchyWidgetStoryArgTypes,
    args: HierarchyWidgetStoryArgs
};

export {
    ClassHierarchy,
    IndividualHierarchy,
    PreferredRoots,
    IncludeObsoleteEntities,
    PropertyRoots,
    IndividualRoots,
    LargeHierarchy,
    SkosHierarchy,
    SagePubHierarchy,
    OntoportalHierarchy
} from "./HierarchyWidgetStories";