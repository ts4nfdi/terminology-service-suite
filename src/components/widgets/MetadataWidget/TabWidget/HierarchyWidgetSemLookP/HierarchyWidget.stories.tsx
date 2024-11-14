import {HierarchyWidget} from "./HierarchyWidget";
import {HierarchyWidgetStoryArgs, HierarchyWidgetStoryArgTypes} from "./HierarchyWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../../../app/util";

export default {
    title: "HierarchyWidget",
    component: HierarchyWidget,
    parameters: {
        layout: "centered",
        docs: {
            source: {
                transform: manuallyEmbedOnNavigate
            }
        },
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