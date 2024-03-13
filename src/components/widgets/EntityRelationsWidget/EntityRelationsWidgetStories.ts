import {entityTypeNames} from "../../../model/ModelTypeCheck";

export const EntityRelationsWidgetStoryArgTypes = {
    api: {
        control: {
            type: "radio",
        },
        options: [
            "https://www.ebi.ac.uk/ols4/api/",
            "https://semanticlookup.zbmed.de/ols/api/",
            "https://semanticlookup.zbmed.de/api/",
            "https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/"
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
}

export const EntityRelationsWidgetStoryArgs = {
    hasTitle: true,
    showBadges: true,
}

export const SubEntityOf = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "term",
        ontologyId: "agro",
        iri: "http://purl.obolibrary.org/obo/AGRO_00000002",
    }
};

export const AllValuesFrom = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "term",
        ontologyId: "go",
        iri: "http://purl.obolibrary.org/obo/BFO_0000004",
    }
};

export const DifferentFrom = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "individual",
        ontologyId: "bco",
        iri: "http://purl.obolibrary.org/obo/IAO_0000120",
    }
};

export const EquivalentTo = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "term",
        ontologyId: "go",
        iri: "http://purl.obolibrary.org/obo/GO_0048021",
    }
};

export const SingleValue = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "term",
        ontologyId: "bfo",
        iri: "http://purl.obolibrary.org/obo/BFO_0000001",
    }
};

export const InverseOf = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "property",
        ontologyId: "ro",
        iri: "http://purl.obolibrary.org/obo/RO_0000057",
    }
};

export const PropertyChain = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "property",
        ontologyId: "ro",
        iri: "http://purl.obolibrary.org/obo/RO_0002170",
    }
};

export const Instances = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "term",
        ontologyId: "iao",
        iri: "http://purl.obolibrary.org/obo/IAO_0000078",
    }
};

export const Axioms = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "term",
        ontologyId: "aism",
        iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
    }
};

export const QualifiedCardinality = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "term",
        ontologyId: "foodon",
        iri: "http://purl.obolibrary.org/obo/FOODON_00003382",
    }
};
