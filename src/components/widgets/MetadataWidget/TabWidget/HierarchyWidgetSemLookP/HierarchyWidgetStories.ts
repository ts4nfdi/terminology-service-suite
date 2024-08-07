import {EntityDataForHierarchy} from "../../../../../model/interfaces/Hierarchy";
import {HIERARCHY_WIDGET_DEFAULT_VALUES} from "./HierarchyWidget";

export const HierarchyWidgetStoryArgTypes = {
    apiUrl: {},
    backendType: {
        control: {
            type: "radio"
        },
        options: [
            "ols",
            "skosmos",
            "ontoportal"
        ]
    },
    apikey: {},
    onNavigateToEntity: {
        control: {
            disabled: true
        }
    },
    onNavigateToOntology: {
        control: {
            disabled: true
        }
    },
    iri: {},
    ontologyId: {},
    entityType: {},
    includeObsoleteEntities: {},
    preferredRoots: {},
    keepExpansionStates: {},
    showSiblingsOnInit: {},
    useLegacy: {}
}

export const HierarchyWidgetStoryArgs = {
    apiUrl: {},
    backendType: {},
    apikey: {},
    onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)},
    iri: "",
    ontologyId: "",
    entityType: "",
    includeObsoleteEntities: HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
    preferredRoots: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
    keepExpansionStates: HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
    showSiblingsOnInit: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
    useLegacy: HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY
}

export const ClassHierarchy = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backendType: "ols",
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        entityType: "class",
        ontologyId: "efo",
    }
};

export const IndividualHierarchy = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backendType: "ols",
        iri: "http://purl.obolibrary.org/obo/IAO_0000120",
        entityType: "individual",
        ontologyId: "bco",
    }
};

export const PreferredRoots = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backendType: "ols",
        iri: "",
        entityType: "class",
        ontologyId: "uberon",
        preferredRoots: true
    }
};

export const IncludeObsoleteEntities = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backendType: "ols",
        iri: "",
        entityType: "class",
        ontologyId: "uberon",
        includeObsoleteEntities: true
    }
};

export const PropertyRoots = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backendType: "ols",
        iri: "",
        entityType: "property",
        ontologyId: "bco",
    }
};

export const IndividualRoots = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backendType: "ols",
        iri: "",
        entityType: "individual",
        ontologyId: "bco",
    }
};

export const LargeHierarchy = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backendType: "ols",
        iri: "http://purl.obolibrary.org/obo/UBERON_2001747",
        entityType: "class",
        ontologyId: "uberon",
    }
};

export const SkosHierarchy = {
    args: {
        apiUrl: "https://api.finto.fi/rest/v1",
        backendType: "skosmos",
        iri: "http://www.yso.fi/onto/yso/p864",
        ontologyId: "yso",
    }
};

export const OntoportalHierarchy = {
    args: {
        apiUrl: "https://data.biodivportal.gfbio.org",
        backendType: "ontoportal",
        iri: "http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",
        ontologyId: "IOC",
        entityType: "class",
        apikey: ""
    }
}