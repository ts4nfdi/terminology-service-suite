import React from "react";
import {TitleWidget} from "./TitleWidget";
import {TitleWidgetProps} from "../../../../utils/types";
import {EuiPanel} from "@elastic/eui";
import {thingTypeNames} from "../../../../model/ModelTypeCheck";

export default {
    title: "TitleWidget",
    component: TitleWidget,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        api: {
            control: {
                type: "radio",
                options: [
                    "https://www.ebi.ac.uk/ols4/api/",
                    "https://semanticlookup.zbmed.de/ols/api/",
                    "https://semanticlookup.zbmed.de/api/",
                ],
            },
        },
        ontologyId: {
            description: "Ontology ID from where the object title/label should be taken.",
        },
        thingType: {
            description: "Sets the type of the object whose title/label you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
            table: {
                type: { summary: `${thingTypeNames.join(" | ")}` },
            },
            control: {
                type: "radio",
                options: [
                    "ontology",
                    "term",
                    "class",
                    "property",
                    "individual",
                    "INVALID STRING"
                ],
            },
        },
        iri: {
            description: "Object IRI whose label you want to fetch. For ontologies this is ignored, since the 'ontologyId' arg is sufficient.",
        },
        titleText: {},
        default_value: {
            control: 'text',
        },
        parameter: {
            defaultValue: "collection=nfdi4health",
            type: {required: false}
        },
    },
};

const Template = (args: TitleWidgetProps) => (
    <EuiPanel>
        <TitleWidget {...args} />
    </EuiPanel>
);

export const TitleWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TitleWidget1.args = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985", api: "https://semanticlookup.zbmed.de/api/",
    ontologyId: "ncit",
    thingType: "term",
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
    iri: "http://purl.obolibrary.org/obo/IAO_0000631",
    thingType: "term",
    parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
    iri: "http://identifiers.org/uniprot/Q9VAM9",
    thingType: "term",
    parameter: ""
};
