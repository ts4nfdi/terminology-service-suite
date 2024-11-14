import { EntityRelationsWidget } from "./EntityRelationsWidget";
import {EntityRelationsWidgetStoryArgs, EntityRelationsWidgetStoryArgTypes} from "./EntityRelationsWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../app/util";

export default {
    title: "EntityRelationsWidget",
    component: EntityRelationsWidget,
    parameters: {
        layout: "centered",
        docs: {
            source: {
                transform: manuallyEmbedOnNavigate
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