import {HierarchyWidget} from "./HierarchyWidget";
import {HierarchyWidgetStoryArgs, HierarchyWidgetStoryArgTypes} from "./HierarchyWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../../../app/util";
import {HierarchyDescription} from "../../../../../app/widgetDescriptions";

export default {
    title: "Hierarchy and Graph/HierarchyWidget",
    component: HierarchyWidget,
    parameters: {
        layout: "centered",
        docs: {
            source: {
                transform: manuallyEmbedOnNavigate
            },
            description: {
                component: HierarchyDescription
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
    OntoportalHierarchy,
    OLS3Hierarchy
} from "./HierarchyWidgetStories";