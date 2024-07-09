import {HierarchyWidgetSemLookP} from "./HierarchyWidgetSemLookP";
import {HierarchyWidgetSemLookPStoryArgs, HierarchyWidgetSemLookPStoryArgTypes} from "./HierarchyWidgetSemLookPStories";

export default {
    title: "HierarchyWidgetSemLookP",
    component: HierarchyWidgetSemLookP,
    parameters: {
        layout: "centered",
    },
    argTypes: HierarchyWidgetSemLookPStoryArgTypes,
    args: HierarchyWidgetSemLookPStoryArgs
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
    OntoportalHierarchy
} from "./HierarchyWidgetSemLookPStories";