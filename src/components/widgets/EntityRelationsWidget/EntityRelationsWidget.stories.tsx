import { EntityRelationsWidget } from "./EntityRelationsWidget";
import {EntityRelationsWidgetStoryArgs, EntityRelationsWidgetStoryArgTypes} from "./EntityRelationsWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../app/util";
import {EntityRelationsDescription} from "../../../app/widgetDescriptions";

export default {
    title: "Additional Metadata/EntityRelationsWidget",
    component: EntityRelationsWidget,
    parameters: {
        layout: "centered",
        docs: {
            source: {
                transform: manuallyEmbedOnNavigate
            },
            description: {
                component: EntityRelationsDescription
            }
        }
    },
    argTypes: EntityRelationsWidgetStoryArgTypes,
    args: EntityRelationsWidgetStoryArgs
};

export {
    SubEntityOf,
    AllValuesFrom,
    DifferentFrom,
    EquivalentTo,
    SingleValue,
    InverseOf,
    PropertyChain,
    Instances,
    Axioms,
    QualifiedCardinality,
    NavigateToEBIPage
} from "./EntityRelationsWidgetStories"