import * as globals from '../../../app/globals';
import {
    apiArgType,
    entityTypeArgType,
    hasTitleArgType,
    iriArgType,
    onNavigateToDisambiguateArgType,
    onNavigateToEntityArgType,
    onNavigateToOntologyArgType,
    ontologyIdArgType,
    parameterArgType,
    showBadgesArgType
} from "../../../stories/storyArgs";

export const EntityRelationsWidgetStoryArgTypes = {
    ...apiArgType,
    ...hasTitleArgType,
    ...entityTypeArgType,
    ...iriArgType,
    ...parameterArgType,
    ...ontologyIdArgType,
    ...showBadgesArgType,
    ...onNavigateToEntityArgType,
    ...onNavigateToOntologyArgType,
    ...onNavigateToDisambiguateArgType
}

export const EntityRelationsWidgetStoryArgs = {
    api: "https://semanticlookup.zbmed.de/api/",
    iri: "",
    ontologyId: "",
    entityType: "",
    hasTitle: true,
    showBadges: true,
    parameter: "",
    onNavigateToEntity: (ontologyId: string, entityType: string, entity: { iri: string, label?: string }) => {console.log(`Triggered onNavigateToEntity() for ${entityType || "entity"} "${entity.label}" (iri="${entity.iri}").`)},
    onNavigateToOntology: (ontologyId: string, entityType: string, entity: { iri: string, label?: string }) => {console.log(`Trigerred onNavigateToOntology() for ${entityType || "entity"} "${entity.label}" (iri="${entity.iri}") and ontologyId "${ontologyId}".`)},
    onNavigateToDisambiguate: (entityType: string, entity: { iri: string, label?: string }) => {console.log(`Triggered onNavigateToDisambiguate() for ${entityType || "entity"} "${entity.label}" (iri="${entity.iri}").`)},
}

export const SubEntityOf = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "term",
        ontologyId: "agro",
        iri: "http://purl.obolibrary.org/obo/AGRO_00000002",
    }
};

export const AllValuesFrom = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "term",
        ontologyId: "go",
        iri: "http://purl.obolibrary.org/obo/BFO_0000004",
    }
};

export const DifferentFrom = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "individual",
        ontologyId: "bco",
        iri: "http://purl.obolibrary.org/obo/IAO_0000120",
    }
};

export const EquivalentTo = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "term",
        ontologyId: "go",
        iri: "http://purl.obolibrary.org/obo/GO_0048021",
    }
};

export const SingleValue = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "term",
        ontologyId: "bfo",
        iri: "http://purl.obolibrary.org/obo/BFO_0000001",
    }
};

export const InverseOf = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "property",
        ontologyId: "ro",
        iri: "http://purl.obolibrary.org/obo/RO_0000057",
    }
};

export const PropertyChain = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "property",
        ontologyId: "ro",
        iri: "http://purl.obolibrary.org/obo/RO_0002170",
    }
};

export const Instances = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "term",
        ontologyId: "iao",
        iri: "http://purl.obolibrary.org/obo/IAO_0000078",
    }
};

export const Axioms = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "term",
        ontologyId: "aism",
        iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
    }
};

export const QualifiedCardinality = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        entityType: "term",
        ontologyId: "foodon",
        iri: "http://purl.obolibrary.org/obo/FOODON_00003382",
    }
};
