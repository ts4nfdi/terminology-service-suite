import React from "react";
import { EntityRelationsWidget } from "./EntityRelationsWidget";
import {EntityRelationsWidgetProps} from "../../../utils/types";
import {entityTypeNames} from "../../../model/ModelTypeCheck";

export default {
    title: "EntityRelationsWidget",
    component: EntityRelationsWidget,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        api: {
            control: {
                type: "radio",
            },
            options: [
                "https://www.ebi.ac.uk/ols4/api/",
                "https://semanticlookup.zbmed.de/ols/api/",
                "https://semanticlookup.zbmed.de/api/",
                "https://ols4.qa.km.k8s.zbmed.de/ols4/api/"
            ],
        },
        hasTitle: {
            type: { required: false },
        },
        entityType: {
            table: {
                type: { summary: `${entityTypeNames.join(" | ")}` },
            },
            control: {
                type: "radio",
            },
            options: [
                "ontology",
                "term",
                "class",
                "property",
                "individual",
                undefined,
                "INVALID STRING"
            ],
        },
        iri: {},
        parameter: {
            type: { required: false }
        },
        ontologyId: {
            type: { required: false }
        },
        showBadges: {}
    },
    args: {
        hasTitle: true,
        showBadges: true,
    }
};

const Template = (args: EntityRelationsWidgetProps) => (
    <EntityRelationsWidget {...args} />
);

export const SubEntityOf = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SubEntityOf.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "term",
    ontologyId: "agro",
    iri: "http://purl.obolibrary.org/obo/AGRO_00000002",
};

export const AllValuesFrom = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
AllValuesFrom.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "term",
    ontologyId: "go",
    iri: "http://purl.obolibrary.org/obo/BFO_0000004",
};

export const DifferentFrom = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DifferentFrom.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "individual",
    ontologyId: "bco",
    iri: "http://purl.obolibrary.org/obo/IAO_0000120",
};

export const EquivalentTo = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
EquivalentTo.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "term",
    ontologyId: "go",
    iri: "http://purl.obolibrary.org/obo/GO_0048021",
};

export const SingleValue = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SingleValue.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "term",
    ontologyId: "bfo",
    iri: "http://purl.obolibrary.org/obo/BFO_0000001",
};

export const InverseOf = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
InverseOf.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "property",
    ontologyId: "ro",
    iri: "http://purl.obolibrary.org/obo/RO_0000057",
};

export const PropertyChain = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
PropertyChain.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "property",
    ontologyId: "ro",
    iri: "http://purl.obolibrary.org/obo/RO_0002170",
};

export const Instances = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Instances.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "term",
    ontologyId: "iao",
    iri: "http://purl.obolibrary.org/obo/IAO_0000078",
};

export const Axioms = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Axioms.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "term",
    ontologyId: "aism",
    iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
};

export const QualifiedCardinality = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
QualifiedCardinality.args = {
    api: "https://www.ebi.ac.uk/ols4/api/",
    entityType: "term",
    ontologyId: "foodon",
    iri: "http://purl.obolibrary.org/obo/FOODON_00003382",
};
