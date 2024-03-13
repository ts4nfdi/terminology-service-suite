import { EntityRelationsWidget } from "./EntityRelationsWidget";
import {EntityRelationsWidgetStoryArgs, EntityRelationsWidgetStoryArgTypes} from "root/src/components/widgets/EntityRelationsWidget/EntityRelationsWidgetStories";

export default {
    title: "EntityRelationsWidget",
    component: EntityRelationsWidget,
    parameters: {
        layout: "centered",
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
    QualifiedCardinality
} from "root/src/components/widgets/EntityRelationsWidget/EntityRelationsWidgetStories"