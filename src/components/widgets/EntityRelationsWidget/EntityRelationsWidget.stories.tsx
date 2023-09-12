import React from "react";
import { EntityRelationsWidget, EntityRelationsWidgetProps } from "./EntityRelationsWidget";

export default {
    title: "EntityRelationsWidget",
    component: EntityRelationsWidget,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        api: {
            description: "Instance of the OLS API to call.",
            control: {
                type: "radio",
            },
            options: [
                "https://www.ebi.ac.uk/ols4/api/v2",
                "https://semanticlookup.zbmed.de/ols/api/",
                "https://semanticlookup.zbmed.de/api/",
            ],
        },
        hasTitle: {
            description: "Show title, default is true",
            type: { required: false },
        },
        entityType: {
            description: "Sets the type of the entity whose information you want to fetch. Accepts 'term', 'class', 'property', or 'individual'.",
            control: {
                type: "radio",
            },
            options: [
                "ontology",
                "term",
                "class",
                "property",
                "individual",
                "INVALID STRING"
            ],
        },
        iri: {
            description: "Entity IRI whose information you want to fetch.",
        },
        parameter: {
            type: { required: false }
        },
        ontologyId: {
            type: { required: false }
        }
    },
    args: {
        hasTitle: true,
    }
};

const Template = (args: EntityRelationsWidgetProps) => (
    <EntityRelationsWidget {...args} />
);

export const SubEntityOf = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SubEntityOf.args = {
    api: "https://www.ebi.ac.uk/ols4/api/v2",
    entityType: "term",
    ontologyId: "go",
    iri: "http://purl.obolibrary.org/obo/GO_0051296",
};

export const DifferentFrom = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DifferentFrom.args = {
    api: "https://www.ebi.ac.uk/ols4/api/v2",
    entityType: "individual",
    ontologyId: "bco",
    iri: "http://purl.obolibrary.org/obo/IAO_0000120",
};
